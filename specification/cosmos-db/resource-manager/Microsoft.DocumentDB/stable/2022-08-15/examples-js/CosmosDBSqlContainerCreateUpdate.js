const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB SQL container
 *
 * @summary Create or update an Azure Cosmos DB SQL container
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBSqlContainerCreateUpdate.json
 */
async function cosmosDbSqlContainerCreateUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const createUpdateSqlContainerParameters = {
    location: "West US",
    options: {},
    resource: {
      conflictResolutionPolicy: {
        conflictResolutionPath: "/path",
        mode: "LastWriterWins",
      },
      defaultTtl: 100,
      id: "containerName",
      indexingPolicy: {
        automatic: true,
        excludedPaths: [],
        includedPaths: [
          {
            path: "/*",
            indexes: [
              { dataType: "String", kind: "Range", precision: -1 },
              { dataType: "Number", kind: "Range", precision: -1 },
            ],
          },
        ],
        indexingMode: "consistent",
      },
      partitionKey: { kind: "Hash", paths: ["/AccountNumber"] },
      uniqueKeyPolicy: { uniqueKeys: [{ paths: ["/testPath"] }] },
    },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateSqlContainerAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    containerName,
    createUpdateSqlContainerParameters
  );
  console.log(result);
}

cosmosDbSqlContainerCreateUpdate().catch(console.error);
