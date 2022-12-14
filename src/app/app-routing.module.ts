import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AuthGuard]
    
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./resetpass/resetpass-routing.module').then( m => m.ResetpassPageRoutingModule),
  },
  {
    path: 'list-asistencia',
    loadChildren: () => import('./pages/list-asistencia/list-asistencia.module').then( m => m.ListAsistenciaPageModule)
  },
  {
    path: 'asignatura_APT',
    loadChildren: () => import('./pages/asignatura-apt/asignatura-apt.module').then( m => m.AsignaturaAPTPageModule)
  },
  {
    path: 'asignatura_CAD',
    loadChildren: () => import('./pages/asignatura-cad/asignatura-cad.module').then( m => m.AsignaturaCADPageModule)
  },
  {
    path: 'asignatura_PGA',
    loadChildren: () => import('./pages/asignatura-pga/asignatura-pga.module').then( m => m.AsignaturaPGAPageModule)
  },
  {
    path: 'asignatura_PGY',
    loadChildren: () => import('./pages/asignatura-pgy/asignatura-pgy.module').then( m => m.AsignaturaPGYPageModule)
  },
  {
    path: 'asignatura_REL',
    loadChildren: () => import('./pages/asignatura-rel/asignatura-rel.module').then( m => m.AsignaturaRELPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
