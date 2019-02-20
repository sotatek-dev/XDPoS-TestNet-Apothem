const Web3 = require("web3");

const contractAddress = "0x0000000000000000000000000000000000000088";
const contractAbi = require("./abi.json");
const privateKey =
  "0x1edb4a3ae6745609074cd77ace33e207d3aa7a89cacdf9d67b30325795478497";
const fromAddress = "0x139c90249B85bEFff2A958BdE4326DE1C92caC1C";

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const contract = new web3.eth.Contract(contractAbi, contractAddress);

const gasPrice = 10 * 1e9; // Gas price is defined in gwei
const chainId = 21911;

async function main() {
  const id = await web3.eth.net.getId();
  console.log("chainId =", id);

  const nonce = await web3.eth.getTransactionCount(fromAddress);
  console.log("nonce =", nonce);

  const _gasLimit = await contract.methods
    .uploadKYC("test")
    .estimateGas({ from: fromAddress });
  const gasLimit = web3.utils.toBN(_gasLimit);

  console.log(gasLimit.toString());

  const tx = await web3.eth.accounts.signTransaction(
    {
      chainId: chainId,
      from: fromAddress,
      to: contractAddress,
      value: "0x0",
      data: contract.methods.uploadKYC("test").encodeABI(),
      gasPrice: gasPrice,
      gas: gasLimit
    },
    privateKey
  );
  const rawTx = tx.rawTransaction;
  const result = await web3.eth.sendSignedTransaction(rawTx);
  console.log(result);
}

main();
