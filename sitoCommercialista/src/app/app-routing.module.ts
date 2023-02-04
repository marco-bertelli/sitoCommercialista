import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contatti', loadChildren: () => import('./features/contatti/contatti.module').then(m => m.ContattiModule) },
  { path: 'footer', loadChildren: () => import('./features/footer/footer.module').then(m => m.FooterModule) },
  { path: 'areaclienti', loadChildren: () => import('./features/areaclienti/areaclienti.module').then(m => m.AreaclientiModule) },
  { path: 'lavoricontabili', loadChildren: () => import('./features/lavoricontabili/lavoricontabili.module').then(m => m.LavoricontabiliModule) },
  { path: 'opsocietarie', loadChildren: () => import('./features/opsocietarie/opsocietarie.module').then(m => m.OpsocietarieModule) },
  { path: 'paghecontributi', loadChildren: () => import('./features/paghecontributi/paghecontributi.module').then(m => m.PaghecontributiModule) },
  { path: 'finanza', loadChildren: () => import('./features/finanza/finanza.module').then(m => m.FinanzaModule) },
  { path: 'digitali', loadChildren: () => import('./features/digitali/digitali.module').then(m => m.DigitaliModule) },
  { path: 'altri', loadChildren: () => import('./features/altri/altri.module').then(m => m.AltriModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
