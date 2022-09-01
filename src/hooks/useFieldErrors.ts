import { useCallback, useState } from 'react';

export type FieldError = string;
export interface FieldErrors {
    [key: string]: FieldError[]; 
}


export function useFieldErrors<T extends FieldErrors>(): [T, {
    newError: typeof newError;
    removeError: typeof removeError;
    clearFieldErrors: typeof clearFieldErrors;
    clearErrors: typeof clearErrors; 
}]  {
    const [errors, setErrors] = useState<T>(<T>{});

    const newError = useCallback((field: keyof T, name: FieldError) => {
        setErrors(currentErrors => {
            const newErrors = {
                ...currentErrors,
                [field]: [
                    ...(currentErrors?.[field]?.filter(errorName => errorName !== name) ?? []),
                    name
                ]
            };

            return newErrors;
        });
    }, [setErrors]);

    const removeError = useCallback((field: keyof T, name: FieldError) => {
        setErrors(currentErrors => {
            const newErrors = {
                ...currentErrors,
                [field]: (currentErrors?.[field]?.filter(errorName => errorName !== name) || undefined)
            };
            
            return newErrors;
        });
    }, [setErrors]);

    const clearFieldErrors = useCallback((field: keyof T) => {
        setErrors(currentErrors => {
            const newErrors = {
                ...currentErrors,
                [field]: undefined
            };

            return newErrors;
        });
    }, [setErrors]);

    const clearErrors = useCallback(() => {
        setErrors(<T>{});
    }, [setErrors]);

    return [errors, {newError, removeError, clearFieldErrors, clearErrors}];
}
