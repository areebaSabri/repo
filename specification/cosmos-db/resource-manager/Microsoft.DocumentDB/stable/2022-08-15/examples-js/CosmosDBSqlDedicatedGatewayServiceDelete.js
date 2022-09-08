const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes service with the given serviceName.
 *
 * @summary Deletes service with the given serviceName.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBSqlDedicatedGatewayServiceDelete.json
 */
async function sqlDedicatedGatewayServiceDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const serviceName = "SqlDedicatedGateway";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.service.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    serviceName
  );
  console.log(result);
}

sqlDedicatedGatewayServiceDelete().catch(console.error);
