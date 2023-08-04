import {useState} from 'react'
import styles from './SearchBar.module.css'

const SearchBar = (props) => {


const [id,setId] = useState();

const handleChange = (event) =>{
const id = (event.target.value);
setId(id);
}

const random = () => {
let randomId = Math?.floor(Math.random()* 825) + 1;
return randomId;
}

   return (


      <div className={styles.container33}>
                  <button className={styles.Boton1} onClick={()=> props.onSearch(random())}>X1 </button>
         <input className={styles.Search} id='input'   placeholder="Ingrese un numero" onChange ={handleChange} value= {id} type='search'/>
         
         <button className={styles.Boton} onClick={()=> props.onSearch(id)}>Agregar</button>
        


      </div>
   );
}

export default SearchBar
