const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the billingSpecs for the specified subscription and location.
 *
 * @summary Lists the billingSpecs for the specified subscription and location.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/HDI_Locations_ListBillingSpecs.json
 */
async function getTheSubscriptionBillingSpecsForTheSpecifiedLocation() {
  const subscriptionId = "subid";
  const location = "East US 2";
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.locations.listBillingSpecs(location);
  console.log(result);
}

getTheSubscriptionBillingSpecsForTheSpecifiedLocation().catch(console.error);
