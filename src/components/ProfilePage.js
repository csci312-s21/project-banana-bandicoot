
 
import styles from "../styles/ProfilePage.module.css";
 

 
export default function ProfilePage({session, person, setPage}){
 
//img

 
  return (
      <div>
       <div className={styles.left} />
         <div className={styles.center}>
           <h1 className={styles.name}>{person.name}</h1>
           <div className={styles.info}>
           <p><b>Email:</b> {person.email}</p>
           <p><b>Favorite Hobbies:</b> {person.hobby}</p>
           <div><p><b>Picture:</b></p> {session.user.image}</div>
           </div>
         <input className={styles.button} type = "button" id = "AddHobby" value = "AddHobby" onClick = {() => setPage("add")}/>
      </div>
   </div> 
     );

}
