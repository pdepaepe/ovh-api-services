angular.module("ovh-api-services").service("OvhApiMeContactV7", function ($resource, $cacheFactory, Apiv7Endpoint) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeContactv7Query");
    var otherCache = $cacheFactory("OvhApiMeContactV7");

    var userContactResource = new Apiv7Endpoint("/me/contact/:contactId", {
        contactId: "@contactId"
    }, {
        query: {
            url: "/me/contact",
            method: "GET",
            cache: queryCache,
            isArray: true,
            serviceType: "apiV7"
        }
    });

    userContactResource.resetAllCache = function () {
        userContactResource.resetOtherCache();
        userContactResource.resetQueryCache();
    };

    userContactResource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    userContactResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return userContactResource;
});
