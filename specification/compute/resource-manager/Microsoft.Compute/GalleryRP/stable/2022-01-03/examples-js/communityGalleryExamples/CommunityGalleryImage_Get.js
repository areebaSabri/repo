const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a community gallery image.
 *
 * @summary Get a community gallery image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2022-01-03/examples/communityGalleryExamples/CommunityGalleryImage_Get.json
 */
async function getACommunityGalleryImage() {
  const subscriptionId = "{subscription-id}";
  const location = "myLocation";
  const publicGalleryName = "publicGalleryName";
  const galleryImageName = "myGalleryImageName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.communityGalleryImages.get(
    location,
    publicGalleryName,
    galleryImageName
  );
  console.log(result);
}

getACommunityGalleryImage().catch(console.error);
