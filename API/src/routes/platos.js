const express = require('express')
const router = express.Router()
const mySqlConnection = require('../database')


//-------------------mostrar plato-----------------
router.get('/platos',(req,res)=>{
    mySqlConnection.query('SELECT * FROM platos ',(err,rows,fields)=>{
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
//---------------------------------------
//----------------agregar plato--------------
router.post('/platos',(req,res)=>{
const {nombre,precio,tiempoCocina,ofertaId,tipoPlatoId,createAt,updatedAt,updatedByid,isActive}= req.body
let platoid = 0;
const query = `
CALL editaragregarplatos(?,?,?,?,?,?,?,?,?,?)
`
console.log(req.body)
mySqlConnection.query(query,[nombre,precio,tiempoCocina,ofertaId,tipoPlatoId,createAt,updatedAt,updatedByid,isActive,platoid],(err,rows,fields)=>{
if(!err)
{
    res.json({status:'Se agrego plato'})
}
else{   
    console.log(err)
    
     }
  })
})
//--------------------------------------------------
//---------------------------actualizar plato------------
router.put('/platos/:platoid', (req, res)=>{
    const {nombre,precio,tiempoCocina,ofertaId,tipoPlatoId,createAt,updatedAt,updatedByid,isActive}= req.body
    const {platoid} = req.params
    const query = `
    CALL editaragregarplatos(?,?,?,?,?,?,?,?,?,?)
        `
        mySqlConnection.query(query,[nombre,precio,tiempoCocina,ofertaId,tipoPlatoId,createAt,updatedAt,updatedByid,isActive,platoid],(err,rows,fields)=>{

        if(!err)
        {
            res.json({status:'Plato editado'})
        }
        else{
            console.log(err)
        }
    })

} )
//-------------------------------------------------------------
//-------- borrar plato--------------------
router.delete('/platos/:platoid',(req,res)=>{
const {platoid} = req.params
mySqlConnection.query('UPDATE platos  SET isActive = 0 WHERE platoid = ? ',platoid,(err,rows,fields)=>{

    if(!err)
    {
        res.json({status:'Plato Desactivado'})
    }

    else
    {
        console.log(err)
    }
})

})


//----------------------------------------------------

//-----muestra el plato con id-------  listo------------------
router.get('/platos/:id',(req,res)=>{
    let {platoId} = req.params
     mySqlConnection.query('SELECT * FROM recetas WHERE isActive =1',platoid,(err,rows,fields)=>{
         if(!err)
         {
             res.json({status:'esta activada'})
         }
         else
         {
             console.log(err)
         }
     })
 })


module.exports = router