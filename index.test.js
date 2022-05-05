const conta = {
  saldo: 0,
  nome: 'Bitu',
  sacar: (valor) => { 
    
    if(this.saldo <= 0) return 'Tu ta pobre'
    if (valor > this.saldo) return 'Tu não tem grana pra isso'
    
    this.saldo -= valor 

    return this.saldo
  },
  depositar: (valor) => { 
    this.saldo += valor 

    return this.saldo
  },
  consultarSaldo: function(){
      return this.saldo
  }
  
}


describe('Test teste : ', () => {
  
  it('Deveria retornar o saldo em 0', () => {
    const valorInicial = 0;
    const result = conta.consultarSaldo();

    expect(result).toBe(valorInicial);
  })

})