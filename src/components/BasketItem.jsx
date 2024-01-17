import React from 'react';
import { ListItem, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

export default function BasketItem({ removeFromOrder, id, name, price, quantity }) {
  return (
    <ListItem sx={{
      justifyContent: 'space-between'
    }}>
      <Typography
        variant='body1'
      >
        {name} {price}руб x{quantity}
      </Typography>
      <IconButton
        onClick={() => removeFromOrder(id)}
      >
        <Close />
      </IconButton>
    </ListItem>
  );
};
