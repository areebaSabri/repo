import com.azure.core.management.serializer.SerializerFactory;
import com.azure.core.util.Context;
import com.azure.core.util.serializer.SerializerEncoding;
import com.azure.resourcemanager.connectedvmware.models.MachineExtension;
import java.io.IOException;

/** Samples for MachineExtensions Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/UpdateExtension.json
     */
    /**
     * Sample code: Create or Update a Machine Extension (PATCH).
     *
     * @param manager Entry point to ConnectedVMwareManager.
     */
    public static void createOrUpdateAMachineExtensionPATCH(
        com.azure.resourcemanager.connectedvmware.ConnectedVMwareManager manager) throws IOException {
        MachineExtension resource =
            manager
                .machineExtensions()
                .getWithResponse("myResourceGroup", "myMachine", "CustomScriptExtension", Context.NONE)
                .getValue();
        resource
            .update()
            .withPublisher("Microsoft.Compute")
            .withType("CustomScriptExtension")
            .withTypeHandlerVersion("1.10")
            .withSettings(
                SerializerFactory
                    .createDefaultManagementSerializerAdapter()
                    .deserialize(
                        "{\"commandToExecute\":\"powershell.exe -c \\\"Get-Process | Where-Object { $_.CPU -lt 100"
                            + " }\\\"\"}",
                        Object.class,
                        SerializerEncoding.JSON))
            .apply();
    }
}
