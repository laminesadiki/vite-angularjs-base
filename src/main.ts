import { ICompileProvider, ILocationProvider, module, route } from "angular";
import ngRoute from "angular-route";
import { HelloComponent, componentName as HelloComponentName } from "@src/components/hello/hello.component";
import "./style.css";

module("AngularJSApp", [ngRoute])
    .component(HelloComponentName, new HelloComponent())
    .config([
        "$compileProvider",
        ($compileProvider: ICompileProvider) => {
            // $compileProvider.debugInfoEnabled(false);
            $compileProvider.commentDirectivesEnabled(false);
            $compileProvider.cssClassDirectivesEnabled(false);
        },
    ])
    .config([
        "$routeProvider",
        "$locationProvider",
        ($routeProvider: route.IRouteProvider, $locationProvider: ILocationProvider) => {
            $locationProvider.hashPrefix("");
            $routeProvider.when("/home", { template: "<hello></hello>" }).otherwise("/home");
        },
    ])
    .run(() => {});
