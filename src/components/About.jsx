import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../index.css';

export default function About() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      margin='100px'
    >
      <Typography variant='h3' sx={{ fontWeight: 'bold', marginBottom: '40px' }}>
        Family owned and operated
      </Typography>

    </Box>
  );
}
