const express = require("express");
const route = require("./routes/route");
const dotenv = require("dotenv");


dotenv.config({ path: "./config.env" });
const app = express();


app.use(express.json());


app.use("/api/v1/user", route);
// app.use("/api/v1/document", userRoutes);
// app.use("/api/v1/student", userRoutes);

// Start our server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
