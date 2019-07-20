'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {


    static get traits() {
        return ['App/Models/Traits/NoTimestamp']
    }

    product() {

        return this.belongsTo('App/Models/Product')
    }

    order() {

        return this.belongsTo('App/Models/Order')
    }

    coupons() {

        return this.belongsToMany('App/Models/Coupon')
    }

    coupons() {

        return this.belongsToMany('App/Models/Coupon')
    }

}

module.exports = OrderItem
