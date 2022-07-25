const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates a task with the specified parameters.
 *
 * @summary Updates a task with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/ManagedIdentity/TasksUpdate_WithKeyVaultCustomCredentials.json
 */
async function tasksUpdateWithKeyVaultCustomCredentials() {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const taskName = "myTask";
  const taskUpdateParameters = {
    agentConfiguration: { cpu: 3 },
    credentials: {
      customRegistries: {
        myregistryAzurecrIo: {
          identity: "[system]",
          password: {
            type: "Vaultsecret",
            value: "https://myacbvault.vault.azure.net/secrets/password",
          },
          userName: {
            type: "Vaultsecret",
            value: "https://myacbvault.vault.azure.net/secrets/username",
          },
        },
      },
    },
    logTemplate: undefined,
    status: "Enabled",
    step: {
      type: "Docker",
      dockerFilePath: "src/DockerFile",
      imageNames: ["azurerest:testtag1"],
    },
    tags: { testkey: "value" },
    trigger: {
      sourceTriggers: [
        {
          name: "mySourceTrigger",
          sourceRepository: {
            sourceControlAuthProperties: { token: "xxxxx", tokenType: "PAT" },
          },
          sourceTriggerEvents: ["commit"],
        },
      ],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.tasks.beginUpdateAndWait(
    resourceGroupName,
    registryName,
    taskName,
    taskUpdateParameters
  );
  console.log(result);
}

tasksUpdateWithKeyVaultCustomCredentials().catch(console.error);
