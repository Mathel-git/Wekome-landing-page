
import { useState } from "react";

const API_URL = "http://localhost:3001";

export default function Checkout({ order }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function startPayment() {
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/initialize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const data = await response.json();

      if (!response.ok || !data.authorization_url) {
        throw new Error(
          data.message || "Unable to start payment. Please try again."
        );
      }

      window.location.assign(data.authorization_url);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      setLoading(false);
    }
  }

  return (
    <div>
      {error && (
        <p role="alert" className="mb-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={startPayment}
        disabled={loading}
        className="w-full rounded-xl bg-[#2855F0] px-6 py-4 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Connecting to Paystack..." : "Proceed to Pay with Paystack"}
      </button>

      <p className="mt-3 text-xs leading-5 text-gray-500">
        You will be redirected to Paystack to complete your payment securely.
      </p>
    </div>
  );
}
