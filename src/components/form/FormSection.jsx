import { useRef, useState } from "react";
import completeLogo from "../../assets/images/icon-complete.svg";
function FormSection(props) {
  const nameRef = useRef(null);
  const numberRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const cvcRef = useRef(null);
  const [nameAlert, setNameAlert] = useState(false);
  const [numberAlert, setNumberAlert] = useState(false);
  const [monthAlert, setMonthAlert] = useState(false);
  const [yearAlert, setYearAlert] = useState(false);
  const [cvcAlert, setCvcAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCardName = () => {
    const value = nameRef.current.value;

    if (value.length >= 26) return;
    if (containsOnlyLetters(value) === false && value.length > 0) {
      setNameAlert(true);
      return;
    } else {
      setNameAlert(false);
    }
    const arr = value.split(" ");
    if (arr.length === 1) {
      props.setName(value);
    } else if (arr.length > 2 && arr.length <= 3) {
      props.setName(`${arr[0]} ${arr[1][0]}. ${arr[2]}`);
      return;
    } else {
      props.setName(`${arr[0]} ${arr[arr.length - 1]}`);
    }
  };

  const handleCardNumber = () => {
    const value = numberRef.current.value.split(" ").join("");
    if (value.length > 16 && containsOnlyNumbers(value)) {
      const slicedValue = value.slice(0, 16);
      props.setNumber(slicedValue);
      setNumberAlert(false);
      return;
    }
    if (containsOnlyNumbers(value) === false && value.length > 0) {
      setNumberAlert(true);
      return;
    } else {
      setNumberAlert(false);
      props.setNumber(value);
    }
  };

  const handleCardExpMonth = () => {
    const value = monthRef.current.value;
    if (
      (value.length > 0 && containsOnlyNumbers(value) === false) ||
      parseInt(value) > 12
    ) {
      setMonthAlert(true);
      return;
    } else {
      setMonthAlert(false);
      props.setExpMonth(monthRef.current.value);
    }
  };

  const handleCardExpYear = () => {
    const value = yearRef.current.value;
    if (value.length > 0 && containsOnlyNumbers(value) === false) {
      setYearAlert(true);
      return;
    } else {
      setYearAlert(false);
      props.setExpYear(yearRef.current.value);
    }
  };
  const handleCardCvc = () => {
    const value = cvcRef.current.value;
    if (
      value.length > 3 ||
      (value.length > 0 && containsOnlyNumbers(value) === false)
    ) {
      setCvcAlert(true);
      return;
    } else {
      setCvcAlert(false);
      props.setCvc(cvcRef.current.value);
    }
  };

  const containsOnlyNumbers = (str) => {
    return /^(\d+ )*(\d+)$/.test(str);
  };
  const containsOnlyLetters = (str) => {
    return /^[A-Za-z\s]*$/.test(str);
  };

  const handleSubmit = (e) => {
    if (checkIfFieldsAreBlank()) return;
    setLoading(true);
    if (nameAlert || numberAlert || monthAlert || yearAlert || cvcAlert) {
      setSuccess(false);
      setLoading(false);
      return;
    } else {
      e.preventDefault();
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 1000);
    }
  };
  const checkIfFieldsAreBlank = () => {
    const name = nameRef.current.value;
    const number = numberRef.current.value;
    const month = monthRef.current.value;
    const year = yearRef.current.value;
    const cvc = cvcRef.current.value;
    let doNotSubmit = false;
    if (!name) {
      setNameAlert(true);
      doNotSubmit = true;
    }
    if (!number) {
      setNumberAlert(true);
      doNotSubmit = true;
    }
    if (!month) {
      setMonthAlert(true);
      doNotSubmit = true;
    }
    if (!year) {
      setYearAlert(true);
      doNotSubmit = true;
    }
    if (!cvc) {
      setCvcAlert(true);
      doNotSubmit = true;
    }
    if (doNotSubmit) {
      setLoading(false);
    } else {
      setLoading(true);
    }
    return doNotSubmit;
  };
  return (
    <section
      id="form-section"
      className="flex items-center md:flex-grow justify-center mt-20 md:mt-0"
    >
      <>
        {!success ? (
          <form className="flex flex-col items-start p-4 text-sm md:text-base min-w-[40%] max-w-fit tracking-wider">
            <label htmlFor="name" className="font-semibold  text-violete-900">
              CARDHOLDER NAME
            </label>
            <input
              onChange={handleCardName}
              ref={nameRef}
              className={`w-full rounded-md px-2 py-1 my-1 ${
                nameAlert
                  ? "border border-red outline-1 outline-red focus:ring-red"
                  : `border border-violete-100 outline-1 outline-violete-900
                `
              }`}
              type="text"
              placeholder="e.g. Jane Appleseed"
              name="name"
              id="name"
              maxLength={23}
              required={true}
            />
            {nameAlert ? (
              <p className="text-red text-xs ">
                Wrong format, letters only. Max 23 characters.
              </p>
            ) : null}
            <br />
            <label
              htmlFor="number"
              className=" font-semibold  text-violete-900"
            >
              CARD NUMBER
            </label>
            <input
              onChange={handleCardNumber}
              ref={numberRef}
              className={`w-full rounded-md px-2 py-1 my-1 ${
                numberAlert
                  ? "border border-red outline-1 outline-red focus:ring-red"
                  : `border border-violete-100 outline-1 outline-violete-900
                `
              }`}
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              name="number"
              id="number"
              maxLength={16}
              required={true}
            />
            {numberAlert ? (
              <p className="text-red text-xs ">
                Numbers only, max 16 characters.
              </p>
            ) : null}
            <br />
            <label htmlFor="date" className=" font-semibold  text-violete-900">
              EXP. DATE (MM/YY) CVC
            </label>
            <div className="flex flex-row gap-4 justify-center items-center ">
              <input
                onChange={handleCardExpMonth}
                ref={monthRef}
                className={` w-16 border text-center rounded-md px-2 py-1 my-1  ${
                  monthAlert
                    ? "border border-red outline-1 outline-red focus:ring-red"
                    : `border border-violete-100 outline-1 outline-violete-900`
                }`}
                placeholder="MM"
                type="text"
                name="date"
                id="month"
                maxLength="2"
                min="01"
                max="12"
                required={true}
              />

              <input
                onChange={handleCardExpYear}
                ref={yearRef}
                className={`w-16 rounded-md px-2 py-1 text-center   ${
                  yearAlert
                    ? "border border-red outline-1 outline-red focus:ring-red"
                    : `border border-violete-100 outline-1 outline-violete-900`
                }`}
                placeholder="YY"
                type="text"
                name="date"
                id="year"
                maxLength={2}
                min="22"
                max="99"
                required={true}
              />

              <input
                onChange={handleCardCvc}
                ref={cvcRef}
                className={`w-20 rounded-md px-2 py-1 text-center ${
                  cvcAlert
                    ? "border border-red outline-1 outline-red focus:ring-red"
                    : `border border-violete-100 outline-1 outline-violete-900`
                }`}
                placeholder="e.g. 123"
                type="text"
                name="date"
                id="cvc"
                maxLength={3}
                required={true}
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
              onClick={handleSubmit}
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
