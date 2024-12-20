// Travel/routes.js
import * as dao from "./dao.js";

function TravelRoutes(app) {
  const createTravel = async (req, res) => {
    const travel = await dao.createTravel(req.body);
    res.json(travel);
  };

  const findAllTravels = async (req, res) => {
    const travels = await dao.findAllTravels();
    res.json(travels);
  };

  const findTravelById = async (req, res) => {
    const travel = await dao.findTravelById(req.params.id);
    res.json(travel);
  };

  const updateTravel = async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateTravel(id, req.body);
    res.json(status);
  };

  const deleteTravel = async (req, res) => {
    const status = await dao.deleteTravel(req.params.id);
    res.json(status);
  };

  app.post("/travels", createTravel);
  app.get("/travels", findAllTravels);
  app.get("/travels/:id", findTravelById);
  app.put("/travels/:id", updateTravel);
  app.delete("/travels/:id", deleteTravel);
}

export default TravelRoutes;
