const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a list of repositories metadata.
 *
 * @summary Gets a list of repositories metadata.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/repositories/GetRepositories.json
 */
async function getRepositoryList() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const repoType = "Github";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.sourceControlOperations.listRepositories(
    resourceGroupName,
    workspaceName,
    repoType
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getRepositoryList().catch(console.error);
