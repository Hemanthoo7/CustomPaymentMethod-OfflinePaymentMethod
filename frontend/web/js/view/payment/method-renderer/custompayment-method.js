/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/* @api */
define([
    'Magento_Checkout/js/view/payment/default',
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'OfflinePayment_Method/payment/custompayment'
        },

        /**
         * Returns payment mtehod instructions.
         * @return {*}
         */
        getInstructions: function () {
            return window.checkoutConfig.payment.instructions[this.item.method];
        }
    });
});















