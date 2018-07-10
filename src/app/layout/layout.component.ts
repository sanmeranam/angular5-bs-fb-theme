import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})


export class LayoutComponent implements OnInit {

  constructor() {
    this._initEvents();
  }

  _initEvents() {
    // jQuery.swipe({
    //   swipeStatus: function (event, phase, direction, distance, duration, fingers) {
    //     if (phase == "move" && direction == "right") {
    //       this.onToggleClick();
    //       return false;
    //     }
    //     if (phase == "move" && direction == "left") {
    //       this.onOverLayClick();
    //       return false;
    //     }
    //   }.bind(this)
    // });
  }

  ngOnInit() {
  }

  onToggleClick() {
    jQuery('#sidebar, #content').toggleClass('active');
    jQuery('.collapse.in').toggleClass('in');
    jQuery('a[aria-expanded=true]').attr('aria-expanded', 'false');
    jQuery("#sidebarCollapse").toggleClass('active');
    jQuery('.overlay').addClass('active');
  }
  onOverLayClick() {
    jQuery('#sidebar').removeClass('active');
    jQuery('.overlay').removeClass('active');
    jQuery("#sidebarCollapse").toggleClass('active');
  }

}
