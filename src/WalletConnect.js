import React, { useState, useEffect } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import "./WalletConnect.css"; // 確保導入樣式文件

function WalletConnect({ onConnect }) {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider);
        try {
          await provider.request({ method: "eth_requestAccounts" });
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          onConnect(web3, accounts[0]);
        } catch (error) {
          console.error("User rejected connection", error);
        }
      } else {
        console.error("Please install MetaMask!");
      }
    };

    connectWallet();
  }, [onConnect]);

  return (
    <div>
      {account ? (
        <p className="wallet-info">Wallet Connected: {account}</p>
      ) : (
        <button onClick={() => {}}>Connect Wallet</button>
      )}
    </div>
  );
}

export default WalletConnect;
