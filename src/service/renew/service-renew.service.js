angular.module("ovh-api-services").service("OvhApiServiceRenew", function ($injector) {
    "use strict";
    return {
        Forecast: function () {
            return $injector.get("OvhApiServiceRenewForecast");
        }
    };
});
