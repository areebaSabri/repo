const { ComputeScheduleClient } = require("@azure/arm-computeschedule");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to virtualMachinesGetOperationErrors: getOperationErrors associated with an operation on a virtual machine
 *
 * @summary virtualMachinesGetOperationErrors: getOperationErrors associated with an operation on a virtual machine
 * x-ms-original-file: 2024-08-15-preview/ScheduledActions_VirtualMachinesGetOperationErrors_MinimumSet_Gen.json
 */
async function csScheduledActionsVirtualMachinesGetOperationErrorsMin() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "DE84A209-5715-43E7-BC76-3E208A9A82C5";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesGetOperationErrors("ggxoaxzxtdbi", {
    operationIds: ["qeicik"],
  });
  console.log(result);
}
