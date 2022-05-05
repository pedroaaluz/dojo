const Conta = require('./index');

const conta = new Conta();
console.log(conta.consultarSaldo());

describe('Testando metodos da conta : ', () => {
  const valorSacado = 50;
  const valorDepositado = 100;
  const valorInicial = 0;

  it('Deveria retornar o saldo em 0', () => {
    const result = conta.consultarSaldo();

    expect(result).toBe(valorInicial);
  });

  it('Deveria retornar tu ta pobre', () => {
    const result = conta.sacar(valorSacado);
    const mensagem = 'Tu ta pobre';

    expect(result).toBe(mensagem);
  });

  it('Deveria retornar o saldo apos deposito', () => {
    const saldo = conta.consultarSaldo();
    const result = conta.depositar(valorDepositado);

    expect(result).toBe(saldo + valorDepositado);
  });

  it('Deveria retornar tu não tem grana pra isso', () => {
    const result = conta.sacar(150);
    const mensagem = 'Tu não tem grana pra isso';

    expect(result).toBe(mensagem);
  });

  it('Deveria retornar o saldo apos saque', () => {
    const saldo = conta.consultarSaldo();
    const result = conta.sacar(valorSacado);

    expect(result).toBe(saldo - valorSacado);
  });

  it('Deveria retornar o saldo final', () => {
    const saldo = conta.consultarSaldo();
    expect(saldo).toBe(valorDepositado - valorSacado);
  });
});
