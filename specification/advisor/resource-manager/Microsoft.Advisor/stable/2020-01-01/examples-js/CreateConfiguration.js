const { AdvisorManagementClient } = require("@azure/arm-advisor");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create/Overwrite Azure Advisor configuration.
 *
 * @summary Create/Overwrite Azure Advisor configuration.
 * x-ms-original-file: specification/advisor/resource-manager/Microsoft.Advisor/stable/2020-01-01/examples/CreateConfiguration.json
 */
async function putConfigurations() {
  const subscriptionId = "subscriptionId";
  const configurationName = "default";
  const resourceGroup = "resourceGroup";
  const configContract = {
    digests: [
      {
        name: "digestConfigName",
        actionGroupResourceId:
          "/subscriptions/subscriptionId/resourceGroups/resourceGroup/providers/microsoft.insights/actionGroups/actionGroupName",
        categories: [
          "HighAvailability",
          "Security",
          "Performance",
          "Cost",
          "OperationalExcellence",
        ],
        frequency: 30,
        state: "Active",
        language: "en",
      },
    ],
    exclude: true,
    lowCpuThreshold: "5",
  };
  const credential = new DefaultAzureCredential();
  const client = new AdvisorManagementClient(credential, subscriptionId);
  const result = await client.configurations.createInResourceGroup(
    configurationName,
    resourceGroup,
    configContract
  );
  console.log(result);
}

putConfigurations().catch(console.error);
