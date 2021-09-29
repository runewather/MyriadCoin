const Myriad = artifacts.require("Myriad");

contract("Myriad", (accounts) => {
  let myriad = null;
  before(async () => {
    myriad = await Myriad.deployed();
  });

  it("Gives the owner of the token 100M tokens", async () => {
    let balance = await myriad.balanceOf(accounts[0]);
    balance = web3.utils.fromWei(balance, "ether");
    assert.equal(
      balance,
      "100000000",
      "Balance should be 100M for contract creator"
    );
  });

  it("Can transfer tokens between accounts", async () => {
    let amount = web3.utils.toWei("100", "ether");
    await myriad.transfer(accounts[1], amount, { from: accounts[0] });

    let balance = await myriad.balanceOf(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    assert.equal(
      balance,
      "100",
      "Balance should be 100 for the account recipient"
    );
  });
});
