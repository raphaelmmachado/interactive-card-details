import { useRef } from "react";
import { containsOnlyLetters } from "../../../utils/formatters";
function NameInput({ setName, nameAlert, setNameAlert }) {
  const nameRef = useRef(null);

  const handleCardName = (e) => {
    const value = nameRef.current.value;
    console.log(value);

    if (!value) setName("Jane Appleseed");
    //if user typed non-letter, trigger alert
    if ((containsOnlyLetters(value) === false && value.length > 0) || !value) {
      setNameAlert(true);
      return;
    } else {
      setNameAlert(false);
    }
    // show only first letter of middle name if name is too big
    const arr = value.split(" ");
    if (arr.length === 1) {
      setName(value);
    } else if (arr.length > 2 && arr.length <= 3) {
      setName(`${arr[0]} ${arr[1][0]}. ${arr[2]}`);
      return;
    } else {
      setName(`${arr[0]} ${arr[arr.length - 1]}`);
    }
  };

  return (
    <>
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
        maxLength={24}
        required={true}
      />
      {nameAlert ? (
        <p className="text-red text-xs ">
          Wrong format, letters only. Max 23 characters.
        </p>
      ) : null}
    </>
  );
}
export { NameInput };
