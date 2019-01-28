angular.module("ovh-api-services").service("OvhApiMeCreditBalance", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeCreditBalanceV6");
        },
        Movement: function () {
            return $injector.get("OvhApiMeCreditBalanceMovement");
        }
    };

});
