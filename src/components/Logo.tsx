import horizontalLogo from "../assets/images/ChatGPT Image Aug 17, 2026, 07_41_43 AM (2).png";
import markLogo from "../assets/images/ChatGPT Image Aug 17, 2026, 07_41_43 AM (1).png";
import { useI18n } from "../i18n/useI18n";

type LogoProps = {
  className?: string;
  variant?: "horizontal" | "mark";
};

const logoAssets = {
  horizontal: {
    src: horizontalLogo,
    width: 2172,
    height: 724,
  },
  mark: {
    src: markLogo,
    width: 1254,
    height: 1254,
  },
} as const;

export default function Logo({ className = "", variant = "horizontal" }: LogoProps) {
  const { dictionary } = useI18n();
  const asset = logoAssets[variant];

  return (
    <img
      className={`brand-logo brand-logo-${variant} ${className}`.trim()}
      src={asset.src}
      width={asset.width}
      height={asset.height}
      alt={dictionary.brand.logoAlt}
      decoding="async"
    />
  );
}
