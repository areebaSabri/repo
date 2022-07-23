const { FluidRelayManagementClient } = require("@azure/arm-fluidrelay");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a Fluid Relay server.
 *
 * @summary Get a Fluid Relay server.
 * x-ms-original-file: specification/fluidrelay/resource-manager/Microsoft.FluidRelay/stable/2022-06-01/examples/FluidRelayServers_Get.json
 */
async function getFluidRelayServerDetails() {
  const subscriptionId = "xxxx-xxxx-xxxx-xxxx";
  const resourceGroup = "myResourceGroup";
  const fluidRelayServerName = "myFluidRelayServer";
  const credential = new DefaultAzureCredential();
  const client = new FluidRelayManagementClient(credential, subscriptionId);
  const result = await client.fluidRelayServers.get(resourceGroup, fluidRelayServerName);
  console.log(result);
}

getFluidRelayServerDetails().catch(console.error);
