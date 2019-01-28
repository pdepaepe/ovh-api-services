angular.module("ovh-api-services").service("OvhApiMeCreditCode", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeCreditCodeV6");
        }
    };

});
