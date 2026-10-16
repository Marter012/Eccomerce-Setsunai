import styled from "styled-components";
export const ContainerFooter = styled.footer`
  width: 100%; padding: 40px clamp(18px, 5vw, 78px) 18px; background: var(--setsu-forest-deep); color: #fffaf0;
  .footer-main { max-width: 1320px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 22px; padding-bottom: 32px; }
  .footer-brand { display: flex; align-items: center; gap: 12px; }
  .brand-mark { display: grid; place-items: center; width: 46px; height: 46px; border: 1px solid rgba(200,169,106,.65); border-radius: 50%; color: #d9bd82; font-family: 'Playfair Display', Georgia, serif; font-size: 1.4rem; }
  .footer-brand div { display: flex; flex-direction: column; gap: 3px; }
  .footer-brand strong { font-family: 'Playfair Display', Georgia, serif; font-size: 1.15rem; letter-spacing: .2em; }
  .footer-brand small { color: #d2c4a5; font-size: .6rem; letter-spacing: .12em; text-transform: uppercase; }
  .footer-phrase { margin: 0; color: #d9dfd6; font-family: 'Playfair Display', Georgia, serif; font-size: clamp(1.1rem, 2vw, 1.5rem); font-style: italic; }
  .footer-bottom { max-width: 1320px; margin: 0 auto; padding-top: 17px; border-top: 1px solid rgba(255,255,255,.13); display: flex; justify-content: space-between; align-items: center; gap: 12px; color: #aebbb1; font-size: .68rem; }
  .footer-bottom span:nth-child(2) { display: inline-flex; align-items: center; gap: 4px; }
  @media(max-width:700px) { padding-top: 30px; .footer-main { flex-wrap: wrap; justify-content: space-between; padding-bottom: 25px; } .footer-phrase { order: 3; width: 100%; } .footer-bottom { flex-wrap: wrap; } .footer-bottom span:nth-child(2) { order: 3; width: 100%; } }
`;
export const ContainerIconFooter = styled.div`
  display: flex; align-items: center; gap: 9px;
  a { display: grid; place-items: center; width: 42px; height: 42px; border: 1px solid rgba(255,255,255,.18); border-radius: 50%; color: #e8d5a9; font-size: 1.1rem; text-decoration: none; transition: background .2s ease, transform .2s ease; }
  a:hover { transform: translateY(-2px); background: rgba(255,255,255,.1); }
`;
