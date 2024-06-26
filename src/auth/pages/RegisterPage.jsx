import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>
    
      <form>
        <Grid container>
          <Grid item xs={12} sx={{mt: 2 }}>
            <TextField label='Nombre' type='text' placeholder='Su nombre...' fullWidth />
          </Grid>

          <Grid item xs={12} sx={{mt: 2 }}>
            <TextField label='Correo' type='email' placeholder='correo@punto.com' fullWidth />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField label='Contraseña' type='password' placeholder='Contraseña' fullWidth />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb:2, mt: 1 }}>
          <Grid item xs={12} >
            <Button variant='contained' fullWidth>
              Crear cuenta
            </Button>
          </Grid>


          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} colo='inherit' to='/auth/login'>
              Acceder

            </Link>
            
          </Grid>

        </Grid>

      </form>

    </AuthLayout>
    
  )
}
