import { useRef } from "react";
import { containsOnlyNumbers } from "../../../utils/formatters";
function VerificationCode({ setCvc, cvcAlert, setCvcAlert, setDoNotSubmit }) {
  const cvcRef = useRef(null);

  const handleCardCvc = () => {
    let value = cvcRef.current.value;
    // if input is blank card show placeholder
    if (!value) setCvc("123");

    if ((value.length > 0 && containsOnlyNumbers(value) === false) || !value) {
      setDoNotSubmit(true);
      setCvcAlert(true);
    } else {
      setCvcAlert(false);
      setDoNotSubmit(false);
      setCvc(cvcRef.current.value);
    }
    //do not let user submit
    if (value.length !== 3) {
      setDoNotSubmit(true);
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
