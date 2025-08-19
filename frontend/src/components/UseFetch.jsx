import { useEffect, useState } from "react";
function useFetch(url) {
  const [data, setData] = useState(null);

  const [isPending, setIsPending] = useState(true);
  const [Error, setError] = useState(null);
  useEffect(() => {
    //u can also look at the element of inside this functions
    //if you want to at certain elements when they render then on then some states should change.

    //fetching the data
    setInterval(() => {
      fetch(url)
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw Error("Could not fetch the data for that source");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          console.log(data.ok);
          setData(data);
          setError(null);
          setIsPending(false);
        })
        .catch((e) => {
          setIsPending(false);
          setError(e);
        });
    }, 10000);
  }, []);
  return { data, isPending, Error };
}

export default useFetch;
