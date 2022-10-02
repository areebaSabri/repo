const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateSoapToRestApiUsingWsdlImport.json
 */
async function apiManagementCreateSoapToRestApiUsingWsdlImport() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "soapApi";
  const parameters = {
    format: "wsdl-link",
    path: "currency",
    value: "http://www.webservicex.net/CurrencyConvertor.asmx?WSDL",
    wsdlSelector: {
      wsdlEndpointName: "CurrencyConvertorSoap",
      wsdlServiceName: "CurrencyConvertor",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateSoapToRestApiUsingWsdlImport().catch(console.error);
