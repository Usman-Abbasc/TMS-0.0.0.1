// Model Sample

const Sequelize = require('sequelize');


const sequelize = require('../../utils/database');

const CartItems = sequelize.define('CartItems', {
    Id: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    MealId: {
        type: Sequelize.BIGINT,
        allowNull: true
    },
    Quantity: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    MealImageUrl: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Discount: {
        type: Sequelize.STRING,
        allowNull: true
    },
    CartId: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    RestaurantId: {
        type: Sequelize.BIGINT,
        allowNull: true
    },
    Price: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    OrderStatus: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Notes: Sequelize.STRING,
    CreatedDate: Sequelize.DATE,
    ModifiedDate: Sequelize.DATE,
    IsActive: Sequelize.BOOLEAN
}, {
    timestamps: false,
    //tableName:'Driver',
    freezeTableName: true
});

module.exports = CartItems;


// Api for 404 Error
app.use((req, res, next) => {
    res.status(404).json("404 Api not found");
  });

// Sample for Model with some validation functions

const helpers = require("../../helpers");
module.exports = (sequelize, DataTypes) => {
  const { Op } = sequelize;
  const modelAttributes = {
    CustomReportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CustomReportName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Code: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    CustomReportDataSourceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CustomReportGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    FieldSetting: {
      type: DataTypes.STRING,
    },
    ActiveFrom: {
      type: DataTypes.DATE,
    },
    ActiveTo: {
      type: DataTypes.DATE,
    },
    IsActive: {
      defaultValue: true,
      type: DataTypes.BOOLEAN,
    },
    CreatedBy: {
      type: DataTypes.INTEGER,
    },
    UpdatedBy: {
      type: DataTypes.INTEGER,
    },
    CreatedAt: {
      type: DataTypes.DATE,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
    },
  };

  const CustomReport = sequelize.define("CustomReport", modelAttributes, {
    tableName: "CustomReport",
    timestamps: false,

    createdAt: false,

    updatedAt: false,
  });

  CustomReport.getReportSettings = async () => {
    try {
      const result = await CustomReport.findAll({
        where: { IsActive: true },
      });

      return result;
    } catch (e) {
      throw new Error(e);
    }
  };
  CustomReport.getReportSetting = async (CustomReportId) => {
    try {
      const result = await CustomReport.findOne({
        where: { IsActive: true, CustomReportId: CustomReportId },
      });

      return result;
    } catch (e) {
      throw new Error(e);
    }
  };
  //==================== right now i am using this one=================
  CustomReport.save = async (params, transaction = null) => {
    try {
      const data = helpers.seql.getRawParams(params, modelAttributes);

      const saveReportSetting = await CustomReport.create(data, {
        transaction,
      });

      return saveReportSetting;
    } catch (e) {
      throw new Error(e.message);
    }
  };
  //======================================
  CustomReport.updateRecord = async (params, transaction = null) => {
    try {
      params.UpdatedBy = params.OperatingUserId;
      const data = helpers.seql.getRawParams(params, modelAttributes);
      await CustomReport.update(
        data,
        { where: { CustomReportId: data.CustomReportId } },
        { transaction }
      );

      const updateReportSetting = await CustomReport.findOne({
        where: { CustomReportId: data.CustomReportId },
      });

      return updateReportSetting;
    } catch (e) {
      throw new Error(e.message);
    }
  };
  CustomReport.deleteRecord = async (params, transaction = null) => {
    try {
      let updateReportSetting = await CustomReport.findOne({
        where: { IsActive: true, CustomReportId: params.CustomReportId },
      });

      updateReportSetting.IsActive = 0;
      await updateReportSetting.save();
      return updateReportSetting;
    } catch (e) {
      throw new Error(e.message);
    }
  };

  return CustomReport;
};


