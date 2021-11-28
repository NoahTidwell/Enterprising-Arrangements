// import important parts of sequelize library
const { Model, DataTypes, User } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Venues extends Model {
  static venues(body, models) {
    return models.Venues.create({
      user_id: body.user_id,
      venues_id: body.venues_id,
    }).then(() => {
      return Venues.findOne({
        where: {
          id: req.params.id,
        },
        attributes: ["id"],
        include: [
          {
            model: Venues,
            attributes: [
              "name",
              "url",
              "street",
              "city",
              "state",
              "zipcode",
              "min",
              "max",
              "third_party_vendors",
              " venuetype_id",
              "user_id",
            ],
            include: {
              model: Venuetype,
              attributes: ["id", "type_name", "Hotels", "description"],
            },
          },
          {
            model: User,
            attributes: ["username"],
          },
        ],
      });
    });
  }
}

// set up fields and rules for Product model
Venues.init(
  {
    //define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    url: {
      type: DataTypes.STRING(100),
      validate: {
        isUrl: true,
      },
    },
    street: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [3],
      },
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [2],
      },
    },
    zipcode: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    min: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    max: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    venuetype_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "venuetype",
        key: "id",
      },
    },
    third_party_vendors: {
      type: DataTypes.BOOLEAN,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "venues",
  }
);

module.exports = Venues;
