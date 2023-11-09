import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FacebookOutlined } from '@mui/icons-material';

export default function Landing() {
  const [isLoading, setLoadingStatus] = useState(false);
  const [showUrl, setShowUrl] = useState(false);
  const [showPostFragment, setShowPostFragment] = useState(false);
  return (
    <Box textAlign='center' marginTop={2}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/800px-Facebook_Logo_%282019%29.svg.png" alt="Facebook.com"
        style={{
          width: '100%',
          maxWidth: '315px',
          margin: '1rem auto',
        }}
      />
      <Card variant='outlined'>
        <CardContent style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          <Typography variant='h4' fontWeight='bold' marginTop={2}>Upload a photo on Facebook</Typography>

          <LoadingButton
            size="small"
            endIcon={<FacebookOutlined />}
            loading={isLoading}
            loadingPosition="center"
            variant="contained"
            sx={{width: '100%', borderRadius: '1rem', padding: '.5rem', fontSize: '1rem', '@media(min-width: 769px)': {width: '50%'}}}
          >
            <span>Connect to Facebook</span>
          </LoadingButton>

          <Button sx={{ width: '100%', fontSize: '1rem', '@media(min-width: 769px)': {width: '50%'}}} variant='outlined' onClick={() => setShowPostFragment(!showPostFragment)}>POST</Button>
        </CardContent>
      </Card>

      <Card variant='outlined' sx={{
        mt: 2,
        overflow: 'hidden',
        maxHeight: showPostFragment ? 'max-content' : 0,
        opacity: showPostFragment ? '1' : 0,
        transition: '400ms all ease-in-out'
      }}
        component='fieldset'>
        <legend style={{ textAlign: 'start', color: 'GrayText' }}>Post Image</legend>
        <CardContent>
          <Typography variant='h6' fontWeight='semibold' marginY={2} >Select an Image & Post it to your Facebook</Typography>
          <Box sx={{ width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, '@media(min-width: 769px)': {width: '50%'}}}>
            <Button variant='contained' style={{ borderRadius: '100px', padding: '.5rem 2rem', fontSize: '1rem' }}>Upload Image</Button>
            <Typography variant='h6'>or drop a file,</Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {'Paste Image or '}
              <Button variant='text' sx={{ padding: '0 5px', textDecoration: 'underline !important', minWidth: 'max-content' }} onClick={() => setShowUrl(!showUrl)}>URL</Button>
            </Typography>
            <Box sx={{ height: '1.4375em', width: '100%' }}>
              {showUrl && <TextField id="outlined-basic" label="URL" variant="outlined" fullWidth sx={{ height: '100%' }} />}
            </Box>
          </Box>

          <Box mt={12} mb={2} marginX={'auto'} width='50%'>
            <Typography variant='body1' fontWeight='bold' marginY={2} color={'GrayText'}>No Image? Try one of these:</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', alignItems: 'center', justifyItems: 'center', gap: '1rem', '@media(min-width: 769px)': {gridTemplateColumns: 'repeat(5, 1fr)'}}}>
              {[...Array(5)].map((e: any, i: any) => (
                <Box key={i} sx={{
                  width: '100%',
                  'transition': '200ms all ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1)'
                  }
                }}>
                  <img
                    style={{ borderRadius: '1rem', cursor: 'pointer', width: '100%' }}
                    src="https://random.imagecdn.app/150/150"
                    alt="Random Image"
                    loading="lazy"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
