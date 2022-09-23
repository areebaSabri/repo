const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a shared gallery by subscription id or tenant id.
 *
 * @summary Get a shared gallery by subscription id or tenant id.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2022-01-03/examples/sharedGalleryExamples/SharedGallery_Get.json
 */
async function getASharedGallery() {
  const subscriptionId = "{subscription-id}";
  const location = "myLocation";
  const galleryUniqueName = "galleryUniqueName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.sharedGalleries.get(location, galleryUniqueName);
  console.log(result);
}

getASharedGallery().catch(console.error);
