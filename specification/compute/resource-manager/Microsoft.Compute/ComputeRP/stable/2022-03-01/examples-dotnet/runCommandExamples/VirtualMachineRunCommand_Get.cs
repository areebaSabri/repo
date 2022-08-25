using System;
using System.Threading.Tasks;
using Azure;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute.Models;
using Azure.ResourceManager.Compute;

// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-03-01/examples/runCommandExamples/VirtualMachineRunCommand_Get.json
// this example is just showing the usage of "VirtualMachineRunCommands_GetByVirtualMachine" operation, for the dependent resources, they will have to be created separately.

// authenticate your client
ArmClient client = new ArmClient(new DefaultAzureCredential());

// this example assumes you already have this VirtualMachineResource created on azure
// for more information of creating VirtualMachineResource, please refer to the document of VirtualMachineResource
string subscriptionId = "{subscription-id}";
string resourceGroupName = "myResourceGroup";
string vmName = "myVM";
ResourceIdentifier virtualMachineResourceId = VirtualMachineResource.CreateResourceIdentifier(subscriptionId, resourceGroupName, vmName);
VirtualMachineResource virtualMachine = client.GetVirtualMachineResource(virtualMachineResourceId);

// get the collection of this VirtualMachineRunCommandResource
VirtualMachineRunCommandCollection collection = virtualMachine.GetVirtualMachineRunCommands();

// invoke the operation
string runCommandName = "myRunCommand";
bool result = await collection.ExistsAsync(runCommandName);

Console.WriteLine($"Succeeded: {result}");
