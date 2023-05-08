import { useParams } from "react-router-dom";
import useApi from "../../hooks/apiHook";

export default function Product() {
  let { id } = useParams();
  const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;
  const { data, isLoading, isError } = useApi(url);

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
