// Travel/model.js
import mongoose from "mongoose";

const travelSchema = new mongoose.Schema({
  title: { type: String},
  destination: { type: String},
  startDate: { type: Date },
  endDate: { type: Date},
  budget: { type: Number },
  description: String,
  activities: [String],
  url: String, 
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
  address: { type: String }
}, { timestamps: true });

const TravelModel = mongoose.model("Travel", travelSchema);
export default TravelModel;