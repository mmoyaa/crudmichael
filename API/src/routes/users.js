const express = require('express')
const router = express.Router()
const mySqlConnection = require('../database')

router.get('/usuarios',(req,res)=>{
    mySqlConnection.query('SELECT usuarioid,nombre,apellidos,username,password,tipoUsuarioId,isActive,createAt  FROM Usuarios ',(err,rows,fields)=>{
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


router.post('/usuarios',(req,res)=>{
    const {nombre,apellidos,username,password,isActive,tipoUsuarioId} = req.body
    let usuarioid = 0
    const query = `
    CALL agregarEditarUsuario(?,?,?,?,?,?,?)
    `
    console.log(req.body,usuarioid)
    mySqlConnection.query(query,[nombre,apellidos,username,password,isActive,tipoUsuarioId,usuarioid],(err,rows,fields)=>{
        if(!err)
        {
            res.json({status:'usuario agregado'})
        }
        else
        {
            console.log(err)
        }
    })
})



router.put('/usuarios/:usuarioid',(req,res)=>{

    
    let {nombre,apellidos,username,password,isActive,tipoUsuarioId} = req.body
    let {usuarioid} = req.params
    const query = `
        CALL agregarEditarUsuario(?,?,?,?,?,?,?)
    `
    mySqlConnection.query(query,[nombre,apellidos,username,password,isActive,tipoUsuarioId,usuarioid],(err,rows,fields)=>{
        if(!err)
        {
            res.json({status:'Usuario Actualizado'})
        }
        else
        {
            console.log(err)
        }
    })
})

router.delete('/usuarios/:id',(req,res)=>{
    const {id} = req.params
    mySqlConnection.query('update usuarios set isActive = 0 where usuarioid = ?',[id],(err,rows,fields)=>{
        if(!err)
        {
            res.json({status:'Usuario Eliminado'})
        }
        else
        {
            console.log(err)
        }
    })
})



module.exports = router
