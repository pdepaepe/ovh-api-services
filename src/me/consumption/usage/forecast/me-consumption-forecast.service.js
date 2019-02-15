angular.module("ovh-api-services").service("OvhApiMeConsumptionUsageForecast", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeConsumptionUsageForecastV6");
        }
    };

});
