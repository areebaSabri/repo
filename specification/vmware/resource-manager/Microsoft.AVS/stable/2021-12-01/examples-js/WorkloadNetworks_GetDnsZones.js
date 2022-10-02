const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a DNS zone by id in a private cloud workload network.
 *
 * @summary Get a DNS zone by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/WorkloadNetworks_GetDnsZones.json
 */
async function workloadNetworksGetDnsZone() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const dnsZoneId = "dnsZone1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.getDnsZone(
    resourceGroupName,
    privateCloudName,
    dnsZoneId
  );
  console.log(result);
}

workloadNetworksGetDnsZone().catch(console.error);
