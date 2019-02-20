const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const addresses = [
  "0xd7842239c9ad194500630fffed179cc521f52046",
  "0x121a8897d579c641afcfad38e4e489de8b26aa1b",
  "0xf8dae8ddb969e50de90c589306418a504f0c299a"
];

async function main() {
  addresses.map(async address => {
    const balance = await web3.eth.getBalance(address);
    console.log(`${address} have ${balance}`);
  });
}

main();
