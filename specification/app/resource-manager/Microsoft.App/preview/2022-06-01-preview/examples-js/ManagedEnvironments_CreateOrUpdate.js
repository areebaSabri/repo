const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a Managed Environment used to host container apps.
 *
 * @summary Creates or updates a Managed Environment used to host container apps.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ManagedEnvironments_CreateOrUpdate.json
 */
async function createEnvironments() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "examplerg";
  const environmentName = "testcontainerenv";
  const environmentEnvelope = {
    appLogsConfiguration: {
      logAnalyticsConfiguration: { customerId: "string", sharedKey: "string" },
    },
    customDomainConfiguration: {
      certificatePassword: Buffer.from("private key password"),
      certificateValue: Buffer.from("PFX-or-PEM-blob"),
      dnsSuffix: "www.my-name.com",
    },
    daprAIConnectionString:
      "InstrumentationKey=00000000-0000-0000-0000-000000000000;IngestionEndpoint=https://northcentralus-0.in.applicationinsights.azure.com/",
    location: "East US",
    sku: { name: "Premium" },
    vnetConfiguration: {
      outboundSettings: {
        outBoundType: "UserDefinedRouting",
        virtualNetworkApplianceIp: "192.168.1.20",
      },
    },
    workloadProfiles: [
      {
        maximumCount: 12,
        minimumCount: 3,
        workloadProfileType: "GeneralPurpose",
      },
      {
        maximumCount: 6,
        minimumCount: 3,
        workloadProfileType: "MemoryOptimized",
      },
      {
        maximumCount: 6,
        minimumCount: 3,
        workloadProfileType: "ComputeOptimized",
      },
    ],
    zoneRedundant: true,
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.managedEnvironments.beginCreateOrUpdateAndWait(
    resourceGroupName,
    environmentName,
    environmentEnvelope
  );
  console.log(result);
}

createEnvironments().catch(console.error);
