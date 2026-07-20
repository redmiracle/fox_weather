import { defaultCache } from "@serwist/next/worker";
import { Serwist } from "serwist";
import {PrecacheEntry} from "@serwist/precaching";

declare const self: ServiceWorkerGlobalScope & {
    __SW_MANIFEST: (string | PrecacheEntry)[];
};

const serwist = new Serwist({
    precacheEntries: self.__SW_MANIFEST,
    precacheOptions: {
        concurrency: 10,
    },

    runtimeCaching: defaultCache,
});

serwist.addEventListeners();