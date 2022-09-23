const { NetAppManagementClient } = require("@azure/arm-netapp");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update the specified NetApp account within the resource group
 *
 * @summary Create or update the specified NetApp account within the resource group
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-05-01/examples/Accounts_CreateOrUpdate.json
 */
async function accountsCreateOrUpdate() {
  const subscriptionId = "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = "myRG";
  const accountName = "account1";
  const body = {
    activeDirectories: [
      {
        aesEncryption: true,
        dns: "10.10.10.3, 10.10.10.4",
        domain: "10.10.10.3",
        ldapOverTLS: false,
        ldapSigning: false,
        organizationalUnit: "OU=Engineering",
        password: "ad_password",
        site: "SiteName",
        smbServerName: "SMBServer",
        username: "ad_user_name",
      },
    ],
    location: "eastus",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.accounts.beginCreateOrUpdateAndWait(
    resourceGroupName,
    accountName,
    body
  );
  console.log(result);
}

accountsCreateOrUpdate().catch(console.error);
