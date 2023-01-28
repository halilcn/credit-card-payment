import './../../styles/components/creditCard.scss';
import CreditCardBgImage from './../../assets/credit-card-bg.jpg';
import VisaImage from './../../assets/visa.png';
import { useSelector } from 'react-redux';

const CreditCard = () => {
  const isSelectedBackOfCard = useSelector(state => state.card.isSelectedBackOfCard);

  return (
    <div className={`credit-card ${isSelectedBackOfCard && 'credit-card__toggle-face'}`}>
      <div className="credit-card__face credit-card__face--front">
        <img src={CreditCardBgImage} className="credit-card__bg-img" />
        <div className="credit-card__filter" />
        <div className="credit-card__info-container">
          <img src={VisaImage} className="credit-card__visa-icon" />
          <div className="credit-card__info credit-card__info--number">4132 1456 1234 1246</div>
          <div className="credit-card__other-info">
            <div className="credit-card__info credit-card__info--name">Halil Can</div>
            <div className="credit-card__info credit-card__info--expire-date">12/2323</div>
          </div>
        </div>
      </div>
      <div className="credit-card__face credit-card__face--back">
        <img src={CreditCardBgImage} className="credit-card__bg-img" />
        <div className="credit-card__filter" />
        <div className="credit-card__info-container">
          <div className="credit-card__black-line" />
          <div className="credit-card__info credit-card__cvv">121</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
