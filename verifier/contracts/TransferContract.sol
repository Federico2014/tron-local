// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TransferVerifier.sol";

contract TransferContract {
    TransferVerifier public verifier;
    uint256 public counter; // Counter to track successful verifications

    constructor(address _verifierAddress) {
        verifier = TransferVerifier(_verifierAddress);
    }

    function verifyAndCount(uint256[5] memory publicInputs, uint256[8] memory proof)
        public
        returns (bool)
    {
        bool isValid = verifier.verifyProof(publicInputs, proof);
        if (isValid) {
            counter += 1; // Increment the counter if proof is valid
        }
        return isValid;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }
}