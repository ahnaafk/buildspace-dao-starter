import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule("0x6165267C178A03a8aeeD738A924FE31BC4AdB295");

(async () => {
    try {
        console.log(
            "Roles that exist right now: ", 
        await tokenModule.getAllRoleMembers()
        );

        await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);

        console.log(
            "Roles aver revoking ourselves: ",
            await tokenModule.getAllRoleMembers()
        );
        console.log("Successfully revoked our roles from the ERC-20 contract");
    } catch (error) {
        console.error("Failed to revoke our roles from the ERC-20 contract", error);
        process.exit(1);
    }
})();