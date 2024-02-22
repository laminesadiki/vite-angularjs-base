import Logo from "@assets/AngularJS-Shield.svg";
import { IComponentController, IComponentOptions } from "angular";
import template from "./hello.component.html?raw";

class HelloController implements IComponentController {
    static $inject = [];
    logo = "";

    constructor() {
        this.logo = Logo;
    }

    $onInit() {}
}

export class HelloComponent implements IComponentOptions {
    controller = HelloController;
    template = template;
}

export const componentName = "hello";
