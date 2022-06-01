const express = require('express')
const router = express.Router()
const mySqlConnection = require('../database')


//-------------------mostrar recetas-----------------
router.get('/recetas',(req,res)=>{
    mySqlConnection.query('SELECT * FROM recetas ',(err,rows,fields)=>{
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
//----------------agregar receta--------------
router.post('/recetas',(req,res)=>{
const {nombre,createAt,updatedAt,updatedByid,isActive}= req.body
let recetaId = 0;
const query = `
CALL editaragregarrecetas(?,?,?,?,?,?)
`
console.log(req.body)
mySqlConnection.query(query,[nombre,createAt,updatedAt,updatedByid,isActive,recetaId],(err,rows,fields)=>{
if(!err)
{
    res.json({status:'La receta se agrego'})
}
else{   
    console.log(err)
    
     }
  })
})
//--------------------------------------------------
//---------------------------actualizar receta-------------
router.put('/recetas/:recetaId', (req, res)=>{
    const {nombre,createAt,updatedAt,updatedByid,isActive}= req.body
    const {recetaId} = req.params
    const query = `
    CALL editaragregarrecetas(?,?,?,?,?,?)
        `
        mySqlConnection.query(query,[nombre,createAt,updatedAt,updatedByid,isActive,recetaId],(err,rows,fields)=>{

        if(!err)
        {
            res.json({status:'La receta Editadas'})
        }
        else{
            console.log(err)
        }
    })

} )
//-------------------------------------------------------------
//-------- borrar receta--------------------
router.delete('/recetas/:recetaId',(req,res)=>{
const {recetaId} = req.params
mySqlConnection.query('UPDATE recetas  SET isActive = 0 WHERE recetaId = ? ',recetaId,(err,rows,fields)=>{

    if(!err)
    {
        res.json({status:'receta cambio estado'})
    }
    else
    {
        console.log(err)
    }
})

})


//----------------------------------------------------

//-----muestra recetas con id-------  listo------------------
router.get('/recetas/:id',(req,res)=>{
    let {recetaId} = req.params
     mySqlConnection.query('SELECT * FROM recetas WHERE isActive =1',recetaId,(err,rows,fields)=>{
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