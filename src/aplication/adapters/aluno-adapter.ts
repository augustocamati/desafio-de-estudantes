import Aluno from "../../domain/entities/aluno"
import AlunoRepositorio from "../../domain/repositories/aluno-Repositorio"

export default class AlunoAdapter implements AlunoRepositorio {
  private alunos: Aluno[] = [
    {
      id: "fake-id",
      nome: "fake-id",
      email: "fake-id",
    },
    {
      id: "fake-id2",
      nome: "fake-id2",
      email: "fake-id2",
    },
  ]
  async findByID(id: string): Promise<Aluno | null> {
    return (await this.alunos.find((aluno) => aluno.id == id)) || null
  }

  async findByName(nome: string): Promise<Aluno | null> {
    return (await this.alunos.find((aluno) => aluno.nome == nome)) || null
  }
}
