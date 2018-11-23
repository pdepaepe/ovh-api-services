angular.module("ovh-api-services").service("OvhApiTelephonySoundsSoundV6", function ($cacheFactory, $http, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonySoundsSoundV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response.resource;
        }
    };

    var soundResource = $resource("/telephony/sounds/:soundId", {
        soundId: "@soundId"
    }, {
        getSound: {
            method: "GET"
        },
        getSounds: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        setSound: {
            method: "PUT",
            interceptor: interceptor
        },
        deleteSound: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    soundResource.resetCache = function () {
        cache.removeAll();
    };

    soundResource.resetAllCache = function () {
        aliases.resetCache();
    };

    return soundResource;
});