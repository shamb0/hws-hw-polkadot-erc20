const { ApiPromise, WsProvider } = require('@polkadot/api');
const program = require('commander');

const CFG_DEF_NODE_WS_URL = 'ws://127.0.0.1:9944';

async function queryBlockInfo(opts) {

    let provider = {}

    if ( opts.wsUrl === 'undefined' ) {
        provider = new WsProvider(CFG_DEF_NODE_WS_URL);
    } else {
        provider = new WsProvider(opts.wsUrl);
    }

    const api = await ApiPromise.create({ provider });
    const chain = api.rpc.chain;
    let rval = {}

    if (opts.blockHash) {
        // Query blockinfo for given blockhash
        rval = await chain.getBlock(opts.blockHash);
    } else if (opts.blockHeight) {
        // Query blockinfo for given block height
        let hash = await chain.getBlockHash(opts.blockHeight);
        rval = await chain.getBlock(hash);
    } else {
        // Query blockinfo of latest blocks
        rval = await chain.getBlock();
    }

    return rval;
}

// Example usage ...
// node src/blkinfo.js -w wss://rpc.polkadot.io
// node src/blkinfo.js -w wss://rpc.polkadot.io --block-hash 0xe178682deb8600d3c1294dc32d80cd64826b18cf9b921f82c7a99470282dbc55
// node src/blkinfo.js -w wss://kusama-rpc.polkadot.io --block-height 100
program
    .option('-w, --ws-url <wsurl>', 'WsProvider URL ( Default :: ws://127.0.0.1:9944 )')
    .option('-s, --block-hash <hash>', 'block hash')
    .option('-n, --block-height <number>', 'block height')

program.parse(process.argv);

console.log(program.opts());

queryBlockInfo(program.opts()).then(b => {
    console.log(JSON.stringify(b.block, null, 2));
}).catch(console.error).finally(() => process.exit());
