import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Gallery.module.css";

const ListImages = ({receivedData}) => {
  return (
    <div className={styles.imageContainer} >    
        {receivedData.map((catImage) => (
          <div
            key={catImage.id}
            className={styles.imageCard}
            data-id={catImage.breeds[0].name}
          >
            <Image
              src={catImage.url}
              alt={`Cat Image ${catImage.id}`}
              width={catImage.width}
              height={catImage.height}
            />
          </div>
        ))}
      </div>
  );
};

export default ListImages;

