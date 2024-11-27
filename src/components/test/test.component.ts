import Logo from "@assets/AngularJS-Shield.svg";
import { IComponentController, IComponentOptions, ILocationService } from "angular";
import template from "./test.component.html?raw";

class TestController implements IComponentController {
    static $inject = ["$location"];
    logo = "";

    constructor($location: ILocationService) {
        this.logo = Logo;

        console.log($location.path());
    }

    $onInit() {}
}

export class TestComponent implements IComponentOptions {
    controller = TestController;
    template = template;
}

export const TestComponentName = "test";
