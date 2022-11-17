import { BackFaceCard } from "./BackFaceCard";
import { FrontFaceCard } from "./FrontFaceCard";
function CardsSection({ name, number, expMonth, expYear, cvc }) {
  return (
    <section
      id="cards-section"
      className="relative min-h-[200px] max-h-[20vh]
      md:min-h-screen
      md:w-[30vw] md:max-w-[350px] flex justify-center items-center"
    >
      <div
        className="relative md:absolute
      left-[3vw] md:left-[20%] lg:left-[50%]
      md:flex flex-col-reverse items-center
      gap-8 justify-between"
      >
        <BackFaceCard cvc={cvc} />
        <FrontFaceCard
          name={name}
          number={number}
          expMonth={expMonth}
          expYear={expYear}
        />
      </div>
    </section>
  );
}
export { CardsSection };
