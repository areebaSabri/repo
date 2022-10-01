const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a service Endpoint Policies.
 *
 * @summary Creates or updates a service Endpoint Policies.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/ServiceEndpointPolicyCreate.json
 */
async function createServiceEndpointPolicy() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceEndpointPolicyName = "testPolicy";
  const parameters = { location: "westus" };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.serviceEndpointPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceEndpointPolicyName,
    parameters
  );
  console.log(result);
}

createServiceEndpointPolicy().catch(console.error);
