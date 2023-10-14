import { Card, TextField, Typography } from '@mui/material'
import {useState} from 'react'
import  Button  from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const CreateMess = () => {
    const navigate = useNavigate();
    const [messName,setmessName] = useState('');

    function goBack(){
        navigate('/dashboard/mess')
    }
    function create(){
        console.log(messName);
    }
    function changeText(e){
        setmessName(e.target.value);
    }
  return (
    <>
    <div style={{height:'100vh',display:'flex',justifyContent:'center'}}>
        <Card variant='outlined' sx={{maxHeight:'200px'}} style={{marginTop:'10vh',width:'300px',display:'flex',flexDirection:'column',justifyContent:'space-around',padding:'5px'}}>
            <Typography textAlign={'center'} variant='h5' >ADD MESS NAME</Typography>
            <TextField label='Mess Name' fullWidth value={messName}  onChange={changeText}/>
            <div style={{display:'flex',justifyContent:'space-around',width:'100%'}}>
                <Button variant='outlined' onClick={goBack}>Cancel</Button>
                <Button variant='outlined' onClick={create}>Save</Button>
            </div>
        </Card>
    </div>
    </>
  )
}

export default CreateMess