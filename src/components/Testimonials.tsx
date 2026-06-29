import { Quote } from "lucide-react";
import Carousel from "./Carousel";
import SectionTitle from "./SectionTitle";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section py-12 md:py-16">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 md:px-8">
        <SectionTitle eyebrow="Testimonials" title="Client Feedback" description="What my clients say about working with me." />
        <Carousel ariaLabel="testimonials" slideClassName="basis-full md:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-14px)]">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card h-full">
              <Quote className="mb-5 size-7 fill-sky/20 text-sky" />
              <p className="text-sm leading-7 text-slate-300">"{testimonial.quote}"</p>
              <div className="mt-7 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-sky to-royal text-sm font-extrabold text-white">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white">{testimonial.name}</h3>
                  <p className="mt-1 text-xs font-medium text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
