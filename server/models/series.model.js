import mongoose from "mongoose";

const seriesSchema = new mongoose.Schema({
  date: "string",
  scores: [],
});

const SeriesModel = mongoose.model("Series", seriesSchema);

export default SeriesModel;
