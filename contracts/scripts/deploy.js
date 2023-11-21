
const hre = require("hardhat");

async function main() {
  const EasyCerts = await hre.ethers.deployContract("CSIContract");

  await EasyCerts.waitForDeployment(); //0x68f09b03e151d4E83fCa109e0693de65D60Dff09

  console.log('Easy Certs Deployed at ', EasyCerts.target)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});