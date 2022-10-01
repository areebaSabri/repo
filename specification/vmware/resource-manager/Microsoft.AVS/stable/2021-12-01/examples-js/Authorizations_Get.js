const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get an ExpressRoute Circuit Authorization by name in a private cloud
 *
 * @summary Get an ExpressRoute Circuit Authorization by name in a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/Authorizations_Get.json
 */
async function authorizationsGet() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const authorizationName = "authorization1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.authorizations.get(
    resourceGroupName,
    privateCloudName,
    authorizationName
  );
  console.log(result);
}

authorizationsGet().catch(console.error);
