import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing";
import { BannerModule } from "./../../components/banner/banner.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, BannerModule]
})
export class HomeModule {}
