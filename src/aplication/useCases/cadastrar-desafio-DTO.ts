export interface CadastrarDesafioDTO {
  id: string
  titulo: string
  descricao: string
  testes: { id: string; entrada: string; saidaEsperada: string }[]
}
