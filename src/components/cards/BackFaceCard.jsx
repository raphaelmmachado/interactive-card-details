function BackFaceCard({ cvc }) {
  return (
    <div
      id="backface-card"
      className="absolute card rounded-lg shadow-md
      shadow-violete-900 top-[25px] ml-[4vw]
      xxs:ml-[8vw] md:ml-0 md:top-[300px] md:right-[-15vw]
      lg:top-[300px]"
    >
      <p
        id="cvc-number"
        className="absolute top-[61px]
      left-[230px] text-end text-white
      tracking-[0.25rem] lg:top-[84px] lg:left-[274px] lg:text-xl"
      >
        {cvc}
      </p>
    </div>
  );
}
export { BackFaceCard };
