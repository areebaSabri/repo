const { DataMigrationManagementClient } = require("@azure/arm-datamigration");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to The Services resource is the top-level resource that represents the Database Migration Service. This method returns a list of service resources in a resource group.
 *
 * @summary The Services resource is the top-level resource that represents the Database Migration Service. This method returns a list of service resources in a resource group.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/Services_ListByResourceGroup.json
 */
async function servicesListByResourceGroup() {
  const subscriptionId = "fc04246f-04c5-437e-ac5e-206a19e7193f";
  const groupName = "DmsSdkRg";
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.services.listByResourceGroup(groupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

servicesListByResourceGroup().catch(console.error);
