import { ILocationProvider, module, route } from "angular";
import ngRoute from "angular-route";
import { componentName as HelloComponentName, HelloComponent } from "./components/hello/hello.component";
import "./style.css";

module("SampleApp", [ngRoute])
    .component(HelloComponentName, new HelloComponent())
    .config(($routeProvider: route.IRouteProvider, $locationProvider: ILocationProvider) => {
        $locationProvider.hashPrefix("");
        $routeProvider.when("/home", { template: "<hello></hello>" }).otherwise("/home");
    })
    .run(() => {});
