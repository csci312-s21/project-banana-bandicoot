
import styles from "../styles/MenuBar.module.css";

export default function MenuBar({visible, toggleMenu, select, allHobbies}){
  const icon = (
    <span onClick={() => {toggleMenu(!visible)}} className = {styles.menuHeader}>
    {"☰"}</span>
    
  );
  const hobbiesList = allHobbies.map((hobby)=> { //list of sections
    return <li className={styles.li } key = {hobby} data-testid = "hobby" onClick={() => select(hobby)}><curr>{hobby}</curr></li>;
   }); //initiate helper to perform callbacks on click


return (
   
    <div className={styles.container}>

    {icon}&emsp;Hobby Buddy
  <br/>
    <button className = {styles.button1}>+ add hobby</button>

      <ul className={styles.ul}>

       {hobbiesList}

      </ul>
   </div>

  );

}