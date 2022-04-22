const express = require ("express");
const res = require("express/lib/response");
const app = express()   
const db = require ("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const ProductModel = require("./Model/Product");

dotenv.config();

const PORT = 3001;
app.use(express.json());

db
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/create", async (req,res) =>
{
  const ProductName = req.body.ProductName;
  const ProductPrice = req.body.ProductPrice;
  const ProductUrl = req.body.ProductUrl;
  const Product = new ProductModel({name:ProductName,price : ProductPrice,imgUrl : ProductUrl});
  try {
    await Product.save();
    console.log(Product)
    res.status(200).send("data saved");
    
  } catch (error) {
    console.log(error);
  }
    
  }
);

app.get("/read", async (req,res) =>
{
  ProductModel.find({},(err,data) => {
    if (err) {
      res.send(err)
    }
    res.send(data)
    
})
});

app.get('/', (req, res) => {
   res.send('Hello World!');
})


// ProductModel.find(function(err, Product){
//   if(err){
//     console.log(err);
//   } else {
  

//     Product.forEach(function(Product){
//       console.log(Product);
//   });
// }
// })

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})

