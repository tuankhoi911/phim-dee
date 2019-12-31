import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isShowSearchInput = false;
  isCollapsedAnimate = false;

  constructor() {}

  ngOnInit() {}

  onShowSearchInput() {
    this.isShowSearchInput = !this.isShowSearchInput;
  }

  onCollapsedNavbar() {
    this.isCollapsedAnimate = !this.isCollapsedAnimate;
  }
}
