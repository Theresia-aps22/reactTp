import InfoPerso from "../../data/infoPerso.js"
import photo from "../../assets/image/théresia.jpg"
import "../../assets/css/information.css"

export default function Information(){
    return(
        <div className="container">
                <div className="divPhoto">
                    <img src={photo} alt="chargement..." className="photo"/>
                </div>
                <div className="divInfo"> 
                    <h1 className="title">Curriculum Vitae</h1>
                    {InfoPerso.map((info, index)=>
                        <ul key={index}>
                            <li className="infoItem">Nom: {info.nom}</li>
                            <li className="infoItem">Prenom: {info.prenom}</li>
                            <li className="infoItem">Telephone: {info.telephone}</li>
                            <li className="infoItem">Email: {info.email}</li>
                        </ul>
                    )
                    }
                </div>
            </div>
    )
}