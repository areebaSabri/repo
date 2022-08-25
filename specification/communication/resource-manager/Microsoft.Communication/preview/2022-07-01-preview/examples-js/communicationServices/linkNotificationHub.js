const { CommunicationServiceManagementClient } = require("@azure/arm-communication");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Links an Azure Notification Hub to this communication service.
 *
 * @summary Links an Azure Notification Hub to this communication service.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2022-07-01-preview/examples/communicationServices/linkNotificationHub.json
 */
async function linkNotificationHub() {
  const subscriptionId = "12345";
  const resourceGroupName = "MyResourceGroup";
  const communicationServiceName = "MyCommunicationResource";
  const linkNotificationHubParameters = {
    connectionString: "Endpoint=sb://MyNamespace.servicebus.windows.net/;SharedAccessKey=abcd1234",
    resourceId:
      "/subscriptions/12345/resourceGroups/MyOtherResourceGroup/providers/Microsoft.NotificationHubs/namespaces/MyNamespace/notificationHubs/MyHub",
  };
  const options = {
    linkNotificationHubParameters,
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(credential, subscriptionId);
  const result = await client.communicationServices.linkNotificationHub(
    resourceGroupName,
    communicationServiceName,
    options
  );
  console.log(result);
}

linkNotificationHub().catch(console.error);
