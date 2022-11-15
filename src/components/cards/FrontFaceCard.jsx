import { CardLogo } from "./CardLogo";
function FrontFaceCard({ name, number, expMonth, expYear }) {
  return (
    <div
      id="frontface-card"
      className="top-[115px] 
      absolute card rounded-lg text-white shadow-md shadow-violete-400"
    >
      <div className="my-3 ml-4">
        <CardLogo />
      </div>

      <div className="flex flex-col justify-around p-4 mt-2 gap-2">
        <div className="flex flex-row gap-4 text-lg justify-start">
          <div>
            {number[0]}
            {number[1]}
            {number[2]}
            {number[3]}
          </div>
          <div>
            {number[4]}
            {number[5]}
            {number[6]}
            {number[7]}
          </div>
          <div>
            {number[8]}
            {number[9]}
            {number[10]}
            {number[11]}
          </div>
          <div>
            {number[12]}
            {number[13]}
            {number[14]}
            {number[15]}
          </div>
        </div>
        <div className="flex flex-row justify-between w-full text-sm tracking-wider">
          <h1>{name.toUpperCase()}</h1>
          <div>
            {expMonth}
            {expMonth.length > 0 && expYear.length > 0 && "/"}
            {expYear}
          </div>
        </div>
      </div>
    </div>
  );
}
export { FrontFaceCard };
