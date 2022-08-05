const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Validate the cluster create request spec is valid or not.
 *
 * @summary Validate the cluster create request spec is valid or not.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/HDI_Locations_ValidateClusterCreateRequest.json
 */
async function getTheSubscriptionUsagesForSpecificLocation() {
  const subscriptionId = "subid";
  const location = "southcentralus";
  const parameters = {
    name: "testclustername",
    type: "Microsoft.HDInsight/clusters",
    fetchAaddsResource: false,
    location: "southcentralus",
    properties: {
      clusterDefinition: {
        componentVersion: { spark: "2.4" },
        configurations: {
          gateway: {
            "restAuthCredential.isEnabled": true,
            "restAuthCredential.password": "**********",
            "restAuthCredential.username": "admin",
          },
        },
        kind: "spark",
      },
      clusterVersion: "4.0",
      computeProfile: {
        roles: [
          {
            name: "headnode",
            autoscaleConfiguration: {},
            dataDisksGroups: [],
            hardwareProfile: { vmSize: "Standard_E8_V3" },
            minInstanceCount: 1,
            osProfile: {
              linuxOperatingSystemProfile: {
                password: "********",
                username: "sshuser",
              },
            },
            scriptActions: [],
            targetInstanceCount: 2,
            virtualNetworkProfile: {},
          },
          {
            name: "workernode",
            autoscaleConfiguration: {},
            dataDisksGroups: [],
            hardwareProfile: { vmSize: "Standard_E8_V3" },
            osProfile: {
              linuxOperatingSystemProfile: {
                password: "********",
                username: "sshuser",
              },
            },
            scriptActions: [],
            targetInstanceCount: 4,
            virtualNetworkProfile: {},
          },
          {
            name: "zookeepernode",
            autoscaleConfiguration: {},
            dataDisksGroups: [],
            hardwareProfile: { vmSize: "Standard_D13_V2" },
            minInstanceCount: 1,
            osProfile: {
              linuxOperatingSystemProfile: {
                password: "**********",
                username: "sshuser",
              },
            },
            scriptActions: [],
            targetInstanceCount: 3,
            virtualNetworkProfile: {},
          },
        ],
      },
      minSupportedTlsVersion: "1.2",
      osType: "Linux",
      storageProfile: {
        storageaccounts: [
          {
            name: "storagename.blob.core.windows.net",
            container: "contianername",
            isDefault: true,
            key: "*******",
            resourceId:
              "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Storage/storageAccounts/storagename",
          },
        ],
      },
      tier: "Standard",
    },
    tags: {},
    tenantId: "00000000-0000-0000-0000-000000000000",
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.locations.validateClusterCreateRequest(location, parameters);
  console.log(result);
}

getTheSubscriptionUsagesForSpecificLocation().catch(console.error);
