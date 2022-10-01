const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a DNS service by id in a private cloud workload network.
 *
 * @summary Get a DNS service by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/WorkloadNetworks_GetDnsServices.json
 */
async function workloadNetworksGetDnsService() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const dnsServiceId = "dnsService1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.getDnsService(
    resourceGroupName,
    privateCloudName,
    dnsServiceId
  );
  console.log(result);
}

workloadNetworksGetDnsService().catch(console.error);
