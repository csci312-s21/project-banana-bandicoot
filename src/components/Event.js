

export default function Event({ title, time, location , numJoined , maxNumber }) {

return (
            <div>
            <h4> {title} </h4>
            <h5> {location} || {time} </h5>
            <h5> Spots: {numJoined} / {maxNumber} </h5>
            <input type = "button" id = "joinButton" name = "joinButton" value = "Join" onClick = {() => numJoined = numJoined + 1}/>
            
            </div>
);
}