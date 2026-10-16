import styled from "styled-components";
export const ContainerTypeRolls = styled.section`
  width: 100%; max-width: 1440px; padding: clamp(26px, 5vw, 62px); border-radius: 30px; background: #eee8dc;
  .section-kicker { margin: 0 0 10px; color: #b4864f; text-align: center; font-size: .7rem; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
  .Title { margin: 0 0 12px; text-align: center; color: var(--setsu-forest); font-size: clamp(2rem, 4vw, 3.4rem); font-weight: 600; letter-spacing: -.04em; }
  .section-intro { max-width: 560px; margin: 0 auto 32px; text-align: center; color: #707a71; font-size: .95rem; }
  @media(max-width:520px) { padding: 30px 16px; border-radius: 22px; }
`;
export const ContainerTypeRoll = styled.div`
  display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; width: 100%;
  @media(max-width:850px) { grid-template-columns: 1fr 1fr; }
  @media(max-width:560px) { grid-template-columns: 1fr; }
`;
export const CardTypeRoll = styled.article`
  background: var(--setsu-paper); border-radius: 20px; overflow: hidden; text-align: left; border: 1px solid rgba(22,59,50,.07); transition: transform .25s ease, box-shadow .25s ease;
  &:hover { transform: translateY(-5px); box-shadow: 0 18px 38px rgba(22,59,50,.10); }
  img { width: 100%; height: 190px; object-fit: cover; }
  .roll-copy { padding: 20px 22px 24px; }
  .TypeRoll { margin: 0 0 9px; color: var(--setsu-forest); font-size: 1.65rem; font-weight: 600; }
  .DescriptionRoll { margin: 0; color: #6e7971; font-size: .9rem; line-height: 1.75; }
  .DescriptionRoll span { display: block; margin-top: 12px; color: #9a8054; font-size: .77rem; font-style: italic; }
  @media(max-width:560px) { img { height: 210px; } }
`;
