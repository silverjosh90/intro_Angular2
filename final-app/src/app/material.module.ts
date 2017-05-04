import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdSelectModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    FlexLayoutModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    FlexLayoutModule
  ]
})
export class MaterialModule { }
