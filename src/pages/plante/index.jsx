import HeaderPlante from "../../components/headerPlante/"
import PlanteList from "../../components/planteList"
import planteList from "../../data/planteList"
import PrixPlante from "../../components/prixPlante"
import AfficheCategorie from "../../components/categorie"


export default function AffichePlante(){
    return(
        <div>
            <HeaderPlante/>
            <AfficheCategorie/>
            <div className="divPlanteList">
                {planteList.map((plante, id)=>
                    <PlanteList
                        key={id}
                        image={plante.photo}
                        nom = {plante.nom}
                        eau = {plante.eau}
                        lumiere={plante.lumiere}
                    />
                )}
            </div>
            <PrixPlante/>
        </div>
    )
}