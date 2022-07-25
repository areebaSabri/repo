const { DataMigrationManagementClient } = require("@azure/arm-datamigration");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The PATCH method updates an existing task, but since tasks have no mutable custom properties, there is little reason to do so.
 *
 * @summary The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The PATCH method updates an existing task, but since tasks have no mutable custom properties, there is little reason to do so.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/Tasks_Update.json
 */
async function tasksUpdate() {
  const subscriptionId = "fc04246f-04c5-437e-ac5e-206a19e7193f";
  const groupName = "DmsSdkRg";
  const serviceName = "DmsSdkService";
  const projectName = "DmsSdkProject";
  const taskName = "DmsSdkTask";
  const parameters = {
    properties: {
      input: {
        targetConnectionInfo: {
          type: "SqlConnectionInfo",
          authentication: "SqlAuthentication",
          dataSource: "ssma-test-server.database.windows.net",
          encryptConnection: true,
          password: "testpassword",
          trustServerCertificate: true,
          userName: "testuser",
        },
      },
      taskType: "ConnectToTarget.SqlDb",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.tasks.update(
    groupName,
    serviceName,
    projectName,
    taskName,
    parameters
  );
  console.log(result);
}

tasksUpdate().catch(console.error);
