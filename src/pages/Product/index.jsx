import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Product() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading Data</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.imageUrl}></img>
      <p>{data.description}</p>
    </div>
  );
}
