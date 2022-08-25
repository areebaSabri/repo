using System;
using System.Threading.Tasks;
using Azure;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute.Models;
using Azure.ResourceManager.Resources;
using Azure.ResourceManager.Compute;

// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-03-01/examples/virtualMachineExamples/VirtualMachine_Create_WithSecurityTypeConfidentialVMWithCustomerManagedKeys.json
// this example is just showing the usage of "VirtualMachines_CreateOrUpdate" operation, for the dependent resources, they will have to be created separately.

// authenticate your client
ArmClient client = new ArmClient(new DefaultAzureCredential());

// this example assumes you already have this ResourceGroupResource created on azure
// for more information of creating ResourceGroupResource, please refer to the document of ResourceGroupResource
string subscriptionId = "{subscription-id}";
string resourceGroupName = "myResourceGroup";
ResourceIdentifier resourceGroupResourceId = ResourceGroupResource.CreateResourceIdentifier(subscriptionId, resourceGroupName);
ResourceGroupResource resourceGroupResource = client.GetResourceGroupResource(resourceGroupResourceId);

// get the collection of this VirtualMachineResource
VirtualMachineCollection collection = resourceGroupResource.GetVirtualMachines();

// invoke the operation
string vmName = "myVM";
VirtualMachineData data = new VirtualMachineData(new AzureLocation("westus"))
{
    HardwareProfile = new VirtualMachineHardwareProfile()
    {
        VmSize = new VirtualMachineSizeType("Standard_DC2as_v5"),
    },
    StorageProfile = new VirtualMachineStorageProfile()
    {
        ImageReference = new ImageReference()
        {
            Publisher = "MicrosoftWindowsServer",
            Offer = "2019-datacenter-cvm",
            Sku = "windows-cvm",
            Version = "17763.2183.2109130127",
        },
        OSDisk = new VirtualMachineOSDisk(DiskCreateOptionType.FromImage)
        {
            Name = "myVMosdisk",
            Caching = CachingType.ReadOnly,
            ManagedDisk = new VirtualMachineManagedDisk()
            {
                StorageAccountType = StorageAccountType.StandardSsdLrs,
                SecurityProfile = new VirtualMachineDiskSecurityProfile()
                {
                    SecurityEncryptionType = SecurityEncryptionType.DiskWithVmGuestState,
                    DiskEncryptionSetId = new ResourceIdentifier("/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}"),
                },
            },
        },
    },
    OSProfile = new VirtualMachineOSProfile()
    {
        ComputerName = "myVM",
        AdminUsername = "{your-username}",
        AdminPassword = "{your-password}",
    },
    NetworkProfile = new VirtualMachineNetworkProfile()
    {
        NetworkInterfaces =
        {
        new VirtualMachineNetworkInterfaceReference()
        {
        Primary = true,
        Id = new ResourceIdentifier("/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}"),
        }
        },
    },
    SecurityProfile = new SecurityProfile()
    {
        UefiSettings = new UefiSettings()
        {
            IsSecureBootEnabled = true,
            IsVirtualTpmEnabled = true,
        },
        SecurityType = SecurityType.ConfidentialVm,
    },
};
ArmOperation<VirtualMachineResource> lro = await collection.CreateOrUpdateAsync(WaitUntil.Completed, vmName, data);
VirtualMachineResource result = lro.Value;

// the variable result is a resource, you could call other operations on this instance as well
// but just for demo, we get its data from this resource instance
VirtualMachineData resourceData = result.Data;
// for demo we just print out the id
Console.WriteLine($"Succeeded on id: {resourceData.Id}");
