angular.module("ovh-api-services").service("OvhApiServiceRenewForecastV6", function ($cacheFactory, $resource) {
    "use strict";
    var queryCache = $cacheFactory("OvhApiServiceRenewForecastV6");

    return $resource("/service/:serviceId/renew/forecast", {
        serviceId: "@serviceId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        }
    });

});
