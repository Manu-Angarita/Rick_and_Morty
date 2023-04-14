import style from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={style.bar}>
         <input type='search' onChange={handleChange} value = {id} className={style.searchInput}/>
         <button onClick={() => {onSearch(id); setId("")}} className={style.seaarchButton}>Agregar</button>
      </div>
   );
}
