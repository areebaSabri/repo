const { KustoManagementClient } = require("@azure/arm-kusto");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Add a list of language extensions that can run within KQL queries.
 *
 * @summary Add a list of language extensions that can run within KQL queries.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-07-07/examples/KustoClusterAddLanguageExtensions.json
 */
async function kustoClusterAddLanguageExtensions() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster";
  const languageExtensionsToAdd = {
    value: [{ languageExtensionName: "PYTHON" }, { languageExtensionName: "R" }],
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginAddLanguageExtensionsAndWait(
    resourceGroupName,
    clusterName,
    languageExtensionsToAdd
  );
  console.log(result);
}

kustoClusterAddLanguageExtensions().catch(console.error);
