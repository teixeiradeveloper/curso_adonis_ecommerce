'use strict'

const OrderHook = exports = module.exports = {}

OrderHook.updateValues = async model => {

    model.$sideLoaded.subtotoal = await model.items().getSum('subtotal');

    model.$sideLoaded.qty_items = await model.items().getSum('quantity');

    model.$sideLoaded.discount = await model.discounts().getSum('discount');

    model.total = model.$sideLoaded.subtotoal - model.$sideLoaded.discount;

}

OrderHook.updateValues = async models => {

    for (let model of models) {
        model = await OrderHook.updateValues(model);
    }
}