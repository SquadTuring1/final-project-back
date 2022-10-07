import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema(
{
    uid: {
        type:String
    },
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "First name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: ({value}) => `the emai ${value} is not valid`
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "The password is too short"]
    }
},
{timestamps: true},
)

const UserModel = new mongoose.model("user", UserSchema)

export default UserModel