


const getUser = (req, res) => {

    const {a, id, nombre='No Nombre'} = req.query;

    res.json({
        Ok: true,
        msm: 'Objeto Json Get Controller',
        a,
        id,
        nombre
    })
  }

const updateUser = (req, res) => {

    const id = req.params.id;

    res.json({
        Ok: true,
        msm: 'Objeto Json Put Controller',
        id
    })
  }  

const newUser = (req, res) => {

    const {nombre, edad} = req.body;

    res.status(201).json({
        Ok: true,
        msm: 'Objeto Json Post Controller',
        nombre,
        edad
    })
  }  

const deleteUser = (req, res) => {
    res.json({
        Ok: true,
        msm: 'Objeto Json Delete Controller'
    })
  }  


module.exports = {getUser, updateUser, newUser, deleteUser}  