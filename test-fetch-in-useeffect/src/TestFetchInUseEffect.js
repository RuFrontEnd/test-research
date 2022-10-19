import { useEffect, useState } from "react";
import { fetchAPI } from "./testFetch";

function TestFetchInUseEffect() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAPI().then((json) => {
      setData(json);
      setLoading(false);
    });
  }, []);

  return (
    <div className="test fetch in useEffect">
      {loading ? (
        <>loading...</>
      ) : (
        <>
          {data.map((dataItem) => (
            <div data-testid={dataItem.title} key={dataItem.id}>
              <p>id: {dataItem.id}</p>
              <p>title: {dataItem.title}</p>
              <p>userId: {dataItem.userId}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default TestFetchInUseEffect;
