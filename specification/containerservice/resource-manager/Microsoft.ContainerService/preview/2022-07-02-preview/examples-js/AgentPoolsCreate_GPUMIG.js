const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates an agent pool in the specified managed cluster.
 *
 * @summary Creates or updates an agent pool in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/AgentPoolsCreate_GPUMIG.json
 */
async function createAgentPoolWithGpumig() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const parameters = {
    count: 3,
    gpuInstanceProfile: "MIG2g",
    kubeletConfig: {
      allowedUnsafeSysctls: ["kernel.msg*", "net.core.somaxconn"],
      cpuCfsQuota: true,
      cpuCfsQuotaPeriod: "200ms",
      cpuManagerPolicy: "static",
      failSwapOn: false,
      imageGcHighThreshold: 90,
      imageGcLowThreshold: 70,
      topologyManagerPolicy: "best-effort",
    },
    linuxOSConfig: {
      swapFileSizeMB: 1500,
      sysctls: {
        kernelThreadsMax: 99999,
        netCoreWmemDefault: 12345,
        netIpv4IpLocalPortRange: "20000 60000",
        netIpv4TcpTwReuse: true,
      },
      transparentHugePageDefrag: "madvise",
      transparentHugePageEnabled: "always",
    },
    orchestratorVersion: "",
    osType: "Linux",
    vmSize: "Standard_ND96asr_v4",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
    parameters
  );
  console.log(result);
}

createAgentPoolWithGpumig().catch(console.error);
