
# [INTERMEDIATE CHALLENGE] Smart contracts - write an ERC-20 smart contract with ink!

![](https://i.imgur.com/3BjZXSe.png)

![](https://i.imgur.com/OyriREQ.png)

![](https://i.imgur.com/q4tKtjC.png)

![](https://i.imgur.com/57GkCf7.png)

![](https://i.imgur.com/FRkO8ID.png)

---

## running status of template node 

![](https://i.imgur.com/HCA3OI1.png)

---

## erc20 example generated wasm & json files

```shell
$ tree -L 1 ./target
./target
├── debug
├── erc20.wasm
├── metadata.json
├── release
├── rls
├── sysroot
└── wasm32-unknown-unknown

5 directories, 2 files
```

```shell=cargo +nightly test
    Finished test [unoptimized + debuginfo] target(s) in 0.04s
     Running target/debug/deps/erc20-27fc292f1f670da0

running 6 tests
test erc20::tests::total_supply_works ... ok
test erc20::tests::new_works ... ok
test erc20::tests::invalid_transfer_should_fail ... ok
test erc20::tests::balance_of_works ... ok
test erc20::tests::transfer_works ... ok
test erc20::tests::transfer_from_works ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out

```

---
