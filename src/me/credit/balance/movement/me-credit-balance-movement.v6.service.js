angular.module("ovh-api-services").service("OvhApiMeCreditBalanceMovementV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeCreditBalanceMovementQueryV6");
    var cache = $cacheFactory("OvhApiMeCreditBalanceMovementV6");

    return $resource("/me/credit/balance/:balanceName/movement/:movementId", {
        balanceName: "@balanceName",
        movementId: "@movementId"
    }, {
        get: { method: "GET", cache: cache },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        }
    });
});
