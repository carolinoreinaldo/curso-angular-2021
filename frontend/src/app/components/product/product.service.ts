import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private snack : MatSnackBar
  ) { }

  //Esse snackBar mostra aquela msg de forma de uma box mais bonita na tela
  showMessage(msg: string):void {
    this.snack.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
}
