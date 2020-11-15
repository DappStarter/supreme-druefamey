require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note mushroom exchange grace credit forget slim'; 
let testAccounts = [
"0x59e78be97e8c2a796a84edd40dae25b694b17c1cbaeabac5ca2c051b737cc178",
"0x317fc83b0ef941ab896b8722cacabf9b578eb3906e392884ed6a1d1e9b014c65",
"0xefa7d271c3adebbbad347ea1d767076bef8503d3dd1de75375008c4f5dbf2a0b",
"0x12c09a356fa1473e7e7d64ba368c7e2ee23f635ad4fa141f5dcfbe4ef382a2a7",
"0x6178cd7be81a51c088010e1ef5b37a13cb2a091c88308e13233f1ec88e6d0f32",
"0xff31c1e053308a5047b95fb3c36fff9f213e7203c32e0eef6933e27b997aeedc",
"0x14878d28afa4e62b8091f676b9e18277f6161300bcddd449805826df73990bfc",
"0xc7e66cb7c7eed58d96d189a0644a21dc190bfb4fc21e963eef01719b8d09b7f5",
"0xa063ed29595b004367c5579c3cb7461acca42fca73de7ac56b8296b6547aef65",
"0x4dd5ad5dde21aa82f36f24ba516a9a86a5c6bc1a8f99e8907bb773cdff1143bd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
