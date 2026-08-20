import {
  BatteryCharging,
  Cable,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

const featuresData = [
  {
    number: "01",
    title: "Up to 22.5W",
    highlight: "Super Fast Charging",
    description:
      "Charge your devices faster and smarter with powerful 22.5W fast charging.",
    icon: Zap,
  },
  {
    number: "02",
    title: "4-in-1",
    highlight: "Built-in Cables",
    description:
      "Type-C, Micro, iPhone and USB connectivity. No extra cables needed.",
    icon: Cable,
  },
  {
    number: "03",
    title: "5 Fast Outputs",
    highlight: "Charge Multiple Devices",
    description:
      "Charge up to five devices simultaneously with high efficiency.",
    icon: Smartphone,
  },
  {
    number: "04",
    title: "LED Digital Display",
    highlight: "Battery Level at a Glance",
    description:
      "Know exactly how much power remains with the smart digital display.",
    icon: BatteryCharging,
  },
  {
    number: "05",
    title: "Multi-Safety",
    highlight: "Advanced Protection",
    description:
      "Advanced safety protection helps keep your devices safe and reliable.",
    icon: ShieldCheck,
  },
];

export default featuresData;