// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import SeriesModel from "../../server/models/series.model";

export default (req, res) => {
  // if (req.method === "POST") {
  //   console.log("im making a post request");
  // }

  // if (req.method === "GET") {
  //   const { filter, options, limit } = req.query;
  //   const result = await SeriesModel.find({});
  //   return result;
  // }
  // res.end(JSON.stringify({ msg: "hello from hello" }));
  res.status(200).json({ name: "Next.js" });
  // return { json: 'hej' };
};
