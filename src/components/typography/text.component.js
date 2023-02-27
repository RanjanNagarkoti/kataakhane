import styled from "styled-components/native";
import { theme } from "../../infrastructure/theme";

const body = (theme) => `
    font-size: ${theme.fontSizes.body}
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body}
`;

const label = (theme) => `
    font-size: ${theme.fontSizes.body}
    font-family: ${theme.fonts.heading}
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption}
    font-family: ${theme.fontWeights.bold}
`;

const error = (theme) => `
    font-color: ${theme.colors.text.error}
`;

const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap : wrap;
    margin-top: 2px;
    margin-bottom: 1px;
`;

const variants = {
  body,
  hint,
  label,
  caption,
  error,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
