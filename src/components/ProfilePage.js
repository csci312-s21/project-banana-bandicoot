
import profileData from "../../data/profile.json"
import styles from "../styles/ProfilePage.module.css";
//import skiing from "../components/skiing.jpg"

export default function ProfilePage({setPage, person}){

//img

return (
  <div className={styles.body}>
  <div className={styles.b2mp}>
        <p onClick={() => { setPage("main"); }}> Back </p>
    </div>
    <div className={styles.center}>
        <h1 className={styles.name}>{profileData[person].name}</h1>
        <div className={styles.info}>
        <p><b>Hometown:</b> {profileData[person].hometown}</p>
        <p><b>Birthday:</b> {profileData[person].birthday}</p>
        <p><b>Major(s):</b> {profileData[person].major}</p>
        <p><b>Class of:</b> {profileData[person].year}</p>
        <p><b>Favorite Hobbies:</b> {profileData[person].hobby}</p>
        <p><b>Bio:</b> {profileData[person].bio}</p>
        </div>
    </div>  
  </div> 

  );
}