import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeSection = styled.section`
  width: 100%; max-width: 1440px; display: flex; flex-direction: column; align-items: center; gap: 26px;
  .home-trust-row { width: 100%; display: flex; justify-content: center; align-items: center; gap: 24px; color: #68766e; font-size: .82rem; letter-spacing: .04em; }
  .home-trust-row span { display: inline-flex; align-items: center; gap: 8px; }
  .home-trust-row svg { color: var(--setsu-forest); font-size: 1rem; }
  .home-trust-row i { width: 4px; height: 4px; border-radius: 50%; background: var(--setsu-gold); }
  @media(max-width:700px) { .home-trust-row { flex-wrap: wrap; gap: 12px 18px; font-size: .72rem; } }
`;
export const HomeMainCard = styled.div`
  width: 100%; display: grid; grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr); gap: clamp(28px, 5vw, 76px); align-items: center;
  padding: clamp(24px, 4vw, 62px); border: 1px solid rgba(22,59,50,.09); border-radius: 34px;
  background: var(--setsu-paper); box-shadow: var(--setsu-shadow); overflow: hidden;
  @media(max-width:900px) { grid-template-columns: 1fr; gap: 36px; padding: clamp(22px, 5vw, 44px); }
  @media(max-width:520px) { padding: 20px 16px; border-radius: 24px; }
`;
export const HomeDescriptionTitle = styled.div`
  display: flex; flex-direction: column; align-items: flex-start; min-width: 0;
  .eyebrow { margin: 28px 0 10px; color: var(--setsu-coral); text-transform: uppercase; font-weight: 700; letter-spacing: .17em; font-size: .72rem; }
  @media(max-width:900px) { .eyebrow { margin-top: 20px; } }
`;
export const HomeBadgeRow = styled.div`
  display: inline-flex; align-items: center; gap: 9px; padding: 9px 13px; border-radius: 99px; background: #f5f0e5; color: var(--setsu-forest); font-size: .68rem; font-weight: 800; letter-spacing: .09em;
  .badge-dot { width: 7px; height: 7px; border-radius: 50%; background: #d36e53; box-shadow: 0 0 0 4px rgba(211,110,83,.12); }
`;
export const HomeTitle = styled.h1`
  max-width: 620px; margin: 0; font-size: clamp(2.65rem, 5vw, 5.2rem); font-weight: 600; line-height: 1.04; letter-spacing: -.055em;
  em { color: #b4864f; font-weight: 500; }
  @media(max-width:520px) { font-size: clamp(2.4rem, 12vw, 3.6rem); }
`;
export const HomeLead = styled.p`
  max-width: 490px; margin: 22px 0 0; color: #68736c; font-size: clamp(.98rem, 1.2vw, 1.12rem); line-height: 1.85;
`;
export const HomeCTAGroup = styled.div`
  display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 28px; width: 100%;
  @media(max-width:520px) { flex-direction: column; align-items: stretch; }
`;
export const HomeBtn = styled(Link)`
  min-height: 50px; display: inline-flex; justify-content: center; align-items: center; gap: 12px; padding: 0 20px; border-radius: 999px; text-decoration: none; font-size: .9rem; font-weight: 700;
  &.primary { background: var(--setsu-forest); color: white; box-shadow: 0 10px 22px rgba(22,59,50,.18); }
  &.primary svg { font-size: 1.1rem; }
  &.primary:hover { background: var(--setsu-forest-deep); transform: translateY(-2px); }
  &.secondary { color: var(--setsu-forest); border: 1px solid #d9e0d9; background: transparent; }
  &.secondary:hover { background: #f4f5ef; }
`;
export const HomeInfoGrid = styled.div`
  width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 34px;
  @media(max-width:520px) { grid-template-columns: 1fr; margin-top: 24px; }
`;
export const HomeInfoCard = styled.div`
  display: flex; align-items: flex-start; gap: 12px; padding: 14px 12px; border-top: 1px solid var(--setsu-line);
  > svg { flex-shrink: 0; color: #b4864f; font-size: 1.2rem; margin-top: 2px; }
  div { display: flex; flex-direction: column; gap: 4px; }
  strong { color: var(--setsu-forest); font-size: .82rem; }
  span { color: #858d86; font-size: .72rem; line-height: 1.45; }
`;
export const HomeRightColumn = styled.div`
  min-width: 0; display: flex; flex-direction: column; gap: 16px;
  .hero-photo-wrap { position: relative; height: clamp(340px, 40vw, 560px); border-radius: 25px; overflow: hidden; background: #d7d1c3; }
  .hero-photo { width: 100%; height: 100%; object-fit: cover; transition: transform .8s ease; }
  .hero-photo-wrap:hover .hero-photo { transform: scale(1.035); }
  .hero-photo-wrap::after { content: ''; position: absolute; inset: 35% 0 0; background: linear-gradient(transparent, rgba(10,30,24,.72)); pointer-events: none; }
  .photo-label { position: absolute; z-index: 1; left: 24px; bottom: 22px; display: flex; flex-direction: column; gap: 7px; color: white; }
  .photo-label span { font-size: .65rem; font-weight: 800; letter-spacing: .18em; }
  .photo-label strong { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(1.3rem, 2.4vw, 2rem); font-weight: 500; }
  .round-stamp { position: absolute; z-index: 2; top: 20px; right: 20px; width: 94px; height: 94px; border-radius: 50%; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #f3e8d2; color: var(--setsu-forest); transform: rotate(9deg); box-shadow: 0 8px 30px #0002; }
  .round-stamp span { font-size: .46rem; letter-spacing: .12em; font-weight: 800; }
  .round-stamp strong { font-family: 'Playfair Display', serif; text-align: center; font-size: 1.1rem; line-height: .95; margin: 4px 0; }
  @media(max-width:520px) { .hero-photo-wrap { height: 350px; border-radius: 19px; } .round-stamp { width: 75px; height: 75px; right: 12px; top: 12px; } .round-stamp strong { font-size: .9rem; } }
`;
export const HomeSmallCardRow = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
  @media(max-width:520px) { gap: 10px; }
`;
export const HomeSmallCard = styled.article`
  display: flex; align-items: center; gap: 12px; min-width: 0; padding: 10px; background: #faf8f2; border: 1px solid #eee9df; border-radius: 17px;
  .mini-image { flex-shrink: 0; width: 76px; height: 76px; border-radius: 12px; overflow: hidden; background: #e8e0d2; }
  img { width: 100%; height: 100%; object-fit: cover; }
  .mini-info { display: flex; flex-direction: column; min-width: 0; gap: 4px; }
  span { color: #b4864f; font-size: .62rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
  strong { color: var(--setsu-forest); font-size: .82rem; line-height: 1.3; }
  small { color: #899087; font-size: .66rem; line-height: 1.3; }
  @media(max-width:520px) { gap: 8px; padding: 8px; .mini-image { width: 58px; height: 62px; } strong { font-size: .72rem; } small { display: none; } }
`;
export const HomeNotes = styled.div``;
export const HomeDescriptionTitleUnused = styled.div``;
