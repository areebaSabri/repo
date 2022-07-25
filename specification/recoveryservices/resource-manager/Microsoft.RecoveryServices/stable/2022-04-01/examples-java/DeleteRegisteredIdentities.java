import com.azure.core.util.Context;

/** Samples for RegisteredIdentities Delete. */
public final class Main {
    /*
     * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2022-04-01/examples/DeleteRegisteredIdentities.json
     */
    /**
     * Sample code: Delete registered Identity.
     *
     * @param manager Entry point to RecoveryServicesManager.
     */
    public static void deleteRegisteredIdentity(
        com.azure.resourcemanager.recoveryservices.RecoveryServicesManager manager) {
        manager.registeredIdentities().deleteWithResponse("BCDRIbzRG", "BCDRIbzVault", "dpmcontainer01", Context.NONE);
    }
}
