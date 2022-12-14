const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
  return res.status(200).send('Hello')
})

// catch-all route handler for any requests to an unknown route
app.use((req, res) => {
  res.status(404).send('404 Errors');
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middlzeware error',
    status: 400,
    message: { err: 'An error occurred. In global error handler' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;