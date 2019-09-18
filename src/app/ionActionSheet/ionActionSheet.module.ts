import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { IonActionSheetPage } from './ionActionSheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: IonActionSheetPage
      }
    ])
  ],
  declarations: [IonActionSheetPage]
})
export class IonActionSheetPageModule {}
