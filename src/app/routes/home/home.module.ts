import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing";
import { BannerModule } from "./../../components/banner/banner.module";
import { CardNewModule } from "src/app/components/card-new/card-new.module";
import { CardFeaturesModule } from "src/app/components/card-features/card-features.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerModule,
    CardFeaturesModule,
    CardNewModule
  ]
})
export class HomeModule {}
