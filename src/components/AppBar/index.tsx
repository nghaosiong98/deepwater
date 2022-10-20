import {
  AppBar as MuiAppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography,
} from '@mui/material';
import React, { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const menuPaths = [
  {
    name: 'Recyclable Trash Classifier',
    path: '/recyclable-trash-classifier',
  },
];

const AppBar: FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MuiAppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          onClick={() => navigate('/')}
        >
          DeepWater
        </Typography>
        <Box>
          <Button sx={{ color: '#fff' }} onClick={handleClick}>
            Our Projects
          </Button>
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {menuPaths.map((menuPath) => (
            <MenuItem
              key={menuPath.path}
              onClick={() => {
                handleClose();
                navigate(menuPath.path);
              }}
            >
              {menuPath.name}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
