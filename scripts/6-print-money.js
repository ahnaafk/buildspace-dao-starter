import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule("0x6165267C178A03a8aeeD738A924FE31BC4AdB295");

(async () => {
    try {
        const amount = 1_000_000;
        const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);

        await tokenModule.mint(amountWith18Decimals);
        const totalSupply = await tokenModule.totalSupply();

        console.log("There now is ", ethers.utils.formatUnits(totalSupply, 18), "$OUTSIDE tokens");
    } catch (error) {
        console.error("Failed to mint tokens", error);
    }
})();