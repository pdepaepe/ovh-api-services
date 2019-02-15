angular.module("ovh-api-services").service("OvhApiMeConsumptionUsageCurrent", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeConsumptionUsageCurrentV6");
        }
    };

});
