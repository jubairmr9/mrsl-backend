const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public'))); // This line serves static files from the 'public' directory

// Routes
const resultsRouter = require('./routes/results');
const playersRouter = require('./routes/players');
const scorersRouter = require('./routes/scorers');

app.use('/results', resultsRouter);
app.use('/players', playersRouter);
app.use('/scorers', scorersRouter);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
