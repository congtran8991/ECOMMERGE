"use strict";

/**
 *cart-item controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const message = require("../../../constants/message");
const selectField = require("../../../constants/selectField");
const helper = require("../../../utils/server");

module.exports = createCoreController(
  "api::cart-item.cart-item",
  ({ strapi }) => ({
    async findMany(ctx) {
      const requestParams = ctx.request.query;
      const { product: productID, users: usersID } = requestParams;
      const arrFieldPopulate = ["product", "users"];

      const query = {};
      try {
        if (productID) {
          query.product = { id: productID };
        }
        if (usersID) {
          query.users = { id: usersID };
        }
        const entries = await strapi.db
          .query("api::cart-item.cart-item")
          .findMany({
            populate: arrFieldPopulate,
            where: query,
          });
        helper.sendSuccess(ctx, message.success, entries);
      } catch (error) {
        helper.sendFailed(ctx, message.success);
      }
    },
    async findOne(ctx) {
      const { id } = ctx.params;
      const arrFieldPopulate = ["product", "users"];

      try {
        const entries = await strapi.db
          .query("api::cart-item.cart-item")
          .findOne({
            where: {
              id,
            },
            populate: arrFieldPopulate,
          });
        helper.sendSuccess(ctx, message.success, entries);
      } catch (error) {
        const message = error.toString();
        helper.sendFailed(ctx, message);
      }
    },
    async update(ctx) {
      const { amount = 1 } = ctx.request.body;
      const selectProduct = {
        select: selectField.arrProduct,
      };
      const selectUsers = {
        select: selectField.arrUsers,
      };
      try {
        const entries = await strapi.db
          .query("api::cart-item.cart-item")
          .update({
            where: { id: 1 },
            populate: { product: selectProduct, users: selectUsers },
            data: {
              amount: amount,
            },
          });

        helper.sendSuccess(ctx, message.success, entries);
      } catch (error) {
        const message = error.toString();
        helper.sendFailed(ctx, message);
      }
    },
    async create(ctx) {
      const { amount = 1, idProduct, idUsers } = ctx.request.body;
      try {
        if ((idProduct, idUsers)) {
          await strapi.db.query("api::cart-item.cart-item").create({
            data: {
              amount: amount,
              product: idProduct, // id của product
              users: idUsers,
            },
          });

          helper.sendSuccess(ctx, message.success);
        } else {
          throw message.miss_params;
        }
      } catch (error) {
        const message = error.toString();
        helper.sendFailed(ctx, message);
      }
    },
  })
);
