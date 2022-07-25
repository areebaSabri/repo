const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or updated PHP workload resource.
 *
 * @summary Create or updated PHP workload resource.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/phpworkloads/PhpWorkloads_CreateOrUpdate.json
 */
async function workloads() {
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const resourceGroupName = "test-rg";
  const phpWorkloadName = "wp39";
  const phpWorkloadResource = {
    adminUserProfile: {
      sshPublicKey: "===SSH=PUBLIC=KEY===",
      userName: "wpadmin",
    },
    appLocation: "eastus",
    backupProfile: { backupEnabled: "Disabled" },
    cacheProfile: {
      name: "wp-cache",
      capacity: 0,
      family: "C",
      skuName: "Basic",
    },
    controllerProfile: {
      name: "contoller-vm",
      dataDisks: [{ sizeInGB: 100, storageType: "Premium_LRS" }],
      nodeSku: "Standard_DS2_v2",
      osDisk: { storageType: "Premium_LRS" },
      osImage: {
        offer: "UbuntuServer",
        publisher: "Canonical",
        sku: "18.0-LTS",
        version: "latest",
      },
    },
    databaseProfile: {
      type: "MySql",
      backupRetentionDays: 7,
      haEnabled: "Disabled",
      serverName: "wp-db-server",
      sku: "Standard_D32s_v4",
      sslEnforcementEnabled: "Enabled",
      storageInGB: 128,
      storageIops: 200,
      storageSku: "Premium_LRS",
      tier: "GeneralPurpose",
      version: "5.7",
    },
    fileshareProfile: {
      shareSizeInGB: 100,
      shareType: "AzureFiles",
      storageType: "Premium_LRS",
    },
    kind: "WordPress",
    location: "eastus2",
    managedResourceGroupConfiguration: { name: "php-mrg-wp39" },
    networkProfile: {
      azureFrontDoorEnabled: "Enabled",
      loadBalancerSku: "Standard",
      loadBalancerType: "LoadBalancer",
    },
    phpProfile: { version: "7.3" },
    searchProfile: {
      nodeSku: "Standard_DS2_v2",
      osDisk: { storageType: "Premium_LRS" },
      osImage: {
        offer: "UbuntuServer",
        publisher: "Canonical",
        sku: "18.0-LTS",
        version: "latest",
      },
      searchType: "Elastic",
    },
    siteProfile: { domainName: "www.example.com" },
    sku: { name: "Large" },
    tags: {},
    webNodesProfile: {
      name: "web-server",
      autoScaleMaxCount: 1,
      autoScaleMinCount: 1,
      nodeSku: "Standard_DS2_v2",
      osDisk: { storageType: "Premium_LRS" },
      osImage: {
        offer: "UbuntuServer",
        publisher: "Canonical",
        sku: "18.0-LTS",
        version: "latest",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.phpWorkloads.beginCreateOrUpdateAndWait(
    resourceGroupName,
    phpWorkloadName,
    phpWorkloadResource
  );
  console.log(result);
}

workloads().catch(console.error);
