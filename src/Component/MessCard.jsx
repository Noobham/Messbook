import { Card, Typography } from '@mui/material';
import './MessCard.css'
import { Link } from 'react-router-dom';

export default function MessCard({id,photo,name,Hostel}
) {
  return (
      <Card variant='outlined' sx={{maxWidth:'300px',minHeight:'35px'}} style={{margin:'7px',padding:'5px' , display:'flex',justifyContent:'space-between'}}>
          <Link to={`/dashboard/${id}`} className='list_name' > <Typography>{name}</Typography></Link>
          <span className='list_item'> <div>{4} Menu Item </div> </span>
      </Card>
  );
}