import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import styles from './FormCheckout.module.css'

const FormCheckout = () => {
  return (
    
    <div className={styles.contenedor}>
      <h1>Finalizar Compra</h1>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/5a4e0c67086875.5b30e171c7ffd.gif" alt="" />
      <form action="">
      <Grid container spacing={2} flex justifyContent={"center"} marginTop={15} className={styles.formulario}>
        <Grid item xs={11} sm={9}>
          <TextField 
            id="outlined-basic" 
            label="Nombre" 
            variant="outlined" 
            fullWidth
          />
        </Grid>

        <Grid item xs={11} sm={9}>
          <TextField 
            id="outlined-basic" 
            label="e-Mail" 
            variant="outlined" 
            fullWidth
          />
        </Grid>

        <Grid item xs={11} sm={9}>
          <TextField 
            id="outlined-basic" 
            label="Teléfono" 
            variant="outlined" 
            fullWidth
          />
        </Grid>
        <Grid xs={6} flex align={"center"}>
          <Button variant="contained" sx={{marginTop: 2}}>Comprar</Button>
        </Grid>
      </Grid>
      </form>
    </div>
  )
}

export default FormCheckout