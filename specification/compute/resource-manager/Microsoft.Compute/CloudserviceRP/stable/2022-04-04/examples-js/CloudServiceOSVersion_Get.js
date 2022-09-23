const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets properties of a guest operating system version that can be specified in the XML service configuration (.cscfg) for a cloud service.
 *
 * @summary Gets properties of a guest operating system version that can be specified in the XML service configuration (.cscfg) for a cloud service.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/CloudserviceRP/stable/2022-04-04/examples/CloudServiceOSVersion_Get.json
 */
async function getCloudServiceOSVersion() {
  const subscriptionId = "{subscription-id}";
  const location = "westus2";
  const osVersionName = "WA-GUEST-OS-3.90_202010-02";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.cloudServiceOperatingSystems.getOSVersion(location, osVersionName);
  console.log(result);
}

getCloudServiceOSVersion().catch(console.error);
