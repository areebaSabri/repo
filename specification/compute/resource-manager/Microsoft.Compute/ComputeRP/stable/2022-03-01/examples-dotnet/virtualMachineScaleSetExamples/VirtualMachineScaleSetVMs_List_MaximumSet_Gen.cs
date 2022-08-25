using System;
using System.Threading.Tasks;
using Azure;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute.Models;
using Azure.ResourceManager.Resources.Models;
using Azure.ResourceManager.Compute;
// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-03-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSetVMs_List_MaximumSet_Gen.json
// this example is just showing the usage of "VirtualMachineScaleSetVMs_List" operation, for the dependent resources, they will have to be created separately.
            
// authenticate your client
ArmClient client = new ArmClient(new DefaultAzureCredential());
            
// this example assumes you already have this VirtualMachineScaleSetResource created on azure
// for more information of creating VirtualMachineScaleSetResource, please refer to the document of VirtualMachineScaleSetResource
string subscriptionId = "{subscription-id}";
string resourceGroupName = "rgcompute";
string virtualMachineScaleSetName = "aaaaaaaaaaaaaaaaaaaaaa";
ResourceIdentifier virtualMachineScaleSetResourceId = VirtualMachineScaleSetResource.CreateResourceIdentifier(subscriptionId, resourceGroupName, virtualMachineScaleSetName);
VirtualMachineScaleSetResource virtualMachineScaleSet = client.GetVirtualMachineScaleSetResource(virtualMachineScaleSetResourceId);
            
// get the collection of this VirtualMachineScaleSetVmResource
VirtualMachineScaleSetVmCollection collection = virtualMachineScaleSet.GetVirtualMachineScaleSetVms();
            
// invoke the operation and iterate over the result
string filter = "aaaaaaaaaaaaaa";
string select = "aaaaaaaaaaaaaaaaaaaaa";
string expand = "aaaaaaaaaaaaa";
await foreach (VirtualMachineScaleSetVmResource item in collection.GetAllAsync(filter: filter, select: select, expand: expand))
{
    // the variable item is a resource, you could call other operations on this instance as well
    // but just for demo, we get its data from this resource instance
    VirtualMachineScaleSetVmData resourceData = item.Data;
    // for demo we just print out the id
    Console.WriteLine($"Succeeded on id: {resourceData.Id}");
}
            
Console.WriteLine($"Succeeded");
