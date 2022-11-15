function BackFaceCard({ secret }) {
  return (
    <div
      id="backface-card"
      className="absolute card rounded-lg top-[25px] ml-[4vw] xxs:ml-[8vw]"
    >
      <p id="cvc-number">{secret}</p>
    </div>
  );
}
export { BackFaceCard };
