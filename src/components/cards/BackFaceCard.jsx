function BackFaceCard({ cvc }) {
  return (
    <div
      id="backface-card"
      className="md:relative card rounded-lg shadow-md
      shadow-violete-900 md:ml-[3.5vw]"
    >
      <p
        id="cvc-number"
        className="absolute top-[61px]
      left-[230px] text-end text-white
      tracking-[0.25rem] lg:top-[84px]
      lg:left-[274px] lg:text-xl"
      >
        {cvc}
      </p>
    </div>
  );
}
export { BackFaceCard };
