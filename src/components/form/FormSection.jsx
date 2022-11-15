import { useRef, useState } from "react";
function FormSection(props) {
  const nameRef = useRef(null);
  const numberRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const cvcRef = useRef(null);
  const [alert, setAlert] = useState(false);
  const handleCardNumber = () => {
    const value = numberRef.current.value.split(" ").join("");
    if (
      value.length > 16 ||
      (containsOnlyNumbers(value) === false && value !== "")
    ) {
      setAlert(true);
      return;
    } else {
      setAlert(false);
      props.setNumber(value);
    }
    console.log(value, value.length);
  };
  const handleCardName = () => {
    const value = nameRef.current.value;
    const arr = value.split(" ");
    if (arr.length === 1) {
      props.setName(value);
    } else if (arr.length > 2 && arr.length <= 3) {
      props.setName(`${arr[0]} ${arr[1][0]}. ${arr[2]}`);
      console.log(arr);
      return;
    } else {
      props.setName(`${arr[0]} ${arr[arr.length - 1]}`);
      console.log(arr);
    }
  };
  const handleCardExpMonth = () => {
    const value = monthRef.current.value;
    if (value.length > 2 || parseInt(value) > 12) return;
    props.setExpMonth(monthRef.current.value);
  };
  const handleCardExpYear = () => {
    const value = yearRef.current.value;
    if (value.length > 2) return;
    props.setExpYear(yearRef.current.value);
  };
  const handleCardCvc = () => {
    const value = cvcRef.current.value;
    if (value.length > 3) return;
    props.setExpCvc(cvcRef.current.value);
  };
  // function containsOnlyNumbers(str) {
  //   return /^[0-9]+$/.test(str);
  // }
  function containsOnlyNumbers(str) {
    return /^(\d+ )*(\d+)$/.test(str);
  }
  return (
    <section
      id="form-section"
      className=" flex items-center justify-center mt-20"
    >
      <form className="flex flex-col items-start p-4 ">
        <label htmlFor="name" className="text-xs font-semibold tracking-widest">
          CARDHOLDER NAME
        </label>
        <input
          onChange={handleCardName}
          ref={nameRef}
          className={`border border-violete-100 w-full rounded-md px-2 py-1 my-1`}
          type="text"
          placeholder="e.g. Jane Appleseed"
          name="name"
          id="name"
        />
        <br />
        <label
          htmlFor="number"
          className="text-xs font-semibold tracking-widest"
        >
          CARD NUMBER
        </label>
        <input
          onChange={handleCardNumber}
          ref={numberRef}
          className={`border border-violete-100 w-full rounded-md px-2 py-1 my-1 ${
            alert
              ? "outline-red text-red"
              : "outline-violete-400 text-[#000000]"
          }`}
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          name="number"
          id="number"
          maxLength={20}
        />
        <br />
        <label htmlFor="date" className="text-xs font-semibold tracking-widest">
          EXP. DATE (MM/YY) CVC
        </label>
        <div className="flex flex-row gap-4 justify-center items-center">
          <input
            onChange={handleCardExpMonth}
            ref={monthRef}
            className="w-16 border text-center border-violete-100 rounded-md px-2 py-1 my-1"
            placeholder="MM"
            type="text"
            name="date"
            id="month"
            maxLength="2"
            min="01"
            max="12"
          />
          <input
            onChange={handleCardExpYear}
            ref={yearRef}
            className="w-16 border text-center border-violete-100 rounded-md px-2 py-1"
            placeholder="YY"
            type="text"
            name="date"
            id="year"
            maxLength={2}
            min="22"
            max="99"
          />
          <input
            onChange={handleCardCvc}
            ref={cvcRef}
            className="w-20 border text-center border-violete-100 rounded-md px-2 py-1"
            placeholder="e.g. 123"
            type="text"
            name="date"
            id="cvc"
            maxLength={3}
          />
        </div>
        <br />
        <button className="bg-violete-900 text-white px-4 py-3 w-full rounded-md">
          Confirm
        </button>
      </form>
    </section>
  );
}
export { FormSection };
