import React from "react";
import { connect } from "react-redux";
import styles from "../styles/Gallery.module.css";
const ListVotes = ({ list, filtersButton }) => {
  let listfilter = [];
  console.log(list && list)
  list.forEach((element) => {
    if (element.value === filtersButton) {
      listfilter.push(element);
    }
  });

  return (
    <div className={styles.imageContainer}>
      {listfilter.map((element) => (
        <div
          key={element.id}
          className={styles.imageCard}
          data-id={"element.breeds[0].name"}
        >
          {element.value}

          {element.value === filtersButton ? (
            <img
              src={element.image.url}
              alt="Cat Image"
              width={200}
              height={200}
            />
          ) : (
            " "
          )}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filtersButton: state.filters.filtersButton,
});

export default connect(mapStateToProps)(ListVotes);

// import Link from "next/link";
// import Image from "next/image";
// import styles from "../styles/Gallery.module.css";

// const ListVotes = ({ list, filtersButton }) => {
//     let listfilter = []
//     list.map((element) => {
//         element.value === filtersButton ? (listfilter.push(element)): ''
//     })

//   return (
//     <div className={styles.imageContainer}>
//       {listfilter.map((element) => (
//         <div
//           key={element.id}
//           className={styles.imageCard}
//           data-id={"element.breeds[0].name"}
//         >
//           {element.value}
//           {element.value === filtersButton ? (
//             <img
//               src={element.image.url}
//               alt="Cat Image"
//               width={200}
//               height={200}
//             />
//           ) : (
//             ""
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ListVotes;
