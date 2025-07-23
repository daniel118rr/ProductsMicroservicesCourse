require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Product = require('./Models/Product');
 
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({status: 'ok'})
})

app.listen(process.env.PORT || 3002, () => {
    console.log(`Server is running on port ${process.env.PORT || 3002}`);
});