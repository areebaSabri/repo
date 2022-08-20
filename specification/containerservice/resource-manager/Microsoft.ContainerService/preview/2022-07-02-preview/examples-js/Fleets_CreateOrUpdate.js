const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a Fleet.
 *
 * @summary Creates or updates a Fleet.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/Fleets_CreateOrUpdate.json
 */
async function createsOrUpdateAFleetResource() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const fleetName = "fleet-1";
  const parameters = {
    hubProfile: { dnsPrefix: "dnsprefix1" },
    location: "East US",
    tags: { archv2: "", tier: "production" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleets.beginCreateOrUpdateAndWait(
    resourceGroupName,
    fleetName,
    parameters
  );
  console.log(result);
}

createsOrUpdateAFleetResource().catch(console.error);
