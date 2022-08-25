using System;
using System.Threading.Tasks;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute;

// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2022-01-03/examples/sharedGalleryExamples/SharedGalleryImageVersions_List.json
// this example is just showing the usage of "SharedGalleryImageVersions_List" operation, for the dependent resources, they will have to be created separately.

// authenticate your client
ArmClient client = new ArmClient(new DefaultAzureCredential());

// this example assumes you already have this SharedGalleryImageResource created on azure
// for more information of creating SharedGalleryImageResource, please refer to the document of SharedGalleryImageResource
string subscriptionId = "{subscription-id}";
AzureLocation location = new AzureLocation("myLocation");
string galleryUniqueName = "galleryUniqueName";
string galleryImageName = "myGalleryImageName";
ResourceIdentifier sharedGalleryImageResourceId = SharedGalleryImageResource.CreateResourceIdentifier(subscriptionId, location, galleryUniqueName, galleryImageName);
SharedGalleryImageResource sharedGalleryImage = client.GetSharedGalleryImageResource(sharedGalleryImageResourceId);

// get the collection of this SharedGalleryImageVersionResource
SharedGalleryImageVersionCollection collection = sharedGalleryImage.GetSharedGalleryImageVersions();

// invoke the operation and iterate over the result
await foreach (SharedGalleryImageVersionResource item in collection.GetAllAsync())
{
    // the variable item is a resource, you could call other operations on this instance as well
    // but just for demo, we get its data from this resource instance
    SharedGalleryImageVersionData resourceData = item.Data;
    // for demo we just print out the id
    Console.WriteLine($"Succeeded on id: {resourceData.Id}");
}

Console.WriteLine($"Succeeded");
