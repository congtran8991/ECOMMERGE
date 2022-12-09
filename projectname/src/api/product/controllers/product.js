"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async findMany(ctx) {
    const requestParams = ctx.request.query;
    const { 
      categories: categoriesID = "", 
      promotions: promotionsID 
    } = requestParams;
    const arrFieldPopulate = ["promotions", "categories"];

    const query = {};
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
    return entries;
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    const arrFieldPopulate = ["promotions", "categories"];
    const entries = await strapi.db.query("api::product.product").findOne({
      where: {
        id,
      },
      populate: arrFieldPopulate,
    });
    return entries;
  },
}));
