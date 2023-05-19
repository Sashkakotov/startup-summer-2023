import UI from '../../constants/UIConstants';

const formatPaymentText = (card) => {
  if (card.payment_from && card.payment_to) {
    return `${UI.salaryCut} ${card.payment_from} - ${card.payment_to} ${card.currency}`;
  }
  if (card.payment_from) {
    return `${UI.salaryCut} ${UI.from} ${card.payment_from} ${card.currency}`;
  }
  if (card.payment_to) {
    return `${UI.salaryCut} ${card.payment_to} ${card.currency}`;
  }
  return UI.byAgreement;
};

export default formatPaymentText;
