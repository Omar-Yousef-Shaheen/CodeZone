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
import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaLinkedinIn, FaShopify, FaWordpress } from "react-icons/fa6";
import { SiElementor, SiWoocommerce } from "react-icons/si";

type IconProps = { className?: string };

export function SkillIcon({ name, className = "size-4" }: IconProps & { name: string }) {
  const icons: Record<string, ReactElement> = {
    html: <FaHtml5 className={className} />,
    css: <FaCss3Alt className={className} />,
    javascript: <FaJs className={className} />,
    wordpress: <FaWordpress className={className} />,
    shopify: <FaShopify className={className} />,
    woocommerce: <SiWoocommerce className={className} />,
    elementor: <SiElementor className={className} />,
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
