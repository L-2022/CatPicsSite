import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const LeftPanel = () => {
  return (
    <>
      <div className={styles.leftPanelHome}>
        <h1 className={styles.textHederHome}>Hi</h1>
        <p className={styles.textHome}>Welcome to MacPaw Bootcamp 2023</p>
        <p className={styles.textHome2}>Lets start using The Cat API</p>

        <div className={styles.homeBtn}>
          <div className={styles.container}>
            <div className={styles.frame}>
              <Image
                className={styles.img}
                src="/images/vote-table.png"
                alt="vote-table"
                width={100}
                height={124.468}
              />
            </div>
            <Link href="/conteiners/Voting">
              <a className={styles.btn}>VOTING</a>
            </Link>
          </div>

          <div className={styles.container}>
            <div className={styles.frame}>
              <Image
                className={styles.img}
                src="/images/pet-breeds.png"
                alt="vote-table"
                width={100}
                height={124.468}
              />
            </div>
            <Link href="/conteiners/Breeds">
              <a className={styles.btn}>BREEDS</a>
            </Link>
          </div>

          <div className={styles.container}>
            <div className={styles.frame}>
              <Image
                className={styles.img}
                src="/images/images-search.png"
                alt="vote-table"
                width={100}
                height={124.468}
              />
            </div>
            <Link href="/conteiners/Gallery">
              <a className={styles.btn}>GALLERY</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftPanel;

{
  /* <div className={styles.leftPanelHome}>
<h1 className={`${styles.title} font-effect-fire-animation`}>
  PetsPaw
</h1>
<div className={styles.mainImage}>
  <Image
    src="/images/vote-table.png"
    alt="vote-table"
    width={100}
    height={124.468}
  />
  <Link href="/burgers/">
  <a className={styles.btn}>VOTING</a>
</Link>
  <Image
    src="/images/pet-breeds.png"
    alt="vote-table"
    width={100}
    height={124.468}
  />
  <Link href="/conteiners/">
  <a className={styles.btn}>BREEDS</a>
</Link>
  <Image
    src="/images/images-search.png"
    alt="vote-table"
    width={100}
    height={124.468}
  />
</div>
{/* <p clas
{/* <div className={styles.mainImage}>
  <Image src="/fatburger.png" alt="fat burger" width={400} height={300} />
</div> *
{/* <p className={styles.text}>Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О других составляющих начинки можно поспорить, ведь это дело вкуса.</p>
<p className={styles.text}>Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания, правильная атмосфера заведения.</p> 
 <Link href="/burgers/">
  <a className={styles.btn}>Все бургеры</a>
</Link> 
</div>
<div>Content</div> */
}
