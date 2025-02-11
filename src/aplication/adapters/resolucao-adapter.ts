import Resolucao from "../domain/resolucao"

export default interface ResolucaoRepositorio {
  save(resolucao: Resolucao): Promise<void>
}
