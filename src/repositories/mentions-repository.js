const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

//Create
exports.createMentions = async data => {
    const mention = new Mentions(data);
    await mention.save();
}

//Read or List
exports.listMentions = async () => {
    const res = await Mentions.find({}, 'friend mention -_id');
    return res;
}

//Update
exports.updateMentions = async (id, data) => {
    await Mentions.findByIdAndUpdate(id, {
        $set: data
    });
};

//Delete
exports.deleteMentions = async id => {
    await Mentions.findOneAndRemove(id)
};