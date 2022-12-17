import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {database} from '../../../firebase';
import {ref,push,child,update} from "firebase/database";

export default function Registration(){
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address,setAddress] = useState(null);

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "name"){
        setName(value);
    }
    if(id === "phone"){
        setPhone(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "address"){
      setAddress(value);
    }

}
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
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      phone: data.get('phone'),
      address: data.get('address'),
      tc: data.get('tc'),
    }
    if (actualData.name && actualData.email && actualData.password && actualData.phone && actualData.address && actualData.tc !== null) {
          console.log(actualData);
          document.getElementById('registration-form').reset()
          setError({ status: true, msg: "Registration Successful", type: 'success' })
          navigate('/dashboard')
      } else {
        setError({ status: true, msg: "All Fields are Required", type: 'error' })
      }

      let obj = {
        name : name,
        email:email,
        password:password,
        phone:phone,
        address:address,
    }       
const newPostKey = push(child(ref(database), 'posts')).key;
const updates = {};
updates['/' + newPostKey] = obj
return update(ref(database), updates);
    }
    return(
        <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='name' name='name' value={name} label='Name' onChange = {(e) => handleInputChange(e)}/>
      <TextField margin='normal' required fullWidth id='email' name='email' value={email} label='Email Address' onChange = {(e) => handleInputChange(e)}/>
      <TextField margin='normal' required fullWidth id='password' name='password' value={password} label='Password' onChange = {(e) => handleInputChange(e)}/>
      <TextField margin='normal' required fullWidth id='phone' name='phone' value={phone} label='Phone' onChange = {(e) => handleInputChange(e)}/>
      <TextField margin='normal' required fullWidth id='address' name='address' value={address}  label='Address' onChange = {(e) => handleInputChange(e)}/>
      <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Register</Button>
      </Box>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
        </>
    )
}