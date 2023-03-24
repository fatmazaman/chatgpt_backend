// Require packages and constants
// require("dotenv").config()
const Yup = require("yup")


// Define Yup validation schema for conversation object
const conversationSchema = Yup.object().shape({
  role: Yup.string().required("Role is required"),
  content: Yup.string().required("Content is required"),
})

// Define Yup validation schema for request object
const requestSchema = Yup.object().shape({
  context: Yup.string().required(),
  message: Yup.string().required(),
  conversation: Yup.array().of(conversationSchema).notRequired(),
})

// Function to validate request object using Yup schema
const isValidRequest = (request) => {
  try {
    requestSchema.validateSync(request)
    return true
  } catch (error) {
    return false
  }
}

// Export functions and constants
module.exports = {isValidRequest}
