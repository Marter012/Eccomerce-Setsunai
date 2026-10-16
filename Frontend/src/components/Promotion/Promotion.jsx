import {
  CardPromotion,
  ContainerCardsPromotion,
  ContainerPromotion,
} from "./PromotionStyles";

const Promotion = () => {
  return (
    <ContainerPromotion>
      <h4>Promociones</h4>
      <ContainerCardsPromotion>
        <CardPromotion className="left">
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
          <div>
            <p className="Title">Futurama</p>
            <p className="Description">
              asdkl nklasdn klasnd klasnd klas ndalsk
            </p>
          </div>
          <p className="Price">$15800</p>
        </CardPromotion>
        <CardPromotion className="right">
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
          <div>
            <p className="Title">Futurama</p>
            <p className="Description">
              asdkl nklasdn klasnd klasnd klas ndalsk
            </p>
          </div>
          <p className="Price">$15800</p>
        </CardPromotion>
        <CardPromotion className="left">
          <img
            src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754402988/SETSUNAI/fondo_hwriq6.png"
            alt=""
          />
          <div>
            <p className="Title">Futurama</p>
            <p className="Description">
              asdkl nklasdn klasnd klasnd klas ndalsk
            </p>
          </div>
          <p className="Price">$15800</p>
        </CardPromotion>
      </ContainerCardsPromotion>
    </ContainerPromotion>
  );
};

export default Promotion;
