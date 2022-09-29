const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a watchlist, without its watchlist items.
 *
 * @summary Gets a watchlist, without its watchlist items.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/watchlists/GetWatchlistItemById.json
 */
async function getAWatchlistItem() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const watchlistAlias = "highValueAsset";
  const watchlistItemId = "3f8901fe-63d9-4875-9ad5-9fb3b8105797";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.watchlistItems.get(
    resourceGroupName,
    workspaceName,
    watchlistAlias,
    watchlistItemId
  );
  console.log(result);
}

getAWatchlistItem().catch(console.error);
