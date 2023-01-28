import { useDispatch } from 'react-redux';
import { cardActions } from '../../store/card';
import PaymentInfo from '../common/payment-info/PaymentInfo';

const PaymentModal = () => {
  const dispatch = useDispatch();

  const toggleCreditCardFace = () => {
    dispatch(cardActions.toggleCardFace());
  };

  return (
    <div className="payment__modal">
      <div className="payment__info-container">
        <PaymentInfo title="Name" type="text" />
      </div>
      <div className="payment__info-container">
        <PaymentInfo />
      </div>
      <div className="payment__info-container payment__info-container--row">
        <PaymentInfo />
        <PaymentInfo title="Cvv" onFocus={toggleCreditCardFace} onBlur={toggleCreditCardFace} />
      </div>
      <div className="payment__submit">Submit</div>
    </div>
  );
};

export default PaymentModal;
