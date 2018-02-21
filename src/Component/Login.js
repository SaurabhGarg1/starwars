import React from 'react';
import {Redirect} from 'react-router-dom';

const Login = ({searchUser,isValidUser,errorMsg}) => (
<div className="login">
    <input type="text" placeholder="Username" id="username" ref = {(input)=> this.input = input}/>  
  <input type="password" placeholder="password" id="password"/>
  <input type="submit" value="Sign In" onClick = {() =>searchUser(this.input.value)}/>
  {isValidUser ? <Redirect to= '/planet' /> : errorMsg ? <p>{errorMsg}</p> : ''}
</div>

 
  )

export default Login;


