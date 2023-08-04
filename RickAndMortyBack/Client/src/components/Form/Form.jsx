import React, {useState} from 'react'
import validation from './validation';
import './Form.Module.css'



const Form = ({login}) => {


const [userData,setForm]= useState({
    email:'',
    password:''
});

const [errors ,setErrors]= useState({
    email:'',
    password:''
});

const handleOnChange = (event) => {
    setForm({
        ...userData,
        [event.target.name] : event.target.value
    })
    
    setErrors(
        validation({
         ...userData,
        [event.target.name] : event.target.value
        }))
    
}

const handleOnSubmit = (event)=>{
    event.preventDefault();
    login(userData);
}

  return (

    <div className='login' >
        <h1 className='tituloFondo' >Welcome to other dimension</h1>
        
        <div className='bodyform'>
           
            <form className='form' onSubmit ={handleOnSubmit}>
                <div className='accesoRestringido'>Acceso Restringido</div>
                <div className='email'>
                    <label htmlFor="email">EMAIL</label>
                    
                    <input type="email" placeholder='Tu email aqui' name='email' value={userData.value} onChange={handleOnChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='password'>
                    <label >PASSWORD</label>
                    
                    <input type="password" placeholder='Tu password aqui' name='password' value ={userData.value} onChange={handleOnChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className='ingresar' >INGRESAR</button>
            </form>
        </div>
    </div>
    
  )
}


export default Form