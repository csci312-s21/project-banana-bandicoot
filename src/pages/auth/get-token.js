// This is an example of how to read a JSON Web Token from an API route
<<<<<<< HEAD
import jwt from "next-auth/jwt"
=======
import jwt from 'next-auth/jwt'
>>>>>>> ffa9ceaddaa75e95cf3ff2c89ff3043dfeba087a

const secret = process.env.SECRET

export default async (req, res) => {
  const token = await jwt.getToken({ req, secret })
  if (token) {
    // Signed in
<<<<<<< HEAD
    console.log("JSON Web Token", JSON.stringify(token, null, 2))
=======
    console.log('JSON Web Token', JSON.stringify(token, null, 2))
>>>>>>> ffa9ceaddaa75e95cf3ff2c89ff3043dfeba087a
  } else {
    // Not Signed in
    res.status(401)
  }
  return(token);
  res.end()
}