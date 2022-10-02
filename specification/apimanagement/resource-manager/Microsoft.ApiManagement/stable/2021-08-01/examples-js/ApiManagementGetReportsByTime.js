const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists report records by Time.
 *
 * @summary Lists report records by Time.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementGetReportsByTime.json
 */
async function apiManagementGetReportsByTime() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const filter =
    "timestamp ge datetime'2017-06-01T00:00:00' and timestamp le datetime'2017-06-04T00:00:00'";
  const interval = "PT15M";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.reports.listByTime(
    resourceGroupName,
    serviceName,
    filter,
    interval
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

apiManagementGetReportsByTime().catch(console.error);
