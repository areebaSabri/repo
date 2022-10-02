const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Checks that Group entity specified by identifier is associated with the Product entity.
 *
 * @summary Checks that Group entity specified by identifier is associated with the Product entity.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementHeadProductGroup.json
 */
async function apiManagementHeadProductGroup() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const productId = "5931a75ae4bbd512a88c680b";
  const groupId = "59306a29e4bbd510dc24e5f9";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.productGroup.checkEntityExists(
    resourceGroupName,
    serviceName,
    productId,
    groupId
  );
  console.log(result);
}

apiManagementHeadProductGroup().catch(console.error);
