const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

//List
exports.listMentions = async (req, res) => {
    try {
        const data = await Mentions.find({});
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({message: 'Falha ao carregar as menções.'});
    }
}

//Create
exports.createMentions = async (req, res) => {
    try {
        const mention = new Mentions({
            friend: req.body.friend;
        })
    }
}