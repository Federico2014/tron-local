# tron-local

## Run node
1. `mkdir bin`
2. Put `FullNode.jar` in the `bin` directory
3. `./scripts/run.sh`
4. Wait some time
5. `./scripts/proposal.sh`
6. Note that proposal will be executed only in ten minutes

FullNode address: http://localhost:16667

SolidityNode address: http://localhost:16668

Private key with some TRX: `138a22c03039e688daa2b7c785d1e8d6b9375d4413e6ea82471b1e7a61701a9d`

## Deploy verifier
1. `./scripts/deploy.sh`
2. Fill `TRANSFER_VERIFIER_ADDRESS` in the `.env` file with the output address

## Call the contract
1. `./scripts/verify.sh`


## increase the MAX_CPU_TIME_OF_ONE_TX
1. `./scripts/proposal_tx_time.sh`


## Cleanup
2. `./scripts/stop.sh`
3. `./scripts/clean.sh`
