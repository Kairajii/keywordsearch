
const express = require('express');
const cors = require('cors');
const  connectDB  = require('./config/db.js');
const KeywordRoutes = require('./routes/keywordRoute.js')
require('dotenv').config();

const app = express();

app.use(cors(
  {
    origin: "https://keywordsearch-zb29.vercel.app/",
    methods: ["POST","GET","PUT"],
    credentials: true
  }
));
app.use(express.json());

connectDB();

app.use('/',(req,res)=>{
  res.json("HEllo")
})
app.use('/searchVolume',KeywordRoutes)

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
