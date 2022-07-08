const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Execute Detector
 *
 * @summary Description for Execute Detector
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/Diagnostics_ExecuteSiteDetector.json
 */
async function executeSiteDetector() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const detectorName = "sitecrashes";
  const diagnosticCategory = "availability";
  const slot = "Production";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.diagnostics.executeSiteDetectorSlot(
    resourceGroupName,
    siteName,
    detectorName,
    diagnosticCategory,
    slot
  );
  console.log(result);
}

executeSiteDetector().catch(console.error);
