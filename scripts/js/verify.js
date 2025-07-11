
async function callVerfier() {
  var TronWeb = require('tronweb');
  var tronWeb = new TronWeb({
    fullNode: process.env.FULL_NODE_URL,
    solidityNode: process.env.SOLIDITY_NODE_URL,
    privateKey: process.env.PRIVATE_KEY,
  })

  let abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_verifierAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "counter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "verifier",
      "outputs": [
        {
          "internalType": "contract TransferVerifier",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[5]",
          "name": "publicInputs",
          "type": "uint256[5]"
        },
        {
          "internalType": "uint256[8]",
          "name": "proof",
          "type": "uint256[8]"
        }
      ],
      "name": "verifyAndCount",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  console.log("TRANSFER_VERIFIER_ADDRESS: " + process.env.TRANSFER_CONTRACT_ADDRESS);

  let contract = await tronWeb.contract(abi, process.env.TRANSFER_CONTRACT_ADDRESS);
  let before_counter = await contract.getCounter().call();
  console.log("befere counter: " + before_counter);

  let result = await contract.verifyAndCount(
    [
      "410187940904267791665857625594021464304867517571189176088693585418403627175",
      "3582932279793408241095145848517164196468279227198151416866003392249976328215",
      "21702782062704102408149255137659156834040101148294719406156063531394617768752",
      "458964024542843322412024634467191796783627388968596258037504",
      "1105154793589499054101509063059520053678357711567632030398761789118900390304"
    ], [
    "17319632901362089667297833381115050472198619632678725143485052131880736564716",
    "20217952180782984327874966839451172866880046964759060634104328470666346490787",
    "14675072293281706791212610449476963932780136199834552157253791069835791205313",
    "11523869594945451880407802780789187832894590986555492595351670286111658956891",
    "3618836117018041122057960110621015024190242066995639123523823804179020820127",
    "17452347979391447598200144953804022165728450595367847105208004839301667143347",
    "10758418988168490454233654079316113438289985487422580576512164625214747833303",
    "16113585132297177719187882899369575704186199591529360947329945124938113973184"
  ]
  ).send();
  console.log("result: " + result);

  let after_counter = await contract.getCounter().call();
  console.log("after counter: " + after_counter);
}

callVerfier().catch(error => console.log(error));
