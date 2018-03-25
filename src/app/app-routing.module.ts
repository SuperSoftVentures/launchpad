import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGaurd } from './auth/authenticated-gaurd';

const routes: Routes = [
  { path: '', redirectTo: 'launchpad', pathMatch: 'full' },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'launchpad', loadChildren: 'app/launchpad/launchpad.module#LaunchpadModule', canActivate: [AuthenticatedGaurd] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
