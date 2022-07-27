import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.fluent.models.ElasticPoolInner;
import com.azure.resourcemanager.sql.models.ElasticPoolPerDatabaseSettings;
import com.azure.resourcemanager.sql.models.Sku;

/** Samples for ElasticPools CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2017-10-01-preview/examples/ElasticPoolCreateOrUpdateMax.json
     */
    /**
     * Sample code: Create or update elastic pool with all parameter.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createOrUpdateElasticPoolWithAllParameter(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getElasticPools()
            .createOrUpdate(
                "sqlcrudtest-2369",
                "sqlcrudtest-8069",
                "sqlcrudtest-8102",
                new ElasticPoolInner()
                    .withLocation("Japan East")
                    .withSku(new Sku().withName("GP_Gen4_2").withTier("GeneralPurpose").withCapacity(2))
                    .withPerDatabaseSettings(
                        new ElasticPoolPerDatabaseSettings().withMinCapacity(0.25).withMaxCapacity(2.0)),
                Context.NONE);
    }
}
