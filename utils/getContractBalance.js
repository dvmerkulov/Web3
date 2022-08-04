
export const getContractBalance = async (web3, contract) => {

  let balance = null

  try {

    balance = web3.utils.fromWei(await web3.eth.getBalance(contract._address))

  } catch {
    console.log(`Contract balance cannot be loaded`)
  }

  return balance

}