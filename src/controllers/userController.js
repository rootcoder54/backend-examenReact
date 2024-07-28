import userModel from '../models/userModel.js';


const addUser = async(req,res) => {
    try {
        const nom = req.body.nom;
        const username = req.body.username;
        const password = req.body.password;

        const userData = {
            nom,
            username,
            password
        }

        const user = userModel(userData);
        await user.save();

        res.json({success:true, message:"user is Added"})


    } catch (error) {
        res.json({success:false});
    }
}

const listUser = async(req,res) => {
    try {
        const allUser = await userModel.find({});
        res.json({success:true, users:allUser});
        
    } catch (error) {
        res.json({success:false})
    }
}

const removeUser = async(req,res) => {
    try {
        await userModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Album removed"})

    } catch (error) {
        res.json({success:false});
    }
}

export {addUser,listUser,removeUser}