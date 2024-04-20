import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const provider = new ethers.JsonRpcApiProvider(`https://eth-sepolia.g.alchemy.com/v2/C_x2f95uRPElXsgh6urjuRD1MVoCPrgU`)
console.log(provider)
const createEthereumContract = () => {

  console.log({ "ether": ethereum })
  const signer = provider.getSigner();
  console.log("Signer" + signer)
  const carbonFootprintContract = new ethers.Contract(contractAddress, contractABI, signer);
  console.log("Contract" + contractAddress)
  console.log({ provider, signer, carbonFootprintContract })
  return carbonFootprintContract;
};

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ totalEmission: "" });
  const [currentAccount, setCurrentAccount] = useState();


  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getCompanyData = async (companyAddress) => {
    try {
      const carbonFootprintContract = createEthereumContract();
      const tx = await carbonFootprintContract.registerCompany(parsedEmission);
      console.log("Registering footprint...", tx.hash);

      // Wait for transaction confirmation (optional)
      const receipt = await tx.wait();
      console.log("Transaction confirmed:", receipt.transactionHash);

      // Update UI or perform actions after confirmation (optional)
    } catch (error) {
      console.error("Error registering company:", error);
    }
  };


  const registerEmission = async (totalEmission) => {
    try {
      if (ethereum) {
        const carbonFootprintContract = createEthereumContract();

        // Get the connected wallet address
        const connectedAddress = currentAccount;

        // No parsing to BigNumber needed (function expects address)

        const tx = await carbonFootprintContract.registerCompany(connectedAddress);
        console.log("Registering company...", tx.hash);

        // Wait for transaction confirmation (optional)
        const receipt = await tx.wait();
        console.log("Transaction confirmed:", receipt.transactionHash);

        // Update UI or perform actions after confirmation (optional)
      }
    } catch (error) {
      console.error("Error registering company:", error);
    }
  };


  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log(currentAccount);

        // getCompanyData(currentAccount);
      } else {
        setCurrentAccount(null)
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  });

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        registerEmission,
        getCompanyData,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
