angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxTts", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxTtsLexi");
        }
    };
});
