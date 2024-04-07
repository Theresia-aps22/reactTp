import "../../assets/css/planteList.css"
import { useState } from "react"

export default function PlanteList(props){
    
    const [reaction, setReaction] = useState(props.reaction);
    const image = props.image;
    const nom = props.nom;
    const lumiere = props.lumiere;
    const eau = props.eau;
    
    
    //change la valeur de setReaction
    const changeReaction = () =>{
        setReaction(!reaction);
    }
    
    
    //pour afficher la lumière selon le nombre de lumiere
    /* for(let i=1; i<=lumiere; i++){
         nbLumiere = nbLumiere + "🌞";
     }*/

    //pour afficher la goutte d'eau selon le nombre de goutte
    /* for(let i=1; i<=eau; i++){
        nbEau = nbEau + "💧";
     }*/

    //ou

    let nbLumiere = Array.from({length: lumiere}, () => "🌞").join('');
    let nbEau = Array.from({length: eau}, () => "💧").join('');
   
    //valeur de la reaction
    let rectionValue = reaction ? "👍" : "👎"; 
    //valeur afficher sur le boutton
    let bouttonValue = reaction ? "Je n'aime pas": "J'aime "

    return(
        <div className="containerPlanteList">
            <img src={image} alt="chargement" className="imagePlante"/>
            <div className="infoPlante">
                <ul className="planteListItem">
                    <li className="planteItemTitle">{nom}</li>
                    <li className="planteItem">{nbEau}</li>
                    <li className="planteItem">{nbLumiere}</li>
                </ul>
                <div className="divReaction">
                    <p className="emojiReaction">{rectionValue} </p> <br/>
                    <button onClick={changeReaction} >
                        {bouttonValue}
                    </button>
                </div>
            </div>
        </div>
    )
}