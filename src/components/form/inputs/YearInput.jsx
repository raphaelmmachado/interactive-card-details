import { useRef } from "react";
import { containsOnlyNumbers } from "../../../utils/formatters";

function YearInput({ setYear, yearAlert, setYearAlert }) {
  const yearRef = useRef(null);

  const handleCardExpYear = () => {
    const value = yearRef.current.value;
    if (!value) setYear("00");
    if ((value.length > 0 && containsOnlyNumbers(value) === false) || !value) {
      setYearAlert(true);
      return;
    } else {
      setYearAlert(false);
      setYear(yearRef.current.value);
    }
  };

  return (
    <input
      onChange={handleCardExpYear}
      ref={yearRef}
      className={`w-20 rounded-md px-2 py-1 text-center   ${
        yearAlert
          ? "border border-red outline-1 outline-red focus:ring-red"
          : `border border-violete-100 outline-1 outline-violete-900`
      }`}
      placeholder="YY"
      type="tel"
      name="date"
      id="year"
      maxLength={2}
      min={22}
      max={32}
      required={true}
      pattern="[0-9]{2}"
    />
  );
}
export { YearInput };
