// import { Error } from "mongoose";
import UserModel from "../models/user-model.js";



export const login = async(req,res,next) => {
    const {email, password} = req.body;    
    try{
        const userLogged = await UserModel.findOne({email: email})        
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
    const { firstName, lastName, email, password} = req.body
    try{
        const newUser = await UserModel.create({
            firstName,
            lastName,
            email,
            password
        })
        res.status(201).send({data: "Success! "})

    }catch(error){        
        next(error)
    }
}