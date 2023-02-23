const express = require("express");
const { FlightModel } = require("../Models/flight.model");

const flightRouter = express.Router();

flightRouter.get("/flights", async (req, res) => {
  const allflights = await FlightModel.find();
  res.status(200).send(allflights);
});

flightRouter.get("/flights/:id", async (req, res) => {
  const id = req.params.id;
  const flight = await FlightModel.findOne({ _id: id });
  res.send(flight);
});

flightRouter.post("/flights", async (req, res) => {
  let payload = {
    ...req.body,
  };
  const note = await new FlightModel(payload);
  note.save((err, success) => {
    if (err) {
      return res.status(500).send({ message: "something went wrong" });
    }
    return res.status(201).send(success);
  });
});

flightRouter.patch("flights/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;

  const flightupdate = await FlightModel.findByIdAndUpdate({ _id: id }, payload);
  res.status(204).send(flightupdate);
});

flightRouter.delete("flights/:id", async (req, res) => {
    const id = req.params.id;
    const note = await FlightModel.deleteOne({ _id: id });
    res.status(202).send(note)
})



module.exports = {
  flightRouter,
};
