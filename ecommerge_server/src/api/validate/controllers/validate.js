"use strict";

/**
 * A set of functions called "actions" for `validate`
 */

const helper = require("../../../utils/server");
const message = require("../../../constants/message");

module.exports = {
  validateAccount: async (ctx) => {
    try {
      const requestBody = ctx.request.body;
      const { username, email, password, phone } = requestBody;
      if (!username || !email || !password || !phone)
        throw message.invalid_data;
      if (
        !(
          helper.isEmail(email) &&
          helper.isValidUserName(username) &&
          helper.isValidPassWord(password) &&
          helper.isPhone(phone)
        )
      )
        throw message.invalid_data;
      ctx.send({
        status: 200,
        message: message.success,
        data: true,
      });
    } catch (error) {
      ctx.send({
        status: 400,
        message: error,
        data: false,
      });
    }
  },
  tokenVerify: async (ctx) => {
    const { token } = ctx.request.body;
    try {
      if (!token) throw message.authen_failed;
      // decrypt the jwt
      const resultData = await strapi.plugins[
        "users-permissions"
      ].services.jwt.verify(token);

      ctx.send({
        status: 200,
        message: message.success,
        data: resultData,
      });
      // send the decrypted object
    } catch (error) {
      ctx.send({
        status: 400,
        message: error.toString(),
        data: false,
      });
    }
  },
};
