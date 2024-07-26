import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import '../index.css';

export default function Contact() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      margin='100px'
    >
      <Typography variant='h3' sx={{ fontWeight: 'bold', marginBottom: '40px' }}>
        Contact us at one of our two locations!
      </Typography>

      <Box
        display='flex'
        flexDirection='row'
        alignItems='top'
        gap='100px'
      >
        <Card
          sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            gap:'20px',
            padding:'40px',
            width: '600px',
          }}
          >
          <Typography sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
            Bastrop, TX
          </Typography>
          <Box display='flex' flexDirection='column' alignItems='center' gap='10px'>
            <Typography sx={{ fontSize: '1.8rem' }}>
              Address:
            </Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>
              1057 State Hwy 71 W
            </Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>
              Bastrop, TX 78602
            </Typography>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' gap='10px'>
            <Typography sx={{ fontSize: '1.8rem' }}>
              Contact:
            </Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>
              512-321-0444 tel
            </Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>
              512-321-3345 fax
            </Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>
              mathis.manager@gmail.com
            </Typography>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' gap='10px'>
            <Typography sx={{ fontSize: '1.8rem' }}>
              Store Hours:
            </Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>
              Monday-Friday: 7:30 AM - 5:00 PM
            </Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>
              Saturday: 7:30 AM - 2:00 PM
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            gap:'20px',
            padding:'40px',
            width: '600px',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
            La Grange, TX
          </Typography>
          <Box display='flex' flexDirection='column' alignItems='center' gap='10px'>
            <Typography sx={{ fontSize: '1.8rem' }}>
              Address:
            </Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>
              1626 E. Hwy 71 Bypass
            </Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>
              La Grange, TX 78945
            </Typography>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' gap='10px'>
            <Typography sx={{ fontSize: '1.8rem' }}>
              Contact:
            </Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>
              979-966-0440 tel
            </Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>
              979-966-0019 fax
            </Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>
              mathis.lagrange@gmail.com
            </Typography>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' gap='10px'>
            <Typography sx={{ fontSize: '1.8rem' }}>
              Store Hours:
            </Typography>
            <Typography sx={{ fontSize: '1.3rem' }}>
              Monday-Friday: 7:30 AM - 5:00 PM
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
