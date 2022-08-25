using System;
using System.Threading.Tasks;
using Azure;
using Azure.Core;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Compute.Models;
using Azure.ResourceManager.Resources;
using Azure.ResourceManager.Resources.Models;
using Azure.ResourceManager.Compute;

// Generated from example definition: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-03-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSet_Create_WithEmptyDataDisksOnEachVm.json
// this example is just showing the usage of "VirtualMachineScaleSets_CreateOrUpdate" operation, for the dependent resources, they will have to be created separately.

// authenticate your client
ArmClient client = new ArmClient(new DefaultAzureCredential());

// this example assumes you already have this ResourceGroupResource created on azure
// for more information of creating ResourceGroupResource, please refer to the document of ResourceGroupResource
string subscriptionId = "{subscription-id}";
string resourceGroupName = "myResourceGroup";
ResourceIdentifier resourceGroupResourceId = ResourceGroupResource.CreateResourceIdentifier(subscriptionId, resourceGroupName);
ResourceGroupResource resourceGroupResource = client.GetResourceGroupResource(resourceGroupResourceId);

// get the collection of this VirtualMachineScaleSetResource
VirtualMachineScaleSetCollection collection = resourceGroupResource.GetVirtualMachineScaleSets();

// invoke the operation
string virtualMachineScaleSetName = "{vmss-name}";
VirtualMachineScaleSetData data = new VirtualMachineScaleSetData(new AzureLocation("westus"))
{
    Sku = new ComputeSku()
    {
        Name = "Standard_D2_v2",
        Tier = "Standard",
        Capacity = 3,
    },
    UpgradePolicy = new VirtualMachineScaleSetUpgradePolicy()
    {
        Mode = VirtualMachineScaleSetUpgradeMode.Manual,
    },
    VirtualMachineProfile = new VirtualMachineScaleSetVmProfile()
    {
        OSProfile = new VirtualMachineScaleSetOSProfile()
        {
            ComputerNamePrefix = "{vmss-name}",
            AdminUsername = "{your-username}",
            AdminPassword = "{your-password}",
        },
        StorageProfile = new VirtualMachineScaleSetStorageProfile()
        {
            ImageReference = new ImageReference()
            {
                Publisher = "MicrosoftWindowsServer",
                Offer = "WindowsServer",
                Sku = "2016-Datacenter",
                Version = "latest",
            },
            OSDisk = new VirtualMachineScaleSetOSDisk(DiskCreateOptionType.FromImage)
            {
                Caching = CachingType.ReadWrite,
                DiskSizeGB = 512,
                ManagedDisk = new VirtualMachineScaleSetManagedDisk()
                {
                    StorageAccountType = StorageAccountType.StandardLrs,
                },
            },
            DataDisks =
            {
            new VirtualMachineScaleSetDataDisk(0,DiskCreateOptionType.Empty)
            {
            DiskSizeGB = 1023,
            },new VirtualMachineScaleSetDataDisk(1,DiskCreateOptionType.Empty)
            {
            DiskSizeGB = 1023,
            }
            },
        },
        NetworkProfile = new VirtualMachineScaleSetNetworkProfile()
        {
            NetworkInterfaceConfigurations =
            {
            new VirtualMachineScaleSetNetworkConfiguration("{vmss-name}")
            {
            Primary = true,
            IPConfigurations =
            {
            new VirtualMachineScaleSetIPConfiguration("{vmss-name}")
            {
            SubnetId = new ResourceIdentifier("/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}"),
            }
            },
            EnableIPForwarding = true,
            }
            },
        },
    },
    Overprovision = true,
};
ArmOperation<VirtualMachineScaleSetResource> lro = await collection.CreateOrUpdateAsync(WaitUntil.Completed, virtualMachineScaleSetName, data);
VirtualMachineScaleSetResource result = lro.Value;

// the variable result is a resource, you could call other operations on this instance as well
// but just for demo, we get its data from this resource instance
VirtualMachineScaleSetData resourceData = result.Data;
// for demo we just print out the id
Console.WriteLine($"Succeeded on id: {resourceData.Id}");
