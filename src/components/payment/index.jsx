import CreditCard from '../credit-card';
import PaymentModal from '../payment-modal';

import './../../styles/components/payment.scss';

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment__container">
        <CreditCard />
        <PaymentModal />
      </div>
    </div>
  );
};

export default Payment;
