angular.module("ovh-api-services").service("OvhApiDbaasLogsContacts", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsContactsV6");
        }
    };
});
