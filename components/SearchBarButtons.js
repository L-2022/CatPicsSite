import React from "react";
import { connect } from "react-redux";
import { setFiltersButton } from "../actions";

const FiltersButton = ({ setFiltersButton }) => {
  return (
    <div>
      <input placeholder="Search for breeds by name"></input>
      <button onClick={() => setFiltersButton(1) }>smile+</button>
      <button onClick={() => setFiltersButton(2)}>hard</button>
      <button onClick={() => setFiltersButton(-1)}>smile-</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filtersbutton: state.filters.filtersButton,
});

export default connect(mapStateToProps, { setFiltersButton })(FiltersButton);

// import styles from "../styles/Gallery.module.css";
// import React, { useState} from "react";

// const FiltersButton = () => {
//   const [filtersbutton, setFiltersButton] = useState();

//   console.log(filtersbutton, "indesxx")
//   return (
//     <div className={styles.hederGallery}>
//         <input
//           className={styles.inputSearch}
//           placeholder="Search for breeds by name"
//         ></input>

//         <button onClick={()=> {setFiltersButton(1)}}>smile+</button>
//         <button onClick={()=> {setFiltersButton(2)}}>hard</button>
//         <button onClick={()=> {setFiltersButton(-1) } }>smile-</button>

//       </div>
//   );
// };

// export default FiltersButton;
