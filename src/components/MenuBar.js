
import styles from "../styles/MenuBar.module.css";


export default function MenuBar({visible, toggleMenu, select}){
  const icon = (
    <span  onClick={() => {toggleMenu(!visible)}} className = {styles.menuHeader}>
    {visible ? "☰": null} &emsp;Hobby Buddy</span>
  );

return (
   
    <div className={styles.container}>

    {icon}
    <br />
    <button className = {styles.button1} >+ add hobby</button>

      <ul className={styles.ul}>
        <li className={styles.li }onClick={() => {select("Chess")}}><curr>Chess</curr></li>
        <li className={styles.li }onClick={() => {select("Cooking")}}> <curr>Cooking</curr> </li>
        <li className={styles.li }><curr>Basketball</curr></li>
      </ul>


    </div>
  );

}