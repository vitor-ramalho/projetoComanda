const express = require('express');
const router = express.Router();
const Mesa = require('../models/Mesas');

//Routes

//Exibir todas as mesas
router.get('/pegarMesas', async (req, res) => {
    try {

        const mesas = await Mesa.find();
        res.json(mesas)

    } catch (err) {
        res.json({ message: err });
    }
});

/** */
router.post('/cadastrarMesa', async (req, res) => {
    //Instancia do Schema Mesa
    const mesa = new Mesa({
        //obtenção de dados ../models/Mesas
        nomeG: req.body.nome,
        qtPessoas: req.body.qtPessoas,
        pedido: req.body.pedido
    });

    try {
        const savedMesa = await mesa.save();
        res.json(savedMesa);
    } catch (error) {
        res.json({ message: error })
    }
});

//Receber um pedido/mesa so
router.get('/:mesaId', async (req, res) => {
    //params == localhost:3000/mesas/ThisIsTheParam
    try {
        const mesa = await Mesa.findById(req.params.mesaId);
        res.json(mesa);
    } catch (error) {
        res.json({ message: error });

    }
})

//Deletar pedido/mesa
router.delete('/:mesaId', async (req, res) => {
    try {
        const removedMesa = await Mesa.deleteOne({ _id: req.params.mesaId });
        res.json(removedMesa);
    } catch (error) {
        res.json({ message: error });
    }
})

//Alterar pedido
router.patch('/:mesaId', async (req, res) => {
    try {
        const updatePedido = await Mesa.updateOne(
            { _id: req.params.mesaId },
            {
                $set: {
                    qtPessoas: req.body.qtPessoas,
                    pedido: req.body.pedido
                }
            }
        );
        res.json(updatePedido);
    } catch (error) {
        res.json({ message: err })
    }
})

module.exports = router;