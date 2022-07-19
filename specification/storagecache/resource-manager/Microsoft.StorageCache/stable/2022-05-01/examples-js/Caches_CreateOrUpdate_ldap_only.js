const { StorageCacheManagementClient } = require("@azure/arm-storagecache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update a Cache.
 *
 * @summary Create or update a Cache.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2022-05-01/examples/Caches_CreateOrUpdate_ldap_only.json
 */
async function cachesCreateOrUpdateLdapOnly() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "scgroup";
  const cacheName = "sc1";
  const cache = {
    cacheSizeGB: 3072,
    directoryServicesSettings: {
      usernameDownload: {
        credentials: {
          bindDn: "cn=ldapadmin,dc=contosoad,dc=contoso,dc=local",
          bindPassword: "<bindPassword>",
        },
        extendedGroups: true,
        ldapBaseDN: "dc=contosoad,dc=contoso,dc=local",
        ldapServer: "192.0.2.12",
        usernameSource: "LDAP",
      },
    },
    encryptionSettings: {
      keyEncryptionKey: {
        keyUrl: "https://keyvault-cmk.vault.azure.net/keys/key2048/test",
        sourceVault: {
          id: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.KeyVault/vaults/keyvault-cmk",
        },
      },
    },
    location: "westus",
    securitySettings: {
      accessPolicies: [
        {
          name: "default",
          accessRules: [
            {
              access: "rw",
              rootSquash: false,
              scope: "default",
              submountAccess: true,
              suid: false,
            },
          ],
        },
      ],
    },
    sku: { name: "Standard_2G" },
    subnet:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Network/virtualNetworks/scvnet/subnets/sub1",
    tags: { dept: "Contoso" },
    upgradeSettings: {
      scheduledTime: new Date("2022-04-26T18:25:43.511Z"),
      upgradeScheduleEnabled: true,
    },
  };
  const options = { cache };
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.caches.beginCreateOrUpdateAndWait(
    resourceGroupName,
    cacheName,
    options
  );
  console.log(result);
}

cachesCreateOrUpdateLdapOnly().catch(console.error);
