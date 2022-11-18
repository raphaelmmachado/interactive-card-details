import { useRef } from "react";
import { containsOnlyNumbers } from "../../../utils/formatters";
function VerificationCode({ setCvc, cvcAlert, setCvcAlert }) {
  const cvcRef = useRef(null);

  const handleCardCvc = () => {
    const value = cvcRef.current.value;
    if (
      value.length > 3 ||
      (value.length > 0 && containsOnlyNumbers(value) === false) ||
      !value
    ) {
      setCvcAlert(true);
      return;
    } else {
      setCvcAlert(false);
      setCvc(cvcRef.current.value);
    }
  };

  return (
    <>
      {" "}
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
        pattern="[0-9]+"
      />
    </>
  );
}
export { VerificationCode };
