const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Operation to update an exiting Deployment.
 *
 * @summary Operation to update an exiting Deployment.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/Deployments_Update_CustomContainer.json
 */
async function deploymentsUpdateCustomContainer() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const deploymentName = "mydeployment";
  const deploymentResource = {
    properties: {
      instances: [],
      source: {
        type: "Container",
        customContainer: {
          args: ["-c", "while true; do echo hello; sleep 10;done"],
          command: ["/bin/sh"],
          containerImage: "myNewContainerImage:v1",
          imageRegistryCredential: {
            password: "<myNewPassword>",
            username: "myNewUsername",
          },
          server: "mynewacr.azurecr.io",
        },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.deployments.beginUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    deploymentName,
    deploymentResource
  );
  console.log(result);
}

deploymentsUpdateCustomContainer().catch(console.error);
