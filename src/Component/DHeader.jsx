import { TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux';

const DHeader = (props) => {
    const {createFun,title,buttonName} = props;

    const {user} = useSelector(state=>state.user);
    
  return (
    <div style={{display:'flex' , justifyContent:'space-between',marginBottom:'20px'}}>
            <Typography variant='h4' style={{padding:'5px'}}>{title}</Typography>
            
            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                <TextField label='SEARCH'/>
                {user.role=='admin' && <Button variant='outlined' onClick={createFun} style={{height:'53px'}}>{buttonName}</Button>}
            </div>
        </div>
  )
}

export default DHeader