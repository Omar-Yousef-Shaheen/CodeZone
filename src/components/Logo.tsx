import logoMark from "../assets/images/cz-logo-mark.png";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return <img src={logoMark} alt="" className={`site-logo ${className}`.trim()} decoding="async" />;
}
