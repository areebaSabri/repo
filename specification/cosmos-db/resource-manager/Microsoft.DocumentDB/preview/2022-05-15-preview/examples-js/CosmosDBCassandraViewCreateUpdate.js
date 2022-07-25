const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB Cassandra View
 *
 * @summary Create or update an Azure Cosmos DB Cassandra View
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBCassandraViewCreateUpdate.json
 */
async function cosmosDbCassandraViewCreateUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspacename";
  const viewName = "viewname";
  const createUpdateCassandraViewParameters = {
    options: {},
    resource: {
      id: "viewname",
      viewDefinition:
        "SELECT columna, columnb, columnc FROM keyspacename.srctablename WHERE columna IS NOT NULL AND columnc IS NOT NULL PRIMARY (columnc, columna)",
    },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraResources.beginCreateUpdateCassandraViewAndWait(
    resourceGroupName,
    accountName,
    keyspaceName,
    viewName,
    createUpdateCassandraViewParameters
  );
  console.log(result);
}

cosmosDbCassandraViewCreateUpdate().catch(console.error);
