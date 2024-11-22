import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Nav = () => {
  return (
  
        <Box height={'100px'} className='w-100 px-[10rem] flex justify-between items-center'  >
            <Stack direction={'row'} alignItems={'center'} gap={8} >
                <img src="https://urspayce.com/assets/images/urspayce-logo.webp" alt="" />
                <Typography variant='subtitle1' fontWeight={500} >Products</Typography>
                <Typography variant='subtitle1' fontWeight={500} >Solution</Typography>
                <Typography variant='subtitle1' fontWeight={500} >Resource</Typography>
                <Typography variant='subtitle1' fontWeight={500} >Pricing </Typography>
            </Stack>
            <Stack direction={'row'} gap={3}>
                <Button variant='contained' color='black' disableElevation  sx={{bgcolor:'#F3F3F3', borderRadius:'100px'}} className='p-5' >Log in</Button>
                <Button  variant='contained' disableElevation  className='p-5'  sx={{ borderRadius:'100px'}}  ><Typography variant='subtitle1' fontWeight={500} >Get Started </Typography></Button>
            </Stack>
        </Box>
   
  )
}

export default Nav