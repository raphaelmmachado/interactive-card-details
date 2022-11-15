import { BackFaceCard } from "./components/cards/BackFaceCard";
import { FrontFaceCard } from "./components/cards/FrontFaceCard";
function App() {
  return (
    <main id="App" className="flex flex-col min-h-screen">
      <section
        id="cards-section"
        className="relative min-h-[40vh] flex justify-center"
      >
        <BackFaceCard secret="123" />
        <FrontFaceCard />
      </section>
      <section
        id="form-section"
        className=" flex items-center justify-center mt-20"
      >
        <form className="flex flex-col items-start p-4 ">
          <label
            htmlFor="name"
            className="text-xs font-semibold tracking-widest"
          >
            CARDHOLDER NAME
          </label>
          <input
            className="border border-violete-100 w-full rounded-md px-2 py-1 my-1"
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
            className="border border-violete-100 w-full rounded-md px-2 py-1 my-1"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            name="number"
            id="number"
          />
          <br />
          <label
            htmlFor="date"
            className="text-xs font-semibold tracking-widest"
          >
            EXP. DATE (MM/YY) CVC
          </label>
          <div className="flex flex-row gap-4 justify-center items-center">
            <input
              className="w-16 border text-center border-violete-100 rounded-md px-2 py-1 my-1"
              placeholder="MM"
              type="number"
              name="date"
              id="month"
              maxLength="2"
            />
            <input
              className="w-16 border text-center border-violete-100 rounded-md px-2 py-1"
              placeholder="YY"
              type="number"
              name="date"
              id="year"
              maxLength="2"
            />
            <input
              className="w-20 border text-center border-violete-100 rounded-md px-2 py-1"
              placeholder="e.g. 123"
              type="number"
              name="date"
              id="cvc"
              maxLength="3"
            />
          </div>
          <br />
          <button className="bg-violete-900 text-white px-4 py-3 w-full rounded-md">
            Confirm
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
