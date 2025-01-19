import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { ConfirmationAlertComponent } from './confirmation-alert/confirmation-alert.component';
import { CustomPropertiesEditorComponent } from './custom-properties-editor/custom-properties-editor.component';

@NgModule({
  declarations: [
    AlertComponent,
    ConfirmationAlertComponent,
    CustomPropertiesEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AlertComponent,
    ConfirmationAlertComponent,
    CustomPropertiesEditorComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
