const express = require('express')
const router = express.Router()
const mySqlConnection = require('../database')

router.get('/tipoUsuarios',(req,res)=>{
    mySqlConnection.query('SELECT * FROM tipoUsuarios',(err,rows,fields)=>{
        if(!err)
        {
            res.json(rows)
        }
        else
        {
            console.log(err)
        }
    })
})


module.exports = router