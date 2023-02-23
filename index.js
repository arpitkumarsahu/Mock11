const express = require("express");
const { connection } = require("./Configs/db");
const { flightRouter } = require("./Routes/flight.routes");
const {userRouter} = require("./Routes/user.routes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Flight app");
});

app.use("/users", userRouter);
app.use("/flight",flightRouter)

app.listen(8080, async () => {
  try {
    await connection;
    console.log("conected to DB");
  } catch (err) {
    console.log("Trouble connecting to DB");
    console.log(err);
  }
  console.log("running on port 8080");
});
