import com.azure.resourcemanager.avs.models.AddonSrmProperties;

/** Samples for Addons CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2022-05-01/examples/Addons_CreateOrUpdate_SRM.json
     */
    /**
     * Sample code: Addons_CreateOrUpdate_SRM.
     *
     * @param manager Entry point to AvsManager.
     */
    public static void addonsCreateOrUpdateSRM(com.azure.resourcemanager.avs.AvsManager manager) {
        manager
            .addons()
            .define("srm")
            .withExistingPrivateCloud("group1", "cloud1")
            .withProperties(new AddonSrmProperties().withLicenseKey("41915178-A8FF-4A4D-B683-6D735AF5E3F5"))
            .create();
    }
}
