using System;
using System.Threading.Tasks;
using Azure;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute.Models;
using Azure.ResourceManager.Resources;
using Azure.ResourceManager.Compute;
// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-03-01/examples/runCommandExamples/VirtualMachineRunCommand_Update.json
// this example is just showing the usage of "VirtualMachineRunCommands_Update" operation, for the dependent resources, they will have to be created separately.
            
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
VirtualMachineRunCommandUpdate runCommand = new VirtualMachineRunCommandUpdate()
{
    Source = new VirtualMachineRunCommandScriptSource()
    {
        Script = "Write-Host Script Source Updated!",
    },
};
ArmOperation<VirtualMachineRunCommandResource> lro = await virtualMachineRunCommand.UpdateAsync(WaitUntil.Completed, runCommand);
VirtualMachineRunCommandResource result = lro.Value;
            
// the variable result is a resource, you could call other operations on this instance as well
// but just for demo, we get its data from this resource instance
VirtualMachineRunCommandData resourceData = result.Data;
// for demo we just print out the id
Console.WriteLine($"Succeeded on id: {resourceData.Id}");
