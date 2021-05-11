


import styles from "../styles/MenuBar.module.css";


import MenuItem from "../components/MenuItem";



export default function MenuBar({visible, toggleMenu, allHobbies, select, setPage}){



  const icon = (
    <span onClick={() => {toggleMenu(!visible)}} className = {styles.menuHeader}>
    {"☰"}</span> 
  );

   function groupEvent(currHobby){
     setPage("Groups");
     select(currHobby);
   }

return (
   
    <div className={styles.container}>
  
    {icon}&emsp;Hobby Buddy
  <br/>
    <button className = {styles.button1}onClick={() => {setPage("add")}}>+Add Event</button>
      <ul className={styles.ul}>


      <MenuItem title = {"Profile"} select = {setPage} icon = {"fa fa-user-circle"}/> 

      <MenuItem title = {"Notifications"} select = {setPage} icon = {"fa fa-bell"}/>

      <MenuItem title = {"Groups"} select = {groupEvent} items = {allHobbies} icon = {"fa fa-users"}/> 
    
      <MenuItem title = {"MyEvents"} select = {setPage} icon = {"fa fa-calendar"}/>

      </ul>
   </div>

  );

}