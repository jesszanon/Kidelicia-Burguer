import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './components/login/login.module';
import { HomeModule } from './components/home/home.module';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./components/home/home.module').then(m => HomeModule)
  },
  {
    path: 'logar',
    loadChildren: () => import('./components/login/login.module').then(m => LoginModule)
  }
];//Toda vez que o Angular procurar as rotas principais, dentro delas ele já vai conhecer tudo que tiver dentro dos módulos do login, de todos os componentes que eu quiser.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
