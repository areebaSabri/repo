const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the diagnostics data for a Managed Environment used to host container apps.
 *
 * @summary Get the diagnostics data for a Managed Environment used to host container apps.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ManagedEnvironmentDiagnostics_Get.json
 */
async function getDiagnosticDataForAManagedEnvironments() {
  const subscriptionId = "f07f3711-b45e-40fe-a941-4e6d93f851e6";
  const resourceGroupName = "mikono-workerapp-test-rg";
  const environmentName = "mikonokubeenv";
  const detectorName = "ManagedEnvAvailabilityMetrics";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.managedEnvironmentDiagnostics.getDetector(
    resourceGroupName,
    environmentName,
    detectorName
  );
  console.log(result);
}

getDiagnosticDataForAManagedEnvironments().catch(console.error);
