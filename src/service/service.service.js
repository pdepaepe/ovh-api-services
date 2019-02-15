angular.module("ovh-api-services").service("OvhApiService", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiServiceV6");
        },
        Renew: function () {
            return $injector.get("OvhApiServiceRenew");
        }
    };
});
