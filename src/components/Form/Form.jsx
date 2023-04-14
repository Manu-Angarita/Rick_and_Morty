import { useState } from "react";
import validation from "../Validation/Validation";
import style from './Forms.module.css'
import background from '../Images/b3-login.jpg'

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //para que no se recargue la página y no se borre la info
        login(userData);
    }

    return (
        <div classname={style.containerstyle}>
            <img src={background} alt="Rick observando" className={style.backgroundImg}/>
            <div className={style.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={style.forms}>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <br />
                            <input className={style.input} type="email" name="email" value={userData.email} onChange={handleChange} />
                            {errors.email && <p className={style.errors} >{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <br />
                            <input className={style.input} type="text" name="password" value={userData.password} onChange={handleChange} />
                            {errors.password && <p className={style.errors} >{errors.password}</p>}
                        </div>
                    </div>
                    <div className={style.buttonContainer}>
                        <button className={style.buttonSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;