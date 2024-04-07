import HeaderPlante from "../../components/headerPlante"
import PlanteList from "../../components/planteList"
import planteListData from "../../data/planteList"
import PrixPlante from "../../components/prixPlante"
import AfficheCategorie from "../../components/categorie"
import RecherchePlante from "../../components/recherchePlante"
import { useState } from "react"

export default function AffichePlante() {
    const [rechercheValue, setRechercheValue] = useState('');
    const [categorieRecherche, setCategorieRecherche] = useState('');

    // Filtrer les éléments en fonction du terme de recherche
    const filteredData = planteListData.filter(item =>
        item.nom.toLowerCase().includes(rechercheValue.toLowerCase()) &&
        (categorieRecherche === '' || item.categorie.toLowerCase() === categorieRecherche.toLowerCase())
    );

    return (
        <div>
            <HeaderPlante />
            <RecherchePlante
                rechercheValue={rechercheValue}
                setRechercheValue={setRechercheValue}
            />
            <AfficheCategorie 
                categorie={categorieRecherche} 
                setCategorieRecherche={setCategorieRecherche} 
            />
            <div className="divPlantelist">
                {filteredData.map((plante, index) => (
                <PlanteList
                    key={index}
                    image={plante.photo}
                    nom={plante.nom}
                    eau={plante.eau}
                    lumiere={plante.lumiere}
                    reaction={plante.reaction}
                />
                ))}
            </div>
            <PrixPlante />
        </div>
    )
}
