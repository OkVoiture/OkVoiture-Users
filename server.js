const app = require('./app');

const PORT = 5000;

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
