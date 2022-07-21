const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates the properties of an existing Azure Cosmos DB database account.
 *
 * @summary Updates the properties of an existing Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-05-15/examples/CosmosDBDatabaseAccountPatch.json
 */
async function cosmosDbDatabaseAccountPatch() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const updateParameters = {
    analyticalStorageConfiguration: { schemaType: "WellDefined" },
    backupPolicy: {
      type: "Periodic",
      periodicModeProperties: {
        backupIntervalInMinutes: 240,
        backupRetentionIntervalInHours: 720,
        backupStorageRedundancy: "Local",
      },
    },
    capacity: { totalThroughputLimit: 2000 },
    consistencyPolicy: {
      defaultConsistencyLevel: "BoundedStaleness",
      maxIntervalInSeconds: 10,
      maxStalenessPrefix: 200,
    },
    defaultIdentity: "FirstPartyIdentity",
    enableAnalyticalStorage: true,
    enableFreeTier: false,
    identity: {
      type: "SystemAssigned,UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/fa5fc227A624475eB696Cdd604c735bc/resourceGroups/eu2cgroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/id1":
          {},
      },
    },
    ipRules: [{ ipAddressOrRange: "23.43.230.120" }, { ipAddressOrRange: "110.12.240.0/12" }],
    isVirtualNetworkFilterEnabled: true,
    location: "westus",
    networkAclBypass: "AzureServices",
    networkAclBypassResourceIds: [
      "/subscriptions/subId/resourcegroups/rgName/providers/Microsoft.Synapse/workspaces/workspaceName",
    ],
    tags: { dept: "finance" },
    virtualNetworkRules: [
      {
        id: "/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1",
        ignoreMissingVNetServiceEndpoint: false,
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    updateParameters
  );
  console.log(result);
}

cosmosDbDatabaseAccountPatch().catch(console.error);
