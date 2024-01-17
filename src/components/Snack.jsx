import React from 'react'
import { Alert, Snackbar } from '@mui/material'

export default function Snack({ isOpen, handleClose }) {

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert
        severity='success'
      >
        Товар добавлен в корзину
      </Alert>
    </Snackbar>
  )
}
