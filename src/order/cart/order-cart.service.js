angular.module("ovh-api-services").service("OvhApiOrderCart", function ($injector) {

    "use strict";
    return {
        Item: function () {
            return $injector.get("OvhApiOrderCartItem");
        },
        Product: function () {
            return $injector.get("OvhApiOrderCartProduct");
        },
        ServiceOption: function () {
            return $injector.get("OvhApiOrderCartServiceOption");
        },
        v6: function () {
            return $injector.get("OvhApiOrderCartV6");
        }
    };
});
