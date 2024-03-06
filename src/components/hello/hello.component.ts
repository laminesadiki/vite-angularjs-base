import Logo from "@assets/AngularJS-Shield.svg";
import { IComponentController, IComponentOptions, ILocationService } from "angular";
import template from "./hello.component.html?raw";

class HelloController implements IComponentController {
    static $inject = ["$location"];
    logo = "";

    constructor($location: ILocationService) {
        this.logo = Logo;

        console.log($location.path());
    }

    $onInit() {}
}

export class HelloComponent implements IComponentOptions {
    controller = HelloController;
    template = template;
}

export const componentName = "hello";
