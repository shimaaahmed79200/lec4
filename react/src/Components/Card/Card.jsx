
function Card(props){
    return(
        <div className="Card">
            <h3>{props.CardTitle}</h3>
            <p>{props.pragraph}</p>
            <img src={props.CardIcon} />
        </div>
        
    )
}
export default Card;