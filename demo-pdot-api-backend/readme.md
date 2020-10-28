# [BEGINNER CHALLENGES] Back-End Javascript

* [[BEGINNER CHALLENGES] Back-End Javascript | Polkadot-Network Funded Issue Detail | Gitcoin | Gitcoin](https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/13/100023939)

![](https://i.imgur.com/YKHxIHW.png)

---

### Query latest block info from kusama ...

```shell
main $ node ./src/blkinfo.js -w wss://kusama-rpc.polkadot.io                               {
  wsUrl: 'wss://kusama-rpc.polkadot.io',
  blockHash: undefined,
  blockHeight: undefined
}
{
  "header": {
    "parentHash": "0xadbb0e3e8cfb1af125ba329599c18b5e9ca7277c2aff3a110ee5baf1b07b6199",
    "number": 4671125,
    "stateRoot": "0x3442907bb88f0a80a16775a5e34f6f1fa770917cd80a206b64f9edc6a82b8a38",
    "extrinsicsRoot": "0x712ab485d3d32bbd0546ef2975b44573144469ffc638e3d0bd04e7a39a484f6f",
    "digest": {
      "logs": [
        {
          "PreRuntime": [
            1161969986,
            "0x021102000026e5ee0f00000000"
          ]
        },
        {
          "Seal": [
            1161969986,
            "0x16c39647d70533bcc9c4c793e2ac6c6875d24b010d5a135ccb6836f00c1c595a517831a07d05a7152b277e9e1d4b62c8d8d048c2b4099a8d8956c386ed29bb84"
          ]
        }
      ]
    }
  },
  "extrinsics": [
    "0x280402000ba0aa1a6f7501"
  ]
}
```

### Query block info based on block height from kusama ...

```shell
$ node ./src/blkinfo.js -w wss://kusama-rpc.polkadot.io --block-height 100
{
  wsUrl: 'wss://kusama-rpc.polkadot.io',
  blockHash: undefined,
  blockHeight: '100'
}
{
  "header": {
    "parentHash": "0x7d9f149e05130ad2d7adc88db828eee5d32dd30598e06f7accde3505732cf120",
    "number": 100,
    "stateRoot": "0x07d185c7b8b68ce9d49c2ff3dd588c7780dcb4f38486a1166f263effcf59e8a7",
    "extrinsicsRoot": "0xb5c5efe7bb8387adc911d639e11cb44bac163ff9374c48700138ff36a842afc7",
    "digest": {
      "logs": [
        {
          "PreRuntime": [
            1161969986,
            "0x02010000005856a50f00000000"
          ]
        },
        {
          "Seal": [
            1161969986,
            "0xc69ae57563a7d53697f0d2165401a6f4041b2fc654c4a1451349f16e11d46164c604953ccf46c2284a737e0a8bc75a1f31592a3db22026a7aa369ff549442983"
          ]
        }
      ]
    }
  },
  "extrinsics": [
    "0x280402000b80ae17b36e01",
    "0x140409008901",
    "0x1004140000"
  ]
}
```

### Query block info based on block hash from kusama ...

```shell
 main  node ./src/blkinfo.js -w wss://kusama-rpc.polkadot.io -s 0xa858d97d1151cdca03034ec6273db1657cabb800a1d8783f432bb4b517830946
{
  wsUrl: 'wss://kusama-rpc.polkadot.io',
  blockHash: '0xa858d97d1151cdca03034ec6273db1657cabb800a1d8783f432bb4b517830946',
  blockHeight: undefined
}
{
  "header": {
    "parentHash": "0x563ac5c61731a2b0ca849712f306815087876b70c1fe6694b976e9183b1cebe2",
    "number": 4671067,
    "stateRoot": "0xd5c84e36b06cf37382b5f3ff3c8ba695760c8b45998d9164162b8c285aa4639b",
    "extrinsicsRoot": "0x3b63169e59d126340801723d4c6b0e7a84593787532e7004d4e7519b14c1a8ec",
    "digest": {
      "logs": [
        {
          "PreRuntime": [
            1161969986,
            "0x0227000000ece4ee0f00000000"
          ]
        },
        {
          "Seal": [
            1161969986,
            "0xfc8d7217a6796275fcdcf9352acd13a70248173e9afca4e431a035c6b0d6d6744e13fadc67e927f443e237b95f6ede8189a2293c4053f6d762144d4a66e6698b"
          ]
        }
      ]
    }
  },
  "extrinsics": [
    "0x280402000b405b156f7501"
  ]
}
```
