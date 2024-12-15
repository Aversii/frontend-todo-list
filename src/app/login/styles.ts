import styled from "styled-components";
import theme from "../theme/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.background};
`;

export const Card = styled.div<{ isError: boolean }>`
  width: 100%;
  max-width: 400px;
  height: 550px;
  perspective: 1000px;
  transition: all 0.5s ease;
  border-radius: ${theme.borders.radius};
  border: 2px solid ${theme.colors.primary};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;

export const CardInner = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transform: ${({ isFlipped }) =>
    isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  transform-style: preserve-3d;
  transition: transform 0.6s;
`;

export const CardFront = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.borders.radius};
  padding: ${theme.spacing.medium};
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.borders.radius};
  padding: ${theme.spacing.medium};
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.fontSizeHeading};
  font-weight: ${theme.typography.fontWeightRegular};
  color: ${theme.colors.text};
  text-align: center;
  margin-bottom: ${theme.spacing.large};
`;

export const SubTitle = styled.h2`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.fontSizeBase};
  font-weight: 100;
  color: ${theme.colors.text};
  text-align: center;
  margin-top: ${theme.spacing.large};
`;

export const Input = styled.input`
  width: 80%;
  border: none;
  border-bottom: 1px solid ${theme.colors.primary};
  background-color: transparent;
  font-size: ${theme.typography.fontSizeBase};
  color: ${theme.colors.text};
  padding: 10px 0 10px 10px;
  margin-bottom: 10px;

  &:focus {
    border-bottom: 2px solid ${theme.colors.border};
    outline: none;
  }
`;

export const Button = styled.button`
  width: 80%;
  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.textSecondary};
  border-radius: ${theme.borders.radius};
  font-size: ${theme.typography.fontSizeBase};
  font-weight: ${theme.typography.fontWeightRegular};
  cursor: pointer;
  transition: ${theme.transitions.default};
  margin-top: ${theme.spacing.large};
  border: 2px solid ${theme.colors.success};

  &:hover {
    background-color: ${theme.colors.success};
    border: 2px solid ${theme.colors.success};
  }

  &:active {
    background-color: ${theme.colors.success};
  }
`;

export const ErrorMessage = styled.p<{ isError: boolean }>`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.fontSizeBase};
  text-align: center;
  margin-top: ${theme.spacing.medium};
  border-bottom: 2px solid ${theme.colors.error};
  width: auto;
  max-width: 80%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isError }) => (isError ? "1" : "0")};
  animation: ${({ isError }) =>
    isError
      ? "borderPulse 5s infinite alternate, fadeOut 20s ease-out forwards"
      : "none"};

  @keyframes borderPulse {
    0% {
      border-color: ${theme.colors.error};
    }
    25% {
      border-color: transparent;
    }
    50% {
      border-color: ${theme.colors.error};
    }
    75% {
      border-color: transparent;
    }
    100% {
      border-color: ${theme.colors.error};
    }
  }

  @keyframes fadeOut {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.75;  /* Reduzindo suavemente a opacidade */
  }
  50% {
    opacity: 0.5;   /* Continuando a diminuição da opacidade */
  }
  70% {
    opacity: 0.25;  /* Mais uma redução */
  }
  100% {
    opacity: 0;     /* A opacidade chega a 0, tornando invisível */
  }
}

`;

export const FlipButton = styled.button`
  padding: 10px 20px;
  background-color: ${theme.colors.secondary};
  border: 2px solid ${theme.colors.background};
  color: ${theme.colors.success};
  cursor: pointer;
  margin-top: ${theme.spacing.medium};
  font-size: ${theme.typography.fontSizeBase};
  border-radius: ${theme.borders.radius};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  border-color: ${theme.colors.primary};

  &:hover {
    //background-color: black;
    color: ${theme.colors.success};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-color: ${theme.colors.primary};
  }

  &:active {
    background-color: ${theme.colors.success};
    color: ${theme.colors.primary};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
    border-color: ${theme.colors.primary};
  }
`;
