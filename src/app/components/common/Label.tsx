// src/app/components/common/Label.tsx
"use client";

import React from 'react';
import * as Label from '@radix-ui/react-label';

interface LabelProps {
    htmlFor: string; // El 'id' del input al que esta etiqueta está asociada
    children: React.ReactNode; // El texto de la etiqueta
    className?: string;
}

const CustomLabel: React.FC<LabelProps> = ({ htmlFor, children, className }) => {
    return (
        <Label.Root
            className={`font-body text-albatrosBlue text-sm font-medium leading-none ${className || ''}`}
            htmlFor={htmlFor}
        >
            {children}
        </Label.Root>
    );
};

export default CustomLabel;