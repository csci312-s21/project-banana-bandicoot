
import styles from "../styles/MenuBar.module.css";


import MenuItem from "../components/MenuItem";



export default function MenuBar({visible, toggleMenu, allHobbies, title, children}){

  const icon = (
    <span onClick={() => {toggleMenu(!visible)}} className = {styles.menuHeader}>
    {"☰"}</span> 
  );

   function groupEvent(currHobby){
     setPage("Groups");
   }

return (

  <div className={styles.mainContainer}>
    <div className={styles.container}>
  
    {icon}&emsp;Hobby Buddy
  <br/>
    <button className = {styles.button1}onClick={() => {setPage("add")}}>+Add Event</button>
      <ul className={styles.ul}>


      <MenuItem title = {"Profile"} icon = {"fa fa-user-circle"}/> 

      <MenuItem title = {"Notifications"} icon = {"fa fa-bell"}/>

      <MenuItem title = {"Groups"} items = {allHobbies} icon = {"fa fa-users"}/> 
    
      <MenuItem title = {"MyEvents"} icon = {"fa fa-calendar"}/>

      </ul>
   </div>
   {children}
   </div>

  );

}