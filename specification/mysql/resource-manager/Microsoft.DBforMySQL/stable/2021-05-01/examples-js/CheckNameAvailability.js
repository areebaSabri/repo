const { MySQLManagementFlexibleServerClient } = require("@azure/arm-mysql-flexible");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Check the availability of name for server
 *
 * @summary Check the availability of name for server
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/stable/2021-05-01/examples/CheckNameAvailability.json
 */
async function checkNameAvailability() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const locationName = "SouthEastAsia";
  const nameAvailabilityRequest = {
    name: "name1",
    type: "Microsoft.DBforMySQL/flexibleServers",
  };
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementFlexibleServerClient(credential, subscriptionId);
  const result = await client.checkNameAvailability.execute(locationName, nameAvailabilityRequest);
  console.log(result);
}

checkNameAvailability().catch(console.error);
