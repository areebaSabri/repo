from azure.identity import DefaultAzureCredential
from azure.mgmt.cdn import CdnManagementClient

"""
# PREREQUISITES
    pip install azure-identity
    pip install azure-mgmt-cdn
# USAGE
    python log_analytics_get_waf_log_analytics_metrics.py

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

    response = client.log_analytics.get_waf_log_analytics_metrics(
        resource_group_name="RG",
        profile_name="profile1",
        metrics=["clientRequestCount"],
        date_time_begin="2020-11-04T06:49:27.554Z",
        date_time_end="2020-11-04T09:49:27.554Z",
        granularity="PT5M",
    )
    print(response)


# x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2021-06-01/examples/LogAnalytics_GetWafLogAnalyticsMetrics.json
if __name__ == "__main__":
    main()
