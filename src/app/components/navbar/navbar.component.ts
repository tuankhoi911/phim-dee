import { Component, OnInit, HostListener } from "@angular/core";
import { ViewChild } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  @ViewChild("inputSearch", { static: false }) inputSearchRef: any;
  isShowSearchInput = false;
  isCollapsed = false;
  isScroll = false;
  searchValue = "";

  constructor() {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    if (window.scrollY > 40) {
      this.isScroll = true;
    } else if (this.isScroll && window.scrollY < 10) {
      this.isScroll = false;
    }
  }

  onBlurInput() {
    if (this.searchValue == "") {
      this.isShowSearchInput = false;
    }
  }

  onClearInput() {
    this.searchValue = "";
    this.isShowSearchInput = false;
  }

  onShowSearchInput() {
    this.isShowSearchInput = !this.isShowSearchInput;
    this.inputSearchRef.nativeElement.focus();
  }

  onCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
