"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export default function QueryProvider({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    const [isRestored, setIsRestored] = useState(false); // Флаг готовности кэша

    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: 1,
                        staleTime: 1000 * 60 * 10,   // 10 минут данные СТРОГО свежие
                        gcTime: 1000 * 60 * 60 * 24,  // 24 часа хранить в памяти
                        refetchOnWindowFocus: false, // Отключаем запрос при клике на окно
                        refetchOnMount: false,       // Отключаем запрос при монтировании устаревших
                    },
                },
            })
    );

    useEffect(() => {
        const localStoragePersister = createSyncStoragePersister({
            storage: typeof window !== "undefined" ? window.localStorage : undefined,
        });

        // persistQueryClient возвращает функцию отписки unsubscribe
        const unsubscribe = persistQueryClient({
            queryClient,
            persister: localStoragePersister,
            maxAge: 1000 * 60 * 60 * 24,
            // buster: 'v1' // меняйте строку, если нужно принудительно сбросить кэш у всех юзеров
        });

        // Даем небольшую задержку, чтобы React Query успел записать данные в стейт
        setIsRestored(true);

        return () => unsubscribe();
    }, [queryClient]);


    if (!isRestored) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
