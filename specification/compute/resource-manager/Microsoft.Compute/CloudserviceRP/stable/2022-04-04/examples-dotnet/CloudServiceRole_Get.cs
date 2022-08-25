using System;
using System.Threading.Tasks;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute;

// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/CloudserviceRP/stable/2022-04-04/examples/CloudServiceRole_Get.json
// this example is just showing the usage of "CloudServiceRoles_Get" operation, for the dependent resources, they will have to be created separately.

// authenticate your client
ArmClient client = new ArmClient(new DefaultAzureCredential());

// this example assumes you already have this CloudServiceResource created on azure
// for more information of creating CloudServiceResource, please refer to the document of CloudServiceResource
string subscriptionId = "{subscription-id}";
string resourceGroupName = "ConstosoRG";
string cloudServiceName = "{cs-name}";
ResourceIdentifier cloudServiceResourceId = CloudServiceResource.CreateResourceIdentifier(subscriptionId, resourceGroupName, cloudServiceName);
CloudServiceResource cloudService = client.GetCloudServiceResource(cloudServiceResourceId);

// get the collection of this CloudServiceRoleResource
CloudServiceRoleCollection collection = cloudService.GetCloudServiceRoles();

// invoke the operation
string roleName = "{role-name}";
bool result = await collection.ExistsAsync(roleName);

Console.WriteLine($"Succeeded: {result}");
