import com.azure.resourcemanager.connectedvmware.models.ExtendedLocation;
import com.azure.resourcemanager.connectedvmware.models.HardwareProfile;

/** Samples for VirtualMachines Create. */
public final class Main {
    /*
     * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/CreateVirtualMachine.json
     */
    /**
     * Sample code: CreateVirtualMachine.
     *
     * @param manager Entry point to ConnectedVMwareManager.
     */
    public static void createVirtualMachine(com.azure.resourcemanager.connectedvmware.ConnectedVMwareManager manager) {
        manager
            .virtualMachines()
            .define("DemoVM")
            .withRegion("East US")
            .withExistingResourceGroup("testrg")
            .withExtendedLocation(
                new ExtendedLocation()
                    .withType("customLocation")
                    .withName(
                        "/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso"))
            .withResourcePoolId(
                "/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/ResourcePools/HRPool")
            .withTemplateId(
                "/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VirtualMachineTemplates/WebFrontEndTemplate")
            .withVCenterId(
                "/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VCenters/ContosoVCenter")
            .withHardwareProfile(new HardwareProfile().withMemorySizeMB(4196).withNumCPUs(4))
            .create();
    }
}
