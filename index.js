function Conta() {
  let saldo = 0;

  this.sacar = function (valor) {
    if (saldo <= 0) return 'Tu ta pobre';
    if (valor > saldo) return 'Tu não tem grana pra isso';

    saldo -= valor;
    return saldo;
  }

  this.depositar = function (valor) {
    saldo += valor;
    return saldo;
  }

  this.consultarSaldo = function () {
    return saldo;
  }

  return {
    sacar: this.sacar,
    depositar: this.depositar,
    consultarSaldo: this.consultarSaldo,
  }
}


module.exports = Conta;
