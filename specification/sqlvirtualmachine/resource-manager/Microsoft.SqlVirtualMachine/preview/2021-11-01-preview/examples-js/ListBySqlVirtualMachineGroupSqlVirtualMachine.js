const { SqlVirtualMachineManagementClient } = require("@azure/arm-sqlvirtualmachine");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the list of sql virtual machines in a SQL virtual machine group.
 *
 * @summary Gets the list of sql virtual machines in a SQL virtual machine group.
 * x-ms-original-file: specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/preview/2021-11-01-preview/examples/ListBySqlVirtualMachineGroupSqlVirtualMachine.json
 */
async function getsTheListOfSqlVirtualMachinesInASqlVirtualMachineGroup() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const sqlVirtualMachineGroupName = "testvm";
  const credential = new DefaultAzureCredential();
  const client = new SqlVirtualMachineManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.sqlVirtualMachines.listBySqlVmGroup(
    resourceGroupName,
    sqlVirtualMachineGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getsTheListOfSqlVirtualMachinesInASqlVirtualMachineGroup().catch(console.error);
