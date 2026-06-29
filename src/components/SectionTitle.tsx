type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
      <p className="eyebrow mx-auto mb-4 w-fit">{eyebrow}</p>
      <h2 className="text-[28px] font-medium leading-tight text-navy sm:text-4xl md:text-[42px]">{title}</h2>
      {description ? <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-ink md:text-base">{description}</p> : null}
    </div>
  );
}
