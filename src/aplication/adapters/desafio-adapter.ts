import Desafio from "../domain/desafio"

export default interface DesafioRepositorio {
  findByID(id: string): Promise<Desafio | null>
}
