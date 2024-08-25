import React, { useEffect, useState } from "react";
import axios from "axios";

function ChuckNorrisPhrase() {
  const [phrase, setphrase] = useState("");

  const fetchChuckNorrisPhrase = async () => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      setphrase(response.data.value);
    } catch (error) {
      console.error("Error when searching for Chuck Norris phrase:", error);
    }
  };

  useEffect(() => {
    fetchChuckNorrisPhrase();
    const interval = setInterval(fetchChuckNorrisPhrase, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{phrase}</p>
    </div>
  );
}

export default ChuckNorrisPhrase;