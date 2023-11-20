import { Component, OnInit } from '@angular/core';
import { EstoqueService } from 'src/services/estoque.service';
import { Product } from './../../interfaces/product.interface';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css'],
})
export class EstoqueComponent implements OnInit {
  displayedColumns = ['id', 'nome', 'valor', 'quantidade'];
  dataSource: Product[] = [];

  constructor(private readonly estoqueService: EstoqueService) {}

  ngOnInit() {
    this.estoqueService.listar().subscribe((informacao) => {
      this.dataSource = informacao;
    });
  }

  //TODO: Metodo que chama o serviço de cadastrar produto com dados inventados
}
