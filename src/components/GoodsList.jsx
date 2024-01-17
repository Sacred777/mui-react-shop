import React from 'react';
import Grid from '@mui/material/Grid';


import GoodsItem from './GoodsItem';

export default function GoodsList(props) {
  const { goods, setOrder } = props;

  return (
    <Grid container spacing={2}>
      {goods.map((item) => (
        <GoodsItem key={item.id} setOrder={setOrder} {...item} />
      ))}
    </Grid>
  );
};
