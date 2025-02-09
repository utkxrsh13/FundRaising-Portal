const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDb = require('./utils/db.js');


dotenv.config();
connectToDb();

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use("/api/auth", require("./routes/user.route.js"));
app.use("/api/donations", require("./routes/donation.route.js"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));