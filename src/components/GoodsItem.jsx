import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';

export default function GoodsItem(props) {
  const { name, price, setOrder, poster } = props;

  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{ height: '100%' }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={poster}
          alt={name}
          title={name}
        />
        <CardContent>
          <Typography
            variant='h6'
            component='h3'
          >
            {name}
          </Typography>

          <Typography
            variant='body1'
          >
            Цена: {price} руб.
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            variant='text'
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
