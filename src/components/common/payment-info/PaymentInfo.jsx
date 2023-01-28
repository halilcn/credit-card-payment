import './../../../styles/components/paymentInfo.scss';

const PaymentInfo = props => {
  const { title, hasError, ...others } = props;

  return (
    <div className="payment__info">
      <div className="payment__info-title">{title}</div>
      <input className={`payment__info-input ${hasError && 'payment__info-input--has-error'}`} {...others} />
    </div>
  );
};

export default PaymentInfo;
