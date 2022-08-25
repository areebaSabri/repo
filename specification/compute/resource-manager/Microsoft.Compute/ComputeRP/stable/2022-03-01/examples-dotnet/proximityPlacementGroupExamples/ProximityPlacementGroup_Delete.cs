using System;
using System.Threading.Tasks;
using Azure;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute.Models;
using Azure.ResourceManager.Resources;
using Azure.ResourceManager.Compute;

// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-03-01/examples/proximityPlacementGroupExamples/ProximityPlacementGroup_Delete.json
// this example is just showing the usage of "ProximityPlacementGroups_Delete" operation, for the dependent resources, they will have to be created separately.

// authenticate your client
ArmClient client = new ArmClient(new DefaultAzureCredential());

// this example assumes you already have this ProximityPlacementGroupResource created on azure
// for more information of creating ProximityPlacementGroupResource, please refer to the document of ProximityPlacementGroupResource
string subscriptionId = "{subscription-id}";
string resourceGroupName = "myResourceGroup";
string proximityPlacementGroupName = "myProximityPlacementGroup";
ResourceIdentifier proximityPlacementGroupResourceId = ProximityPlacementGroupResource.CreateResourceIdentifier(subscriptionId, resourceGroupName, proximityPlacementGroupName);
ProximityPlacementGroupResource proximityPlacementGroup = client.GetProximityPlacementGroupResource(proximityPlacementGroupResourceId);

// invoke the operation
await proximityPlacementGroup.DeleteAsync(WaitUntil.Completed);

Console.WriteLine($"Succeeded");
