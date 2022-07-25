const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update a managed Cassandra data center. When updating, overwrite all properties. To update only some properties, use PATCH.
 *
 * @summary Create or update a managed Cassandra data center. When updating, overwrite all properties. To update only some properties, use PATCH.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBManagedCassandraDataCenterCreate.json
 */
async function cosmosDbManagedCassandraDataCenterCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "cassandra-prod-rg";
  const clusterName = "cassandra-prod";
  const dataCenterName = "dc1";
  const body = {
    properties: {
      base64EncodedCassandraYamlFragment:
        "Y29tcGFjdGlvbl90aHJvdWdocHV0X21iX3Blcl9zZWM6IDMyCmNvbXBhY3Rpb25fbGFyZ2VfcGFydGl0aW9uX3dhcm5pbmdfdGhyZXNob2xkX21iOiAxMDA=",
      dataCenterLocation: "West US 2",
      delegatedSubnetId:
        "/subscriptions/536e130b-d7d6-4ac7-98a5-de20d69588d2/resourceGroups/customer-vnet-rg/providers/Microsoft.Network/virtualNetworks/customer-vnet/subnets/dc1-subnet",
      nodeCount: 9,
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraDataCenters.beginCreateUpdateAndWait(
    resourceGroupName,
    clusterName,
    dataCenterName,
    body
  );
  console.log(result);
}

cosmosDbManagedCassandraDataCenterCreate().catch(console.error);
