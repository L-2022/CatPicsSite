import ListImages from "../../components/ListImages";
import SearchBarButtons from "../../components/SearchBarButtons";
import styles from "../../styles/Gallery.module.css";
import { useEffect, useState } from "react";

import { fetchData, fetchAnimals } from "../../http/fatcAPI";

const Gallery = () => {
  const [receivedData, setReceivedData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [breed, setBreed] = useState("");
  const [order, setOrder] = useState("");
  const [typeDate, setTypeDate] = useState("");

  const handleLimitChange = (event) => {
    const newLimit = event.target.value;
    console.log(newLimit);
    setLimit(newLimit);
  };

  const handleBreedChange = (event) => {
    const newBreed = event.target.value;
    console.log(newBreed);
    setBreed(newBreed);
  };

  const handleOrderChange = (event) => {
    const newOrder = event.target.value;
    console.log(newOrder);
    setOrder(newOrder);
  };

  const handleTypeChange = (event) => {
    const newType = event.target.value;
    console.log(newType);
    setTypeDate(newType);
  };

  useEffect(() => {
    typeDate === "gif"
      ? fetchAnimals({ limit, typeDate })
          .then((data) => setReceivedData(data))
          .catch((error) => {
            console.log(error.message);
          })
      : fetchData({ limit, order, breed })
          .then((data) => setReceivedData(data))
          .catch((error) => {
            console.log(error.message);
          });
    console.log(receivedData);
  }, [limit, order, breed, typeDate]);

  return (
    <div>
      <h1>Gallery</h1>
      <SearchBarButtons />
      <div className={styles.btnNavigation}>
        <button>Back</button>
        <button>Gallery</button>
        <button>Upload</button>
      </div>
      <div className={styles.filters}>
        <div className={styles.selectFilter}>
          <p>ORDER</p>
          <select id="order" onChange={handleOrderChange}>
            <option value="">None</option>
            <option value="random">Random</option>
            <option value="desc">Desc</option>
            <option value="asc">Asc</option>
          </select>
        </div>

        <div className={styles.selectFilter}>
          <p>BREED</p>
          <select id="breed" onChange={handleBreedChange}>
            <option value="">All</option>
            <option value="abys">Abyssinian</option>
            <option value="beng">Bengal</option>
            <option value="acur">Аcur</option>
          </select>
        </div>
      </div>
      <div className={styles.filters}>
        <div className={styles.selectFilter}>
          <p>TYPE</p>
          <select id="typeDate" onChange={handleTypeChange}>
            <option value="">All</option>
            <option value="jpg">Static</option>
            <option value="gif">Animated</option>
          </select>
        </div>

        <div className={styles.selectFilter}>
          <p>LIMIT</p>
          <select id="limit" onChange={handleLimitChange}>
            <option value="5">5 items per page</option>
            <option value="10">10 items per page</option>
            <option value="15">15 items per page</option>
            <option value="20">20 items per page</option>
          </select>
        </div>
      </div>
      <ListImages receivedData={receivedData} />
    </div>
  );
};

export default Gallery;
