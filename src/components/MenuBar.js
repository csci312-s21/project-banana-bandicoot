
import styles from "../styles/MenuBar.module.css";

export default function MenuBar({visible, toggleMenu, select, allHobbies, setPage}){
  const icon = (
    <span  onClick={() => {toggleMenu(!visible)}} className = {styles.menuHeader}>
    {visible ? "☰": null} &emsp;Hobby Buddy</span>
  );
  const hobbiesList = allHobbies.map((hobby)=> { //list of sections
    return <li className={styles.li } key = {hobby} data-testid = "hobby" onClick={() => select(hobby)}><curr>{hobby}</curr></li>;
   }); //initiate helper to perform callbacks on click


return (
   
    <div className={styles.container}>

    {icon}
  <br/ >
    <button className = {styles.button1} >+ add hobby</button>

      <ul className={styles.ul}>
      <p onClick={() => { setPage("profile"); }}> Profile Page </p>
       {hobbiesList}

      </ul>
   </div>

  );

}