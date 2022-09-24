import com.azure.resourcemanager.security.models.ActiveConnectionsNotInAllowedRange;
import java.time.Duration;
import java.util.Arrays;

/** Samples for DeviceSecurityGroups CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2019-08-01/examples/DeviceSecurityGroups/PutDeviceSecurityGroups_example.json
     */
    /**
     * Sample code: Create or update a device security group for the specified IoT hub resource.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void createOrUpdateADeviceSecurityGroupForTheSpecifiedIoTHubResource(
        com.azure.resourcemanager.security.SecurityManager manager) {
        manager
            .deviceSecurityGroups()
            .define("samplesecuritygroup")
            .withExistingResourceId(
                "subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/SampleRG/providers/Microsoft.Devices/iotHubs/sampleiothub")
            .withTimeWindowRules(
                Arrays
                    .asList(
                        new ActiveConnectionsNotInAllowedRange()
                            .withIsEnabled(true)
                            .withMinThreshold(0)
                            .withMaxThreshold(30)
                            .withTimeWindowSize(Duration.parse("PT05M"))))
            .create();
    }
}
