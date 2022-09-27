import com.azure.resourcemanager.securityinsights.models.FileFormat;
import com.azure.resourcemanager.securityinsights.models.FileImportContentType;
import com.azure.resourcemanager.securityinsights.models.FileMetadata;
import com.azure.resourcemanager.securityinsights.models.IngestionMode;

/** Samples for FileImports Create. */
public final class Main {
    /*
     * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/fileImports/CreateFileImport.json
     */
    /**
     * Sample code: Create a file import.
     *
     * @param manager Entry point to SecurityInsightsManager.
     */
    public static void createAFileImport(com.azure.resourcemanager.securityinsights.SecurityInsightsManager manager) {
        manager
            .fileImports()
            .define("73e01a99-5cd7-4139-a149-9f2736ff2ab5")
            .withExistingWorkspace("myRg", "myWorkspace")
            .withIngestionMode(IngestionMode.INGEST_ANY_VALID_RECORDS)
            .withContentType(FileImportContentType.STIX_INDICATOR)
            .withImportFile(
                new FileMetadata().withFileFormat(FileFormat.JSON).withFileName("myFile.json").withFileSize(4653))
            .withSource("mySource")
            .create();
    }
}
