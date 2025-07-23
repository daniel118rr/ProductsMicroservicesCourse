const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: String,
        required: true,
    }
} 
)

module.exports = mongoose.mongoose.model('Product', productSchema);