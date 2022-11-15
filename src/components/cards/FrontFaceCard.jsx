import { CardLogo } from "./CardLogo";
function FrontFaceCard(props) {
  return (
    <div
      id="frontface-card"
      className="top-[115px]
      absolute card rounded-lg text-white shadow-md shadow-violete-400"
    >
      <div className="m-2 ml-4">
        <CardLogo />
      </div>

      <div className="flex flex-col justify-around p-4 mt-4 gap-2">
        <div className="flex flex-row gap-4 text-lg justify-start">
          <div>0000</div>
          <div>0000</div>
          <div>0000</div>
          <div>0000</div>
        </div>
        <div className="flex flex-row justify-between w-full text-sm tracking-wide">
          <h1>Jane Appleseed</h1>
          <div>00/00</div>
        </div>
      </div>
    </div>
  );
}
export { FrontFaceCard };
