const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const mySqlConnection = require('../database')


router.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password
    mySqlConnection.query('SELECT username,usuarioid,tipoUsuarioId FROM Usuarios where username =? and password = ? and isActive=1',[username,password],(err,rows,fields)=>{
        
        if(err) throw err;

        if(rows.length>0)
        {
            let data = JSON.stringify(rows[0])
            const token = jwt.sign(data,'SecretKey')
            res.json({token:token})
        }
        else
        {
            res.json("Usuario o contraseña incorrecto")
        }
    })
})


module.exports = router;
