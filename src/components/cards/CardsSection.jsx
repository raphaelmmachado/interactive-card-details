import { BackFaceCard } from "./BackFaceCard";
import { FrontFaceCard } from "./FrontFaceCard";
function CardsSection({ name, number, expMonth, expYear, cvc }) {
  return (
    <section
      id="cards-section"
      className="relative min-h-[40vh] flex justify-center items-center"
    >
      <BackFaceCard secret="123" />
      <FrontFaceCard
        name={name}
        number={number}
        expMonth={expMonth}
        expYear={expYear}
        cvc={cvc}
      />
    </section>
  );
}
export { CardsSection };
