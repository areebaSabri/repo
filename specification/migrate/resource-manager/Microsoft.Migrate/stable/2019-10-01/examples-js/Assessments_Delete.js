const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete an assessment from the project. The machines remain in the assessment. Deleting a non-existent assessment results in a no-operation.

When an assessment is under computation, as indicated by the 'computationState' field, it cannot be deleted. Any such attempt will return a 400 - Bad Request.

 *
 * @summary Delete an assessment from the project. The machines remain in the assessment. Deleting a non-existent assessment results in a no-operation.

When an assessment is under computation, as indicated by the 'computationState' field, it cannot be deleted. Any such attempt will return a 400 - Bad Request.

 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/Assessments_Delete.json
 */
async function assessmentsDelete() {
  const subscriptionId = "6393a73f-8d55-47ef-b6dd-179b3e0c7910";
  const resourceGroupName = "abgoyal-westEurope";
  const projectName = "abgoyalWEselfhostb72bproject";
  const groupName = "Test1";
  const assessmentName = "assessment_5_9_2019_16_22_14";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.assessments.delete(
    resourceGroupName,
    projectName,
    groupName,
    assessmentName
  );
  console.log(result);
}

assessmentsDelete().catch(console.error);
