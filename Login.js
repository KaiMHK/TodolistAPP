import React, { useRef } from 'react'
import App from './App';


var isLogin = false;

var Username = "";

export default function Login() {
    var uname = useRef()

    function getUser(){
        Username = uname.current.value
        uname.current.value = null
        if(Username.length!==0)isLogin=true
    }
    
    return( 
    <>
        <h1>Login to TodoList!</h1>
        <input className='task' ref={uname} type="text" style={{color:"black"}}></input>
        <button className='btn' onClick={getUser} style={{backgroundColor:"violet"}}>Click</button>
        <div style={{color:"white"}}>{Username}</div>
    </>
    )
}
