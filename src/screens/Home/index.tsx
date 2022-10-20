import React, { FC } from 'react';
import Box from '@mui/material/Box';
import {
  Container, Toolbar, Typography,
} from '@mui/material';
import AppBar from '../../components/AppBar';
import HeroCarousel from '../../components/HeroCarousel';

const Home: FC = () => (
  <Box>
    <AppBar />
    <Toolbar />
    <HeroCarousel />
    {/* <Container>
        <Grid container spacing={2}>
          <Grid xs={7}>
            <Grid>
              <Stack spacing={2}>
                <Typography variant="h5">The Team</Typography>
                <Box sx={{ borderRadius: 8, overflow: 'hidden' }}>
                  <img src="https://deepwaterstaticcontent.blob.core.windows.net/images/team.jpg" alt="team" style={{ height: '100%', objectFit: 'cover', width: '100%' }} />
                </Box>
              </Stack>
            </Grid>
          </Grid>
          <Grid xs={5}>

            <Box sx={{ borderRadius: 8, overflow: 'hidden' }}>
              <img src="https://deepwaterstaticcontent.blob.core.windows.net/images/team.jpg" alt="team" style={{ height: '100%', objectFit: 'cover', width: '100%' }} />
            </Box>
          </Grid>
        </Grid>
      </Container> */}
    <Container sx={{
      border: 1,
      height: 300,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Typography variant="h2">Coming soon</Typography>
      <Typography>We are still working in progess...</Typography>
    </Container>
  </Box>
);

export default Home;
