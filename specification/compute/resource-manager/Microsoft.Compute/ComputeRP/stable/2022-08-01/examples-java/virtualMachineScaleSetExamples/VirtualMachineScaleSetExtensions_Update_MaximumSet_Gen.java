import com.azure.core.management.serializer.SerializerFactory;
import com.azure.core.util.Context;
import com.azure.core.util.serializer.SerializerEncoding;
import com.azure.resourcemanager.compute.models.VirtualMachineScaleSetExtensionUpdate;
import java.io.IOException;
import java.util.Arrays;

/** Samples for VirtualMachineScaleSetExtensions Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSetExtensions_Update_MaximumSet_Gen.json
     */
    /**
     * Sample code: VirtualMachineScaleSetExtensions_Update_MaximumSet_Gen.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void virtualMachineScaleSetExtensionsUpdateMaximumSetGen(
        com.azure.resourcemanager.AzureResourceManager azure) throws IOException {
        azure
            .virtualMachines()
            .manager()
            .serviceClient()
            .getVirtualMachineScaleSetExtensions()
            .update(
                "rgcompute",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                "aaaa",
                new VirtualMachineScaleSetExtensionUpdate()
                    .withForceUpdateTag("aaaaaaaaa")
                    .withPublisher("{extension-Publisher}")
                    .withTypePropertiesType("{extension-Type}")
                    .withTypeHandlerVersion("{handler-version}")
                    .withAutoUpgradeMinorVersion(true)
                    .withEnableAutomaticUpgrade(true)
                    .withSettings(
                        SerializerFactory
                            .createDefaultManagementSerializerAdapter()
                            .deserialize("{}", Object.class, SerializerEncoding.JSON))
                    .withProtectedSettings(
                        SerializerFactory
                            .createDefaultManagementSerializerAdapter()
                            .deserialize("{}", Object.class, SerializerEncoding.JSON))
                    .withProvisionAfterExtensions(Arrays.asList("aa"))
                    .withSuppressFailures(true),
                Context.NONE);
    }
}
