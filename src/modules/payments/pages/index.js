import getStripe from "../../../utils/getStripe";
import {toast} from "react-toastify";

export default function PaymentIndex() {
  const handlePayment = async () => {
    try {
      const stripe = await getStripe();
      stripe.redirectToCheckout(
        {
          lineItems: [
            {
              price: 'price_1NH13SFvHf810SZFftnzSoFH',
              quantity: 1,
            },
          ],
          mode: 'payment',
          successUrl: `http://localhost:3000/payments/success`,
          cancelUrl: `http://localhost:3000/payments/success`,
          customerEmail: 'customer@email.com',
        }
      );
    } catch (e) {
      toast.error(() => e.message);
    }
  }

  return (
    <>
      <section className={'contentHeader pt-5'}>
        <div className={'container-fluid'}>
          <div className={'row'}>
            <div className={'col-12 text-center'}>
              <button className="btn btn-primary" onClick={handlePayment}>Đặt hàng</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
