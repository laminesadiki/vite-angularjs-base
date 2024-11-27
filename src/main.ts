import { ICompileProvider, ILocationProvider, module, route } from "angular";
import ngRoute from "angular-route";
import { HelloComponent, HelloComponentName } from "@src/components/hello/hello.component";
import { TestComponent, TestComponentName } from "@src/components/test/test.component";
import "./style.css";
import { getTemplateFromComponentName } from "./utils";

module("AngularJSApp", [ngRoute])
    .component(HelloComponentName, new HelloComponent())
    .component(TestComponentName, new TestComponent())
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
            $routeProvider
                .when("/home", { template: getTemplateFromComponentName(HelloComponentName) })
                .when("/test", { template: getTemplateFromComponentName(TestComponentName),  });
            // .otherwise("/home");
        },
    ])
    .run(() => {});
