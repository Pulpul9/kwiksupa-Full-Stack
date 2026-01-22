import jwt from 'jsonwebtoken'

const auth = async (request, response, next) => {
  try {
    const token =
      request.cookies?.accessToken ||
      request.headers?.authorization?.split(" ")[1]

    if (!token) {
      return response.status(401).json({
        message: "Click on Login...!!!",
        error: true,
        success: false
      })
    }

    const decode = jwt.verify(
      token,
      process.env.SECRET_KEY_ACCESS_TOKEN
    )

    if (!decode) {
      return response.status(401).json({
        message: "Unauthorized access",
        error: true,
        success: false
      })
    }

    request.userId = decode._id || decode.id   // support both
    request.role = decode.role

    console.log("Auth Middleware:", {
      userId: request.userId,
      role: request.role
    })

    next()
  } catch (error) {
    return response.status(401).json({
      message: "You have not login",
      error: true,
      success: false
    })
  }
}

export default auth
