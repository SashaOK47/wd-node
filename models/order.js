"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      this.belongsTo(Product, { foreignKey: "productId", as: "product" });
    }
    toJSON() {
      return { ...this.get(), id: undefined, productId: undefined };
    }
  }
  Order.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Order must have a customerName" },
          notEmpty: { msg: "customerName must not be empty" },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Order must have a status" },
          notEmpty: { msg: "Status must not be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "orders",
      modelName: "Order",
    }
  );
  return Order;
};
