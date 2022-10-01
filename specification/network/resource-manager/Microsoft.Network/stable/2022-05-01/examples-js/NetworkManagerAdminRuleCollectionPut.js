const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates an admin rule collection.
 *
 * @summary Creates or updates an admin rule collection.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkManagerAdminRuleCollectionPut.json
 */
async function createOrUpdateAnAdminRuleCollection() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "rg1";
  const networkManagerName = "testNetworkManager";
  const configurationName = "myTestSecurityConfig";
  const ruleCollectionName = "testRuleCollection";
  const ruleCollection = {
    description: "A sample policy",
    appliesToGroups: [
      {
        networkGroupId:
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager/networkGroups/testGroup",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.adminRuleCollections.createOrUpdate(
    resourceGroupName,
    networkManagerName,
    configurationName,
    ruleCollectionName,
    ruleCollection
  );
  console.log(result);
}

createOrUpdateAnAdminRuleCollection().catch(console.error);
