angular.module("ovh-api-services").service("OvhApiMeConsumption", function ($injector) {
    "use strict";

    return {
        Usage: function () {
            return $injector.get("OvhApiMeConsumptionUsage");
        }
    };

});
