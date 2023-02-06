"use strict";

/**
 * cart-items router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cart-items",
      handler: "cart-item.findMany",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/cart-items/:id",
      handler: "cart-item.findOne",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "PATCH",
      path: "/cart-items",
      handler: "cart-item.update",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/cart-items",
      handler: "cart-item.create",
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
  ],
};
