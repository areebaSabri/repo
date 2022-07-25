const { PrivateDnsManagementClient } = require("@azure/arm-privatedns");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates a record set within a Private DNS zone.
 *
 * @summary Updates a record set within a Private DNS zone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2020-06-01/examples/RecordSetAAAAPatch.json
 */
async function patchPrivateDnsZoneAaaaRecordSet() {
  const subscriptionId = "subscriptionId";
  const resourceGroupName = "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const recordType = "AAAA";
  const relativeRecordSetName = "recordAAAA";
  const parameters = { metadata: { key2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.update(
    resourceGroupName,
    privateZoneName,
    recordType,
    relativeRecordSetName,
    parameters
  );
  console.log(result);
}

patchPrivateDnsZoneAaaaRecordSet().catch(console.error);
