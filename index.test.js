const conta = {
  saldo: 0,
  nome: 'Bitu',
  sacar: function (valor) {
    if (this.saldo <= 0) return 'Tu ta pobre';
    if (valor > this.saldo) return 'Tu não tem grana pra isso';

    this.saldo -= valor;

    return this.saldo;
  },
  depositar: function (valor) {
    this.saldo += valor;

    return this.saldo;
  },
  consultarSaldo: function () {
    return this.saldo;
  },
};

describe('Test teste : ', () => {
  it('Deveria retornar o saldo em 0', () => {
    const valorInicial = 0;
    const result = conta.consultarSaldo();

    expect(result).toBe(valorInicial);
  });

  it('Deveria retornar o saldo apos deposito', () => {
    const valorDepositado = 100;
    const saldo = conta.consultarSaldo();
    const result = conta.depositar(valorDepositado);

    expect(result).toBe(saldo + valorDepositado);
  });

  it('Deveria retornar o saldo apos saque', () => {
    const valorSacado = 50;
    const saldo = conta.consultarSaldo();
    const result = conta.sacar(valorSacado);

    expect(result).toBe(saldo - valorSacado);
  });

  it('Deveria retornar o saldo final', () => {
    const result = conta.consultarSaldo(valorDepositado);

    expect(result).toBe(saldo + valorDepositado);
  });
});
