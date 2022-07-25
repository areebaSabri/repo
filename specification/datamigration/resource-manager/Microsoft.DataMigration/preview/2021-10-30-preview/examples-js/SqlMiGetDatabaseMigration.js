const { DataMigrationManagementClient } = require("@azure/arm-datamigration");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Retrieve the Database Migration resource.
 *
 * @summary Retrieve the Database Migration resource.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/SqlMiGetDatabaseMigration.json
 */
async function getDatabaseMigrationResource() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const managedInstanceName = "managedInstance1";
  const targetDbName = "db1";
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.databaseMigrationsSqlMi.get(
    resourceGroupName,
    managedInstanceName,
    targetDbName
  );
  console.log(result);
}

getDatabaseMigrationResource().catch(console.error);
