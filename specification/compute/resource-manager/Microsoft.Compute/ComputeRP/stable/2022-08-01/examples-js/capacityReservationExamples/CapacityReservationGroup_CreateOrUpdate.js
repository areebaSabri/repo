const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to The operation to create or update a capacity reservation group. When updating a capacity reservation group, only tags may be modified. Please refer to https://aka.ms/CapacityReservation for more details.
 *
 * @summary The operation to create or update a capacity reservation group. When updating a capacity reservation group, only tags may be modified. Please refer to https://aka.ms/CapacityReservation for more details.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/capacityReservationExamples/CapacityReservationGroup_CreateOrUpdate.json
 */
async function createOrUpdateACapacityReservationGroup() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const capacityReservationGroupName = "myCapacityReservationGroup";
  const parameters = {
    location: "westus",
    tags: { department: "finance" },
    zones: ["1", "2"],
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.capacityReservationGroups.createOrUpdate(
    resourceGroupName,
    capacityReservationGroupName,
    parameters
  );
  console.log(result);
}

createOrUpdateACapacityReservationGroup().catch(console.error);
