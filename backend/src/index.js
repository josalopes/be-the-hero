const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(express.json());

// Settings
app.set("port", process.env.PORT || 3333);

// Middlewares
app.use(cors({ origin: "http://localhost:3000" }));
//app.use(cors());

/* END MIDDLEWARE  */
app.use(routes);
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
