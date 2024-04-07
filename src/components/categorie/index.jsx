import React from "react";
import "../../assets/css/categorie.css";

export default function AfficheCategorie({ categorie, setCategorieRecherche }) {
    
    const handleCheckboxChange = (e) => {
        setCategorieRecherche(e.target.name);
    };

    return (
        <div className="containerCategorie">
            {/* Case à cocher "Classique" */}
            <input
                type="checkbox"
                name="classique"
                checked={categorie === "classique"}
                onChange={handleCheckboxChange}
            />
            Classique
            <br />
            {/* Case à cocher "Exterieur" */}
            <input
                type="checkbox"
                name="exterieur"
                checked={categorie === "exterieur"}
                onChange={handleCheckboxChange}
            />
            Exterieur
            <br />
            {/* Case à cocher "Plante Grasse" */}
            <input
                type="checkbox"
                name="grasse"
                checked={categorie === "grasse"}
                onChange={handleCheckboxChange}
            />
            Plante Grasse
        </div>
    );
}
