import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeathSquareComponent } from './death-square/death-square.component';
import { LasterCannonComponent } from './laster-cannon/laster-cannon.component';
import { TurretComponent } from './turret/turret.component';


@NgModule({
  imports: [
    CommonModule,
  ],

  declarations: [
  	DeathSquareComponent,
  	LasterCannonComponent,
  	TurretComponent
  ],

  exports: [
  	DeathSquareComponent,
  	LasterCannonComponent,
  	TurretComponent
  ]
})
export class InternalDefensesModule { }
