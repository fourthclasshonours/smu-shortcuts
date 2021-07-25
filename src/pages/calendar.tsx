import React from 'react';
import styled from 'styled-components';

import { CalendarList } from '../components/Card';
import DefaultLayout from '../layouts/DefaultLayout';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;

  padding-top: 24px;
  padding-bottom: max(24px, env(safe-area-inset-bottom));
  padding-left: max(16px, env(safe-area-inset-left));
  padding-right: max(16px, env(safe-area-inset-right));

  // grid-template-columns: 1fr 2fr;
  // column-gap: 16px;

  @media screen and (max-width: ${(props) => props.theme.mobileSize}) {
    padding-top: 16px;
    padding-bottom: max(16px, env(safe-area-inset-bottom));
    padding-left: max(8px, env(safe-area-inset-left));
    padding-right: max(8px, env(safe-area-inset-right));

    flex-direction: column;
    overflow-y: auto;
  }
`;

export const Calendar: React.FC = () => {
  return (
    <DefaultLayout title="Calendar">
      <Wrapper>
        <CalendarList />
      </Wrapper>
    </DefaultLayout>
  );
};

export default Calendar;
