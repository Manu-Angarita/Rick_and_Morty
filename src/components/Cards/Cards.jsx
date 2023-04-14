import Card from '../Card/Card.jsx';
import style from "./Cards.module.css";
import rick from "../Images/Rick.png"

export default function Cards({ characters, onClose }) {
   return (
      <div className={style.cardsContainer}>
         {
            characters.map(({ id, name, status, species, gender, origin, image }) => {
               return (
                  <Card
                     key={id}
                     image={image}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     // origin = {origin.name}
                     onClose={onClose}
                  />
               )
            })
         }
         <div>
            <img src={rick} alt="" className={style.rick}/>
         </div>
      </div>
   )
}
