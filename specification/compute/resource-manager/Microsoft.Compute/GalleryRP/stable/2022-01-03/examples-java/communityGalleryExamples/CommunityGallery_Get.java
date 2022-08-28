import com.azure.core.util.Context;

/** Samples for CommunityGalleries Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2022-01-03/examples/communityGalleryExamples/CommunityGallery_Get.json
     */
    /**
     * Sample code: Get a community gallery.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getACommunityGallery(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .virtualMachines()
            .manager()
            .serviceClient()
            .getCommunityGalleries()
            .getWithResponse("myLocation", "publicGalleryName", Context.NONE);
    }
}
