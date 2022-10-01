const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a RouteMap if it doesn't exist else updates the existing one.
 *
 * @summary Creates a RouteMap if it doesn't exist else updates the existing one.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/RouteMapPut.json
 */
async function routeMapPut() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualHubName = "virtualHub1";
  const routeMapName = "routeMap1";
  const routeMapParameters = {
    associatedInboundConnections: [
      "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/expressRouteGateways/exrGateway1/expressRouteConnections/exrConn1",
    ],
    associatedOutboundConnections: [],
    rules: [
      {
        name: "rule1",
        actions: [
          {
            type: "Add",
            parameters: [{ asPath: ["22334"], community: [], routePrefix: [] }],
          },
        ],
        matchCriteria: [
          {
            asPath: [],
            community: [],
            matchCondition: "Contains",
            routePrefix: ["10.0.0.0/8"],
          },
        ],
        nextStepIfMatched: "Continue",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.routeMaps.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualHubName,
    routeMapName,
    routeMapParameters
  );
  console.log(result);
}

routeMapPut().catch(console.error);
