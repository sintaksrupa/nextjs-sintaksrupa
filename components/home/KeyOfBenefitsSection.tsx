import { keyOfBenefits } from "@/data/benefits";

export function KeyOfBenefitsSection() {
  return (
    <section className="flex flex-col gap-12 w-full items-center justify-center px-3 md:px-5">
      <div className="flex flex-col md:flex-row w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl gap-3 items-start md:items-end justify-between text-start">
        <h2 className="max-w-4xl text-3xl lg:text-4xl uppercase leading-10 md:leading-12 lg:leading-14">
          Jasa Desain Grafis & Website{" "}
          <span className="inline md:block font-sans normal-case">
            Sintaks <span className="text-accent font-serif">Rupa</span>
          </span>
        </h2>

        <p className="max-w-sm md:max-w-xs lg:max-w-sm text-base lg:text-lg">
          Mulai bisnismu tanpa ragu, dengan jasa desain grafis dan website dari{" "}
          <span className="font-sans normal-case">
            Sintaks <span className="text-accent font-serif">Rupa.</span>
          </span>
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl gap-6">
        {keyOfBenefits.map((keyOfBenefit) => (
          <div
            key={keyOfBenefit.title}
            className="flex flex-col w-full h-full gap-1 items-center justify-center text-center border p-5"
          >
            <div className="flex items-center justify-center size-12 bg-accent text-primary-foreground mb-1">
              <keyOfBenefit.icon size={28} />
            </div>

            <h3 className="max-w-4xl text-xl uppercase">
              {keyOfBenefit.title}
            </h3>

            <p className="text-base">{keyOfBenefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
