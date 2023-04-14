import style from './App.module.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';

const URL_BASE = "https://be-a-rym.up.railway.app/api/character"
const API_KEY = "aa0cf345a6d8.a8aeaac2e492b5d83be9"
const email = 'manu@gmail.com'
const password = '123qwe'

function App() {
   const location = useLocation ();
   const navigate = useNavigate ();
   const [characters, setCharacters] = useState ([]);
   const [access, setAccess] = useState(false);
   const [backgroundI, setBackgroundI] = useState('./components/Images/b3-login.jpg');

   const login = (userData) => {
      if (userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {  //no deja avanzar a otras pestañas si no completa bien el formulario
      !access && navigate('/');
   }, [access])

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(characters => characters.id !== (id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className={style.app}>
         {
            location.pathname !== '/' && 
            <Nav onSearch={onSearch}/>
         }
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>  
            <Route path='/' element={<Form login={login}/>}/>   
         </Routes>   
      </div>
   );
}

export default App;

