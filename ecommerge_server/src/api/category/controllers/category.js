"use strict";

const message = require("../../../constants/message");

/**
 * category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async findMany(ctx) {
      const arrFieldPopulate = ["parenId", "products"];
      try {
        const entries = await strapi.db
          .query("api::category.category")
          .findMany({
            populate: arrFieldPopulate,
            where: { description: null },
          });
        helper.sendSuccess(ctx, message.success, entries);
      } catch (error) {
        const message = error.toString();
        helper.sendFailed(ctx, message);
      }
    },
    async findOne(ctx) {
      const { id } = ctx.params;
      const arrFieldPopulate = ["parenId", "products"];
      try {
        const entries = await strapi.db
          .query("api::category.category")
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
  })
);
