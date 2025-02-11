import { StatusResolucao } from "./StatusResolucao"
export type ResolucaoProps = {
  id?: string
  alunoID: string
  desafioID: string
  codigo: string
  status: StatusResolucao
  nota: number
  feedback: string[]
}
export default class Resolucao {
  constructor(props: ResolucaoProps) {}
}
