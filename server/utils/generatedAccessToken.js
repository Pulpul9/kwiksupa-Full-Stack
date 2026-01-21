import jwt from "jsonwebtoken"
import UserModel from "../models/user.model.js"

const generatedAccessToken = async (userId) => {
  const user = await UserModel.findById(userId)

  return jwt.sign(
    {
      _id: user._id,
      role: user.role
    },
    process.env.SECRET_KEY_ACCESS_TOKEN,
    { expiresIn: "1d" }
  )
}

export default generatedAccessToken
