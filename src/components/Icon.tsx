import {
  Code2,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  MonitorSmartphone,
  PenTool,
  Phone,
  Rocket,
  Search,
  Star,
} from "lucide-react";
import type { ReactElement } from "react";
import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaLinkedinIn, FaShopify, FaWordpress } from "react-icons/fa6";
import { SiTailwindcss, SiWoocommerce } from "react-icons/si";

type IconProps = {
  className?: string;
};

export function SkillIcon({ name, className = "size-4" }: IconProps & { name: string }) {
  const icons: Record<string, ReactElement> = {
    html: <FaHtml5 className={className} />,
    css: <FaCss3Alt className={className} />,
    javascript: <FaJs className={className} />,
    wordpress: <FaWordpress className={className} />,
    shopify: <FaShopify className={className} />,
    woocommerce: <SiWoocommerce className={className} />,
    tailwind: <SiTailwindcss className={className} />,
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
  };

  return icons[name] ?? <MonitorSmartphone className={className} />;
}

export function CategoryIcon({ category, className = "size-3.5" }: IconProps & { category: string }) {
  if (category === "Shopify" || category === "eCommerce") return <FaShopify className={className} />;
  if (category === "WordPress") return <FaWordpress className={className} />;
  if (category === "Frontend") return <Code2 className={className} />;
  return <MonitorSmartphone className={className} />;
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
    star: <Star className={className} />,
  };

  return icons[name] ?? <Mail className={className} />;
}
