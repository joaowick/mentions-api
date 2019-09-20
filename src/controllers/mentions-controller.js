const repository = require('../repositories/mentions-repository');
const { validationResult } = require('express-validator');

//Create
exports.createMentions = async (req, res) => {
    const {errors} = validationResult(req);
    if(errors.length > 0) {
        return res.status(400).send({message: errors});
    }
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

//List or Read
exports.listMentions = async (req, res) => {
    try {
        const data = await repository.listMentions();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({message: 'Falha ao carregar as menções.'});
    }
}

//Update
exports.updateMentions = async (req, res) => {
    const {errors} = validationResult(req);
    if(errors.length > 0) {
        return res.status(400).send({message: errors});
    }
    try {
        await repository.updateMentions(req.params.id, req.body);
        res.status(200).send({
            message: 'Menção atualizada com sucesso!'
        });
    } catch (e) {
        res.status(500).send({message: 'Falha ao atualizar a menção'});
    }
}

//Delete
exports.deleteMentions = async (req, res) => {
    try { 
        await repository.deleteMentions(req.params.id);
        res.status(200).send({message: 'Menção removida com sucesso!'});
    } catch (e) {
        res.status(500).send({message: 'Falha ao remover a menção'});
    }
}