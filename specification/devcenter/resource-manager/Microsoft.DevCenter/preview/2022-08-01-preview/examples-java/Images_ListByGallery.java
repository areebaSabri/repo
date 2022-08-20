import com.azure.core.util.Context;

/** Samples for Images ListByGallery. */
public final class Main {
    /*
     * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-08-01-preview/examples/Images_ListByGallery.json
     */
    /**
     * Sample code: Images_ListByGallery.
     *
     * @param manager Entry point to DevCenterManager.
     */
    public static void imagesListByGallery(com.azure.resourcemanager.devcenter.DevCenterManager manager) {
        manager.images().listByGallery("rg1", "Contoso", "DevGallery", null, Context.NONE);
    }
}
