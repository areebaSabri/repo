import com.azure.core.util.Context;
import com.azure.resourcemanager.connectedvmware.models.VMGuestPatchClassificationWindows;
import com.azure.resourcemanager.connectedvmware.models.VMGuestPatchRebootSetting;
import com.azure.resourcemanager.connectedvmware.models.VirtualMachineInstallPatchesParameters;
import com.azure.resourcemanager.connectedvmware.models.WindowsParameters;
import java.time.OffsetDateTime;
import java.util.Arrays;

/** Samples for VirtualMachines InstallPatches. */
public final class Main {
    /*
     * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/VirtualMachineInstallPatches.json
     */
    /**
     * Sample code: Install patch state of a machine.
     *
     * @param manager Entry point to ConnectedVMwareManager.
     */
    public static void installPatchStateOfAMachine(
        com.azure.resourcemanager.connectedvmware.ConnectedVMwareManager manager) {
        manager
            .virtualMachines()
            .installPatches(
                "myResourceGroupName",
                "myMachineName",
                new VirtualMachineInstallPatchesParameters()
                    .withMaximumDuration("PT3H")
                    .withRebootSetting(VMGuestPatchRebootSetting.IF_REQUIRED)
                    .withWindowsParameters(
                        new WindowsParameters()
                            .withClassificationsToInclude(
                                Arrays
                                    .asList(
                                        VMGuestPatchClassificationWindows.CRITICAL,
                                        VMGuestPatchClassificationWindows.SECURITY))
                            .withMaxPatchPublishDate(OffsetDateTime.parse("2022-01-15T02:36:43.0539904+00:00"))),
                Context.NONE);
    }
}
