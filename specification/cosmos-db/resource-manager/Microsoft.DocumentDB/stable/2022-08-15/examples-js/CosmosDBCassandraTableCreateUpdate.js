const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB Cassandra Table
 *
 * @summary Create or update an Azure Cosmos DB Cassandra Table
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBCassandraTableCreateUpdate.json
 */
async function cosmosDbCassandraTableCreateUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspaceName";
  const tableName = "tableName";
  const createUpdateCassandraTableParameters = {
    location: "West US",
    options: {},
    resource: {
      schema: {
        clusterKeys: [{ name: "columnA", orderBy: "Asc" }],
        columns: [{ name: "columnA", type: "Ascii" }],
        partitionKeys: [{ name: "columnA" }],
      },
      defaultTtl: 100,
      id: "tableName",
    },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraResources.beginCreateUpdateCassandraTableAndWait(
    resourceGroupName,
    accountName,
    keyspaceName,
    tableName,
    createUpdateCassandraTableParameters
  );
  console.log(result);
}

cosmosDbCassandraTableCreateUpdate().catch(console.error);
