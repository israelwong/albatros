// src/app/components/common/Avatar.tsx
"use client";

import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

interface AvatarProps {
    src?: string; // URL de la imagen del avatar
    alt: string;  // Texto alternativo para la imagen
    fallback: React.ReactNode; // Contenido si la imagen no carga (ej. iniciales)
    size?: 'sm' | 'md' | 'lg'; // Tamaño del avatar
    className?: string;
}

const CustomAvatar: React.FC<AvatarProps> = ({
    src,
    alt,
    fallback,
    size = 'md',
    className,
}) => {
    const sizeClasses = {
        sm: 'w-8 h-8 text-xs',
        md: 'w-12 h-12 text-sm',
        lg: 'w-16 h-16 text-base',
    };

    return (
        <Avatar.Root
            className={`
        inline-flex items-center justify-center align-middle overflow-hidden
        select-none rounded-full
        ${sizeClasses[size]} ${className || ''}
      `}
        >
            <Avatar.Image
                className="h-full w-full object-cover rounded-full"
                src={src}
                alt={alt}
            />
            <Avatar.Fallback
                className={`
          flex items-center justify-center w-full h-full rounded-full
          bg-gray-200 text-gray-700 font-bold leading-none
        `}
                delayMs={600}
            >
                {fallback}
            </Avatar.Fallback>
        </Avatar.Root>
    );
};

export default CustomAvatar;