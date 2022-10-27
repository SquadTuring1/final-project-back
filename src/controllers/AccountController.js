// import { Error } from "mongoose";
import UserModel from "../models/User.js";
import User from "../models/User.js";



export const login = async(req,res,next) => {
    const {uid, token} = req.body;    
    console.log(uid, token)
    try{
        const userLogged = await UserModel.findOne({uid: uid})        
        if (userLogged){
            res.status(200).send({data: "User logged!"})
        }       
    } catch (error){
        console.log(error.message)
        next(error)
    }
}

export const signup = async(req,res,next) => {
    console.log("signup")
    const { token, uid, email, password, username } = req.body
    try{
        const newUser = await UserModel.create({
            token,
            uid,
            email,
            password,
            username,
        })
        res.status(201).send({data: "Success! "})

    }catch(error){ 
        console.log(error)       
        next(error)
    }
}