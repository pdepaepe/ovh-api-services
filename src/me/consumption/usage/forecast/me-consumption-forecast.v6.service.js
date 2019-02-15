angular.module("ovh-api-services").service("OvhApiMeConsumptionUsageForecastV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeConsumptionUsageForecastV6");

    return $resource("/me/consumption/usage/forecast", {}, {
        get: { method: "GET", cache: cache, isArray: true }
    });

});
