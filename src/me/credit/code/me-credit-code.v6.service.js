angular.module("ovh-api-services").service("OvhApiMeCreditCodeV6", function ($resource) {
    "use strict";

    return $resource("/me/credit/code");

});
