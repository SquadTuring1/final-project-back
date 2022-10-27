import UserModel from "../models/User.js";

<<<<<<< HEAD


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
=======
export const login = async (req, res, next) => {
  console.log("hi");
  const { uid, token } = req.body;
  try {
    const userLogged = await UserModel.findOneAndUpdate(
      { uid },
      { token },
      { new: true },
    );
    if (userLogged) {
      res.status(201).send({ token: userLogged.token });
    } else {
      res.status(403).send({
        error: "Please check your email or password and try again",
      });
>>>>>>> checking-auth-middleware-with-token
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      error: "Something went wrong",
      errorMsg: error.message,
    });
  }
};

export const signup = async (req, res, next) => {
  console.log("signup");
  const { token, uid, email, password, username } = req.body;
  try {
    const newUser = await UserModel.create({
      token,
      uid,
      email,
      password,
      username,
    });
    res.status(201).send({ data: "Success! " });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
