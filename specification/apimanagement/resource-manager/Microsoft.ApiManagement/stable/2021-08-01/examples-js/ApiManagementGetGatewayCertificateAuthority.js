const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get assigned Gateway Certificate Authority details.
 *
 * @summary Get assigned Gateway Certificate Authority details.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementGetGatewayCertificateAuthority.json
 */
async function apiManagementGetGatewayCertificateAuthority() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const gatewayId = "gw1";
  const certificateId = "cert1";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.gatewayCertificateAuthority.get(
    resourceGroupName,
    serviceName,
    gatewayId,
    certificateId
  );
  console.log(result);
}

apiManagementGetGatewayCertificateAuthority().catch(console.error);
