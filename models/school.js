import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  affiliatedBoard: {
    type: String,
    required: true,
  },
  allIndiaRank: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  
});

const School = mongoose.models.School || mongoose.model('School', schoolSchema)

export default School;