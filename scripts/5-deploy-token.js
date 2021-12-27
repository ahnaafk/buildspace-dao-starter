import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x0606bF4a29ABD0e8ddE891B6F4D27C12cb81609B");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "GoOutsideDAO Governance Token",
            symbol: "OUTSIDE",
        });
        console.log("Successfully deployed token module, address:", tokenModule.address);
    } catch (error) {
        console.error("Failed to deploy token module", error);
    }
})();