import './../../styles/components/creditCard.scss';
import CreditCardBgImage from './../../assets/credit-card-bg.jpg';
import VisaImage from './../../assets/visa.png';
import { useSelector } from 'react-redux';

const CreditCard = () => {
  const isSelectedBackOfCard = useSelector(state => state.card.isSelectedBackOfCard);
  const { number, name, expireDate, cvv } = useSelector(state => state.card);

  return (
    <div className={`credit-card ${isSelectedBackOfCard && 'credit-card__toggle-face'}`}>
      <div className="credit-card__face credit-card__face--front">
        <img src={CreditCardBgImage} className="credit-card__bg-img" />
        <div className="credit-card__filter" />
        <div className="credit-card__info-container">
          <img src={VisaImage} className="credit-card__visa-icon" />
          <div className="credit-card__info credit-card__info--number">{number}</div>
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
          <div className="credit-card__info credit-card__cvv">{cvv}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
