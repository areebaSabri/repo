const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes the notebook workspace for a Cosmos DB account.
 *
 * @summary Deletes the notebook workspace for a Cosmos DB account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-05-15/examples/CosmosDBNotebookWorkspaceDelete.json
 */
async function cosmosDbNotebookWorkspaceDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const notebookWorkspaceName = "default";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.notebookWorkspaces.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    notebookWorkspaceName
  );
  console.log(result);
}

cosmosDbNotebookWorkspaceDelete().catch(console.error);
