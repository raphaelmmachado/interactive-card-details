import { useState } from "react";
import { CardsSection } from "./components/cards/CardsSection";
import { FormSection } from "./components/form/FormSection";
function App() {
  const [name, setName] = useState("JANE APLESEED");
  const [number, setNumber] = useState("1234567891230000");
  const [expMonth, setExpMonth] = useState("00");
  const [expYear, setExpYear] = useState("00");
  const [cvc, setCvc] = useState("123");
  return (
    <main id="App" className="flex flex-col min-h-screen">
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
      />
    </main>
  );
}

export default App;
