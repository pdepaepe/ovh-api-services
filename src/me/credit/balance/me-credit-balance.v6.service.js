angular.module("ovh-api-services").service("OvhApiMeCreditBalanceV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeCreditBalanceQueryV6");
    var cache = $cacheFactory("OvhApiMeCreditBalanceV6");

    return $resource("/me/credit/balance/:balanceName", {
        balanceName: "@balanceName"
    }, {
        get: { method: "GET", cache: cache },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true,
            queryParams: {
                type: "@type"
            }
        }
    });

});
