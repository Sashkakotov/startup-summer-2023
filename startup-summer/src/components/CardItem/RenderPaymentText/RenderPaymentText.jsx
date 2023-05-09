import UI from '../../../constants/UI';

const RenderPaymentText = (card) =>
  `${UI.salaryCut} ${
    card.payment_from > 0 || card.payment_to > 0
      ? (card.payment_from > 0
          ? (card.payment_to > 0 ? '' : UI.from + ' ') + card.payment_from
          : '') +
        (card.payment_to > 0
          ? card.payment_from > 0
            ? ' - ' + card.payment_to
            : card.payment_to
          : '') +
        card.currency
      : UI.byAgreement
  }`;
export default RenderPaymentText;
