const { EducationManagementClient } = require("@azure/arm-education");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the details for a specific lab associated with the provided billing account name, billing profile name, and invoice section name.
 *
 * @summary Get the details for a specific lab associated with the provided billing account name, billing profile name, and invoice section name.
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/LabListWithInvoiceSectionName.json
 */
async function labListWithInvoiceSectionName() {
  const billingAccountName = "{billingAccountName}";
  const billingProfileName = "{billingProfileName}";
  const invoiceSectionName = "{invoiceSectionName}";
  const includeBudget = true;
  const options = { includeBudget };
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.labs.list(
    billingAccountName,
    billingProfileName,
    invoiceSectionName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

labListWithInvoiceSectionName().catch(console.error);
