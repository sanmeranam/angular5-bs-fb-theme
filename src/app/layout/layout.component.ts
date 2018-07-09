import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})


export class LayoutComponent implements OnInit {
  
  constructor() {
   
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
