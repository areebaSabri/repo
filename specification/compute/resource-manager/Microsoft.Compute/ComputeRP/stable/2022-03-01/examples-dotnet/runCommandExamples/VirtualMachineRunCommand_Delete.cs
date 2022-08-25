using System;
using System.Threading.Tasks;
using Azure;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute.Models;
using Azure.ResourceManager.Resources;
using Azure.ResourceManager.Compute;
// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-03-01/examples/runCommandExamples/VirtualMachineRunCommand_Delete.json
// this example is just showing the usage of "VirtualMachineRunCommands_Delete" operation, for the dependent resources, they will have to be created separately.
            
// authenticate your client
ArmClient client = new ArmClient(new DefaultAzureCredential());
            
// this example assumes you already have this VirtualMachineRunCommandResource created on azure
// for more information of creating VirtualMachineRunCommandResource, please refer to the document of VirtualMachineRunCommandResource
string subscriptionId = "{subscription-id}";
string resourceGroupName = "myResourceGroup";
string vmName = "myVM";
string runCommandName = "myRunCommand";
ResourceIdentifier virtualMachineRunCommandResourceId = VirtualMachineRunCommandResource.CreateResourceIdentifier(subscriptionId, resourceGroupName, vmName, runCommandName);
VirtualMachineRunCommandResource virtualMachineRunCommand = client.GetVirtualMachineRunCommandResource(virtualMachineRunCommandResourceId);
            
// invoke the operation
await virtualMachineRunCommand.DeleteAsync(WaitUntil.Completed);
            
Console.WriteLine($"Succeeded");
