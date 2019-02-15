angular.module("ovh-api-services").service("OvhApiMeConsumptionUsageHistoryV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeConsumptionUsageHistoryV6");

    return $resource("/me/consumption/usage/history", {

    }, {
        get: {
            method: "GET",
            cache: cache,
            isArray: true,
            params: {
                beginDate: "@beginDate",
                endDate: "@endDate"
            }
        }
    });

});
