import styled from '@emotion/styled';
import { contentObscureBackgroundColor, sectionBackgroundColor, sectionBorderColor } from '../../palette';

import {
    Modal as _Modal,
    ModalFrame as _ModalFrame
} from '@ross-alexandra/react-utilities';

export const Modal = styled(_Modal)`
    .modal {
        background-color: ${sectionBackgroundColor};
        border: 1px solid ${sectionBorderColor};
    }

    .modal-background {
        background-color: ${contentObscureBackgroundColor};
    }
`;

export const ModalFrame = styled(_ModalFrame)`

`;