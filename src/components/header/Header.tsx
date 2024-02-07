import { Box } from '@mui/material'

export default function Header() {
  return (
    <Box component='header' sx={{textAlign:'center' , mt:'-3rem'}}>
        <Box component='h1' sx={{fontSize:'3rem' , color:'#0f52ba' }}>
          <Box component='span' sx={{color:'#b0c4de'}}>“</Box>
            Blog
          <Box component='span' sx={{color:'#b0c4de'}}>”</Box>
        </Box>
      </Box>
  )
}
