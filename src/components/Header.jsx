import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Badge } from '@mui/material';


export default function Header({ handleCart, orderLen }) {
  return (
    <Box sx={{
      flexGrow: 1,
      mb: '1.5rem',
    }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant='h6'
            component='span'
            sx={{ flexGrow: 1 }}
          >
            My Shop
          </Typography>

          <IconButton
            color='inherit'
            onClick={handleCart}
          >
            <Badge
              color='secondary'
              badgeContent={orderLen}
            >
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
