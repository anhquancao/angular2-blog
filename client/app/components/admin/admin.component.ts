import {Component, OnInit, AfterViewInit} from "@angular/core";
declare var $:JQueryStatic;

@Component({
    templateUrl: 'app/components/admin/admin.component.html',
    styleUrls: [
        'app/components/admin/simple-sidebar.css'
    ]
})

export class AdminComponent implements AfterViewInit {
    ngAfterViewInit():any {
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }
}
