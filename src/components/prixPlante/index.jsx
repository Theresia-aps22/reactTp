import "../../assets/css/prixPlante.css"
export default function PrixPlante(){
    const prix = [
        {
            categorie: "Classique",
            prix: 8000,
        },
        {
            categorie: "Exterieur",
            prix: 10000,
        },
        {
            categorie: "Plante Grasse",
            prix: 15000,
        }
    ]
    return(
        <div className="containerPrixPlante">
            <div className="divPrixPlante">
                <h1>Prix</h1>
                <ul>
                {
                    prix.map((px, index)=>
                        <li>
                            {px.categorie} : {px.prix} Ar
                        </li>
                    )
                }
                </ul>
            </div>
        </div>
    )
}