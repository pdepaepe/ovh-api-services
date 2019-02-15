angular.module("ovh-api-services").service("OvhApiMeConsumptionUsageHistory", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeConsumptionUsageHistoryV6");
        }
    };

});
