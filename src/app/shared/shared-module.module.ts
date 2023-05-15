import { NgModule } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccordionRoutesComponent } from '../accordion-routes/accordion-routes.component';
import { NavigationComponent } from '../navigation/navigation.component';

@NgModule({
  declarations: [
    FooterComponent,
    AccordionRoutesComponent,
    NavigationComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    CommonModule,
    AccordionRoutesComponent,
    NavigationComponent,
  ],
})
export class SharedModule {}
