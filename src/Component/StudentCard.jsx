import { Typography } from '@mui/material'
import './StudentCard.css'

const StudentCard = ({name,rollNo}) => {
  return (
    <div className='StudentCard'>
      <Typography>{name}</Typography>
      <Typography>{rollNo}</Typography>
    </div>
  )
}

export default StudentCard