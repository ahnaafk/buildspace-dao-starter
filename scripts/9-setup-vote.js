import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule("0x823aca4A58cF204972E7dDA630204F4D061400Ef");
const tokenModule = sdk.getTokenModule("0x6165267C178A03a8aeeD738A924FE31BC4AdB295");

(async () => {
    try {
        await tokenModule.grantRole("minter", voteModule.address);
        console.log("Successfully granted minter role to vote module");
    } catch (error) {
        console.error("Failed to grant minter role to vote module", error);
        process.exit(1);
    }

    try {
        const ownedTokenBalance = await tokenModule.balanceOf(process.env.WALLET_ADDRESS);
        const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
        const percent90 = ownedAmount.div(100).mul(90);

        await tokenModule.transfer(
            voteModule.address,
            percent90
        );

        console.log("Successfully transferred 90% of owned tokens to vote module");
    } catch (error) {
        console.error("Failed to transfer tokens to vote module", error);
    }
})();