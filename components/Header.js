import Link from "next/link";
import Image from "next/image";
import { SiBurgerking } from "react-icons/si";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <>
    <header >
      <Link       
      href="/">
        <a style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <Image
          style={{ marginRight: '8px' }}
            src="/images/group-21.svg"
            alt="vote-table"
            width={24}
            height={24}
          />
          PetsPaw
        </a>
      </Link>
      <nav>
        <Link href="/">
          <a>Домой</a>
        </Link>
        <Link href="/about">
          <a>О Нас</a>
        </Link>
        <Link href="/reviews">
          <a>Отзывы</a>
        </Link>
        <Link href="/burgers/">
          <a>Бургеры</a>
        </Link>
      </nav>
      
    </header>
    <div>
    {/* <div className={styles.leftPanelHome}>
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
      </div> */}
      {/* <div>Content</div> */}
    </div>
    </>
  );
};

export default Header;

{/* <div className={styles.leftPanelHome}>
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
<div>Content</div> */}
