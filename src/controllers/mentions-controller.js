const repository = require('../repositories/mentions-repository');

//List
exports.listMentions = async (req, res) => {
    try {
        const data = await repository.listMentions();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({message: 'Falha ao carregar as menções.'});
    }
}

//Create
exports.createMentions = async (req, res) => {
    try {
        await repository.createMentions({
            friend: req.body.friend,
            mention: req.body.mention
        });
        res.status(201).send({message: 'Menção cadastrada com sucesso!'});
    } catch (e) {
        res.status(500).send({message: 'Falha ao cadastrar a menção.'});
    }
}