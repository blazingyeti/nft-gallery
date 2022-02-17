import React, { useState, useEffect } from 'react'
import { useAccount } from 'wagmi';
import { Container } from 'react-bootstrap'

import {fetchNFTs} from '../utils/fetchNFTs';
import NftCard from './NftCard';

const Main = () => {
  const [owner, setOwner] = useState("")
  const [contractAddress, setContractAddress] = useState("")
  const [NFTs, setNFTs] = useState("")
  const [chain, setBlockchain] = useState("Ethereum")
  const [{ data: accountData, loading }] = useAccount()

  useEffect(async () => {
    if (accountData) {
      const data = await fetchNFTs(accountData.address, setNFTs, chain)
    }
  }, [accountData && accountData.address, chain])

  return (
    <Container fluid id='main' className='row'>
      {
        NFTs ? NFTs.map(NFT => {
          return (
              <NftCard
                key={NFT.value.id + NFT.value.contractAddress}
                image={NFT.value.image}
                id={NFT.value.id}
                title={NFT.value.title}
                attributes={NFT.value.attributes}>
              </NftCard>
          )
        }) : <div>Connect a Wallet</div>
      }
    </Container>
  )
}

export default Main;
