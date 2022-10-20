import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box, Container, Stack, Typography, Link,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const FooterContainer = styled('footer')(() => ({

}));

const Footer: FC = () => (
  <FooterContainer>
    <Box
      sx={{
        padding: {
          xs: 4,
        },
        bgcolor: 'primary.light',
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid xs={12} md={5} sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Stack spacing={1}>
              <Typography color="white" fontWeight="medium">Directory</Typography>
              <Stack>
                <Link href="/" underline="none" color="white">Home</Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={7}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Stack spacing={1}>
                <Typography color="white" fontWeight="medium">Contact</Typography>
                <Box>
                  <Typography color="white" fontWeight="medium">Email</Typography>
                  <Typography color="white" fontWeight="medium">Phone</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </FooterContainer>
);

export default Footer;
