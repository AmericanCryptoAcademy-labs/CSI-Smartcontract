
const hre = require("hardhat");

async function main() {
  const EasyCerts = await hre.ethers.deployContract("CSIContract");

  await EasyCerts.waitForDeployment(); //0x32999F8862941f9707e661343B371fE5ddbad555

  console.log('Easy Certs Deployed at ', EasyCerts.target)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});