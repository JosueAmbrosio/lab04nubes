const express = require('express');
const app = express();
const port = process.env.PORT || 8052; // Usa el puerto asignado a través de una variable de entorno o 8051 por defecto

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Ruta para mostrar clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'Ana Gómez' },
    { id: 3, nombre: 'Luis Martínez' }
  ];
  res.json(clientes);
});

// Ruta para mostrar productos
app.get('/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Producto A', precio: 100 },
    { id: 2, nombre: 'Producto B', precio: 200 },
    { id: 3, nombre: 'Producto C', precio: 300 }
  ];
  res.json(productos);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

