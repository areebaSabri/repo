const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create the default Spring Cloud Gateway route configs or update the existing Spring Cloud Gateway route configs.
 *
 * @summary Create the default Spring Cloud Gateway route configs or update the existing Spring Cloud Gateway route configs.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/GatewayRouteConfigs_CreateOrUpdate.json
 */
async function gatewayRouteConfigsCreateOrUpdate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const gatewayName = "default";
  const routeConfigName = "myRouteConfig";
  const gatewayRouteConfigResource = {
    properties: {
      appResourceId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/apps/myApp",
      openApi: {
        uri: "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/petstore.json",
      },
      routes: [
        {
          filters: ["StripPrefix=2", "RateLimit=1,1s"],
          predicates: ["Path=/api5/customer/**"],
          ssoEnabled: true,
          title: "myApp route config",
        },
      ],
      protocol: "HTTPS",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.gatewayRouteConfigs.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    gatewayName,
    routeConfigName,
    gatewayRouteConfigResource
  );
  console.log(result);
}

gatewayRouteConfigsCreateOrUpdate().catch(console.error);
