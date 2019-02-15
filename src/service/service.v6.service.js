angular.module("ovh-api-services").service("OvhApiServiceV6", function ($resource) {
    "use strict";

    return $resource("/service/:serviceId", {
        serviceId: "@serviceId"
    });

});
