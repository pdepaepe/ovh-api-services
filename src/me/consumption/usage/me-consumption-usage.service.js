angular.module("ovh-api-services").service("OvhApiMeConsumptionUsage", function ($injector) {
    "use strict";

    return {
        Current: function () {
            return $injector.get("OvhApiMeConsumptionUsageCurrent");
        },
        Forecast: function () {
            return $injector.get("OvhApiMeConsumptionUsageForecast");
        },
        History: function () {
            return $injector.get("OvhApiMeConsumptionUsageHistory");
        }
    };

});
