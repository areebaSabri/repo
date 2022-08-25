using System;
using System.Threading.Tasks;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute;

// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2022-01-03/examples/communityGalleryExamples/CommunityGalleryImageVersion_Get.json
// this example is just showing the usage of "CommunityGalleryImageVersions_Get" operation, for the dependent resources, they will have to be created separately.

// authenticate your client
ArmClient client = new ArmClient(new DefaultAzureCredential());

// this example assumes you already have this CommunityGalleryImageVersionResource created on azure
// for more information of creating CommunityGalleryImageVersionResource, please refer to the document of CommunityGalleryImageVersionResource
string subscriptionId = "{subscription-id}";
AzureLocation location = new AzureLocation("myLocation");
string publicGalleryName = "publicGalleryName";
string galleryImageName = "myGalleryImageName";
string galleryImageVersionName = "myGalleryImageVersionName";
ResourceIdentifier communityGalleryImageVersionResourceId = CommunityGalleryImageVersionResource.CreateResourceIdentifier(subscriptionId, location, publicGalleryName, galleryImageName, galleryImageVersionName);
CommunityGalleryImageVersionResource communityGalleryImageVersion = client.GetCommunityGalleryImageVersionResource(communityGalleryImageVersionResourceId);

// invoke the operation
CommunityGalleryImageVersionResource result = await communityGalleryImageVersion.GetAsync();

// the variable result is a resource, you could call other operations on this instance as well
// but just for demo, we get its data from this resource instance
CommunityGalleryImageVersionData resourceData = result.Data;
// for demo we just print out the id
Console.WriteLine($"Succeeded on id: {resourceData.Id}");
