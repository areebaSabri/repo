const { EducationManagementClient } = require("@azure/arm-education");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create a new lab or update a previously created lab.
 *
 * @summary Create a new lab or update a previously created lab.
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/CreateLab.json
 */
async function createLab() {
  const billingAccountName = "{billingAccountName}";
  const billingProfileName = "{billingProfileName}";
  const invoiceSectionName = "{invoiceSectionName}";
  const parameters = {
    description: "example lab description",
    budgetPerStudent: { currency: "USD", value: 100 },
    displayName: "example lab",
    expirationDate: new Date("2021-12-09T22:11:29.422Z"),
  };
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const result = await client.labs.createOrUpdate(
    billingAccountName,
    billingProfileName,
    invoiceSectionName,
    parameters
  );
  console.log(result);
}

createLab().catch(console.error);
