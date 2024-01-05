import { useEffect, useState } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";

function useMisdeamnorContext() {
  const [data, setData] = useState<Misdemeanour[]>();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const result = await fetch("http://localhost:8080/api/misdemeanours/3");
        const res = await result.json();
        setData(res.misdemeanours);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAPI();
  }, []);
  console.log(data);
  return data;
}

export default useMisdeamnorContext;
