const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates the details of the operation in the API specified by its identifier.
 *
 * @summary Updates the details of the operation in the API specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementUpdateApiOperation.json
 */
async function apiManagementUpdateApiOperation() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "echo-api";
  const operationId = "operationId";
  const ifMatch = "*";
  const parameters = {
    method: "GET",
    displayName: "Retrieve resource",
    templateParameters: [],
    urlTemplate: "/resource",
    request: {
      queryParameters: [
        {
          name: "param1",
          type: "string",
          description: 'A sample parameter that is required and has a default value of "sample".',
          defaultValue: "sample",
          required: true,
          values: ["sample"],
        },
      ],
    },
    responses: [
      {
        description: "Returned in all cases.",
        headers: [],
        representations: [],
        statusCode: 200,
      },
      {
        description: "Server Error.",
        headers: [],
        representations: [],
        statusCode: 500,
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiOperation.update(
    resourceGroupName,
    serviceName,
    apiId,
    operationId,
    ifMatch,
    parameters
  );
  console.log(result);
}

apiManagementUpdateApiOperation().catch(console.error);
