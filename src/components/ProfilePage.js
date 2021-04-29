
import profileData from "../../data/profile.json"
import styles from "../styles/ProfilePage.module.css";
//import skiing from "../components/skiing.jpg"

export default function ProfilePage({setPage}){

//img

return (
  <div>
  <div className={styles.left}>
        <p onClick={() => { setPage("main"); }}> Hobby Buddy </p>
    </div>
    <div className={styles.center}>
        <h1>{profileData[0].name}</h1>
        <p>{profileData[0].hometown}</p>
        <p>{profileData[0].birthday}</p>
        <p>{profileData[0].major}</p>
        <p>{profileData[0].year}</p>
        <p>{profileData[0].hobby}</p>
        <p>{profileData[0].bio}</p>
    </div>  
  </div> 
  );
}