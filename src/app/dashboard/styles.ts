import styled from "styled-components";
import theme from "../theme/theme";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing.large};
  background-color: ${theme.colors.background};
  min-height: 100vh;
`;

export const NoTasksMessage = styled.div`
  text-align: center;
  font-size: 1.2em;
  color: #555;
  margin-top: 20px;
  font-weight: bold;
`;


export const Header = styled.header`
  width: 100%;
  text-align: center;
  margin-bottom: ${theme.spacing.large};
`;

export const Title = styled.h1`
  font-size: ${theme.typography.fontSizeHeading};
  color: ${theme.colors.text};
`;

export const AddTaskSection = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  gap: ${theme.spacing.small};
  margin-bottom: ${theme.spacing.large};
`;

export const TaskInput = styled.input`
  flex: 1;
  padding: ${theme.spacing.medium};
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borders.radius};
  font-size: ${theme.typography.fontSizeBase};
  color: ${theme.colors.text};
  background-color: ${theme.colors.secondary};
`;

export const AddButton = styled.button`
  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.success};
  color: ${theme.colors.textSecondary};
  border: none;
  border-radius: ${theme.borders.radius};
  font-size: ${theme.typography.fontSizeBase};
  cursor: pointer;
  transition: ${theme.transitions.default};

  &:hover {
    background-color: ${theme.colors.primary};
  }

  &:active {
    background-color: ${theme.colors.border};
  }
`;

export const TaskListContainer = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const TaskCard = styled.div`
  background-color: ${theme.colors.secondary};
  padding: ${theme.spacing.medium};
  border-radius: ${theme.borders.radius};
  margin-bottom: ${theme.spacing.small};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;

export const TaskText = styled.span`
  font-size: ${theme.typography.fontSizeBase};
  color: ${theme.colors.text};
`;

export const TaskButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.small};
`;

export const CompleteButton = styled.button`
  background-color: ${theme.colors.success};
  border: none;
  border-radius: ${theme.borders.radius};
  color: ${theme.colors.textSecondary};
  padding: ${theme.spacing.small};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.primary};
  }
`;

export const DeleteButton = styled.button`
  background-color: ${theme.colors.error};
  border: none;
  border-radius: ${theme.borders.radius};
  color: ${theme.colors.textSecondary};
  padding: ${theme.spacing.small};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.border};
  }
`;
