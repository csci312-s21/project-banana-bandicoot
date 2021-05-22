
 
import styles from "../styles/ProfilePage.module.css";
 
import PropTypes from "prop-types"
 
export default function ProfilePage({person, setPage}){
 
  return (
      <div>
       <div className={styles.left} />
         <div className={styles.center}>
           <h1 className={styles.name}>{person.name}</h1>
           <div className={styles.info}>
           <p><b>Hometown:</b> {person.hometown}</p>
           <p><b>Birthday:</b> {person.birthday}</p>
           <p><b>Major(s):</b> {person.major}</p>
           <p><b>Class of:</b> {person.year}</p>
           <p><b>Favorite Hobbies:</b> {person.hobby}</p>
           <p><b>Bio:</b> {person.bio}</p>
           </div>
         <input className={styles.button} type = "button" id = "AddHobby" value = "AddHobby" onClick = {() => setPage("add")}/>
      </div>
   </div> 
     );
}


ProfilePage.propTypes = {
  person: PropTypes.object,
  setPage: PropTypes.func.isRequired
};