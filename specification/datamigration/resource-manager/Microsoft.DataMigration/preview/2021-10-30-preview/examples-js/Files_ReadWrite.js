const { DataMigrationManagementClient } = require("@azure/arm-datamigration");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to This method is used for requesting information for reading and writing the file content.
 *
 * @summary This method is used for requesting information for reading and writing the file content.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/Files_ReadWrite.json
 */
async function filesList() {
  const subscriptionId = "fc04246f-04c5-437e-ac5e-206a19e7193f";
  const groupName = "DmsSdkRg";
  const serviceName = "DmsSdkService";
  const projectName = "DmsSdkProject";
  const fileName = "x114d023d8";
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.files.readWrite(groupName, serviceName, projectName, fileName);
  console.log(result);
}

filesList().catch(console.error);
