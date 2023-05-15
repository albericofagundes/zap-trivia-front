import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroUserComponent } from './views/cadastro-user/cadastro-user.component';
import { BlankTemplateComponent } from './shared/components/blank-template/blank-template.component';

const routes: Routes = [
  {
    path: '',
    component: BlankTemplateComponent,
    children: [
      {
        path: 'register',
        component: CadastroUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
