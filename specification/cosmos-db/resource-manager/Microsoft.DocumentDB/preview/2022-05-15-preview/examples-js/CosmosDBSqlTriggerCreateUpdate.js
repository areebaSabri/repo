const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB SQL trigger
 *
 * @summary Create or update an Azure Cosmos DB SQL trigger
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBSqlTriggerCreateUpdate.json
 */
async function cosmosDbSqlTriggerCreateUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const triggerName = "triggerName";
  const createUpdateSqlTriggerParameters = {
    options: {},
    resource: {
      body: "body",
      id: "triggerName",
      triggerOperation: "triggerOperation",
      triggerType: "triggerType",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateSqlTriggerAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    containerName,
    triggerName,
    createUpdateSqlTriggerParameters
  );
  console.log(result);
}

cosmosDbSqlTriggerCreateUpdate().catch(console.error);
