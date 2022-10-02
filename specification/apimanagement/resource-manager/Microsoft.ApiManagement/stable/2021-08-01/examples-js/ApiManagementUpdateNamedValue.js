const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates the specific named value.
 *
 * @summary Updates the specific named value.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementUpdateNamedValue.json
 */
async function apiManagementUpdateNamedValue() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const namedValueId = "testprop2";
  const ifMatch = "*";
  const parameters = {
    displayName: "prop3name",
    secret: false,
    tags: ["foo", "bar2"],
    value: "propValue",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.namedValue.beginUpdateAndWait(
    resourceGroupName,
    serviceName,
    namedValueId,
    ifMatch,
    parameters
  );
  console.log(result);
}

apiManagementUpdateNamedValue().catch(console.error);
