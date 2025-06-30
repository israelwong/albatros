// src/app/components/common/Tabs.tsx
"use client";

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

interface TabsProps {
    defaultValue: string; // El valor de la pestaña que estará activa por defecto
    tabs: {
        value: string; // Identificador único para la pestaña
        label: string; // Texto visible de la pestaña
        content: React.ReactNode; // Contenido JSX para el panel de la pestaña
    }[];
}

const CustomTabs: React.FC<TabsProps> = ({ defaultValue, tabs }) => {
    return (
        <Tabs.Root className="flex flex-col w-full" defaultValue={defaultValue}>
            <Tabs.List
                className="flex border-b border-gray-200"
                aria-label="Manage your account"
            >
                {tabs.map((tab) => (
                    <Tabs.Trigger
                        key={tab.value}
                        className="
                          relative px-4 py-3 text-sm font-medium text-albatrosBlue
                          border-b-2 border-transparent
                          data-[state=active]:border-albatrosRed data-[state=active]:text-albatrosRed
                          data-[state=active]:font-bold data-[state=active]:bg-zinc-200
                          hover:text-albatrosRed hover:bg-gray-50
                          transition-colors duration-200
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-albatrosBlue focus:z-10
                          rounded-t-md
                          flex-1 text-center
                        "
                        value={tab.value}
                    >
                        {tab.label}
                    </Tabs.Trigger>
                ))}
            </Tabs.List>
            {tabs.map((tab) => (
                <Tabs.Content
                    key={tab.value}
                    className="
            flex-grow p-5 bg-white rounded-b-lg shadow-sm
            animate-in fade-in-0
            focus:outline-none
          "
                    value={tab.value}
                >
                    {tab.content}
                </Tabs.Content>
            ))}
        </Tabs.Root>
    );
};

export default CustomTabs;