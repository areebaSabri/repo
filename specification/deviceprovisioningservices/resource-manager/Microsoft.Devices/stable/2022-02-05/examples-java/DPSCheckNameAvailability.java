import com.azure.core.util.Context;
import com.azure.resourcemanager.deviceprovisioningservices.models.OperationInputs;

/** Samples for IotDpsResource CheckProvisioningServiceNameAvailability. */
public final class Main {
    /*
     * x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/stable/2022-02-05/examples/DPSCheckNameAvailability.json
     */
    /**
     * Sample code: DPSCheckName.
     *
     * @param manager Entry point to IotDpsManager.
     */
    public static void dPSCheckName(com.azure.resourcemanager.deviceprovisioningservices.IotDpsManager manager) {
        manager
            .iotDpsResources()
            .checkProvisioningServiceNameAvailabilityWithResponse(
                new OperationInputs().withName("test213123"), Context.NONE);
    }
}
