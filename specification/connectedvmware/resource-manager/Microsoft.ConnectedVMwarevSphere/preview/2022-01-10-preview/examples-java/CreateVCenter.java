import com.azure.resourcemanager.connectedvmware.models.ExtendedLocation;
import com.azure.resourcemanager.connectedvmware.models.VICredential;

/** Samples for VCenters Create. */
public final class Main {
    /*
     * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/CreateVCenter.json
     */
    /**
     * Sample code: CreateVCenter.
     *
     * @param manager Entry point to ConnectedVMwareManager.
     */
    public static void createVCenter(com.azure.resourcemanager.connectedvmware.ConnectedVMwareManager manager) {
        manager
            .vCenters()
            .define("ContosoVCenter")
            .withRegion("East US")
            .withExistingResourceGroup("testrg")
            .withFqdn("ContosoVMware.contoso.com")
            .withExtendedLocation(
                new ExtendedLocation()
                    .withType("customLocation")
                    .withName(
                        "/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso"))
            .withPort(1234)
            .withCredentials(new VICredential().withUsername("tempuser").withPassword("<password>"))
            .create();
    }
}
