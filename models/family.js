const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const familySchema = new Schema({
    title: String,
    id: String,
    name: String,
    locations: {
        type: [String],
        default: []
    }
}, { timestamps: true });


export default mongoose.models.Family || mongoose.model('Family', familySchema)