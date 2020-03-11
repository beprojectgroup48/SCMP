import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { 
        MatButtonModule,
        MatNativeDateModule,
        MatIconModule, 
        MatSidenavModule, 
        MatListModule, 
        MatToolbarModule, 
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        
        
      } from '@angular/material';

@NgModule({
  imports: [
            CommonModule, 
            MatButtonModule,
            MatToolbarModule, 
            MatNativeDateModule, 
            MatIconModule, 
            MatSidenavModule, 
            MatListModule, 
            MatTableModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatDividerModule

          ],
  exports: [
            CommonModule, 
            MatButtonModule, 
            MatToolbarModule, 
            MatNativeDateModule, 
            MatIconModule, 
            MatSidenavModule, 
            MatListModule, 
            MatTableModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatDividerModule
          ],
})
export class CustomMaterialModule { }
