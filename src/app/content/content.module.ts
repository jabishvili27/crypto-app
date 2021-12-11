import { ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  imports: [CommonModule, ContentRoutingModule],
  declarations: [ContentComponent, AddComponent, ListComponent],
})
export class ContentModule {}
