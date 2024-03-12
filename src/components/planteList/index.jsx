import "../../assets/css/planteList.css"

export default function PlanteList(props){
    const image = props.image;
    const nom = props.nom;
    const lumiere = props.lumiere;
    const eau = props.eau;
    let nbLumiere = "";
    let nbEau = "";
    //pour afficher la lumière selon le nombre de lumiere
    for(let i=1; i<=lumiere; i++){
        nbLumiere = nbLumiere + "🌞";
    }
    //pour afficher la goutte d'eau selon le nombre de goutte
    for(let i=1; i<=eau; i++){
        nbEau = nbEau + "💧";
    }

    return(
        <div className="containerPlanteList">
            <img src={image} alt="chargement" className="imagePlante"/>
            <div className="infoPlante">
                <ul className="planteListItem">
                    <li className="planteItemTitle">{nom}</li>
                    <li className="planteItem">{nbEau}</li>
                    <li className="planteItem">{nbLumiere}</li>
                </ul>
            </div>
        </div>
    )
}