import styled from '@emotion/styled';
import { sectionBorderColor } from '../../../palette';

import {
    GarbageCan
} from '../../../icons';

export const MealRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
    width: 100%;
    height: 65px;
    padding: 0px 5px;
    border-bottom: 1px solid ${sectionBorderColor};
`;

export const MealName = styled.h2`
    font-size: 25px;
    text-transform: capitalize;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const RemoveMeal = styled(GarbageCan)`
    flex-shrink: 0;
    cursor: pointer;
`;