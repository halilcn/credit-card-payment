import './../../../styles/components/paymentInfo.scss';

const PaymentInfo = props => {
  const { title, ...others } = props;

  return (
    <div className="payment__info">
      <div className="payment__info-title">{title}</div>
      <input className="payment__info-input" {...others} />
    </div>
  );
};

export default PaymentInfo;
