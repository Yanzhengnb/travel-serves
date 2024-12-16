// Travel/dao.js
import TravelModel from "./model.js";

export const createTravel = (travel) => TravelModel.create(travel);
export const findAllTravels = () => TravelModel.find();
export const findTravelById = (id) => TravelModel.findById(id);
export const updateTravel = (id, travel) =>
  TravelModel.updateOne({ _id: id }, { $set: travel });
export const deleteTravel = (id) => TravelModel.deleteOne({ _id: id });