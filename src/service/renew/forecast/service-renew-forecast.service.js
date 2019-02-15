angular.module("ovh-api-services").service("OvhApiServiceRenewForecast", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiServiceRenewForecastV6");
        }
    };
});
