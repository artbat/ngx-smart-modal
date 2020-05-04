import { Component, AfterViewInit, VERSION, ChangeDetectionStrategy } from '@angular/core';
import { NgxSmartModalService } from '../../../ngx-smart-modal';
import { INgxSmartModalOptions } from "../../../ngx-smart-modal/src/config/ngx-smart-modal.config";
import { LazyModalComponent } from "./lazy-modal/lazy-modal.component";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureComponent implements AfterViewInit {
  version = VERSION.full;

  // tslint:disable:max-line-length
  sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper neque ac ullamcorper scelerisque. Proin molestie erat sapien, ac dapibus tortor placerat a. Vivamus quis tempor mauris. Ut porta ultricies nisi in eleifend';

  constructor(
     public ngxSmartModalService: NgxSmartModalService
  ) {  }

  ngAfterViewInit() {
    /*this.ngxSmartModalService.getModal('classicModal').onEscape.subscribe((event: Event) => {
      console.log('You just escaped the classicModal!', event);
    });*/
  
    const opts: INgxSmartModalOptions = {
      backdrop: false
    };
  
    // this.ngxSmartModalService.create('dynamicModal1', 'Hello, I\'m a simple text !').open();
  
    this.ngxSmartModalService.create('dynamicModalLazy', LazyModalComponent, opts).open();
    
  }

}
