import { match } from "assert"
import Desafio from "../../domain/entities/desafio"
import Teste from "../../domain/entities/testes"
import DesafioRepositorio from "../../domain/repositories/desafio-Repositorio"
import { CadastrarDesafioDTO } from "./cadastrar-desafio-DTO"



export default class CadastrarDesafio {
  constructor(private desafioRepositorio: DesafioRepositorio) {}
  async execute({id, titulo, descricao, testes }: CadastrarDesafioDTO) {
    const testesValidados: Teste[] = testes.map(
      (teste) => new Teste(teste.id, teste.entrada, teste.saidaEsperada)
    )

    const desafio = new Desafio(id, titulo, descricao, testesValidados)

    await this.desafioRepositorio.save(desafio)

    return desafio
  }
}
