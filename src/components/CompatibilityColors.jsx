import Compatibility from "./Compatibility";
import ProductColors from "./ProductColors";

function CompatibilityColors() {
  return (
    <section
      id="colors"
      className="relative overflow-hidden bg-[#f5f3fa] py-20 sm:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">

          <Compatibility />

          <ProductColors />

        </div>

      </div>
    </section>
  );
}

export default CompatibilityColors;