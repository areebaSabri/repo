const { NetAppManagementClient } = require("@azure/arm-netapp");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Patch a snapshot policy
 *
 * @summary Patch a snapshot policy
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-05-01/examples/SnapshotPolicies_Update.json
 */
async function snapshotPoliciesUpdate() {
  const subscriptionId = "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = "myRG";
  const accountName = "account1";
  const snapshotPolicyName = "snapshotPolicyName";
  const body = {
    dailySchedule: { hour: 14, minute: 30, snapshotsToKeep: 4 },
    enabled: true,
    hourlySchedule: { minute: 50, snapshotsToKeep: 2 },
    location: "eastus",
    monthlySchedule: {
      daysOfMonth: "10,11,12",
      hour: 14,
      minute: 15,
      snapshotsToKeep: 5,
    },
    weeklySchedule: {
      day: "Wednesday",
      hour: 14,
      minute: 45,
      snapshotsToKeep: 3,
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.snapshotPolicies.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    snapshotPolicyName,
    body
  );
  console.log(result);
}

snapshotPoliciesUpdate().catch(console.error);
