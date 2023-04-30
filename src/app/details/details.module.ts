import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { DetailsPageRoutingModule } from './details-routing.module';
import { DetailsPage } from './details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    SharedDirectivesModule,
  ],
  declarations: [DetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailsPageModule {}
