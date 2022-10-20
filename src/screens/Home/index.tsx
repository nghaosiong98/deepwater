import React, { FC } from 'react';
import Box from '@mui/material/Box';
import {
  Container, Stack, Toolbar, Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import AppBar from '../../components/AppBar';
import HeroCarousel from '../../components/HeroCarousel';
import Event01 from '../../components/Activities/Event01';
import Event02 from '../../components/Activities/Event02';
import Event03 from '../../components/Activities/Event03';

const Home: FC = () => (
  <Box>
    <AppBar />
    <Toolbar />
    <HeroCarousel />
    <Box sx={{ height: 100 }} />
    <Container>
      <Grid container spacing={2}>
        <Grid
          xs={12}
          md={5}
          sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
        >
          <Typography variant="h3" fontWeight="medium">The Team</Typography>
        </Grid>
        <Grid xs={12} md={7}>
          <Grid>
            <Box sx={{ borderRadius: 8, overflow: 'hidden' }}>
              <img src="https://deepwaterstaticcontent.blob.core.windows.net/images/team.jpg" alt="team" style={{ height: '100%', objectFit: 'cover', width: '100%' }} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    <Box sx={{ height: 100 }} />
    <Container>
      <Stack spacing={4}>
        <Typography variant="h4" fontWeight="medium">Our Projects</Typography>
        <Stack spacing={8}>
          <Event01 />
          <Event02 />
          <Event03 />
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Home;
