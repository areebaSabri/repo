const { AzureMapsManagementClient } = require("@azure/arm-maps");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get all Creator instances for an Azure Maps Account
 *
 * @summary Get all Creator instances for an Azure Maps Account
 * x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/ListMapsCreatorsByAccount.json
 */
async function listCreatorResourcesByAccount() {
  const subscriptionId = "21a9967a-e8a9-4656-a70b-96ff1c4d05a0";
  const resourceGroupName = "myResourceGroup";
  const accountName = "myMapsAccount";
  const credential = new DefaultAzureCredential();
  const client = new AzureMapsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.creators.listByAccount(resourceGroupName, accountName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listCreatorResourcesByAccount().catch(console.error);
