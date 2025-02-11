import { promises } from "dns"
import Desafio from "../entities/desafio"

export default interface DesafioRepositorio {
  findByID(id: string): Promise<Desafio | null>

  save(desafio: Desafio): Promise<Desafio | null>
}
