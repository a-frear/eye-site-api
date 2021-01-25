const express = require('express')
const app = require('./app')

const PORT = process.env.PORT || 8000;

app.get('/api/*', (req, res) => {
  res.json({ok: true});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = {app};