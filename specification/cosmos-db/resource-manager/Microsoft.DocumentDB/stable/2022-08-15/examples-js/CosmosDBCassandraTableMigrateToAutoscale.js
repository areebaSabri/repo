const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB Cassandra table from manual throughput to autoscale
 *
 * @summary Migrate an Azure Cosmos DB Cassandra table from manual throughput to autoscale
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBCassandraTableMigrateToAutoscale.json
 */
async function cosmosDbCassandraTableMigrateToAutoscale() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspaceName";
  const tableName = "tableName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraResources.beginMigrateCassandraTableToAutoscaleAndWait(
    resourceGroupName,
    accountName,
    keyspaceName,
    tableName
  );
  console.log(result);
}

cosmosDbCassandraTableMigrateToAutoscale().catch(console.error);
