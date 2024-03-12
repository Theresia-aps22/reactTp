import "../../assets/css/categorie.css"


export default function AfficheCategorie(){
    return(
        <div className="containerCategorie">
            <input type="checkbox" name="classique"/>
            Classique<br/>
            <input type="checkbox" name="exterieur"/>
            Exterieur<br/>
            <input type="checkbox" name="grasse"/>
            Plante Grasse
        </div>
    )
}