var TransferVerifier = artifacts.require("./TransferVerifier.sol");
var TransferContract = artifacts.require("./TransferContract.sol");

module.exports = function (deployer) {
  // Step 1: Deploy TransferVerifier
  deployer.deploy(TransferVerifier).then(function () {
    // Step 2: Deploy TransferContract with the deployed TransferVerifier address
    return deployer.deploy(TransferContract, TransferVerifier.address);
  });
};
