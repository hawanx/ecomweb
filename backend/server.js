const express = require('express');
const app = express();
const userRoutes = require('./services/user'); // Import the user routes
const cors = require('cors')
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json()); // For parsing application/json
app.use('/user', userRoutes); // Use the user routes for /user endpoint


const verifyToken = (req, res, next) => {
  
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, "hallo"); // Use your secret key
        req.user = decoded; // Add user info to request
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

app.get('/protected', verifyToken, (req, res) => {
  console.log("reached at server");
  
  res.json({ message: "You are authorized", user: req.user });
});

app.get('/', (req,res)=>{
  res.send("hallo")
})

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
