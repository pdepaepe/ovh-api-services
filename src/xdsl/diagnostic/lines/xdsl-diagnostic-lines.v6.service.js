angular.module("ovh-api-services").service("OvhApiXdslDiagnosticLinesV6", function ($resource, Poller, OvhApiXdslDiagnosticLines) {
    "use strict";

    var routes = {
        base: "/xdsl/:serviceName/lines/:number/diagnostic",
        cancel: "/xdsl/:serviceName/lines/:number/diagnostic/cancel",
        run: "/xdsl/:serviceName/lines/:number/diagnostic/run"
    };

    var rules = {
        successStatus: [
            "cancelled",
            "connectionProblem",
            "haveToConnectModemOnTheRightPlug",
            "interventionRequested",
            "resolvedAfterTests",
            "waitingHuman",
            "waitingRobot",
            "validationRefused"
        ],
        errorStatus: [
            "problem"
        ]
    };

    var diagnostic = $resource(routes.base, {
        serviceName: "@serviceName",
        number: "@number"
    }, {
        cancelDiagnostic: {
            url: routes.cancel,
            method: "POST",
            isArray: false,
            interceptor: function (response) {
                OvhApiXdslDiagnosticLines.resetCache();
                return response;
            }
        }
    });

    diagnostic.runDiagnostic = function (opts) {
        var url = routes.run.replace(/\/:(\w*)\//g, function (match, replacement) {
            return "/" + opts[replacement] + "/";
        });

        return Poller.poll(
            url,
            {
                cache: false
            },
            {
                method: "post",
                postData: _.omit(opts, ["serviceName", "number"]),
                interval: 30000,
                successRule: function (data) {
                    return _.includes(rules.successStatus, data.status);
                },
                errorRule: function (data) {
                    return _.includes(rules.errorStatus, data.status);
                },
                namespace: "xdsl_diagnostic_run"
            }
        );
    };

    diagnostic.killPollerDiagnostic = function () {
        return Poller.kill({
            namespace: "xdsl_diagnostic_run"
        });
    };

    return diagnostic;
});
