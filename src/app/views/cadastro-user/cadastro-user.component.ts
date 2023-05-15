import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CadastroUserService } from 'src/app/services/cadastro-user.service';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css'],
})
export class CadastroUserComponent {
  private subscription: Subscription = new Subscription();

  public formCadastro: FormGroup;
  public isDisabled: boolean = false;
  public dadosCadastrados: boolean = false;
  public mensagemErro: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroUserService: CadastroUserService
  ) {
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
      name: [null, [Validators.required]],
      email: [null, Validators.required],
      password: [],
      isAdmin: [false],
    });
  }

  public atualizarContato() {
    const formData = this.formCadastro.value;
    console.log('formData', formData);

    this.subscription = this.cadastroUserService
      .cadastrarUsuario(formData)
      .subscribe(
        (response) => {
          console.log('response', response);

          this.dadosCadastrados = true; //
        },
        (error) => {
          console.error('error', error);
          this.dadosCadastrados = false; // Reiniciar a flag de sucesso
          this.mensagemErro = error.error.message;
        }
      );
  }
}
