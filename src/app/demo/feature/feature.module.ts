import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutes } from './feature.routing';
import { FeatureComponent } from './feature.component';
import { NgxSmartModalModule } from '../../../ngx-smart-modal';
import { LazyModalComponent } from './lazy-modal/lazy-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutes,
    NgxSmartModalModule.forChild()
  ],
  declarations: [
    FeatureComponent,
    LazyModalComponent
  ],
  entryComponents: [
     LazyModalComponent
  ]
})
export class FeatureModule {
}
