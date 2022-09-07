const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates the notebook workspace for a Cosmos DB account.
 *
 * @summary Creates the notebook workspace for a Cosmos DB account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBNotebookWorkspaceCreate.json
 */
async function cosmosDbNotebookWorkspaceCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const notebookWorkspaceName = "default";
  const notebookCreateUpdateParameters = {};
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.notebookWorkspaces.beginCreateOrUpdateAndWait(
    resourceGroupName,
    accountName,
    notebookWorkspaceName,
    notebookCreateUpdateParameters
  );
  console.log(result);
}

cosmosDbNotebookWorkspaceCreate().catch(console.error);
