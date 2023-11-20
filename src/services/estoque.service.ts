import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/interfaces/product.interface';

@Injectable()
export class EstoqueService {
  constructor(private readonly http: HttpClient) {}

  listar() {
    return this.http.get('http://localhost:3000/estoque') as Observable<
      Product[]
    >;
  }

  create(obj: Product) {
    //TODO: REALIZAR CHAMADA PARA O BACKEND DE CADASTRAR PRODUTO
  }
}
