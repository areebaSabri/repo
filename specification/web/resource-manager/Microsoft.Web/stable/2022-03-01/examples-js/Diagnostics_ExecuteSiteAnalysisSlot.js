const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Execute Analysis
 *
 * @summary Description for Execute Analysis
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/Diagnostics_ExecuteSiteAnalysisSlot.json
 */
async function executeSiteSlotAnalysis() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const diagnosticCategory = "availability";
  const analysisName = "apprestartanalyses";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.diagnostics.executeSiteAnalysis(
    resourceGroupName,
    siteName,
    diagnosticCategory,
    analysisName
  );
  console.log(result);
}

executeSiteSlotAnalysis().catch(console.error);
