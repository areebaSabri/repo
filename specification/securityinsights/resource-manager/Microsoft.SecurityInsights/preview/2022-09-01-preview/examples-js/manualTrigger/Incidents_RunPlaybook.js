const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Triggers playbook on a specific incident
 *
 * @summary Triggers playbook on a specific incident
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/manualTrigger/Incidents_RunPlaybook.json
 */
async function incidentsRunPlaybook() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const incidentIdentifier = "73e01a99-5cd7-4139-a149-9f2736ff2ar4";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.incidents.runPlaybook(
    resourceGroupName,
    workspaceName,
    incidentIdentifier
  );
  console.log(result);
}

incidentsRunPlaybook().catch(console.error);
