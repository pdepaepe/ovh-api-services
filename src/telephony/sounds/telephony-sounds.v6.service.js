angular.module("ovh-api-services").service("OvhApiTelephonySoundsV6", function ($cacheFactory, $http, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonySoundsV6");
    var queryCache = $cacheFactory("OvhApiTelephonySoundsV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var soundsResource = $resource("/telephony/sounds", {
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET"
        },
        create: {
            method: "POST",
            url: "/telephony/sounds",
            interceptor: interceptor
        }
    });

    soundsResource.resetCache = function () {
        cache.removeAll();
    };

    soundsResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    soundsResource.resetAllCache = function () {
        aliases.resetCache();
        aliases.resetQueryCache();
    };

    soundsResource.soundUpload = function (fileName, file) {
        return soundsResource.create({}, {
            filename: fileName,
            description: fileName
        }).$promise.then(function (resp) {
            return $http.put(resp.putUrl, file, {
                serviceType: "storage",
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        });
    };

    return soundsResource;
});