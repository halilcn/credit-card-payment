import { useSelector } from 'react-redux';
import CreditCardBgImage from './../../assets/credit-card-bg.jpg';
import VisaImage from './../../assets/visa.png';

import './../../styles/components/creditCard.scss';

const CreditCard = () => {
  const isSelectedBackOfCard = useSelector(state => state.card.isSelectedBackOfCard);
  const { number, name, expireDate, cvv } = useSelector(state => state.card);

  const splittedNumber = () =>
    number.split('').map((n, i) => (
      <>
        {n}
        {(i + 1) % 4 === 0 && <span> </span>}
      </>
    ));

  const hiddenCvvNumber = () =>
    cvv
      .split('')
      .map(_ => '*')
      .join('');

  return (
    <div className={`credit-card ${isSelectedBackOfCard && 'credit-card__toggle-face'}`}>
      <div className="credit-card__face credit-card__face--front">
        <img src={CreditCardBgImage} className="credit-card__bg-img" />
        <div className="credit-card__filter" />
        <div className="credit-card__info-container">
          <img src={VisaImage} className="credit-card__visa-icon" />
          <div className="credit-card__info credit-card__info--number">{splittedNumber()}</div>
          <div className="credit-card__other-info">
            <div className="credit-card__info credit-card__info--name">{name}</div>
            <div className="credit-card__info credit-card__info--expire-date">{expireDate}</div>
          </div>
        </div>
      </div>
      <div className="credit-card__face credit-card__face--back">
        <img src={CreditCardBgImage} className="credit-card__bg-img" />
        <div className="credit-card__filter" />
        <div className="credit-card__info-container">
          <div className="credit-card__black-line" />
          <div className="credit-card__info credit-card__info--cvv">{hiddenCvvNumber()}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
