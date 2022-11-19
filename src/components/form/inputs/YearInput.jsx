import { useRef, useState, useEffect } from "react";
import { containsOnlyNumbers } from "../../../utils/formatters";
import date from "../../../utils/getDate";

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
    <>
      <select
        className={`w-20 rounded-md px-2 py-1 text-center   ${
          yearAlert
            ? "border border-red outline-1 outline-red focus:ring-red"
            : `border border-violete-100 outline-1 outline-violete-900`
        }`}
        name="year"
        id="year"
        onClick={handleCardExpYear}
        onChange={handleCardExpYear}
        ref={yearRef}
        required={true}
        defaultValue="YY"
      >
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
      </select>
    </>
  );
}
export { YearInput };
