import PaymentInfo from '../common/payment-info/PaymentInfo';
import CreditCard from '../payment/CreditCard';

import './../../styles/components/payment.scss';

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment__container">
        <CreditCard />
        <div className="payment__modal">
          <div className="payment__info-container">
            <PaymentInfo />
          </div>
          <div className="payment__info-container">
            <PaymentInfo />
          </div>
          <div className="payment__info-container payment__info-container--row">
            <PaymentInfo />
            <PaymentInfo />
          </div>
          <div className="payment__submit">Submit</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
