const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = process.env.port || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
