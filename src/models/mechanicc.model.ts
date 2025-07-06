import mongoose from "mongoose";

const mechanicSchema = new mongoose.Schema({
  name: String,
  zone: String,
  specialization: String,
  contact: String,
});

const Mechanic = mongoose.model("Mechanic", mechanicSchema);
export default Mechanic;
