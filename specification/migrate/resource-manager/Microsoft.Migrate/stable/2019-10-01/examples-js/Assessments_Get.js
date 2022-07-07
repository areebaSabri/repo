const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get an existing assessment with the specified name. Returns a json object of type 'assessment' as specified in Models section.
 *
 * @summary Get an existing assessment with the specified name. Returns a json object of type 'assessment' as specified in Models section.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/Assessments_Get.json
 */
async function assessmentsGet() {
  const subscriptionId = "6393a73f-8d55-47ef-b6dd-179b3e0c7910";
  const resourceGroupName = "abgoyal-westEurope";
  const projectName = "abgoyalWEselfhostb72bproject";
  const groupName = "Test1";
  const assessmentName = "assessment_5_9_2019_16_22_14";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.assessments.get(
    resourceGroupName,
    projectName,
    groupName,
    assessmentName
  );
  console.log(result);
}

assessmentsGet().catch(console.error);
