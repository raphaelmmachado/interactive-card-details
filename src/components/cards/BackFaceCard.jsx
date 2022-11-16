function BackFaceCard({ cvc }) {
  return (
    <div
      id="backface-card"
      className="absolute card rounded-lg shadow-md shadow-violete-900
      top-[25px] ml-[4vw] xxs:ml-[8vw] md:ml-0
      md:top-[300px] md:right-[-15vw]"
    >
      <p id="cvc-number">{cvc}</p>
    </div>
  );
}
export { BackFaceCard };
