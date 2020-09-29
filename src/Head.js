import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default function Head(){
  var days = Math.floor((new Date().getTime() - new Date("October 02, 2019").getTime())/ (1000 * 60 * 60 * 24));

  return (
    <Grid container direction="column" justify="center" alignItems="center" style={{ minHeight: '100vh'}}>
      <Grid item>
        <Typography variant='body1'>
          Tem Pupo Hoje?
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h1'>
        NÃO
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>
          Estamos há { days } dias sem festa do PUPO.
        </Typography>
      </Grid>
    </Grid>
  );
}