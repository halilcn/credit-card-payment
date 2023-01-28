import { useDispatch } from 'react-redux';
import { cardActions } from '../../store/card';
import PaymentInfo from '../common/payment-info/PaymentInfo';

const PaymentModal = () => {
  const dispatch = useDispatch();

  const toggleCreditCardFace = () => {
    dispatch(cardActions.toggleCardFace());
  };

  const onChangeHandle = (e, cardInfoName) => dispatch(cardActions.updateCardInformation({ [cardInfoName]: e.target.value }));

  return (
    <div className="payment__modal">
      <div className="payment__info-container">
        <PaymentInfo title="Card Holder" type="text" onChange={e => onChangeHandle(e, 'name')} />
      </div>
      <div className="payment__info-container">
        <PaymentInfo title="Card Number" type="text" onChange={e => onChangeHandle(e, 'number')} />
      </div>
      <div className="payment__info-container payment__info-container--row">
        <PaymentInfo title="Expiration Date" type="text" onChange={e => onChangeHandle(e, 'expireDate')} />
        <PaymentInfo
          title="CVV"
          type="number"
          onChange={e => onChangeHandle(e, 'cvv')}
          onFocus={toggleCreditCardFace}
          onBlur={toggleCreditCardFace}
        />
      </div>
      <div className="payment__submit">Submit</div>
    </div>
  );
};

export default PaymentModal;
