// import React, { useContext, useRef } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';
// import AuthContext from '../../store/AuthContext';




// function LogIn() {


//     const authCtx = useContext(AuthContext)
//     const history = useNavigate() 
//     const logit =() =>{
//         history('/store')
//     }
//     const emailInputref = useRef()
//     const passwordInputref = useRef()

//     const submitHandler = (e)=>{
//         e.preventDefault()
//         const enteredEmail = emailInputref.current.value
//         const enteredpassword = passwordInputref.current.value
//         console.log(enteredEmail,enteredpassword)

//         fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpz3VHHFjkB3rmJAUyrjEzdadCgV-mKL8 ',
//         {
//             method:'POST',
//             body:JSON.stringify({
//                 email:enteredEmail,
//                 password:enteredpassword,
//                 returnSecureToken:true
//             }),
//             headers:{
//                 'Content-Type': 'application/json'
//             }
//         }).then((res)=>{
//             if(res.ok){
//                 return res.json()
//             }else{
//                 res.json().then((data)=>{//this also return a promise
//                     let errormessage = 'authenication Failed'
//                     // if(data&&data.error&&data.error.message){
//                     //     errormessage = data.error.message

//                     // }
//                     throw new Error(errormessage)
//                 })
//             }
//         }).then((data)=>{
//             authCtx.Login(data.idToken)
//             localStorage.setItem('token',data.idToken)
//             console.log(data.idToken);
            

//             localStorage.setItem('token',data.idToken)
//             history('/store');
//         }).catch((err)=>{
            
//             alert(err.message);
//         })

//     }
//   return (
//     <div style={{margin:'5%'}}>
//     <h1 style={{textAlign:'center',fontFamily:'MV Boli'}}>Log In</h1>
//       <Form onSubmit={submitHandler}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email"  ref={emailInputref}/>
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" ref={passwordInputref}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="success" type="submit" onClick={() =>logit()}>
//         Log In
//       </Button>
//     </Form>
//     </div>
//   )
// }

// export default LogIn;

import { useState, useRef,useContext } from 'react';
// import {useHistory} from 'react-router-dom';

import classes from './Login.module.css';
// import AuthContext from '../../store/auth-context';
import AuthContext from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';


const LogIn = () => {
  const history =useNavigate();

      const logit =() =>{
        history('/store')
    }
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx  = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
      event.preventDefault();

      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      setIsLoading(true);

      let url;
      if (isLogin) {
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpz3VHHFjkB3rmJAUyrjEzdadCgV-mKL8'

     } else {
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpz3VHHFjkB3rmJAUyrjEzdadCgV-mKL8'
    }
    fetch(url,
        {
          method:'POST',
          body:JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          headers:{
            'Content-Type':'application/json'
          }
        }
      ).then(res => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
         return  res.json().then(data => {
            // show the error
            let errorMessage = 'Authentication failed';
            // if(data && data.error && data.error.message){
            //   errorMessage = data.error.message;
            //  }
             
            // console.log(data);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) =>{
        // console.log(data);
        authCtx.login(data.idToken);
        // history.replace('/');
        history('/store');
      })
      .catch((err) =>{
        alert(err.message);
      });
  }

  return (
    <div className={classes.body}>
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
        {!isLoading && <button onclick={logit}>{isLogin?'Login': 'Create Account'}</button>}
        {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
    </div>
  );
};

export default  LogIn ;