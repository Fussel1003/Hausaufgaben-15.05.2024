// Importiere Express
const express = require('express');
const app = express();
const PORT = 3000;

// Arrays für Hobbys und Einkaufsliste mit Beispielwerten
let hobbies = ['Fahrradfahren', 'Lesen', 'Kochen'];
let shoppingList = ['Milch', 'Brot', 'Eier'];

// GET-Endpunkt für die Hobbys-Liste
app.get('/hobbys', (req, res) => {
  res.json({ hobbies });
});

// GET-Endpunkt für die Einkaufsliste
app.get('/einkaufsliste', (req, res) => {
  res.json({ shoppingList });
});

// Server starten
app.listen(PORT, () => {
  console.log(`Express-App läuft auf Port ${PORT}`);
});
