import User from "../models/User.js";
import { NextFunction, Request, Response } from "express";
import pkg from 'bcryptjs';
const { hash } = pkg;

export const getAllUsers = async(req:Request, res:Response, next:NextFunction) =>{
    try{
        // get all users
        const users = await User.find();
        return res.status(200).json({
         message:"OK", users
        })
    }catch(error){
        console.log(error);
      return res.status(200).json({message:"Error",cause:error.message})
    }
};
export const userSignUp = async(req:Request, res:Response, next:NextFunction) =>{
    try{
        // user signup 
        const { name, email, password} = req.body;
        const hashedPassword = await hash(password, 10)
        const user = new User({name, email, password:hashedPassword});
        
        await user.save();
        return res.status(200).json({
         message:"OK", id: user._id.toString()
        })
    }catch(error){
        console.log(error);
      return res.status(200).json({message:"Error",cause:error.message})
    }
};