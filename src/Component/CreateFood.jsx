import { Card, TextField, Typography } from '@mui/material'
import {useState} from 'react'
import  Button  from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'


const CreateFood = ({id}) => {
    const navigate = useNavigate();
    const [foodName,setfoodName] = useState('');
    const [price,setPrice] = useState('');

    console.log(id);
    
    function goBack(){
        navigate(`/dashboard/`+id);
    }
    function create(){
        console.log(foodName);
    }
    function changeText(e){
        setfoodName(e.target.value);
    }
    function changePrice(e){
        setPrice(e.target.value);
    }
  return (
    <div style={{height:'100vh',display:'flex',justifyContent:'center'}}>
        <Card variant='outlined' sx={{maxHeight:'200px'}} style={{marginTop:'10vh',width:'300px',display:'flex',flexDirection:'column',justifyContent:'space-around',padding:'5px'}}>
            <Typography textAlign={'center'} variant='h5' >ADD FOOD </Typography>
            <TextField label='Item Name' fullWidth value={foodName}  onChange={changeText}/>
            <TextField label='price' fullWidth value={price} onChange={changePrice}/>
            <div style={{display:'flex',justifyContent:'space-around',width:'100%'}}>
                <Button variant='outlined' onClick={goBack} size='medium'>Cancel</Button>
                <Button variant='outlined' onClick={create} size='medium'>ADD Item</Button>
            </div>
        </Card>
    </div>
  )
}

export default CreateFood