import Information from "../../components/information/"
import CardInfo from "../../components/diplomes"
import "../../assets/css/cv.css"

export default function CurriculumVitae(){
    const Diplomes = [
        {
            title:"Baccalauréat Série C",
            date:"2021"
        },
        {
            title:"Delf B2 Alliance Française",
            date:"2020"
        }
        ]
        
        const Experience = [
            {
                expTitle: "Stage à Lcom",
                expDate: "Septembre-Aôut 2023"
            },
            {
                expTitle: "Stage à SmartPredict",
                expDate: "Juillet 2022"
            },
        ]
        
        const Competences = [
           "MySql",
           "Sql",
           "Programmation POO",
           "React Js"
        ]
        
    return(
        <div className="card-body">
            <Information/>
            <h1 className="titleH1">Diplômes</h1>
            {
                Diplomes.map((data, index)=>
                 <CardInfo 
                    key={index} 
                    titleInfo={data.title}
                    date={data.date}
                    />
                )
            } 
             <h1 className="titleH1">Experience</h1>
            {
                Experience.map((exp, index)=>
                 <CardInfo 
                    key={index}
                    titleInfo={exp.expTitle}
                    date={exp.expDate}
                    />
                )
            }
             <h1 className="titleH1">Competences</h1>
            {
                Competences.map((comp, index)=>
                 <CardInfo 
                    key={index}
                    titleInfo={comp}
                    />
                )
            }
        </div>
    )
}