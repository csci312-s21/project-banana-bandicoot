
import styles from "../styles/MenuBar.module.css";

import MenuItem from "../components/MenuItem";



export default function MenuBar({visible, toggleMenu, select, allHobbies}){
  const icon = (
    <span onClick={() => {toggleMenu(!visible)}} className = {styles.menuHeader}>
    {"☰"}</span> 
  );

return (
   
    <div className={styles.container}>
  
    {icon}&emsp;Hobby Buddy
  <br/>
    <button className = {styles.button1}>+ add hobby</button>
      <ul className={styles.ul}>

      <MenuItem title = {"Profile"} select = {select} icon = {"fa fa-user-circle"}/> 
      <MenuItem title = {"Notifications"} select = {select} icon = {"fa fa-bell"}/>
       <MenuItem title = {"Groups"} select = {select} items = {allHobbies} icon = {"fa fa-users"}/> 
    
       <MenuItem title = {"MyEvents"} select = {select} icon = {"fa fa-calendar"}/>

       
      </ul>
   </div>

  );

}