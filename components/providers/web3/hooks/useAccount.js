

import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {
  "0x26d443b9501e30495e2531c8997255c40239f152f280811d1dee2c9c088f678e": true,
  "0x68b05499a5c552269dd5d64bdcea204d66b638a32e9dc1f115b9ae206af5b35b": true
}

export const handler = (web3, provider) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()
      const account = accounts[0]

      if (!account) {
        throw new Error("Cannot retreive an account. Please refresh the browser.")
      }

      return account
    }
  )

  useEffect(() => {
    const mutator = accounts => mutate(accounts[0] ?? null)
    provider?.on("accountsChanged", mutator)

    return () => {
      provider?.removeListener("accountsChanged", mutator)
    }
  }, [provider])

  return {
    data,
    isAdmin: (
      data &&
      adminAddresses[web3.utils.keccak256(data)]) ?? true, //all user are admins
    mutate,
    ...rest
  }
}
