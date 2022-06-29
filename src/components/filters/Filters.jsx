import { Container } from '@chakra-ui/react';
import Search from './Search';
import SelectMenu from './SelectMenu';

export const Filters = () => {
  return (
    <Container display="flex" justifyContent="space-between" alignItems="center" paddingX="20">
      <Search />

      <SelectMenu placeHolder="Filter by Region" options={['none', 'africa', 'america', 'asia', 'europe', 'oceania']} />
    </Container>
  );
};