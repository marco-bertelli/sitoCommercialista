import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'lostudio', loadChildren: () => import('./features/lostudio/lostudio.module').then(m => m.LostudioModule) },
  { path: 'contatti', loadChildren: () => import('./features/contatti/contatti.module').then(m => m.ContattiModule) },
  { path: 'links', loadChildren: () => import('./features/links/links.module').then(m => m.LinksModule) },
  { path: 'contatto', loadChildren: () => import('./features/contatto/contatto.module').then(m => m.ContattoModule) },
  { path: 'footer', loadChildren: () => import('./features/footer/footer.module').then(m => m.FooterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
