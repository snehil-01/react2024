import { useEffect} from "react";

function useCurrencyInfo(currency) {
  // const [data, setData] = useState({});
  let data;

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
