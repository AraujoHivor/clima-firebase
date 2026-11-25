
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import useFetchData from './hooks/useFetchData';

function App() {
  const [cityInput, setCityInput] = useState('');

  const { clima } = useFetchData(cityInput);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCityInput(event.target.value);
  };

  return (
    <Grid
      container
      spacing={5}
      sx={{ justifyContent: 'center', alignItems: 'center', p: 3 }}
    >
      <Grid size={{ xs: 12 }}>
        <Typography variant="h4" component="h1">
          Clima con Firebase
        </Typography>
      </Grid>

      {/* Selector de ciudad */}
      <Grid size={{ xs: 12, md: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="city-select-label">Ciudad</InputLabel>

          <Select
            labelId="city-select-label"
            id="city-simple-select"
            label="Ciudad"
            value={cityInput}
            onChange={handleChange}
          >
            <MenuItem value="" disabled>
              Seleccione una ciudad
            </MenuItem>
            <MenuItem value="guayaquil">Guayaquil</MenuItem>
            <MenuItem value="quito">Quito</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Datos del clima */}
      <Grid size={{ xs: 12 }}>
        {clima && (
          <>
            <Typography variant="h5" component="div">
              Temperatura: {clima.temperatura} °C
            </Typography>

            <Typography variant="h5" component="div">
              Humedad: {clima.humedad} %
            </Typography>
          </>
        )}
      </Grid>
    </Grid>
  );
}

export default App;
