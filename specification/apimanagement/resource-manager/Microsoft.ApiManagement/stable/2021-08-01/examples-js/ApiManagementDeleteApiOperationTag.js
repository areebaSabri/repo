const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Detach the tag from the Operation.
 *
 * @summary Detach the tag from the Operation.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementDeleteApiOperationTag.json
 */
async function apiManagementDeleteApiOperationTag() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "59d5b28d1f7fab116c282650";
  const operationId = "59d5b28d1f7fab116c282651";
  const tagId = "59d5b28e1f7fab116402044e";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.tag.detachFromOperation(
    resourceGroupName,
    serviceName,
    apiId,
    operationId,
    tagId
  );
  console.log(result);
}

apiManagementDeleteApiOperationTag().catch(console.error);
