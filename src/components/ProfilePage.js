

import styles from "../styles/ProfilePage.module.css";
//import skiing from "../components/skiing.jpg"

export default function ProfilePage({person}){

//img

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
    </div>  
  </div> 

  );
}