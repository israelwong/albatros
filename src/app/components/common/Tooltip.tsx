// src/app/components/common/Tooltip.tsx
"use client";

import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

interface TooltipProps {
    children: React.ReactNode; // El elemento que activará el tooltip
    content: React.ReactNode;  // El contenido que se mostrará en el tooltip
    delayDuration?: number;    // Retraso en ms antes de mostrar/ocultar
    side?: 'top' | 'right' | 'bottom' | 'left'; // Posición del tooltip
    align?: 'start' | 'center' | 'end'; // Alineación del tooltip
}

const CustomTooltip: React.FC<TooltipProps> = ({
    children,
    content,
    delayDuration = 700,
    side = 'top',
    align = 'center',
}) => {
    return (
        <Tooltip.Provider delayDuration={delayDuration}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className="
              bg-gray-800 text-white text-sm px-3 py-1.5 rounded-md shadow-lg
              animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95
              data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2
              z-50
            "
                        sideOffset={5}
                        side={side}
                        align={align}
                    >
                        {content}
                        <Tooltip.Arrow className="fill-gray-800" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

export default CustomTooltip;