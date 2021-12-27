import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x33e85ae572340d69d95E281AF79B4AC75b683318",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Grass from the great outdoors",
        description: "Touch grass to be a part of GoOutsideDAO!",
        image: readFileSync("scripts/assets/grass.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
  
})()