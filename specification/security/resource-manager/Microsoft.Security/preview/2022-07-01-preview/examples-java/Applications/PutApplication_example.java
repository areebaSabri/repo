import com.azure.core.management.serializer.SerializerFactory;
import com.azure.core.util.serializer.SerializerEncoding;
import com.azure.resourcemanager.security.models.ApplicationSourceResourceType;
import java.io.IOException;
import java.util.Arrays;

/** Samples for ApplicationOperation CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2022-07-01-preview/examples/Applications/PutApplication_example.json
     */
    /**
     * Sample code: Create application.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void createApplication(com.azure.resourcemanager.security.SecurityManager manager)
        throws IOException {
        manager
            .applicationOperations()
            .define("ad9a8e26-29d9-4829-bb30-e597a58cdbb8")
            .withDisplayName("Admin's application")
            .withDescription("An application on critical recommendations")
            .withSourceResourceType(ApplicationSourceResourceType.ASSESSMENTS)
            .withConditionSets(
                Arrays
                    .asList(
                        SerializerFactory
                            .createDefaultManagementSerializerAdapter()
                            .deserialize(
                                "{\"conditions\":[{\"operator\":\"contains\",\"property\":\"$.Id\",\"value\":\"-bil-\"}]}",
                                Object.class,
                                SerializerEncoding.JSON)))
            .create();
    }
}
