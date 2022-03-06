const app = require("./app/app.js");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
