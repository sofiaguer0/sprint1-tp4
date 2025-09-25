import express from 'express';
import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresde30Controller, verSuperheroesController } from './controllers/superHeroesController.mjs';

const app = express();
const PORT = 3005;

app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);

app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);

app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresde30Controller);

app.get('/superheroes', verSuperheroesController);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
