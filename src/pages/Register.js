
import React from 'react'
import { useState } from 'react';
 function Register() {
 const [username, setusername] = useState();
  const [email, setemail] = useState();
   const [password, setpassword] = useState();

   const handle_email = (e)=>{
     setemail(e.target.value);
   }
   const handle_password = (e) => {
     setpassword(e.target.value);

   };
   const handle_username = (e) => {
     setusername(e.target.value);

   };
   const submit = (e) => {
    e.preventDefault();
     console.log(username)
          console.log(email);

               console.log(password);

   };


   return (
     <div>
         <div id="login-form-wrap">
         <h2>Register</h2>
         <form onClick={submit} id="login-form">
           <p>
             <input
               onChange={handle_username}
                 
               type="text"
               id="username"
               name="username"
               placeholder="Username"
               required
             />
             
           </p>
           <p>
             <input
               onChange={handle_email}
               type="email"
               id="email"
               name="email"
               placeholder="Email Address"
               required
             />
             
           </p>
           <p>
             <input
               onChange={handle_password}
               type="text"
               id="password"
               name="password"
               placeholder="Password"
               required
             />
             
           </p>
           
           <p>
             <input type="submit" id="login" value="Register" />
           </p>
         </form>
         <div id="create-account-wrap">
           <p>{/* Not a member? <a href="#">Create Account</a> */}</p>
         </div>
       </div>
      
     </div>
   );
}
export default Register;