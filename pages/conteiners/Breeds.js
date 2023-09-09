import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Burgers.module.css";
import ListImages from "../../components/ListImages";
import SearchBarButtons from "../../components/SearchBarButtons";
import ListVotes from "../../components/ListVotes";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setFiltersButton } from "../../actions";
import { fetchBreed, fetchHistoricVotes } from "../../http/fatcAPI";

const Breeds = ({ filtersButton, setFiltersButton }) => {
  const [receivedData, setReceivedData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [breed, setBreed] = useState("");

  const [votes, setVotes] = useState([]);

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

  useEffect(() => {
    if (filtersButton !== 0) {
      fetchHistoricVotes()
        .then((data) => setVotes(data))

        .catch((error) => {
          console.log(error.message);
        });
    } else {
      fetchBreed({ limit, breed })
        .then((data) => setReceivedData(data))
        .catch((error) => {
          console.log(error.message);
        });
    }

    console.log(filtersButton, "filtersButton");
  }, [limit, breed, filtersButton]);

  return (
    <div>
      <h1>Breeds</h1>
      <SearchBarButtons />
      <div className={styles.btnNavigation}>
        <Link href="/">
          <button className={styles.btn}>Beak</button>
        </Link>
        <button onClick={() => setFiltersButton(0)}>Breeds</button>
      </div>
      {filtersButton === 0 ? (
        <>
          <div className={styles.filters}>
            <div className={styles.selectFilter}>
              <p>BREED</p>
              <select id="breed" onChange={handleBreedChange} value={breed}>
                <option value="">All</option>
                <option value="abys">Abyssinian</option>
                <option value="beng">Bengal</option>
                <option value="acur">Аcur</option>
              </select>
            </div>
          </div>
          <div className={styles.filters}>
            <div className={styles.selectFilter}>
              <p>LIMIT</p>
              <select id="limit" onChange={handleLimitChange} value={limit}>
                <option value="5">5 items per page</option>
                <option value="10">10 items per page</option>
                <option value="15">15 items per page</option>
                <option value="20">20 items per page</option>
              </select>
            </div>
          </div>
          <ListImages receivedData={receivedData} />
        </>
      ) : (
        <ListVotes list={votes} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filtersButton: state.filters.filtersButton,
});

export default connect(mapStateToProps, { setFiltersButton })(Breeds);
