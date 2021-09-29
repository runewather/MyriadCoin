const Myriad = artifacts.require("Myriad");

contract("Myriad", (accounts) => {
  before(async () => {
    myriad = await Myriad.deployed();
  });

  it("Gives the owner of the token 1M tokens", async () => {
    let balance = await myriad.balanceOf(accounts[0]);
  });
});
