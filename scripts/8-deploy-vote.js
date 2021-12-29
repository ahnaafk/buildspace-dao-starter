import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule("0x0606bF4a29ABD0e8ddE891B6F4D27C12cb81609B");

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            name: "GoOutsideDAO's Liberating Proposals",
            votingTokenAddress: "0x6165267C178A03a8aeeD738A924FE31BC4AdB295",
            proposalStartWaitTimeInSeconds: 0,
            proposalVotingTimeInSeconds: 24 * 60 * 60,
            votingQuorumFraction: 0,
            minimumNumberOfTokensNeededToPropose: "5",
        })

        console.log("Successfully deployed vote module, address:", voteModule.address);
    } catch (error) {
        console.error("Failed to deploy vote module", error);
    }
})();