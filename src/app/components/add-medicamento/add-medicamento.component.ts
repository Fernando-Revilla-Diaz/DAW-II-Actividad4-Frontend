import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento.model';
import { MedicamentoService } from 'src/app/services/medicamento.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {

  constructor(private medicamentoService:MedicamentoService) { }

  medicamento: Medicamento = {
  };

  ngOnInit(): void {
  }

  saveMedicamento(){
    console.log(">>> saveMedicamento"); 
    console.log(this.medicamento); 
    console.log(">>> saveMedicamento"); 

    this.medicamentoService.create(this.medicamento).subscribe(
      response => {
        console.log(response.response);
      },
      error => {
        console.log(error.response);
      }
    )

  }

}
