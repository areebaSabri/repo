const { DataMigrationManagementClient } = require("@azure/arm-datamigration");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to The service tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The PATCH method updates an existing service task, but since service tasks have no mutable custom properties, there is little reason to do so.
 *
 * @summary The service tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The PATCH method updates an existing service task, but since service tasks have no mutable custom properties, there is little reason to do so.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/ServiceTasks_Update.json
 */
async function tasksUpdate() {
  const subscriptionId = "fc04246f-04c5-437e-ac5e-206a19e7193f";
  const groupName = "DmsSdkRg";
  const serviceName = "DmsSdkService";
  const taskName = "DmsSdkTask";
  const parameters = {
    properties: {
      input: { serverVersion: "NA" },
      taskType: "Service.Check.OCI",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.serviceTasks.update(groupName, serviceName, taskName, parameters);
  console.log(result);
}

tasksUpdate().catch(console.error);
