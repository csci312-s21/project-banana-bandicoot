
 
import styles from "../styles/ProfilePage.module.css";
 

 
export default function ProfilePage({session, person, setPage}){
 
//img

 
  return (
    <div>
      <div className={styles.left} />
         <div className={styles.center}>
          <div>
          <img src={session.user.image} alt= "Image" height="100" width="100"/>
           <h1 className={styles.name}>{person.name}</h1>
           </div>
           <div className={styles.info}>
           <p><b>Email:</b> {person.email}</p>
           <p><b>Favorite Hobbies:</b> {person.hobby}</p>
           <input className={styles.button} type = "button" id = "AddHobby" value = "AddHobby" onClick = {() => setPage("add")}/>
          
         </div>
      </div>
   </div> 
     );

}
