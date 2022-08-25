using System;
using System.Threading.Tasks;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute;

// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2022-01-03/examples/sharedGalleryExamples/SharedGalleryImageVersion_Get.json
// this example is just showing the usage of "SharedGalleryImageVersions_Get" operation, for the dependent resources, they will have to be created separately.

// authenticate your client
ArmClient client = new ArmClient(new DefaultAzureCredential());

// this example assumes you already have this SharedGalleryImageVersionResource created on azure
// for more information of creating SharedGalleryImageVersionResource, please refer to the document of SharedGalleryImageVersionResource
string subscriptionId = "{subscription-id}";
AzureLocation location = new AzureLocation("myLocation");
string galleryUniqueName = "galleryUniqueName";
string galleryImageName = "myGalleryImageName";
string galleryImageVersionName = "myGalleryImageVersionName";
ResourceIdentifier sharedGalleryImageVersionResourceId = SharedGalleryImageVersionResource.CreateResourceIdentifier(subscriptionId, location, galleryUniqueName, galleryImageName, galleryImageVersionName);
SharedGalleryImageVersionResource sharedGalleryImageVersion = client.GetSharedGalleryImageVersionResource(sharedGalleryImageVersionResourceId);

// invoke the operation
SharedGalleryImageVersionResource result = await sharedGalleryImageVersion.GetAsync();

// the variable result is a resource, you could call other operations on this instance as well
// but just for demo, we get its data from this resource instance
SharedGalleryImageVersionData resourceData = result.Data;
// for demo we just print out the id
Console.WriteLine($"Succeeded on id: {resourceData.Id}");
