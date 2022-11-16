import { BackFaceCard } from "./BackFaceCard";
import { FrontFaceCard } from "./FrontFaceCard";
function CardsSection({ name, number, expMonth, expYear, cvc }) {
  return (
    <section
      id="cards-section"
      className="relative min-h-[40vh] md:w-[30vw]  flex justify-center items-center"
    >
      <BackFaceCard cvc={cvc} />
      <FrontFaceCard
        name={name}
        number={number}
        expMonth={expMonth}
        expYear={expYear}
      />
    </section>
  );
}
export { CardsSection };
