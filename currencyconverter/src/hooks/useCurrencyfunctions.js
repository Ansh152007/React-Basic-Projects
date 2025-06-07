import { useState, useEffect } from "react";

const useCurrencyfunctions = (currency) => {
  const [data, setdata] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      try {
        let requesteddata = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
        let jsonresponse = await requesteddata.json();
        setdata(jsonresponse[currency]);
      } catch (error) {
        console.log("Error while fetching the currency data :",error)
        setdata({})
      }
    };

    if(currency){
        fetchdata()
      }
  }, [currency]);

  return data;
};
export default useCurrencyfunctions;
