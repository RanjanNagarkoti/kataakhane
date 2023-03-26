import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
font-family: ${theme.fonts.body}
font-weight: ${theme.fontWeights.regular}
color: ${theme.colors.text.primary}
flex-wrap: wrap;
margin-top: 1px;
margin-bottom: 1px;
`;

const body = (theme) => `
font-size : ${theme.fontSizes.body}
`;
const label = (theme) => `
font-family: ${theme.fonts.heading}
font-size: ${theme.fontSizes.body}
font-weight: ${theme.fontWeights.medium}
`;
const caption = (theme) => `
font-size: ${theme.fontSizes.bold}
font-weight: ${theme.fontWeights.bold}
`;
const error = (theme) => `
    color: ${theme.colors.text.error}
`;
const hint = (theme) => `
font-size: ${theme.fontSizes.body}
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

console.log(variants);

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
