import Aluno from "../entities/aluno"

export default interface AlunoRepositorio {
  findByName(nome: string): Promise<Aluno | null>
  findByID(id: string): Promise<Aluno | null>
}
