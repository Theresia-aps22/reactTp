export default function CardInfo(props){
    const titleInfo = props.titleInfo;
    const date = props.date;

    return(
        <div>
             <ul>
                <li className="infoItem">{titleInfo}</li>
                {date && <li className="infoItem">{date}</li>}
             </ul>
        </div>
    )
    
}