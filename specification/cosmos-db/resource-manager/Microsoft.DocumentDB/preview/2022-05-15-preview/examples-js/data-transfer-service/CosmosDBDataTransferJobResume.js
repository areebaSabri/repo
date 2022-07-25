const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Resumes a Data Transfer Job.
 *
 * @summary Resumes a Data Transfer Job.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/data-transfer-service/CosmosDBDataTransferJobResume.json
 */
async function cosmosDbDataTransferJobCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const jobName = "j1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.dataTransferJobs.resume(resourceGroupName, accountName, jobName);
  console.log(result);
}

cosmosDbDataTransferJobCreate().catch(console.error);
