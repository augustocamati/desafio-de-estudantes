import Resolucao from "../../domain/entities/resolucao"
import { StatusResolucao } from "../../domain/entities/StatusResolucao"
import AlunoRepositorio from "../../domain/repositories/aluno-Repositorio"
import DesafioRepositorio from "../../domain/repositories/desafio-Repositorio"
import ResolucaoRepositorio from "../../domain/repositories/resolucao-repositorio"
import { SubmeterResolucaoDeDesafioDTO } from "./submeter-resolucao-de-desafio-DTO"


export default class SubmeterResolucaoDeDesafio {
  constructor(
    private alunoRepositorio: AlunoRepositorio,
    private desafioRepositorio: DesafioRepositorio,
    private resolucaoRepositorio: ResolucaoRepositorio
  ) {}
  async execute({ alunoID, codigo, desafioID }: SubmeterResolucaoDeDesafioDTO) {
    //validar se existe aluno
    const aluno = await this.alunoRepositorio.findByID(alunoID)

    if (!aluno) throw new Error("aluno não existe")

    //validar se desafio existe
    const desafio = await this.desafioRepositorio.findByID(desafioID)

    if (!desafio) throw new Error("desafio não existe")

    let acertos = 0
    const feedback: string[] = []
    // comparar o codigo contra os testes
    desafio.testes.forEach((teste) => {
      if (teste.saidaEsperada == codigo) {
        acertos++
        feedback.push("acertou")
      } else {
        feedback.push("Errou")
      }
    })
    //gerar nota
    const nota = (acertos / desafio.testes.length) * 100

    const resolucao = new Resolucao({
      alunoID,
      desafioID,
      codigo,
      status: StatusResolucao.corrigido,
      nota,
      feedback,
    })
    //salvar no banco
    await this.resolucaoRepositorio.save(resolucao)

    return {
      nota,
      feedback,
    }
  }
}
