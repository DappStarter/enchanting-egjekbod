require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss grace deputy off stove'; 
let testAccounts = [
"0x4a718c3dd5c99f8845fd1e7018cd272bd770568fdec6a8e84bea830ada24836a",
"0x92ea0376db81db450139f1cd7ab99d23500be5001e09ee8d0eb626ba1c459ded",
"0xa127263b7d97bcbc04a5107fa314be1be663162548212c7199993dce0cc1dae9",
"0xdf45caa7d4c351d43eae6a2cbebfed4f99d8aa77af8352a2c0534916c7066c49",
"0xfc3734905a8579089c41d06271fb99645795dda99046bec57be98cb1fbb1aaeb",
"0x1f560e1fb20cfe4ac286dbdc975ab86378b102e89fa18ada9dc623288ec78956",
"0x6286e82086c9e7509ba5c0c8a35867ea0dc744814f395140103ac6ba350e8d3a",
"0xeb1ea7f33f1f2d44c8fab7be417f59883544d28a3db9f62991d72f2294fa8ead",
"0x3bcbbd459a0c185885238d83e25bd235c19a317edac08fe786677b2dce464e93",
"0x97997beda7193a8cc9f7df0fc7062a3b4c5968aa94af3bd181ebc970b12a6406"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
