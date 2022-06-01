const express = require('express')
const router = express.Router()
const mySqlConnection = require('../database')

//-------------muestra las recetaProductoId 
router.get('/recetaproducto', (req,res)=>{
    const {recetaProductoId}=req.params
    console.log(recetaProductoId)
    //const query=  'SELECT  FROM recetaproducto  rp inner JOIN productos p ON p.productoId = rp.productoId WHERE rp.recetaId = ?'
    mySqlConnection.query('SELECT * FROM recetaproducto ',(err,rows,fields)=>{
     //mySqlConnection.query(query,[recetaId],(err,rows,fields)=>{
     if(!err){
         res.json(rows)
         
     }
     else
     {
         console.log(err)
     }
    }
     )
        
})




//----------------agregar receta--------------
router.post('/recetaproducto',(req,res)=>{
    const {productoId,recetaId,createAt,updatedAt,updatedByid,isActive}= req.body
    let recetaProductoId = 0;
    const query = `
    CALL editaragregarrecetaproducto(?,?,?,?,?,?,?)
    `
    console.log(req.body)
    mySqlConnection.query(query,[productoId,recetaId,createAt,updatedAt,updatedByid,isActive,recetaProductoId],(err,rows,fields)=>{
    if(!err)
    {
        res.json({status:'Se receta '})
    }
    else{   
        console.log(err)
        
         }
      })
    })

//---------------------------actualizar plato------------
router.put('/recetaproducto/:recetaProductoId', (req, res)=>{
    const {productoId,recetaId,createAt,updatedAt,updatedByid,isActive}= req.body
    const {recetaProductoId} = req.params
    const query = `
    CALL editaragregarrecetaproducto(?,?,?,?,?,?,?)
        `
        mySqlConnection.query(query,[productoId,recetaId,createAt,updatedAt,updatedByid,isActive,recetaProductoId],(err,rows,fields)=>{

        if(!err)
        {
            res.json({status:'editado'})
        }
        else{
            console.log(err)
        }
    })

} )
//-------------------------------------------------------------

module.exports = router