const { EducationManagementClient } = require("@azure/arm-education");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create and add a new student to the specified lab or update the details of an existing student in a lab. Note the student must have a valid tenant to accept the lab after they have been added to lab.
 *
 * @summary Create and add a new student to the specified lab or update the details of an existing student in a lab. Note the student must have a valid tenant to accept the lab after they have been added to lab.
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/CreateStudent.json
 */
async function student() {
  const billingAccountName = "{billingAccountName}";
  const billingProfileName = "{billingProfileName}";
  const invoiceSectionName = "{invoiceSectionName}";
  const studentAlias = "{studentAlias}";
  const parameters = {
    budget: { currency: "USD", value: 100 },
    email: "test@contoso.com",
    expirationDate: new Date("2021-11-09T22:13:21.795Z"),
    firstName: "test",
    lastName: "user",
    role: "Student",
  };
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const result = await client.students.createOrUpdate(
    billingAccountName,
    billingProfileName,
    invoiceSectionName,
    studentAlias,
    parameters
  );
  console.log(result);
}

student().catch(console.error);
