import {
  Container,
  CheckboxWrapper,
  SaucesWrapper,
} from "./SectionProductsAddStyles";

const EXTRAS_LABELS = {
  palitos: "Palitos",
  wasabi: "Wasabi",
  jengibreEncurtido: "Jengibre Encurtido",
};

const SALSAS = {
  soja: "Salsa de Soja",
  teriyaki: "Salsa Teriyaki",
  buenosAires: "Salsa Buenos Aires",
};

const SectionProductsAdd = ({ ownerId, data = {}, onChange }) => {
  const include = data;

  return (
    <Container>
      {/* INCLUYE */}
      <SaucesWrapper>
        <p className="sauces-title">Incluye</p>
        <div>
          {Object.entries(EXTRAS_LABELS).map(([key, label]) => (
            <CheckboxWrapper key={`${key}-${ownerId}`}>
              <input
                type="checkbox"
                id={`${key}-${ownerId}`}
                checked={!!include[key]}
                onChange={(e) => onChange(ownerId, key, e.target.checked)}
              />
              <label htmlFor={`${key}-${ownerId}`}>{label}</label>
            </CheckboxWrapper>
          ))}
        </div>
      </SaucesWrapper>

      <div className="linea" />

      {/* SALSA */}
      <SaucesWrapper>
        <p className="sauces-title">Salsa a elección</p>
        <div>
          {Object.entries(SALSAS).map(([key, label]) => (
            <CheckboxWrapper key={`salsa-${key}-${ownerId}`}>
              <input
                type="radio"
                id={`salsa-${key}-${ownerId}`}
                name={`salsa-${ownerId}`}
                checked={include.salsa === key}
                onChange={() => onChange(ownerId, "salsa", key)}
              />
              <label htmlFor={`salsa-${key}-${ownerId}`}>{label}</label>
            </CheckboxWrapper>
          ))}
        </div>
      </SaucesWrapper>
    </Container>
  );
};

export default SectionProductsAdd;
