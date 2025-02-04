import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [] // ✅ DO NOT export NavbarComponent here
})
export class SharedModule {}
