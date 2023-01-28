import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardActions } from '../../store/card';
import PaymentInfo from '../common/payment-info/PaymentInfo';

const CARD_FIELDS = {
  NAME: 'name',
  NUMBER: 'number',
  EXPIRE_DATE: 'expireDate',
  CVV: 'cvv'
};

const PaymentModal = () => {
  const [fieldsForError, setFieldsForError] = useState([]);

  const dispatch = useDispatch();
  const card = useSelector(state => state.card);

  const toggleCreditCardFace = () => {
    dispatch(cardActions.toggleCardFace());
  };

  const handleSetFieldsForError = field => {
    if (!fieldsForError.includes(field)) setFieldsForError([...fieldsForError, field]);
  };

  const handleDeleteFieldsForError = field => setFieldsForError([...fieldsForError.filter(f => f !== field)]);

  const onChangeHandle = (e, cardInfoName) => dispatch(cardActions.updateCardInformation({ [cardInfoName]: e.target.value }));

  const handleCheckErrorWhenOnBlur = field => {
    const value = card[field];

    if (value === '') {
      handleSetFieldsForError(CARD_FIELDS.NAME);
      return;
    }

    if (field === CARD_FIELDS.NAME) {
      if (value.split(' ').length <= 1) {
        handleSetFieldsForError(field);
        return;
      }
    }

    if (field === CARD_FIELDS.NUMBER) {
      if (value.length !== 16) {
        handleSetFieldsForError(field);
        return;
      }
    }

    if (field === CARD_FIELDS.CVV) {
      if (value.length !== 3) {
        handleSetFieldsForError(field);
        return;
      }
    }

    handleDeleteFieldsForError(field);
  };

  const handleHasError = field => fieldsForError.includes(field);

  const handleOnBlurForCvv = () => {
    toggleCreditCardFace();
    handleCheckErrorWhenOnBlur(CARD_FIELDS.CVV);
  };

  const paymentInputParams = fieldName => ({
    hasError: handleHasError(fieldName),
    onBlur: () => handleCheckErrorWhenOnBlur(fieldName),
    onChange: e => onChangeHandle(e, fieldName)
  });

  return (
    <div className="payment__modal">
      <div className="payment__info-container">
        <PaymentInfo title="Card Holder" type="text" {...paymentInputParams(CARD_FIELDS.NAME)} />
      </div>
      <div className="payment__info-container">
        <PaymentInfo title="Card Number" type="text" {...paymentInputParams(CARD_FIELDS.NUMBER)} />
      </div>
      <div className="payment__info-container payment__info-container--row">
        <PaymentInfo title="Expiration Date" type="text" {...paymentInputParams(CARD_FIELDS.EXPIRE_DATE)} />
        <PaymentInfo
          title="CVV"
          type="number"
          onFocus={toggleCreditCardFace}
          {...paymentInputParams(CARD_FIELDS.CVV)}
          onBlur={handleOnBlurForCvv}
        />
      </div>
      <div className="payment__submit">Submit</div>
    </div>
  );
};

export default PaymentModal;
