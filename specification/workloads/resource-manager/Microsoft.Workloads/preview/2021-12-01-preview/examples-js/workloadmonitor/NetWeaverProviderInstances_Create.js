const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary Creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/workloadmonitor/NetWeaverProviderInstances_Create.json
 */
async function createASapMonitorNetWeaverProvider() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "mySapMonitor";
  const providerInstanceName = "myProviderInstance";
  const providerInstanceParameter = {
    providerSettings: {
      providerType: "SapNetWeaver",
      sapClientId: "111",
      sapHostFileEntries: ["127.0.0.1 name fqdn"],
      sapHostname: "name",
      sapInstanceNr: "00",
      sapPassword: "****",
      sapPasswordUri: "",
      sapPortNumber: "1234",
      sapSid: "SID",
      sapSslCertificateUri: "https://storageaccount.blob.core.windows.net/containername/filename",
      sapUsername: "username",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.beginCreateAndWait(
    resourceGroupName,
    monitorName,
    providerInstanceName,
    providerInstanceParameter
  );
  console.log(result);
}

createASapMonitorNetWeaverProvider().catch(console.error);
