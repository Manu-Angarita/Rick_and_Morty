import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = ({ onSearch }) => {
    return (
        <div className={style.bar}>
            <NavLink to='/home' className={style.link}>HOME</NavLink>
            <SearchBar onSearch={onSearch} />
            <NavLink to='/about' className={style.link}>ABOUT</NavLink>
        </div>
    )
}

export default Nav;