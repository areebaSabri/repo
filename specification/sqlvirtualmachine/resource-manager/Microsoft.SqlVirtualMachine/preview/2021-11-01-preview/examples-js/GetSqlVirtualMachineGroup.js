const { SqlVirtualMachineManagementClient } = require("@azure/arm-sqlvirtualmachine");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a SQL virtual machine group.
 *
 * @summary Gets a SQL virtual machine group.
 * x-ms-original-file: specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/preview/2021-11-01-preview/examples/GetSqlVirtualMachineGroup.json
 */
async function getsASqlVirtualMachineGroup() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const sqlVirtualMachineGroupName = "testvmgroup";
  const credential = new DefaultAzureCredential();
  const client = new SqlVirtualMachineManagementClient(credential, subscriptionId);
  const result = await client.sqlVirtualMachineGroups.get(
    resourceGroupName,
    sqlVirtualMachineGroupName
  );
  console.log(result);
}

getsASqlVirtualMachineGroup().catch(console.error);
