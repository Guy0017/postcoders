import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import "./App.css";
import { CardList } from "./components/CardList";
import { InputPostcode } from "./components/InputPostcode";

function App() {
  const [areas, setAreas] = useState([]);
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cache, setCache] = useState({});

  const load = async () => {
    setError(false);

    if (!postcode || cache[postcode]) {
      cache[postcode] ? setAreas(cache[postcode]) : null
      
      return;
    }

    setIsLoading(true);

    try {
      const areaData = await getAreaData(postcode);

      setAreas(areaData);
      setCache((currCache) => {
        const newCache = currCache;

        newCache[postcode] = areaData;

        return newCache;
      });
    } catch (error) {
      error.message.includes(404)
        ? setError("Postcode Not Found")
        : setError(error.code);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    load();
  }, [postcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <h2>
        {postcode
          ? `Areas for ${postcode}: ${areas.length}`
          : "Welcome to Postcoders! Complete your details below to start!"}
      </h2>
      <InputPostcode setPostcode={setPostcode} />
      <div className={error ? "error" : null}>
        {error ? <p>{error}</p> : null}
      </div>
      <p>{isLoading ? "Loading.... " : null}</p>
      <CardList areas={areas} />
    </div>
  );
}

export default App;
