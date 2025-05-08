const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Sales = sequelize.define('sales', {
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      key: {
        type: DataTypes.STRING,
        allowNull: true
      },
      arclickid: {
        type: DataTypes.STRING,
        allowNull: true
      },
      influencer: {
        type: DataTypes.STRING,
        allowNull: true
      },
      offerid: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      clickid: {
        type: DataTypes.STRING,
        allowNull: true
      },
      affiliated: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      commission: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      commissionaffiliate: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      commissionagent: {
        type: DataTypes.STRING,
        allowNull: true
      },
      articleid: {
        type: DataTypes.STRING,
        allowNull: true
      },
      articleimguri: {
        type: DataTypes.STRING,
        allowNull: true
      },
      articlepathuri: {
        type: DataTypes.STRING,
        allowNull: true
      },
      brandname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      brandkey: {
        type: DataTypes.STRING,
        allowNull: true
      },
      categ: {
        type: DataTypes.STRING,
        allowNull: true
      },
      subcateg: {
        type: DataTypes.STRING,
        allowNull: true
      },
      maincolor: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdat: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      lastmodified: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      countrycode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: true
      },
      devisetype: {
        type: DataTypes.STRING,
        allowNull: true
      },
      os: {
        type: DataTypes.STRING,
        allowNull: true
      },
      goal: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      isprivate: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      status: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      advertiser: {
        type: DataTypes.STRING,
        allowNull: true
      },
      commissionReferredInfluencer: {
        type: DataTypes.DOUBLE,
        field: 'commissionreferredinfluencer',
        allowNull: true
      },
      customfield2: {
        type: DataTypes.STRING,
        allowNull: true
      },
      customfield3: {
        type: DataTypes.STRING,
        allowNull: true
      },
      customfield4: {
        type: DataTypes.STRING,
        allowNull: true
      },
      customfield5: {
        type: DataTypes.STRING,
        allowNull: true
      },
      customfield6: {
        type: DataTypes.STRING,
        allowNull: true
      },
      palement_status: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      sales_bill_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      referral_bill_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      local_amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      local_commission: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      currency_exchange: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      referral_influencer: {
        type: DataTypes.STRING,
        allowNull: true
      },
      smi_sales_payment_status: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      smi_referral_payment_status: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      customfield7: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      voucher: {
        type: DataTypes.DOUBLE,
        allowNull: true
      }
    }, {
      tableName: 'sales',
      timestamps: false,
    });
  
    return Sales;
  };
  