import {
  Alert,
  Box, Card, Container, Snackbar, Stack, Toolbar, Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Unstable_Grid2';
import React, { FC, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReactImageUploading, { ImageListType } from 'react-images-uploading';

import AppBar from '../../components/AppBar';
import { useTrashDetectionMutation } from './api';

type ObjectDetectionFormValues = {
  images: ImageListType;
};

const TrashDetection: FC = () => {
  const [snackbarState, setSnackbarState] = useState({
    open: false,
  });
  const { handleSubmit, control, watch } = useForm<ObjectDetectionFormValues>();
  const images = watch('images');

  const { mutate, isLoading, data } = useTrashDetectionMutation();

  const onSubmit = (values: ObjectDetectionFormValues) => {
    if (values.images) {
      const formData = new FormData();
      if (values?.images?.[0]?.file) {
        formData.append('image', values.images[0].file);
      }
      mutate(formData);
    } else {
      setSnackbarState({
        open: true,
      });
    }
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarState({
      open: false,
    });
  };

  return (
    <Box>
      <AppBar />
      <Toolbar />
      <Container sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={1}>
          <Grid lg={8}>
            <Grid>
              <Card sx={{ display: 'flex', justifyContent: 'center', padding: 2 }} elevation={3}>
                <Box sx={{
                  width: 256,
                  height: 256,
                  border: 1,
                  display: 'flex',
                }}
                >
                  <Controller
                    control={control}
                    name="images"
                    render={({ field: { value, onChange } }) => (
                      <ReactImageUploading
                        value={value}
                        onChange={onChange}
                      >
                        {({
                          onImageUpload,
                          isDragging,
                          dragProps,
                        }) => (

                          <Box
                            {...dragProps}
                            onClick={onImageUpload}
                            aria-hidden
                            sx={{
                              display: 'flex',
                              flexGrow: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {images?.[0]?.dataURL
                              ? (
                                <img src={images?.[0]?.dataURL} alt="test" width="100%" height="100%" />
                              )
                              : <Typography>{isDragging ? 'Drop here' : 'Drag and Drop'}</Typography>}
                          </Box>
                        )}
                      </ReactImageUploading>
                    )}
                  />
                </Box>
              </Card>
            </Grid>
            <Grid>
              <Card sx={{ padding: 2 }}>
                <Box display="flex" flex={1} justifyContent="center">
                  <LoadingButton loading={isLoading} type="button" variant="contained" onClick={handleSubmit(onSubmit)}>Submit</LoadingButton>
                </Box>
              </Card>
            </Grid>
          </Grid>
          <Grid lg={4}>
            <Grid>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h5">Result</Typography>
                <Stack direction="row" spacing={3}>
                  <Typography variant="body1">Score:</Typography>
                  <Typography variant="body1">{data?.data?.score || 'N/A'}</Typography>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        // anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        onClose={handleCloseSnackbar}
        open={snackbarState.open}
        autoHideDuration={3000}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">Please select a photo</Alert>
      </Snackbar>
    </Box>
  );
};

export default TrashDetection;
