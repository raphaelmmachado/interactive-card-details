import { useRef } from "react";

function MonthInput({ setMonth, monthAlert, setMonthAlert }) {
  const monthRef = useRef(null);

  const handleCardExpMonth = () => {
    const value = monthRef.current.value;
    console.log(value);
    if (value) {
      setMonth(value);
      setMonthAlert(false);
    } else {
      setMonthAlert(true);
    }
  };
  return (
    <>
      <select
        name="month"
        id="month"
        placeholder="MM"
        required={true}
        onChange={handleCardExpMonth}
        ref={monthRef}
        defaultValue="00"
        className={`invalid:text-violete-400 w-20 border text-center rounded-md px-2 py-1 my-1  ${
          monthAlert
            ? "border border-red outline-1 outline-red focus:ring-red"
            : `border border-violete-100 outline-1 outline-violete-900`
        }`}
      >
        <option id="disabled-option" disabled hidden>
          MM
        </option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
    </>
  );
}
export { MonthInput };
