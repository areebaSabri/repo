const { AzureMapsManagementClient } = require("@azure/arm-maps");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update a Maps Account. A Maps Account holds the keys which allow access to the Maps REST APIs.
 *
 * @summary Create or update a Maps Account. A Maps Account holds the keys which allow access to the Maps REST APIs.
 * x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/CreateAccount.json
 */
async function createGen1Account() {
  const subscriptionId = "21a9967a-e8a9-4656-a70b-96ff1c4d05a0";
  const resourceGroupName = "myResourceGroup";
  const accountName = "myMapsAccount";
  const mapsAccount = {
    kind: "Gen1",
    location: "eastus",
    properties: {
      cors: {
        corsRules: [
          {
            allowedOrigins: ["http://www.contoso.com", "http://www.fabrikam.com"],
          },
        ],
      },
      disableLocalAuth: false,
    },
    sku: { name: "S0" },
    tags: { test: "true" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMapsManagementClient(credential, subscriptionId);
  const result = await client.accounts.createOrUpdate(resourceGroupName, accountName, mapsAccount);
  console.log(result);
}

createGen1Account().catch(console.error);
