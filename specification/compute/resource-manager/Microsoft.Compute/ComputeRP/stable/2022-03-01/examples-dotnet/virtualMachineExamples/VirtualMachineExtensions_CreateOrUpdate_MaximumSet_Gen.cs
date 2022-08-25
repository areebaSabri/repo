using System;
using System.Threading.Tasks;
using Azure;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute.Models;
using Azure.ResourceManager.Compute;
// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-03-01/examples/virtualMachineExamples/VirtualMachineExtensions_CreateOrUpdate_MaximumSet_Gen.json
// this example is just showing the usage of "VirtualMachineExtensions_CreateOrUpdate" operation, for the dependent resources, they will have to be created separately.
            
// authenticate your client
ArmClient client = new ArmClient(new DefaultAzureCredential());
            
// this example assumes you already have this VirtualMachineResource created on azure
// for more information of creating VirtualMachineResource, please refer to the document of VirtualMachineResource
string subscriptionId = "{subscription-id}";
string resourceGroupName = "rgcompute";
string vmName = "aaaaaaaaaaaaaaaaaaaaaaaa";
ResourceIdentifier virtualMachineResourceId = VirtualMachineResource.CreateResourceIdentifier(subscriptionId, resourceGroupName, vmName);
VirtualMachineResource virtualMachine = client.GetVirtualMachineResource(virtualMachineResourceId);
            
// get the collection of this VirtualMachineExtensionResource
VirtualMachineExtensionCollection collection = virtualMachine.GetVirtualMachineExtensions();
            
// invoke the operation
string vmExtensionName = "aaaaaaaaaaaaa";
VirtualMachineExtensionData data = new VirtualMachineExtensionData(new AzureLocation("westus"))
{
    ForceUpdateTag = "a",
    Publisher = "extPublisher",
    ExtensionType = "extType",
    TypeHandlerVersion = "1.2",
    AutoUpgradeMinorVersion = true,
    EnableAutomaticUpgrade = true,
    Settings = BinaryData.FromObjectAsJson(new
    {
    }),
    ProtectedSettings = BinaryData.FromObjectAsJson(new
    {
    }),
    InstanceView = new VirtualMachineExtensionInstanceView()
    {
        Name = "aaaaaaaaaaaaaaaaa",
        VirtualMachineExtensionInstanceViewType = "aaaaaaaaa",
        TypeHandlerVersion = "aaaaaaaaaaaaaaaaaaaaaaaaaa",
        Substatuses =
                    {
                    new InstanceViewStatus()
                    {
                    Code = "aaaaaaaaaaaaaaaaaaaaaaa",
                    Level = ComputeStatusLevelType.Info,
                    DisplayStatus = "aaaaaa",
                    Message = "a",
                    Time = DateTimeOffset.Parse("2021-11-30T12:58:26.522Z"),
                    }
                    },
        Statuses =
                    {
                    new InstanceViewStatus()
                    {
                    Code = "aaaaaaaaaaaaaaaaaaaaaaa",
                    Level = ComputeStatusLevelType.Info,
                    DisplayStatus = "aaaaaa",
                    Message = "a",
                    Time = DateTimeOffset.Parse("2021-11-30T12:58:26.522Z"),
                    }
                    },
    },
    SuppressFailures = true,
    Tags =
                {
                ["key9183"] = "aa",
                },
};
ArmOperation<VirtualMachineExtensionResource> lro = await collection.CreateOrUpdateAsync(WaitUntil.Completed, vmExtensionName, data);
VirtualMachineExtensionResource result = lro.Value;
            
// the variable result is a resource, you could call other operations on this instance as well
// but just for demo, we get its data from this resource instance
VirtualMachineExtensionData resourceData = result.Data;
// for demo we just print out the id
Console.WriteLine($"Succeeded on id: {resourceData.Id}");
