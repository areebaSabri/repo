const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates the incident.
 *
 * @summary Creates or updates the incident.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/incidents/CreateIncident.json
 */
async function createsOrUpdatesAnIncident() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const incidentId = "73e01a99-5cd7-4139-a149-9f2736ff2ab5";
  const incident = {
    description: "This is a demo incident",
    classification: "FalsePositive",
    classificationComment: "Not a malicious activity",
    classificationReason: "IncorrectAlertLogic",
    etag: '"0300bf09-0000-0000-0000-5c37296e0000"',
    firstActivityTimeUtc: new Date("2019-01-01T13:00:30Z"),
    lastActivityTimeUtc: new Date("2019-01-01T13:05:30Z"),
    owner: { objectId: "2046feea-040d-4a46-9e2b-91c2941bfa70" },
    severity: "High",
    status: "Closed",
    title: "My incident",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.incidents.createOrUpdate(
    resourceGroupName,
    workspaceName,
    incidentId,
    incident
  );
  console.log(result);
}

createsOrUpdatesAnIncident().catch(console.error);
