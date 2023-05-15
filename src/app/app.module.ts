import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankTemplateComponent } from './shared/components/blank-template/blank-template.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CadastroUserComponent } from './views/cadastro-user/cadastro-user.component';
import { CadastroAdminComponent } from './views/cadastro-admin/cadastro-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankTemplateComponent,
    HeaderComponent,
    FooterComponent,
    CadastroUserComponent,
    CadastroAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
