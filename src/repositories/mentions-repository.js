const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

//List
exports.listMentions = async () => {
    const res = await Mentions.find({}, 'friend mention -_id');
    return res;
}

//Create
exports.createMentions = async data => {
    const mention = new Mentions(data);
    await mention.save();
}