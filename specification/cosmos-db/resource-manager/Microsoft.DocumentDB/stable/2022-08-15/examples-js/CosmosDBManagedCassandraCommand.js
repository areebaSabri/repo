const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Invoke a command like nodetool for cassandra maintenance
 *
 * @summary Invoke a command like nodetool for cassandra maintenance
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBManagedCassandraCommand.json
 */
async function cosmosDbManagedCassandraCommand() {
  const subscriptionId = "subid";
  const resourceGroupName = "cassandra-prod-rg";
  const clusterName = "cassandra-prod";
  const body = {
    command: "nodetool status",
    host: "10.0.1.12",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraClusters.beginInvokeCommandAndWait(
    resourceGroupName,
    clusterName,
    body
  );
  console.log(result);
}

cosmosDbManagedCassandraCommand().catch(console.error);
