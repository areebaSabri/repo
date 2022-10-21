from azure.identity import DefaultAzureCredential
from azure.mgmt.cdn import CdnManagementClient

"""
# PREREQUISITES
    pip install azure-identity
    pip install azure-mgmt-cdn
# USAGE
    python origins_create.py

    Before run the sample, please set the values of the client ID, tenant ID and client secret 
    of the AAD application as environment variables: AZURE_CLIENT_ID, AZURE_TENANT_ID,
    AZURE_CLIENT_SECRET. For more info about how to get the value, please see:
    https://docs.microsoft.com/azure/active-directory/develop/howto-create-service-principal-portal
"""


def main():
    client = CdnManagementClient(
        credential=DefaultAzureCredential(),
        subscription_id="subid",
    )

    response = client.origins.begin_create(
        resource_group_name="RG",
        profile_name="profile1",
        endpoint_name="endpoint1",
        origin_name="www-someDomain-net",
        origin={
            "properties": {
                "enabled": True,
                "hostName": "www.someDomain.net",
                "httpPort": 80,
                "httpsPort": 443,
                "originHostHeader": "www.someDomain.net",
                "priority": 1,
                "privateLinkApprovalMessage": "Please approve the connection request for this Private Link",
                "privateLinkLocation": "eastus",
                "privateLinkResourceId": "/subscriptions/subid/resourcegroups/rg1/providers/Microsoft.Network/privateLinkServices/pls1",
                "weight": 50,
            }
        },
    ).result()
    print(response)


# x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2021-06-01/examples/Origins_Create.json
if __name__ == "__main__":
    main()
