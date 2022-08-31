import React from 'react';
import { useAisles } from '../../services';
import { AisleGroceries } from './aisle-groceries';

export const Groceries: React.FC = () => {
    const [aisles] = useAisles();

    return (
        <>
            {aisles.map(name => 
                <AisleGroceries key={name} aisleName={name} />    
            )}
        </>
    );
};
