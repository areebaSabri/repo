using System;
using System.Threading.Tasks;
using Azure;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute.Models;
using Azure.ResourceManager.Compute;

// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-03-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSetExtensions_Update_MinimumSet_Gen.json
// this example is just showing the usage of "VirtualMachineScaleSetExtensions_Update" operation, for the dependent resources, they will have to be created separately.

// authenticate your client
ArmClient client = new ArmClient(new DefaultAzureCredential());

// this example assumes you already have this VirtualMachineScaleSetExtensionResource created on azure
// for more information of creating VirtualMachineScaleSetExtensionResource, please refer to the document of VirtualMachineScaleSetExtensionResource
string subscriptionId = "{subscription-id}";
string resourceGroupName = "rgcompute";
string virtualMachineScaleSetName = "aaaaaaaaaaaaaaaaaaaaaaaaaa";
string vmssExtensionName = "aa";
ResourceIdentifier virtualMachineScaleSetExtensionResourceId = VirtualMachineScaleSetExtensionResource.CreateResourceIdentifier(subscriptionId, resourceGroupName, virtualMachineScaleSetName, vmssExtensionName);
VirtualMachineScaleSetExtensionResource virtualMachineScaleSetExtension = client.GetVirtualMachineScaleSetExtensionResource(virtualMachineScaleSetExtensionResourceId);

// invoke the operation
VirtualMachineScaleSetExtensionPatch patch = new VirtualMachineScaleSetExtensionPatch();
ArmOperation<VirtualMachineScaleSetExtensionResource> lro = await virtualMachineScaleSetExtension.UpdateAsync(WaitUntil.Completed, patch);
VirtualMachineScaleSetExtensionResource result = lro.Value;

// the variable result is a resource, you could call other operations on this instance as well
// but just for demo, we get its data from this resource instance
VirtualMachineScaleSetExtensionData resourceData = result.Data;
// for demo we just print out the id
Console.WriteLine($"Succeeded on id: {resourceData.Id}");
