const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates nat gateway tags.
 *
 * @summary Updates nat gateway tags.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NatGatewayUpdateTags.json
 */
async function updateNatGatewayTags() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const natGatewayName = "test-natGateway";
  const parameters = { tags: { tag1: "value1", tag2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.natGateways.updateTags(resourceGroupName, natGatewayName, parameters);
  console.log(result);
}

updateNatGatewayTags().catch(console.error);
