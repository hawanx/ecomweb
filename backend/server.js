const express = require('express');
const app = express();
const userRoutes = require('./services/user'); // Import the user routes
const cors = require('cors')

app.use(cors());
app.use(express.json()); // For parsing application/json
app.use('/user', userRoutes); // Use the user routes for /user endpoint

app.get('/', (req,res)=>{
  console.log("hello");
  res.send("hallo")
  
})

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
