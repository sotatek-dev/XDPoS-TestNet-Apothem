const Web3 = require("web3");

const contractAddress = "0x0000000000000000000000000000000000000088";
const contractAbi = require("./abi.json");

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const contract = new web3.eth.Contract(contractAbi, contractAddress);

async function main() {
  const candidates = await contract.methods.getCandidates().call();
  console.log("candidates = ", candidates);
  candidates.push("0x139c90249B85bEFff2A958BdE4326DE1C92caC1C");

  const candidateCaps = await Promise.all(
    candidates.map(candidate =>
      contract.methods.getCandidateCap(candidate).call()
    )
  );
  console.log("candidates cap = ", candidateCaps);

  const candidateOwners = await Promise.all(
    candidates.map(candidate =>
      contract.methods.getCandidateOwner(candidate).call()
    )
  );
  console.log("candidates owner = ", candidateOwners);

  const candidateVoters = await Promise.all(
    candidates.map(candidate => contract.methods.getVoters(candidate).call())
  );
  console.log("candidates voter = ", candidateVoters);

  const candidateKYC = await Promise.all(
    candidates.map(candidate => contract.methods.getKYC(candidate).call())
  );
  console.log("candidates kyc = ", candidateKYC);
}

main();
