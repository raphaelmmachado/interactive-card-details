import { useState, useEffect } from "react";
import { CardsSection } from "./components/cards/CardsSection";
import { FormSection } from "./components/form/FormSection";
function App() {
  const [name, setName] = useState("JANE APPLESEED");
  const [number, setNumber] = useState("1234567891230000");
  const [expMonth, setExpMonth] = useState("00");
  const [expYear, setExpYear] = useState("00");
  const [cvc, setCvc] = useState("123");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cardInfoData"));
    if (data) {
      setName(data.name);
      setNumber(data.number);
      setExpMonth(data.month);
      setExpYear(data.year);
      setCvc(data.cvc);
    }
  }, []);
  return (
    <main id="App" className="flex flex-col md:flex-row min-h-screen">
      <CardsSection
        name={name}
        number={number}
        expMonth={expMonth}
        expYear={expYear}
        cvc={cvc}
      />
      <FormSection
        setName={setName}
        setNumber={setNumber}
        setExpMonth={setExpMonth}
        setExpYear={setExpYear}
        setCvc={setCvc}
        name={name}
        number={number}
        expMonth={expMonth}
        expYear={expYear}
        cvc={cvc}
      />
    </main>
  );
}

export default App;
