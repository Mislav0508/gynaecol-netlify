const axios = require("axios")
require("dotenv").config()
const { GET_MAGAZINES } = require("./utils/getMagazinesQuery")
const sendQuery = require("./utils/sendQuery")
const formattedResponse = require("./utils/formattedResponse")

exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_MAGAZINES)
    const data = res.allMagazines.data
    return formattedResponse(200, data)
  } catch (error) {
    console.error(error);
    return formattedResponse(500, {err: "Something went wrong"})
  }

}