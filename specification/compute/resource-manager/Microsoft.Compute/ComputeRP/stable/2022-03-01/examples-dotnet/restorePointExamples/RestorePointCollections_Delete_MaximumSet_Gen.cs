using System;
using System.Threading.Tasks;
using Azure;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute.Models;
using Azure.ResourceManager.Resources;
using Azure.ResourceManager.Compute;
// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-03-01/examples/restorePointExamples/RestorePointCollections_Delete_MaximumSet_Gen.json
// this example is just showing the usage of "RestorePointCollections_Delete" operation, for the dependent resources, they will have to be created separately.
            
// authenticate your client
ArmClient client = new ArmClient(new DefaultAzureCredential());
            
// this example assumes you already have this RestorePointGroupResource created on azure
// for more information of creating RestorePointGroupResource, please refer to the document of RestorePointGroupResource
string subscriptionId = "{subscription-id}";
string resourceGroupName = "rgcompute";
string restorePointGroupName = "aaaaaaaaaaaaaaaaa";
ResourceIdentifier restorePointGroupResourceId = RestorePointGroupResource.CreateResourceIdentifier(subscriptionId, resourceGroupName, restorePointGroupName);
RestorePointGroupResource restorePointGroup = client.GetRestorePointGroupResource(restorePointGroupResourceId);
            
// invoke the operation
await restorePointGroup.DeleteAsync(WaitUntil.Completed);
            
Console.WriteLine($"Succeeded");
