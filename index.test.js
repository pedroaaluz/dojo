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
  consultarSaldo: () => (this.saldo),
  
}


describe('Test teste : ', () => {
  
  it('Teste de deposito', () => {

    const result = 

  })

})