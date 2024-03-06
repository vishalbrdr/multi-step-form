import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";

export const planOptions = [
  {
    name: "arcade",
    price: { yearly: "$90/yr", monthly: "$9/mo" },
    icon: ArcadeIcon,
  },
  {
    name: "advanced",
    price: { yearly: "$120/yr", monthly: "$12/mo" },
    icon: AdvancedIcon,
  },
  {
    name: "pro",
    price: { yearly: "$150/yr", monthly: "$15/mo" },
    icon: ProIcon,
  },
] as const;
