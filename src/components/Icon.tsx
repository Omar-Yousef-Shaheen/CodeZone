import {
  Code2,
  Download,
  ExternalLink,
  Gauge,
  LayoutTemplate,
  Mail,
  MapPin,
  MonitorSmartphone,
  PenTool,
  Phone,
  Rocket,
  Search,
} from "lucide-react";
import type { ReactElement } from "react";
import { FaGithub, FaLinkedinIn, FaShopify, FaWordpress } from "react-icons/fa6";
import wordpressIcon from "../assets/icons/icons8-wordpress-94.png";
import htmlIcon from "../assets/icons/icons8-html-96.png";
import cssIcon from "../assets/icons/icons8-css-96.png";
import javascriptIcon from "../assets/icons/icons8-js-96.png";
import shopifyIcon from "../assets/icons/icons8-shopify-96.png";
import woocommerceIcon from "../assets/icons/icons8-woocommerce-logo-96.png";
import elementorIcon from "../assets/icons/icons8-elementor-96.png";

type IconProps = { className?: string };

export function SkillIcon({ name, className = "size-4" }: IconProps & { name: string }) {
  const icons: Record<string, ReactElement> = {
    html: <img src={htmlIcon} alt="" aria-hidden="true" className={className} />,
    css: <img src={cssIcon} alt="" aria-hidden="true" className={className} />,
    javascript: <img src={javascriptIcon} alt="" aria-hidden="true" className={className} />,
    wordpress: <img src={wordpressIcon} alt="" aria-hidden="true" className={className} />,
    shopify: <img src={shopifyIcon} alt="" aria-hidden="true" className={className} />,
    woocommerce: <img src={woocommerceIcon} alt="" aria-hidden="true" className={className} />,
    elementor: <img src={elementorIcon} alt="" aria-hidden="true" className={className} />,
  };
  return icons[name] ?? <Code2 className={className} />;
}

export function ProcessIcon({ name, className = "size-5" }: IconProps & { name: string }) {
  const icons: Record<string, ReactElement> = {
    search: <Search className={className} />,
    pen: <PenTool className={className} />,
    code: <Code2 className={className} />,
    rocket: <Rocket className={className} />,
  };
  return icons[name] ?? <Search className={className} />;
}

export function ServiceIcon({ name, className = "size-5" }: IconProps & { name: string }) {
  const icons: Record<string, ReactElement> = {
    wordpress: <FaWordpress className={className} />,
    store: <FaShopify className={className} />,
    code: <Code2 className={className} />,
    speed: <Gauge className={className} />,
    redesign: <LayoutTemplate className={className} />,
  };
  return icons[name] ?? <MonitorSmartphone className={className} />;
}

export function PlatformIcon({ platform, className = "size-3.5" }: IconProps & { platform: string }) {
  return platform === "Shopify" ? <FaShopify className={className} /> : <FaWordpress className={className} />;
}

export function ContactIcon({ name, className = "size-4" }: IconProps & { name: string }) {
  const icons: Record<string, ReactElement> = {
    email: <Mail className={className} />,
    phone: <Phone className={className} />,
    location: <MapPin className={className} />,
    linkedin: <FaLinkedinIn className={className} />,
    github: <FaGithub className={className} />,
    download: <Download className={className} />,
    external: <ExternalLink className={className} />,
  };
  return icons[name] ?? <Mail className={className} />;
}
