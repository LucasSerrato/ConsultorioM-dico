import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importação do FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule] // Inclua FormsModule para suportar ngModel
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('isAdmin', 'true'); // Armazena o estado de login
      this.router.navigate(['/pacientes']); // Redireciona para a lista de pacientes
    } else {
      alert('Credenciais inválidas');
    }
  }
}
