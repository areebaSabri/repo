const { NetAppManagementClient } = require("@azure/arm-netapp");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a subvolume in the path or clones the subvolume mentioned in the parentPath
 *
 * @summary Creates a subvolume in the path or clones the subvolume mentioned in the parentPath
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-05-01/examples/Subvolumes_Create.json
 */
async function subvolumesCreate() {
  const subscriptionId = "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const volumeName = "volume1";
  const subvolumeName = "subvolume1";
  const body = { path: "/subvolumePath" };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.subvolumes.beginCreateAndWait(
    resourceGroupName,
    accountName,
    poolName,
    volumeName,
    subvolumeName,
    body
  );
  console.log(result);
}

subvolumesCreate().catch(console.error);
