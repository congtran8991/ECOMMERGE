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
  tokenDecrypt: async (ctx) => {
    const { token } = ctx.request.body;
    try {
      if (!token) throw message.authen_failed;
      // return ctx.badRequest("`token` param is missing");
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
      // return obj;
    } catch (error) {
      // if the token is not a valid token it will throw and error
      // return ctx.badRequest(err.toString());
      ctx.send({
        status: 400,
        message: error.toString(),
        data: false,
      });
    }
  },
};
