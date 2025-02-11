import Resolucao from "../entities/resolucao"

export default interface ResolucaoRepositorio {
  save(resolucao: Resolucao): Promise<void>
}
