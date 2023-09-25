import { Section, Title } from "./SectionTitle.styled";

export const SectionTitle = ({ title, children }) => {

  console.log(children.props)
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};
