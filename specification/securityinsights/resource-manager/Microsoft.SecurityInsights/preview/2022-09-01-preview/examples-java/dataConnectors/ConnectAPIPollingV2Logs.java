import com.azure.core.management.serializer.SerializerFactory;
import com.azure.core.util.Context;
import com.azure.core.util.serializer.SerializerEncoding;
import com.azure.resourcemanager.securityinsights.models.ConnectAuthKind;
import com.azure.resourcemanager.securityinsights.models.DataConnectorConnectBody;
import java.io.IOException;
import java.util.Arrays;

/** Samples for DataConnectors Connect. */
public final class Main {
    /*
     * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/dataConnectors/ConnectAPIPollingV2Logs.json
     */
    /**
     * Sample code: Connect an APIPolling V2 logs data connector.
     *
     * @param manager Entry point to SecurityInsightsManager.
     */
    public static void connectAnAPIPollingV2LogsDataConnector(
        com.azure.resourcemanager.securityinsights.SecurityInsightsManager manager) throws IOException {
        manager
            .dataConnectors()
            .connectWithResponse(
                "myRg",
                "myWorkspace",
                "316ec55e-7138-4d63-ab18-90c8a60fd1c8",
                new DataConnectorConnectBody()
                    .withKind(ConnectAuthKind.APIKEY)
                    .withApiKey("123456789")
                    .withDataCollectionEndpoint("https://test.eastus.ingest.monitor.azure.com")
                    .withDataCollectionRuleImmutableId("dcr-34adsj9o7d6f9de204478b9cgb43b631")
                    .withOutputStream("Custom-MyTableRawData")
                    .withRequestConfigUserInputValues(
                        Arrays
                            .asList(
                                SerializerFactory
                                    .createDefaultManagementSerializerAdapter()
                                    .deserialize(
                                        "{\"displayText\":\"Organization"
                                            + " Name\",\"placeHolderName\":\"{{placeHolder1}}\",\"placeHolderValue\":\"somePlaceHolderValue\",\"requestObjectKey\":\"apiEndpoint\"}",
                                        Object.class,
                                        SerializerEncoding.JSON))),
                Context.NONE);
    }
}
