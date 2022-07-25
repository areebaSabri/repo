const { DataLakeAnalyticsAccountManagementClient } = require("@azure/arm-datalake-analytics");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Begins the delete process for the Data Lake Analytics account object specified by the account name.
 *
 * @summary Begins the delete process for the Data Lake Analytics account object specified by the account name.
 * x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/Accounts_Delete.json
 */
async function beginsTheDeleteProcessForTheDataLakeAnalyticsAccountObjectSpecifiedByTheAccountName() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "contosorg";
  const accountName = "contosoadla";
  const credential = new DefaultAzureCredential();
  const client = new DataLakeAnalyticsAccountManagementClient(credential, subscriptionId);
  const result = await client.accounts.beginDeleteAndWait(resourceGroupName, accountName);
  console.log(result);
}

beginsTheDeleteProcessForTheDataLakeAnalyticsAccountObjectSpecifiedByTheAccountName().catch(
  console.error
);
