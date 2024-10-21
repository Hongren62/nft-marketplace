import React, { useState } from "react";
import WalletConnect from "./WalletConnect";
import NFTMarketplace from "./NFTMarketplace";
import NFTSwapABI from "./NFTSwapABI.json";
// import "./App.css";

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [nftSwapContract, setNftSwapContract] = useState(null);

  const handleConnect = async (web3Instance, connectedAccount) => {
    setWeb3(web3Instance);
    setAccount(connectedAccount);
    const contractAddress = "0xECdeAaD85A695CEb83d5d9e00c0D3160220773A7";
    const contract = new web3Instance.eth.Contract(NFTSwapABI, contractAddress);
    setNftSwapContract(contract);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SCU Marketplace</h1>
        <WalletConnect onConnect={handleConnect} />
      </header>
      {web3 && account && nftSwapContract && (
        <NFTMarketplace
          web3={web3}
          nftSwapContract={nftSwapContract}
          account={account}
        />
      )}
    </div>
  );
}

export default App;
