const { AzureMachineLearningWorkspaces } = require("@azure/arm-machinelearning");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update datastore.
 *
 * @summary Create or update datastore.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2022-05-01/examples/Datastore/AzureBlobWAccountKey/createOrUpdate.json
 */
async function createOrUpdateDatastoreAzureBlobWOrAccountKey() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "test-rg";
  const workspaceName = "my-aml-workspace";
  const name = "string";
  const skipValidation = false;
  const body = {
    properties: {
      description: "string",
      accountName: "string",
      containerName: "string",
      credentials: {
        credentialsType: "AccountKey",
        secrets: { key: "string", secretsType: "AccountKey" },
      },
      datastoreType: "AzureBlob",
      endpoint: "core.windows.net",
      properties: {},
      tags: { string: "string" },
      protocol: "https",
    },
  };
  const options = { skipValidation };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const result = await client.datastores.createOrUpdate(
    resourceGroupName,
    workspaceName,
    name,
    body,
    options
  );
  console.log(result);
}

createOrUpdateDatastoreAzureBlobWOrAccountKey().catch(console.error);
