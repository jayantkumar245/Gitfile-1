import { TextField, Button, Box, Alert } from '@mui/material';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function UserLogin(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
      })
      const navigate = useNavigate();
      const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
          email: data.get('email'),
          password: data.get('password'),
        }
        if (actualData.email && actualData.password) {
          console.log(actualData);
          document.getElementById('login-form').reset()
          setError({ status: true, msg: "Login Success", type: 'success' })
          navigate('/dashboard')
        } else {
          setError({ status: true, msg: "All Fields are Required", type: 'error' })
        }
      }
    return(
        <>
        <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
        <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address'value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        <Box textAlign='center'>
          <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}  onClick={() => signInWithEmailAndPassword(email, password)}>Login</Button>
        </Box>
        <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
        {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
      </Box>
    </>
    )
}