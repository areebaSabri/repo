const { EducationManagementClient } = require("@azure/arm-education");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the details for a specific student in the specified lab by student alias
 *
 * @summary Get the details for a specific student in the specified lab by student alias
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/Student.json
 */
async function student() {
  const billingAccountName = "{billingAccountName}";
  const billingProfileName = "{billingProfileName}";
  const invoiceSectionName = "{invoiceSectionName}";
  const studentAlias = "{studentAlias}";
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const result = await client.students.get(
    billingAccountName,
    billingProfileName,
    invoiceSectionName,
    studentAlias
  );
  console.log(result);
}

student().catch(console.error);
