function Conta() {
  this.saldo = 0;
  this.nome = 'Bitu';
  this.sacar = function (valor) {
    if (this.saldo <= 0) return 'Tu ta pobre';
    if (valor > this.saldo) return 'Tu não tem grana pra isso';

    this.saldo -= valor;
    return this.saldo;
  }
  this.depositar = function (valor) {
    this.saldo += valor;
    return this.saldo;
  }
  this.consultarSaldo = function () {
    return this.saldo;
  }

  return {
    sacar: this.sacar,
    depositar: this.depositar,
    consultarSaldo: this.consultarSaldo
  }
}

module.exports = Conta;