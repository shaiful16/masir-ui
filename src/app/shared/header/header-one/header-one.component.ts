import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
    selector: 'app-header-one',
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

    @Input() class: string;
    @Input() themeLogo = 'assets/custom-image/icon/logo.png';
    // @Input() themeLogo = 'assets/images/icon/logo.png'; // Default Logo   179X34
    @Input() topbar = true; // Default True
    @Input() sticky = false; // Default false

    public stick = false;

    constructor() { }

    ngOnInit(): void {
    }

    // @HostListener Decorator
    @HostListener('window:scroll', [])
    onWindowScroll() {
        let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number >= 150 && window.innerWidth > 400) {
            this.stick = true;
        } else {
            this.stick = false;
        }
    }

}
