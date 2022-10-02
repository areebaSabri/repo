const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update a script execution in a private cloud
 *
 * @summary Create or update a script execution in a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/ScriptExecutions_CreateOrUpdate.json
 */
async function scriptExecutionsCreateOrUpdate() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const scriptExecutionName = "addSsoServer";
  const scriptExecution = {
    hiddenParameters: [
      {
        name: "Password",
        type: "SecureValue",
        secureValue: "PlaceholderPassword",
      },
    ],
    parameters: [
      { name: "DomainName", type: "Value", value: "placeholderDomain.local" },
      {
        name: "BaseUserDN",
        type: "Value",
        value: "DC=placeholder, DC=placeholder",
      },
    ],
    retention: "P0Y0M60DT0H60M60S",
    scriptCmdletId:
      "/subscriptions/{subscription-id}/resourceGroups/group1/providers/Microsoft.AVS/privateClouds/cloud1/scriptPackages/AVS.PowerCommands@1.0.0/scriptCmdlets/New-SsoExternalIdentitySource",
    timeout: "P0Y0M0DT0H60M60S",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.scriptExecutions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    scriptExecutionName,
    scriptExecution
  );
  console.log(result);
}

scriptExecutionsCreateOrUpdate().catch(console.error);
