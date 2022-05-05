function Conta(id) {
  let saldo = 0;
  const id = id;

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

  this.transferir = function(id, valor) {

  }

  return {
    sacar: this.sacar,
    depositar: this.depositar,
    consultarSaldo: this.consultarSaldo,
  }
}


module.exports = Conta;
