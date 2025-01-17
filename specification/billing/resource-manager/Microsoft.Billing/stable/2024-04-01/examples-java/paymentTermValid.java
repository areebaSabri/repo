
import com.azure.resourcemanager.billing.models.PaymentTerm;
import java.time.OffsetDateTime;
import java.util.Arrays;

/**
 * Samples for BillingAccounts ValidatePaymentTerms.
 */
public final class Main {
    /*
     * x-ms-original-file:
     * specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/paymentTermValid.json
     */
    /**
     * Sample code: PaymentTermValid.
     * 
     * @param manager Entry point to BillingManager.
     */
    public static void paymentTermValid(com.azure.resourcemanager.billing.BillingManager manager) {
        manager.billingAccounts().validatePaymentTermsWithResponse(
            "00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31",
            Arrays.asList(
                new PaymentTerm().withTerm("net10").withStartDate(OffsetDateTime.parse("2023-01-05T22:39:34.2606750Z"))
                    .withEndDate(OffsetDateTime.parse("2023-01-25T22:39:34.2606750Z"))),
            com.azure.core.util.Context.NONE);
    }
}
