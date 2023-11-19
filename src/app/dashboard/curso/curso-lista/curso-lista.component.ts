import { Component } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from '../curso';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrl: './curso-lista.component.css'
})
export class CursoListaComponent {

  cursos: Curso[] = []
  displayedColumns: string[] = ["Id", "Nombre", "Credito", "Estado"]

  constructor(private cursoService: CursoService,
    private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.cursoService.listarCurso()
      .subscribe(
        (data) => {
          this.cursos = data
        },
        (error) => {
          this.snackBar.open('Error al consumir API Rest', 'OK', { duration: 50000 })
        }
      )

  }


}
