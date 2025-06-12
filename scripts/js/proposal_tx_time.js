
async function executeProposal() {
    var TronWeb = require('tronweb');
    var tronWeb = new TronWeb({
        fullNode: process.env.FULL_NODE_URL,
        solidityNode: process.env.SOLIDITY_NODE_URL,
        privateKey: process.env.PRIVATE_KEY,
    })

    var unsignedProposal1Txn = await tronWeb.transactionBuilder.createProposal([{ "key": 13, "value": 180 }], "41928c9af0651632157ef27a2cf17ca72c575a4d21");
    var signedProposal1Txn = await tronWeb.trx.sign(unsignedProposal1Txn, process.env.PRIVATE_KEY);
    var receipt1 = await tronWeb.trx.sendRawTransaction(signedProposal1Txn);
    console.log(receipt1);

    setTimeout(async function () {
        console.log("Vote proposal!")
        var unsignedVoteP1Txn = await tronWeb.transactionBuilder.voteProposal(2, true, tronWeb.defaultAddress.hex)
        var signedVoteP1Txn = await tronWeb.trx.sign(unsignedVoteP1Txn, process.env.PRIVATE_KEY);
        var rtn1 = await tronWeb.trx.sendRawTransaction(signedVoteP1Txn);
        console.log(rtn1);
    }, 1000)
}

executeProposal().catch(error => console.log(error));
