const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes an admin rule collection.
 *
 * @summary Deletes an admin rule collection.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkManagerAdminRuleCollectionDelete.json
 */
async function deletesAnAdminRuleCollection() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "rg1";
  const networkManagerName = "testNetworkManager";
  const configurationName = "myTestSecurityConfig";
  const ruleCollectionName = "testRuleCollection";
  const force = false;
  const options = { force };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.adminRuleCollections.beginDeleteAndWait(
    resourceGroupName,
    networkManagerName,
    configurationName,
    ruleCollectionName,
    options
  );
  console.log(result);
}

deletesAnAdminRuleCollection().catch(console.error);
