import Teste from "./testes";

export default class Desafio  {
  constructor(private id: string,
private titulo: string,
private descricao: string,
public testes: Teste[]){}
};
