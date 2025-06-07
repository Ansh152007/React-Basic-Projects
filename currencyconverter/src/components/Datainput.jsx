import { useId } from "react";
const Datainput = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  Currencies = [],
  SelectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) => {
  const id = useId();
  return (
    <div className="bg-white w-[90%] h-[85%] rounded-xl drop-shadow-md flex justify-between">
      <div className="flex flex-col justify-center ml-2 space-y-1">
        <label className="ml-1 font-medium text-sm text-gray-600" htmlFor={id}>
          {label}
        </label>
        <input
          type="number"
          id={id}
          className=" text-black outline-none rounded-lg py-1 px-1"
          placeholder="0"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className=" flex flex-col justify-center mr-2 space-y-1">
        <p className="font-medium text-sm ml-1 text-gray-600">Currency Type</p>
        <select
          className="bg-gray-100 rounded-lg outline-none px-1 py-1 cursor-pointer w-32"
          value={SelectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {Currencies.map((Currency) => (
            <option key={Currency} value={Currency}>
              {Currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Datainput;
