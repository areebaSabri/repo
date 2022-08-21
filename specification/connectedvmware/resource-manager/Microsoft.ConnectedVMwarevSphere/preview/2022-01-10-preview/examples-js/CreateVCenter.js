const { AzureArcVMwareManagementServiceAPI } = require("@azure/arm-connectedvmware");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create Or Update vCenter.
 *
 * @summary Create Or Update vCenter.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/CreateVCenter.json
 */
async function createVCenter() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const vcenterName = "ContosoVCenter";
  const body = {
    credentials: { password: "<password>", username: "tempuser" },
    extendedLocation: {
      name: "/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso",
      type: "customLocation",
    },
    fqdn: "ContosoVMware.contoso.com",
    location: "East US",
    port: 1234,
  };
  const options = { body };
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential, subscriptionId);
  const result = await client.vCenters.beginCreateAndWait(resourceGroupName, vcenterName, options);
  console.log(result);
}

createVCenter().catch(console.error);
