const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

//List
exports.listMentions = async (req, res) => {
    const data = await Mentions.find({}, 'friend mention -_id');
    return res;
}

//Create
exports.createMentions = async (req, res) => {
    const mention = new Mentions({data});
    await mention.save();
}