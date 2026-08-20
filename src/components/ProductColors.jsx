import { Check } from "lucide-react";
import colorsData from "../data/colorsData";

function ProductMiniature({ color, screen }) {
  return (
    <div className="relative mx-auto h-[145px] w-[78px]">

      {/* Cable */}
      <div
        className="absolute -bottom-1 -right-5 h-12 w-7 rounded-b-full border-b-[3px] border-r-[3px]"
        style={{
          borderColor: color,
        }}
      />

      {/* Power Bank */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[15px] border shadow-[0_12px_20px_rgba(0,0,0,0.12)]"
        style={{
          background: `linear-gradient(145deg, ${color}, ${color}dd)`,
          borderColor: `${color}aa`,
        }}
      >

        {/* Screen */}
        <div
          className="absolute left-[9px] right-[9px] top-[9px] flex h-[48px] items-center justify-center rounded-[10px]"
          style={{
            backgroundColor: screen,
          }}
        >
          <span className="text-[9px] font-bold text-white">
            100<span className="text-[5px] text-green-400">%</span>
          </span>
        </div>

        {/* Logo */}
        <div className="absolute bottom-7 left-0 right-0 text-center">
          <span
            className="text-[7px] font-bold"
            style={{
              color:
                color.toLowerCase() === "#f5f5f5"
                  ? "#555"
                  : "#e5e5e5",
            }}
          >
            WEKOME
          </span>
        </div>

        {/* Bottom highlight */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/10 to-transparent" />

      </div>
    </div>
  );
}

function ProductColors() {
  return (
    <div className="lg:pl-12">

      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-purple-600" />

          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-purple-600">
            Find Your Style
          </span>
        </div>

        <h2 className="text-3xl font-black tracking-[-0.04em] text-gray-900 sm:text-4xl">
          Available in{" "}
          <span className="text-purple-600">
            Stylish Colors
          </span>
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
          Choose the color that matches your style and personality.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {colorsData.map((color, index) => (
          <div
            key={color.name}
            className={`group relative rounded-2xl border bg-white p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100 ${
              index === 3
                ? "border-purple-400 ring-1 ring-purple-200"
                : "border-gray-200"
            }`}
          >

            {/* Selected Badge */}
            {index === 3 && (
              <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-white">
                <Check size={11} strokeWidth={3} />
              </div>
            )}

            <ProductMiniature
              color={color.value}
              screen={color.screen}
            />

            <div className="mt-4 flex items-center justify-center gap-2">
              <span
                className="h-3 w-3 rounded-full border border-gray-300"
                style={{
                  backgroundColor: color.value,
                }}
              />

              <span className="text-xs font-bold text-gray-700">
                {color.name}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductColors;