import { GrTransaction } from "react-icons/gr";
import { BsBrowserChrome } from "react-icons/bs";
import { IoGift } from "react-icons/io5";
import { SiSpeedtest } from "react-icons/si";
import { siteConfig } from "@/config/site";
import { Avatar } from "@heroui/avatar";

export const HomePageFeatures = [
  {
    title: "Easy Transaction",
    icon: <GrTransaction size={14} />,
    description:
      "Experience seamless transactions with our cutting edge payment solutions. Fast, secure, and designed for your convenience.",
  },
  {
    title: "Secure Payments",
    icon: "GrSecurePayment",
    description:
      "Your security is our priority. We use advanced encryption to protect your financial information.",
  },
  {
    title: "24/7 Support",
    icon: "GrSupport",
    description:
      "Our dedicated support team is available around the clock to assist you with any issues or questions.",
  },
];

export const HomePagefeaturesObject = [
  {
    title: "Subscriptions",
    description: "Cheap and fast subscriptions",
    icon: <BsBrowserChrome size={20} className="text-white" />,
    bgColor: "bg-blue-500",
    iconColor: "text-primary",
  },
  {
    title: "Transactions",
    description: "Swift and cheap transactions.",
    icon: <GrTransaction size={20} className="text-white" />,
    bgColor: "bg-primary",
    iconColor: "text-primary",
  },

  {
    title: "Bonus",
    description: "Instant cashbacks and rewards",
    icon: <IoGift size={20} className="text-white" />,
    bgColor: "bg-blue-500",
    iconColor: "text-blue-500",
  },
];

export const testimonials = [
  {
    heading: `${siteConfig.name} delivered more than I expected`,
    testimony: `DeepPaya has been a blessing to our operations. We easily fund employee phones with VTU, send money to vendors, and track transactions seamlessly — all in one app.`,
    author: "Conor Kenney",
    title: "VP, Product and Technology",
    company: (
      <Avatar size="md" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
    ),
    rating: 5,
  },
  {
    heading: `${siteConfig.name} changed how I handle my bills`,
    testimony: `${siteConfig.name} made it ridiculously easy to buy data, airtime, and pay utility bills instantly. Everything just works — no failed transactions, no stress.`,
    author: "Folake Johnson",
    title: "Small Business Owner",
    company: (
      <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
    ),
    rating: 5,
  },
  {
    heading: `Sending money has never been smoother with ${siteConfig.name}`,
    testimony: `With ${siteConfig.name}, I can send money to anyone in seconds, buy airtime for my team, and still enjoy the best VTU rates out there. It&apos;s a game-changer for my daily operations.`,
    author: "Ahmed Musa",
    title: "Logistics Coordinator",
    company: (
      <Avatar size="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
    ),
    rating: 5,
  },
];
