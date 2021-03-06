import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-one',
  templateUrl: './footer-one.component.html',
  styleUrls: ['./footer-one.component.scss']
})
export class FooterOneComponent implements OnInit {

  @Input() class: string = 'footer-light';
  @Input() themeLogo: string = 'assets/custom-image/logo/logo.png';
  @Input() newsletter: boolean = true; // Default True

  public today: number = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
