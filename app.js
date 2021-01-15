var express = require("express");
const addressRouter = express.Router();
var app = express();
var {addressResponse} = require("./sampleData/address");

addressRouter.route("/validateAddress")
.post((req,res) => {
    return res.status(200).json(addressResponse);
});
app.use("/api",addressRouter);

app.get("/", (req, res) => {
    const response = {hello: 'Hello from api'};
    res.json(response);
});
app.listen(5001);