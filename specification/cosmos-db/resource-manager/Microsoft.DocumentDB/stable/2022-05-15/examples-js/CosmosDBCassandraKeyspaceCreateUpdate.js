const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB Cassandra keyspace
 *
 * @summary Create or update an Azure Cosmos DB Cassandra keyspace
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-05-15/examples/CosmosDBCassandraKeyspaceCreateUpdate.json
 */
async function cosmosDbCassandraKeyspaceCreateUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspaceName";
  const createUpdateCassandraKeyspaceParameters = {
    location: "West US",
    options: {},
    resource: { id: "keyspaceName" },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraResources.beginCreateUpdateCassandraKeyspaceAndWait(
    resourceGroupName,
    accountName,
    keyspaceName,
    createUpdateCassandraKeyspaceParameters
  );
  console.log(result);
}

cosmosDbCassandraKeyspaceCreateUpdate().catch(console.error);
