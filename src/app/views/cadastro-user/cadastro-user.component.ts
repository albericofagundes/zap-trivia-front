import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css'],
})
export class CadastroUserComponent {
  private subscription: Subscription = new Subscription();

  public formCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formCadastro = this.formBuilder.group({});
  }

  ngOnInit() {
    this.inicializarDados();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public inicializarDados() {
    this.gerarFormularioDadosPessoais();
    // Outras inicializações de formulários podem ser adicionadas aqui
  }

  private gerarFormularioDadosPessoais(): void {
    this.formCadastro = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, Validators.required],
      senha: [null, Validators.required],
      isAdmin: [null],
    });
  }
}
