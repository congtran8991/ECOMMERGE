'use strict';

/**
 * A set of functions called "actions" for `validate`
 */

const helper = require("../../../utils/server");
const message = require("../../../constants/message")

module.exports = {
  validateAccount: async (ctx, next) => {
    try {
      const requestBody = ctx.request.body;
      const { username, email, password, phone} = requestBody
      if (username || email || password || phone) throw message.invalid_data
      if (!(helper.isEmail(email) && helper.isValidateUserName(username) && helper.isValidatePassWord(password) && helper.isPhone(phone)))  throw message.invalid_data
      ctx.response = {
        status: 200,
        message: message.success,
        data: true
      } 
    } catch (error) {
      const responseErr = {
        status: 400,
        message: error,
        data: false
      }
      return responseErr
    }

  }
};
