import React from 'react';
import styled from 'styled-components';

import useMediaQuery from '../../hooks/useMediaQuery';
import { MOBILE_WIDTH_SIZE } from '../../themes/size';

interface Props {
  calendarEvent: App.Calendar.Event;
}

const Wrapper = styled.div<{ isMobile?: boolean }>`
  display: flex;
  padding: ${(props) => (props.isMobile ? 4 : 8)}px 0;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.calendar.red}12;
    border-radius: 12px;
  }
`;

const Divider = styled.div`
  margin: 0 12px;
  background-color: ${(props) => props.theme.calendar.red};

  width: 4px;
  height: 100%;
  border-radius: 4px;
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  color: ${(props) => props.theme.text900};

  // NOTE: (hello@amostan.me) This is to truncate the title into 1 line with ellipsis
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  overflow: hidden;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${(props) => props.theme.text600};
`;

const CalendarEvent: React.FC<Props> = function (props) {
  const { calendarEvent } = props;
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_WIDTH_SIZE})`);

  return (
    <Wrapper isMobile={isMobile}>
      <Divider />
      <TextWrapper>
        <Title>{calendarEvent.title}</Title>
        <Subtitle>{calendarEvent.timeString}</Subtitle>
      </TextWrapper>
    </Wrapper>
  );
};

export default CalendarEvent;