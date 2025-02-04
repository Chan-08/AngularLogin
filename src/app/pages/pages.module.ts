import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';// ✅ Import SharedModule

@NgModule({
  imports: [CommonModule, PagesRoutingModule, SharedModule] // ✅ Include SharedModule
})
export class PagesModule {}
