const { DataMigrationManagementClient } = require("@azure/arm-datamigration");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to This method updates an existing file.
 *
 * @summary This method updates an existing file.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/Files_Update.json
 */
async function filesUpdate() {
  const subscriptionId = "fc04246f-04c5-437e-ac5e-206a19e7193f";
  const groupName = "DmsSdkRg";
  const serviceName = "DmsSdkService";
  const projectName = "DmsSdkProject";
  const fileName = "x114d023d8";
  const parameters = {
    properties: { filePath: "DmsSdkFilePath/DmsSdkFile.sql" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.files.update(
    groupName,
    serviceName,
    projectName,
    fileName,
    parameters
  );
  console.log(result);
}

filesUpdate().catch(console.error);
