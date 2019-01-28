angular.module("ovh-api-services").service("OvhApiMeCredit", function ($injector) {
    "use strict";

    return {
        Balance: function () {
            return $injector.get("OvhApiMeCreditBalance");
        },
        Code: function () {
            return $injector.get("OvhApiMeCreditCode");
        }
    };

});
