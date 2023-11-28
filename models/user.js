import mongoose, { Schema,  models } from 'mongoose';


const userSchema = new Schema({
firstName:{
    type: String,
    required:[true, 'please add a text value']

  } ,
  lastName:{
    type: String,
    required:[true, 'please add a text value']

} ,
  email: {
    type: String,
    unique: true,
    required:[true, 'please add a text value']
  },
  mobile: {
    type: Number,
    required:[true, 'please add a text value']
  },
  identificationType: {
    type: String,
    required:[true, 'please add a text value']
  },
  identificationNumber: {
    type: String,
    required:[true, 'please add a text value']
  },
  address: {
    type: String,
    required:[true, 'please add a text value']
  },
  password: {
    type: String,
    required:[true, 'please add a text value']
  },
  // isVerified: {
  //   type: Boolean,
  //   default: false
  // },
  // isAdmin: {
  //   type: Boolean,
  //   default: false
  // },
  // forgotPasswordToken: String, 
  // forgotPasswordExpiry: Date, 
  // verifyToken:String,
  // verifyTokenExpiry:Date

  
},{
    timestamps: true,
           
});
const User = models.User|| mongoose.model("User" , userSchema);
export default User;
      
      

