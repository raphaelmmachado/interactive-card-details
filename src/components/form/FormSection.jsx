import { useState } from "react";
import { NameInput } from "./inputs/NameInput";
import { NumberInput } from "./inputs/NumberInput";
import { MonthInput } from "./inputs/MonthInput";
import { YearInput } from "./inputs/yearInput";
import { VerificationCode } from "./inputs/VerificationCode";
import completeLogo from "../../assets/images/icon-complete.svg";

function FormSection(props) {
  const [nameAlert, setNameAlert] = useState(false);
  const [numberAlert, setNumberAlert] = useState(false);
  const [monthAlert, setMonthAlert] = useState(false);
  const [yearAlert, setYearAlert] = useState(false);
  const [cvcAlert, setCvcAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <section
      id="form-section"
      className="flex items-center justify-center mt-20
      md:justify-end md:flex-grow md:mt-0 md:mx-12
      vlg:justify-center vlg:ml-32 transition-all ease-in delay-75"
    >
      <>
        {!success ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-evenly items-start p-4
           text-sm md:text-base md:min-h-[400px] min-w-[40%] max-w-fit tracking-wider"
          >
            <NameInput
              setName={props.setName}
              nameAlert={nameAlert}
              setNameAlert={setNameAlert}
            />
            <br />
            <NumberInput
              setNumber={props.setNumber}
              numberAlert={numberAlert}
              setNumberAlert={setNumberAlert}
            />
            <br />
            <label className=" font-semibold  text-violete-900">
              EXP. DATE (MM/YY) CVC
            </label>
            <div className="flex flex-row gap-4 justify-center items-center ">
              <MonthInput
                setMonth={props.setExpMonth}
                monthAlert={monthAlert}
                setMonthAlert={setMonthAlert}
              />
              <YearInput
                setYear={props.setExpYear}
                yearAlert={yearAlert}
                setYearAlert={setYearAlert}
              />
              <VerificationCode
                setCvc={props.setCvc}
                cvcAlert={cvcAlert}
                setCvcAlert={setCvcAlert}
              />
            </div>
            {monthAlert ? (
              <p className="text-red text-xs ">
                Month must be 2 numbers lesser than 12.
              </p>
            ) : null}
            {yearAlert ? (
              <p className="text-red text-xs ">Year must be 2 numbers.</p>
            ) : null}
            {cvcAlert ? (
              <p className="text-red text-xs ">
                Verification code must be 3 numbers.
              </p>
            ) : null}
            <br />
            <button
              disabled={loading}
              className={`bg-violete-900 focus:outline-none focus:ring focus:ring-violete-400
           text-white px-4 py-3 w-full rounded-md`}
            >
              {loading ? "Processing ..." : "Confirm"}
            </button>
          </form>
        ) : (
          <div className="flex flex-col justify-around gap-2 items-center text-center">
            <img src={completeLogo} alt="complete_logo" className="mb-4" />
            <h1 className="text-2xl text-violete-900 font-medium">
              Thank You!
            </h1>
            <p className="text-violete-400">We`ve added your card details.</p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-violete-900 focus:outline-none focus:ring focus:ring-violete-400
           text-white px-4 py-3 w-full rounded-md mt-6"
            >
              Continue
            </button>
          </div>
        )}
      </>
    </section>
  );
}
export { FormSection };
