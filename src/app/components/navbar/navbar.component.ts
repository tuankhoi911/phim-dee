import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isShowSearchInput = false;
  isCollapsedAnimate = false;
  isTransparent = true;

  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    if (this.isTransparent && window.scrollY > 40) {
      this.isTransparent = false;
    } else if (window.scrollY < 10) {
      this.isTransparent = true;
    }
  }

  constructor() {}

  ngOnInit() {}

  onShowSearchInput() {
    this.isShowSearchInput = !this.isShowSearchInput;
  }

  onCollapsedNavbar() {
    this.isCollapsedAnimate = !this.isCollapsedAnimate;
  }
}
