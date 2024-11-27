import Logo from "@assets/AngularJS-Shield.svg";
import { IComponentController, IComponentOptions, ILocationService, IScope } from "angular";
import template from "./hello.component.html?raw";

class HelloController implements IComponentController {
    static $inject = ["$location", "$scope"];
    logo = "";
    

    constructor($location: ILocationService, $scope: IScope) {
        this.logo = Logo;
        

        console.log($location);
    }

    $onInit() {}
}

export class HelloComponent implements IComponentOptions {
    controller = HelloController;
    template = template;
   

}

export const HelloComponentName = "hello";
