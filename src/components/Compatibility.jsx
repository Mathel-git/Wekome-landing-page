import {
  Apple,
  Cable,
  Laptop,
  Smartphone,
  Tablet,
} from "lucide-react";

const compatibilityItems = [
  {
    name: "Android",
    icon: Smartphone,
  },
  {
    name: "iPhone",
    icon: Apple,
  },
  {
    name: "Type-C",
    icon: Cable,
  },
  {
    name: "Tablets",
    icon: Tablet,
  },
];

function Compatibility() {
  return (
    <div className="border-b border-gray-200 lg:border-b-0 lg:border-r">
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-purple-600" />

          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-purple-600">
            Stay Connected
          </span>
        </div>

        <h2 className="text-3xl font-black tracking-[-0.04em] text-gray-900 sm:text-4xl">
          Universal{" "}
          <span className="text-purple-600">
            Compatibility
          </span>
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
          Works perfectly with all your devices.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {compatibilityItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-700 transition-all duration-300 group-hover:bg-purple-50 group-hover:text-purple-600">
                <Icon size={27} strokeWidth={1.7} />
              </div>

              <p className="mt-4 text-xs font-bold text-gray-800">
                {item.name}
              </p>

              <p className="mt-1 text-[9px] text-gray-400">
                Compatible
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Compatibility;