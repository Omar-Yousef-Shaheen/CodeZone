type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`wordmark ${className}`.trim()} aria-hidden="true">
      <span>Omar</span> Yousef
    </span>
  );
}
