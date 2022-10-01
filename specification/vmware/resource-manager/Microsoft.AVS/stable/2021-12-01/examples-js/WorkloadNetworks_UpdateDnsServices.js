const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update a DNS service by id in a private cloud workload network.
 *
 * @summary Create or update a DNS service by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/WorkloadNetworks_UpdateDnsServices.json
 */
async function workloadNetworksUpdateDnsService() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const dnsServiceId = "dnsService1";
  const workloadNetworkDnsService = {
    defaultDnsZone: "defaultDnsZone1",
    displayName: "dnsService1",
    dnsServiceIp: "5.5.5.5",
    fqdnZones: ["fqdnZone1"],
    logLevel: "INFO",
    revision: 1,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginUpdateDnsServiceAndWait(
    resourceGroupName,
    privateCloudName,
    dnsServiceId,
    workloadNetworkDnsService
  );
  console.log(result);
}

workloadNetworksUpdateDnsService().catch(console.error);
