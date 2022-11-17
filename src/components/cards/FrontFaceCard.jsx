import { CardLogo } from "./CardLogo";
function FrontFaceCard({ name, number, expMonth, expYear }) {
  return (
    <div
      id="frontface-card"
      className="card absolute top-[60%] right-[2vw]
      md:static md:mr-[4vw] md:flex flex-col justify-between
      rounded-lg text-white shadow-md shadow-violete-900"
    >
      <div className="pt-3 ml-4">
        <CardLogo />
      </div>

      <div className="flex flex-col justify-around p-4 mt-2 gap-2">
        <div className="flex flex-row gap-4 text-lg justify-start lg:text-xl">
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
        <div className="flex flex-row justify-between w-full">
          <h1 className="text-sm lg:text-base tracking-wide">
            {name.toUpperCase()}
          </h1>
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
