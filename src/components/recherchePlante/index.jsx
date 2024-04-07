import React from "react";

// Composant de recherche de plante
export default function RecherchePlante({ rechercheValue, setRechercheValue }) {
  return (
    <div>
      {/* Champ de recherche */}
      <input
        type="text"
        placeholder="Recherche"
        value={rechercheValue}
        onChange={(e) => setRechercheValue(e.target.value)}
      />
    </div>
  );
}
