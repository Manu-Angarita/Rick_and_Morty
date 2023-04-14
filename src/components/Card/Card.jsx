import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.container}>
         <button onClick={() => onClose (id)} className={style.closeButton}>X</button>
         <img src={image} alt='' className={style.photo}/>

         <Link to = {`/detail/${id}`} >
         <h2>name: {name}</h2>
         </Link>
         <div className={style.infoContainer}>
         <h2>species: {species}</h2>
         <h2>gender: {gender}</h2>
         <h2>status:{status}</h2>
         <h2>origin:{origin}</h2>
         </div>
      </div>
   );
}
