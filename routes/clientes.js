const express = require('express');
const Cliente = require('../models/clientes');
const router = express.Router();

router.get("/", (req,res) => 
    ClientRect.findAll()
        .then(result => res.json(result))
        .cath(error => {
            res.status(412).json({msg: error.message});
        }));

router.get(":id", (req, res) =>{
    Cliente.findOne({
        where: {
            codigo: req.params.id,
        }
    }).then(result => {
        if(result){
            res.json(result);
        }else{
            res.sendStatus(404);
        }
    }).catch(error => {
        res.status(412).json({msg: error.message});
    });
})

module.exports = router;