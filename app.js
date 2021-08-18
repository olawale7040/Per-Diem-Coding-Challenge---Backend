const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/product");
const scheduleRoutes = require("./routes/schedule");
const pickupRoutes = require("./routes/pickup");

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.use("/api", productRoutes);
app.use("/api", scheduleRoutes);
app.use("/api", pickupRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.listen(5000);
