const httpStatus = require("http-status");
const userService = require("./user.service");
const ApiError = require("../utils/ApiError");

/**
 * Login with username and password
 * - Utilize userService method to fetch user object corresponding to the email provided
 * - Use the User schema's "isPasswordMatch" method to check if input password matches the one user registered with (i.e, hash stored in MongoDB)
 * - If user doesn't exist or incorrect password,
 * throw an ApiError with "401 Unauthorized" status code and message, "Incorrect email or password"
 * - Else, return the user object
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithEmailAndPassword = async (email, password) => {
  let user = await userService.getUserByEmail(email);
  let isMatch;
  if(!user){
    // console.log("email sahi nahi hai ",user)
    throw new ApiError(httpStatus.UNAUTHORIZED,"Incorrect email or password");
  }
  else{
    isMatch = await user.isPasswordMatch(password);
    if(!isMatch){
      // console.log("password wala ni chala");
      throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email or password");
    }
    else{
      return user;
    }
  }
  
};

module.exports = {
  loginUserWithEmailAndPassword,
};
