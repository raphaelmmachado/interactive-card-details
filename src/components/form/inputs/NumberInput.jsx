import { useRef } from "react";
import { containsOnlyNumbers } from "../../../utils/formatters";

function NumberInput({
  setNumber,
  numberAlert,
  setNumberAlert,
  setDoNotSubmit,
}) {
  const numberRef = useRef(null);

  const handleCardNumber = () => {
    // remove spaces from card number
    let value = numberRef.current.value.split(" ").join("");
    let input = numberRef.current;
    if (!value) setNumber("1234567891230000");

    // if user type non-number or non-space, trigger alert
    if ((containsOnlyNumbers(value) === false && value.length > 0) || !value) {
      setNumberAlert(true);
      return;
    }
    // if value length is equal than 16, prevent user adding more numbers
    if (value.length >= 16 && containsOnlyNumbers(value)) {
      input.maxLength = 16;
      setNumber(value);
      setNumberAlert(false);
      setDoNotSubmit(false);
      return;
    }
    //if user typed spaces, let length be 19
    else {
      input.maxLength = 19;
      setNumber(value);
    }
    if (value.length < 16) {
      setDoNotSubmit(true);
    } else {
      setDoNotSubmit(false);
    }
  };
  return (
    <>
      <label htmlFor="number" className=" font-semibold  text-violete-900">
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
        type="tel"
        placeholder="e.g. 1234 5678 9123 0000"
        name="number"
        id="number"
        maxLength={19}
        required={true}
      />
      {numberAlert ? (
        <p className="text-red text-xs ">Numbers only, max 16 characters.</p>
      ) : null}{" "}
    </>
  );
}
export { NumberInput };
