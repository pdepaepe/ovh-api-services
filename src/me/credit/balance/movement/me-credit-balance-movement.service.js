angular.module("ovh-api-services").service("OvhApiMeCreditBalanceMovement", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeCreditBalanceMovementV6");
        }
    };

});
