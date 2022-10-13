const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get all workload Profile States for a Premium Managed Environment.
 *
 * @summary Get all workload Profile States for a Premium Managed Environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ManagedEnvironments_ListWorkloadProfileStates.json
 */
async function listEnvironmentsBySubscription() {
  const subscriptionId = "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName = "examplerg";
  const environmentName = "jlaw-demo1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedEnvironments.listWorkloadProfileStates(
    resourceGroupName,
    environmentName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listEnvironmentsBySubscription().catch(console.error);
