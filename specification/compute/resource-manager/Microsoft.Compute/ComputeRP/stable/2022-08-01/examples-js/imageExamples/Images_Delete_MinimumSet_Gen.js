const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes an Image.
 *
 * @summary Deletes an Image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/imageExamples/Images_Delete_MinimumSet_Gen.json
 */
async function imagesDeleteMinimumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const imageName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.images.beginDeleteAndWait(resourceGroupName, imageName);
  console.log(result);
}

imagesDeleteMinimumSetGen().catch(console.error);
