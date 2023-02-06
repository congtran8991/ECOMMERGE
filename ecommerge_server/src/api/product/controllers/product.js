"use strict";

const message = require("../../../constants/message");

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async findMany(ctx) {
    const requestParams = ctx.request.query;
    const { categories: categoriesID = "", promotions: promotionsID = "" } =
      requestParams;
    const arrFieldPopulate = ["promotions", "categories"];

    const query = {};
    try {
      if (categoriesID) {
        query.categories = { id: categoriesID };
      }
      if (promotionsID) {
        query.promotions = { id: promotionsID };
      }

      const entries = await strapi.db.query("api::product.product").findMany({
        populate: arrFieldPopulate,
        where: query,
      });
      helper.sendSuccess(ctx, message.success, entries);
    } catch (error) {
      const message = error.toString();
        helper.sendFailed(ctx, message);
    }
    // example: http://localhost:1337/api/products/?categories=2
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    const arrFieldPopulate = ["promotions", "categories"];
    try {
      const entries = await strapi.db.query("api::product.product").findOne({
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
}));
