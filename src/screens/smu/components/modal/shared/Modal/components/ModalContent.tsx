import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';
import React from 'react';
import styled from 'styled-components';

import { MOBILE_WIDTH_SIZE_L } from '../../../../../../../shared/themes/size';
import { useModalContext } from '../hooks/useModalContext';

const ModalOverlay = styled(FloatingOverlay)`
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
`;

const ModalContentWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  max-height: 800px;
  padding: 16px 0;
  overflow: scroll;
  border-radius: 24px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.appColor[100]};

  @media screen and (max-width: ${MOBILE_WIDTH_SIZE_L}) {
    width: 100%;
    height: 85%;
    align-self: flex-end;
    border-radius: 24px 24px 0 0;
  }
`;

const ModalContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, propRef) => {
  const { children } = props;
  const { context: floatingContext, ...context } = useModalContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) {
    return null;
  }

  return (
    <FloatingPortal>
      <ModalOverlay>
        <FloatingFocusManager context={floatingContext}>
          <ModalContentWrapper
            ref={ref}
            aria-labelledby={context.labelId}
            aria-describedby={context.descriptionId}
            {...context.getFloatingProps(props)}
          >
            {children}
          </ModalContentWrapper>
        </FloatingFocusManager>
      </ModalOverlay>
    </FloatingPortal>
  );
});

ModalContent.displayName = 'ModalContent';
export default ModalContent;
