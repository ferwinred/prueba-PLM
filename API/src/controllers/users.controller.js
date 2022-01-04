const Users = require('../models/Users');

const getUsers = async (req, res, next) => {
    try{
            
            const user = await Users.find();

            res.json(user);

    } catch(error){
        next(error);
    };
};

const getUserById = async (req, res, next) => {
    try {
        
        const {id} = req.params;

        const user = await Users.findById(id);

        user ? res.json(user) : res.status(400).json({ msg: "There isn't any user with that id"});

    } catch (error) {
        next(error);
    };
};


const createUser = async (req, res, next) => {

    try{
        const {
            nombre, 
            apellido, 
            email,
            tipo_documento,
            documento,
            archivo,
            celular,
            fecha_nacimiento
        } = req.body

        const newUser = new Users({
            nombre, 
            apellido, 
            email,
            tipo_documento,
            documento,
            archivo,
            celular,
            fecha_nacimiento
        })

       newUser.save((err, data) => {
            if(err) return res.status(400).json(err)

            return res.json({msg: "user succesfully created"})
        });

    
    } catch(error){
        next(error);
    };
};

const updateUser = async (req, res, next) => {
    try {
        
        const { id } = req.params
        const { 
            nombre, 
            apellido, 
            email,
            tipo_documento,
            documento,
            archivo,
            celular,
            fecha_nacimiento
        } = req.body;

        if(!id) return res.status(400).json({ msg: "Please put a valid user_id"});

        const userFind = await User.UpdateOne({_id: id}, {

            nombre, 
            apellido, 
            email,
            tipo_documento,
            documento,
            archivo,
            celular,
            fecha_nacimiento

        }, {upsert: true});

        userFind ? res.json({ msg: "user succesfully modified"}): res.status(400).json({ msg: "Please put a valid user_id"});

    } catch (error) {
        next(error);
    };
};

const deleteUser = async (req, res, next) => {

    try{
        const {id} = req.params

        const del = await Users.deleteOne({
            _id: id
        }
        );
        
        del.deletedCount > 0 ? res.json({msg: "user has been deleted"}) : res.status(400).json({msg: "doesn't exist any user with this id"})
    } catch(error){
        next(error);
    };
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}