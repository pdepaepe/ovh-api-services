angular.module("ovh-api-services").service("OvhApiMeConsumptionUsageCurrentV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeConsumptionUsageCurrentV6");

    return $resource("/me/consumption/usage/current", {}, {
        get: { method: "GET", cache: cache, isArray: true }
    });

});
