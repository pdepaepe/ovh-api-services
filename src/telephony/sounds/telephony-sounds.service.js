angular.module("ovh-api-services").service("OvhApiTelephonySounds", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonySoundsV6");
        },
        Sound: function () {
            return $injector.get("OvhApiTelephonySoundsSound");
        }
    };
});
