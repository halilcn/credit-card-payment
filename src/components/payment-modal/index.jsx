import PaymentInfo from '../common/payment-info/PaymentInfo';

const PaymentModal = () => {
  return (
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
  );
};

export default PaymentModal;
