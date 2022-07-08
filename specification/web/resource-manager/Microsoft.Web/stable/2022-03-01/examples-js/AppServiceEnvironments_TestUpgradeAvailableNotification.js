const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Send a test notification that an upgrade is available for this App Service Environment.
 *
 * @summary Send a test notification that an upgrade is available for this App Service Environment.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/AppServiceEnvironments_TestUpgradeAvailableNotification.json
 */
async function sendATestNotificationThatAnUpgradeIsAvailableForThisAppServiceEnvironment() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "SampleHostingEnvironment";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceEnvironments.testUpgradeAvailableNotification(
    resourceGroupName,
    name
  );
  console.log(result);
}

sendATestNotificationThatAnUpgradeIsAvailableForThisAppServiceEnvironment().catch(console.error);
