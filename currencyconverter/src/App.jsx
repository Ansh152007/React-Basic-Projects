import Datainput from "./components/datainput.jsx";
import "./App.css";
import { useState } from "react";
import useCurrencyfunctions from "./hooks/useCurrencyfunctions.js";

function App() {
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [amount, setamount] = useState(0);
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyfunctions(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    if (currencyInfo[to]) {
      setconvertedAmount(amount * currencyInfo[to]);
    } else {
      setconvertedAmount(0);
    }
  };
  
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div>
        <form
          className="w-screen h-screen flex justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className=" w-1/3 h-72 border flex flex-col justify-center items-center border-gray-300 rounded-2xl backdrop-blur-3xl relative pt-1">
            <div className="w-full h-1/3 flex flex-col justify-center items-center ">
              <Datainput
                label={"From"}
                amount={amount}
                Currencies={options}
                onCurrencyChange={(Currency) => setfrom(Currency)}
                onAmountChange={(Amount) => setamount(Amount)}
                SelectedCurrency={from}
              />
            </div>
            <div className="w-full h-1/3 flex flex-col justify-center items-center ">
              <Datainput
                label={"To"}
                amount={convertedAmount}
                Currencies={options}
                onCurrencyChange={(Currency) => setto(Currency)}
                SelectedCurrency={to}
                amountDisabled
              />
            </div>

            <div className="w-full h-1/4 flex justify-center items-center">
              <button className="bg-purple-400 cursor-pointer w-[90%] text-white text-lg font-semibold px-4 py-2 rounded-md" type="submit">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
