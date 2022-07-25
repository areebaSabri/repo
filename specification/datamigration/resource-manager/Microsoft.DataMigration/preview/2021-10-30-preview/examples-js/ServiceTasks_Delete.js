const { DataMigrationManagementClient } = require("@azure/arm-datamigration");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to The service tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The DELETE method deletes a service task, canceling it first if it's running.
 *
 * @summary The service tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The DELETE method deletes a service task, canceling it first if it's running.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/ServiceTasks_Delete.json
 */
async function tasksDelete() {
  const subscriptionId = "fc04246f-04c5-437e-ac5e-206a19e7193f";
  const groupName = "DmsSdkRg";
  const serviceName = "DmsSdkService";
  const taskName = "DmsSdkTask";
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.serviceTasks.delete(groupName, serviceName, taskName);
  console.log(result);
}

tasksDelete().catch(console.error);
