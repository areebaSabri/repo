const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update a gallery Application Definition.
 *
 * @summary Update a gallery Application Definition.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2022-01-03/examples/galleryExamples/GalleryApplication_Update.json
 */
async function updateASimpleGalleryApplication() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryApplicationName = "myGalleryApplicationName";
  const galleryApplication = {
    description: "This is the gallery application description.",
    eula: "This is the gallery application EULA.",
    privacyStatementUri: "myPrivacyStatementUri}",
    releaseNoteUri: "myReleaseNoteUri",
    supportedOSType: "Windows",
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryApplications.beginUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryApplicationName,
    galleryApplication
  );
  console.log(result);
}

updateASimpleGalleryApplication().catch(console.error);
