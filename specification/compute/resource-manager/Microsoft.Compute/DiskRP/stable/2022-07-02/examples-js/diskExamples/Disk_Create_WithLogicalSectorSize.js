const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2022-07-02/examples/diskExamples/Disk_Create_WithLogicalSectorSize.json
 */
async function createAnUltraManagedDiskWithLogicalSectorSize512E() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const disk = {
    creationData: { createOption: "Empty", logicalSectorSize: 512 },
    diskSizeGB: 200,
    location: "West US",
    sku: { name: "UltraSSD_LRS" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(resourceGroupName, diskName, disk);
  console.log(result);
}

createAnUltraManagedDiskWithLogicalSectorSize512E().catch(console.error);
