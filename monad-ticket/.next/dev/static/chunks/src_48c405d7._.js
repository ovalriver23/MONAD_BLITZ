(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/PageWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHeader",
    ()=>PageHeader,
    "PageWrapper",
    ()=>PageWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function PageWrapper({ children, className, narrow = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto w-full px-4 py-10", narrow ? "max-w-2xl" : "max-w-6xl", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/layout/PageWrapper.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = PageWrapper;
function PageHeader({ title, description, actions }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8 flex items-start justify-between gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PageWrapper.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-zinc-500 dark:text-zinc-400",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PageWrapper.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/PageWrapper.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex shrink-0 items-center gap-2",
                children: actions
            }, void 0, false, {
                fileName: "[project]/src/components/layout/PageWrapper.tsx",
                lineNumber: 43,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/PageWrapper.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c1 = PageHeader;
var _c, _c1;
__turbopack_context__.k.register(_c, "PageWrapper");
__turbopack_context__.k.register(_c1, "PageHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/mockEvents.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_EVENTS",
    ()=>MOCK_EVENTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
const MOCK_EVENTS = [
    {
        id: 0,
        name: "Travis Scott – Utopia World Tour",
        description: "Travis Scott brings the Utopia World Tour to life with stunning visuals, surprise guests, and a set list spanning his entire discography.",
        venue: "Madison Square Garden",
        city: "New York, NY",
        date: "2026-04-12T20:00:00Z",
        imageUrl: "",
        maxTickets: 500,
        soldCount: 423,
        priceWei: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseEther("0.05").toString(),
        priceEth: "0.05",
        category: "concert",
        artist: "Travis Scott",
        exists: true
    },
    {
        id: 1,
        name: "Billie Eilish – Hit Me Hard And Soft Tour",
        description: "Intimate and immersive, Billie Eilish performs her latest album in full alongside fan favourites from her entire catalogue.",
        venue: "O2 Arena",
        city: "London, UK",
        date: "2026-05-03T19:00:00Z",
        imageUrl: "",
        maxTickets: 800,
        soldCount: 800,
        priceWei: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseEther("0.08").toString(),
        priceEth: "0.08",
        category: "concert",
        artist: "Billie Eilish",
        exists: true
    },
    {
        id: 2,
        name: "Kendrick Lamar – GNX Tour",
        description: "Kendrick Lamar celebrates GNX with a full production show including live band, dancers, and surprise set pieces.",
        venue: "Kia Forum",
        city: "Los Angeles, CA",
        date: "2026-06-20T21:00:00Z",
        imageUrl: "",
        maxTickets: 1000,
        soldCount: 312,
        priceWei: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseEther("0.1").toString(),
        priceEth: "0.1",
        category: "concert",
        artist: "Kendrick Lamar",
        exists: true
    },
    {
        id: 3,
        name: "Doja Cat – Scarlet Tour",
        description: "Doja Cat's Scarlet Tour is a theatrical, costume-heavy spectacle unlike anything seen in pop concerts.",
        venue: "Accor Arena",
        city: "Paris, FR",
        date: "2026-07-08T20:30:00Z",
        imageUrl: "",
        maxTickets: 600,
        soldCount: 201,
        priceWei: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseEther("0.06").toString(),
        priceEth: "0.06",
        category: "concert",
        artist: "Doja Cat",
        exists: true
    },
    {
        id: 4,
        name: "The Weeknd – After Hours Til Dawn",
        description: "The Weeknd's most ambitious tour yet — a two-part show blending After Hours and Dawn FM into one continuous narrative.",
        venue: "Rogers Centre",
        city: "Toronto, CA",
        date: "2026-08-15T20:00:00Z",
        imageUrl: "",
        maxTickets: 1200,
        soldCount: 50,
        priceWei: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseEther("0.12").toString(),
        priceEth: "0.12",
        category: "concert",
        artist: "The Weeknd",
        exists: true
    },
    {
        id: 5,
        name: "SZA – SOS World Tour",
        description: "SZA performs her Grammy-winning SOS in full for the final leg of her record-breaking world tour.",
        venue: "United Center",
        city: "Chicago, IL",
        date: "2026-09-01T19:30:00Z",
        imageUrl: "",
        maxTickets: 700,
        soldCount: 699,
        priceWei: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseEther("0.07").toString(),
        priceEth: "0.07",
        category: "concert",
        artist: "SZA",
        exists: true
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/mockTicketStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearMockTickets",
    ()=>clearMockTickets,
    "getMockTickets",
    ()=>getMockTickets,
    "saveMockTicket",
    ()=>saveMockTicket
]);
const STORAGE_KEY = "whitepass_mock_tickets";
function getMockTickets() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    } catch  {
        return [];
    }
}
function saveMockTicket(ticket) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const existing = getMockTickets();
    // avoid duplicates
    if (existing.some((t)=>t.tokenId === ticket.tokenId)) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify([
        ...existing,
        ticket
    ]));
}
function clearMockTickets() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(STORAGE_KEY);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useEvents.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEvent",
    ()=>useEvent,
    "useEvents",
    ()=>useEvents,
    "useMintTicket",
    ()=>useMintTicket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contract.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/WalletContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockEvents.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockTicketStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockTicketStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function useEvents() {
    _s();
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEvents.useCallback[fetchEvents]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReadContract"])();
                if (!contract) {
                    setEvents(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_EVENTS"]);
                    return;
                }
                let count;
                try {
                    count = await contract.eventCount();
                } catch  {
                    setEvents(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_EVENTS"]);
                    return;
                }
                // No on-chain events yet — use mock data for demo
                if (Number(count) === 0) {
                    setEvents(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_EVENTS"]);
                    return;
                }
                const results = [];
                for(let i = 0; i < Number(count); i++){
                    const [name, maxTickets, soldCount, priceWei] = await contract.getEventInfo(i);
                    results.push({
                        id: i,
                        name,
                        description: "",
                        venue: "",
                        city: "",
                        date: "",
                        imageUrl: "",
                        maxTickets: Number(maxTickets),
                        soldCount: Number(soldCount),
                        priceWei: priceWei.toString(),
                        priceEth: "",
                        category: "concert",
                        artist: "",
                        exists: true
                    });
                }
                setEvents(results);
            } catch  {
                // Unexpected error — fall back to mock events so the UI still works
                setEvents(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_EVENTS"]);
            } finally{
                setLoading(false);
            }
        }
    }["useEvents.useCallback[fetchEvents]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEvents.useEffect": ()=>{
            fetchEvents();
        }
    }["useEvents.useEffect"], [
        fetchEvents
    ]);
    return {
        events,
        loading,
        error,
        refetch: fetchEvents
    };
}
_s(useEvents, "6MOUdIZrosAnOLRPJBQ6nU23jBg=");
function useEvent(eventId) {
    _s1();
    const [event, setEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEvent.useEffect": ()=>{
            const fetchEvent = {
                "useEvent.useEffect.fetchEvent": async ()=>{
                    setLoading(true);
                    setError(null);
                    try {
                        const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReadContract"])();
                        if (!contract) {
                            setEvent(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_EVENTS"].find({
                                "useEvent.useEffect.fetchEvent": (e)=>e.id === eventId
                            }["useEvent.useEffect.fetchEvent"]) ?? null);
                            return;
                        }
                        try {
                            const [name, maxTickets, soldCount, priceWei] = await contract.getEventInfo(eventId);
                            if (name) {
                                setEvent({
                                    id: eventId,
                                    name,
                                    description: "",
                                    venue: "",
                                    city: "",
                                    date: "",
                                    imageUrl: "",
                                    maxTickets: Number(maxTickets),
                                    soldCount: Number(soldCount),
                                    priceWei: priceWei.toString(),
                                    priceEth: "",
                                    category: "concert",
                                    artist: "",
                                    exists: true
                                });
                                return;
                            }
                        } catch  {
                        // fall through to mock
                        }
                        setEvent(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_EVENTS"].find({
                            "useEvent.useEffect.fetchEvent": (e)=>e.id === eventId
                        }["useEvent.useEffect.fetchEvent"]) ?? null);
                    } catch (err) {
                        setError(err instanceof Error ? err.message : "Failed to fetch event");
                    } finally{
                        setLoading(false);
                    }
                }
            }["useEvent.useEffect.fetchEvent"];
            fetchEvent();
        }
    }["useEvent.useEffect"], [
        eventId
    ]);
    return {
        event,
        loading,
        error
    };
}
_s1(useEvent, "yHVpWs5VERK8x1/L1xAmjHYiofQ=");
function useMintTicket() {
    _s2();
    const { ensureCorrectChain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const [tx, setTx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: "idle"
    });
    const mint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMintTicket.useCallback[mint]": async (eventId, priceWei)=>{
            const isMockEvent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_EVENTS"].some({
                "useMintTicket.useCallback[mint].isMockEvent": (e)=>e.id === eventId
            }["useMintTicket.useCallback[mint].isMockEvent"]);
            if (isMockEvent) {
                // Real MON transfer to the platform treasury — actual funds leave the wallet
                const onCorrectChain = await ensureCorrectChain();
                if (!onCorrectChain) return;
                setTx({
                    status: "pending"
                });
                try {
                    const signer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSigner"])();
                    if (!signer) throw new Error("Wallet not connected");
                    const tx = await signer.sendTransaction({
                        to: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATFORM_ADDRESS"],
                        value: BigInt(priceWei)
                    });
                    await tx.wait();
                    const tokenId = Date.now();
                    const address = await signer.getAddress();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockTicketStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveMockTicket"])({
                        tokenId,
                        eventId,
                        owner: address,
                        purchasedAt: new Date().toISOString(),
                        isUsed: false
                    });
                    setTx({
                        status: "success",
                        hash: tx.hash
                    });
                } catch (err) {
                    setTx({
                        status: "error",
                        error: err instanceof Error ? err.message : "Transaction failed"
                    });
                }
                return;
            }
            const onCorrectChain = await ensureCorrectChain();
            if (!onCorrectChain) return;
            setTx({
                status: "pending"
            });
            try {
                const contract = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWriteContract"])();
                if (!contract) throw new Error("Wallet not connected");
                const receipt = await contract.mintTicket(eventId, {
                    value: BigInt(priceWei)
                });
                await receipt.wait();
                setTx({
                    status: "success",
                    hash: receipt.hash
                });
            } catch (err) {
                setTx({
                    status: "error",
                    error: err instanceof Error ? err.message : "Transaction failed"
                });
            }
        }
    }["useMintTicket.useCallback[mint]"], [
        ensureCorrectChain
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMintTicket.useCallback[reset]": ()=>setTx({
                status: "idle"
            })
    }["useMintTicket.useCallback[reset]"], []);
    return {
        mint,
        tx,
        reset
    };
}
_s2(useMintTicket, "ubw02b3iPKj51mxBt1BITr8tFmA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useTickets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHasTicket",
    ()=>useHasTicket,
    "useMyTickets",
    ()=>useMyTickets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contract.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/WalletContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockTicketStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockTicketStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockEvents.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function useMyTickets() {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const [tickets, setTickets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchTickets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMyTickets.useCallback[fetchTickets]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                // Always include locally-stored mock tickets
                const mockTickets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockTicketStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMockTickets"])();
                // Try to also pull real on-chain tickets if wallet is connected
                const chainTickets = [];
                if (isConnected && address) {
                    try {
                        const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReadContract"])();
                        if (contract) {
                            const eventCount = await contract.eventCount();
                            for(let eventId = 0; eventId < Number(eventCount); eventId++){
                                const count = await contract.userTicketCount(address, eventId);
                                for(let i = 0; i < Number(count); i++){
                                    chainTickets.push({
                                        tokenId: eventId * 1000 + i,
                                        eventId,
                                        owner: address,
                                        purchasedAt: new Date().toISOString(),
                                        isUsed: false
                                    });
                                }
                            }
                        }
                    } catch  {
                    // contract unavailable — that's fine, mock tickets still show
                    }
                }
                // Merge: chain tickets first, then mock tickets (skip duplicates)
                const chainTokenIds = new Set(chainTickets.map({
                    "useMyTickets.useCallback[fetchTickets]": (t)=>t.tokenId
                }["useMyTickets.useCallback[fetchTickets]"]));
                const unique = [
                    ...chainTickets,
                    ...mockTickets.filter({
                        "useMyTickets.useCallback[fetchTickets]": (t)=>!chainTokenIds.has(t.tokenId)
                    }["useMyTickets.useCallback[fetchTickets]"])
                ];
                // Enrich with event metadata from mock list
                const enriched = unique.map({
                    "useMyTickets.useCallback[fetchTickets].enriched": (t)=>{
                        const event = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_EVENTS"].find({
                            "useMyTickets.useCallback[fetchTickets].enriched.event": (e)=>e.id === t.eventId
                        }["useMyTickets.useCallback[fetchTickets].enriched.event"]);
                        return event ? {
                            ...t,
                            event
                        } : t;
                    }
                }["useMyTickets.useCallback[fetchTickets].enriched"]);
                setTickets(enriched);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch tickets");
            } finally{
                setLoading(false);
            }
        }
    }["useMyTickets.useCallback[fetchTickets]"], [
        address,
        isConnected
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMyTickets.useEffect": ()=>{
            fetchTickets();
        }
    }["useMyTickets.useEffect"], [
        fetchTickets
    ]);
    return {
        tickets,
        loading,
        error,
        refetch: fetchTickets
    };
}
_s(useMyTickets, "gfY3X7YXpbT+LQ28vQCarp8mPrs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
function useHasTicket(eventId) {
    _s1();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const [hasTicket, setHasTicket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHasTicket.useEffect": ()=>{
            if (!isConnected || !address) return;
            const check = {
                "useHasTicket.useEffect.check": async ()=>{
                    setLoading(true);
                    try {
                        const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReadContract"])();
                        if (!contract) return;
                        const result = await contract.hasTicket(address, eventId);
                        setHasTicket(result);
                    } catch  {
                        setHasTicket(false);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useHasTicket.useEffect.check"];
            check();
        }
    }["useHasTicket.useEffect"], [
        address,
        isConnected,
        eventId
    ]);
    return {
        hasTicket,
        loading
    };
}
_s1(useHasTicket, "eJ1q4iMZO2dWMWDl/EWd3/c9JFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
const variantStyles = {
    default: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    danger: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    info: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    soulbound: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400"
};
function Badge({ variant = "default", className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium", variantStyles[variant], className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Badge.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Modal({ open, onClose, title, children, className }) {
    _s();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // close on Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const handler = {
                "Modal.useEffect.handler": (e)=>e.key === "Escape" && onClose()
            }["Modal.useEffect.handler"];
            window.addEventListener("keydown", handler);
            return ({
                "Modal.useEffect": ()=>window.removeEventListener("keydown", handler)
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        onClose
    ]);
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm",
        onClick: (e)=>e.target === overlayRef.current && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900", className),
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-zinc-900 dark:text-zinc-50",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Modal.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            onClick: onClose,
                            "aria-label": "Close",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Modal.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Modal.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Modal.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Modal, "rmj6vZ+Vy6O1wOWphXugz2fiTMw=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/wallet/WalletGuard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletGuard",
    ()=>WalletGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/WalletContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function WalletGuard({ children, fallback }) {
    _s();
    const { isConnected, isConnecting, connect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    if (isConnected) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
    return fallback ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4 py-16 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-zinc-500 dark:text-zinc-400",
                children: "Connect your wallet to continue."
            }, void 0, false, {
                fileName: "[project]/src/components/wallet/WalletGuard.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                loading: isConnecting,
                onClick: connect,
                children: "Connect Wallet"
            }, void 0, false, {
                fileName: "[project]/src/components/wallet/WalletGuard.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/wallet/WalletGuard.tsx",
        lineNumber: 20,
        columnNumber: 7
    }, this);
}
_s(WalletGuard, "LroeOuDQ/8n2Lxcc+0Y5BpwcaRE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = WalletGuard;
var _c;
__turbopack_context__.k.register(_c, "WalletGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/events/BuyTicketPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuyTicketPanel",
    ()=>BuyTicketPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useEvents.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTickets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTickets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wallet$2f$WalletGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wallet/WalletGuard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function BuyTicketPanel({ event }) {
    _s();
    const soldOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSoldOut"])(event.soldCount, event.maxTickets);
    const { hasTicket } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTickets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHasTicket"])(event.id);
    const { mint, tx, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMintTicket"])();
    const [confirmOpen, setConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleBuy = async ()=>{
        await mint(event.id, event.priceWei);
        setConfirmOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-bold text-zinc-900 dark:text-zinc-50",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(event.priceWei)
                    }, void 0, false, {
                        fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    soldOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "danger",
                        children: "Sold Out"
                    }, void 0, false, {
                        fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "success",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remainingTickets"])(event.soldCount, event.maxTickets),
                            " available"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 rounded-xl bg-violet-50 p-3 text-sm text-violet-700 dark:bg-violet-900/20 dark:text-violet-300",
                children: [
                    "🔒 This ticket is ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "soulbound"
                    }, void 0, false, {
                        fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                        lineNumber: 39,
                        columnNumber: 27
                    }, this),
                    " — it cannot be transferred, sold, or given away. Only returns at original price."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wallet$2f$WalletGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletGuard"], {
                children: hasTicket ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "soulbound",
                    className: "text-sm py-1 px-3",
                    children: "✓ You own a ticket for this event"
                }, void 0, false, {
                    fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this) : soldOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    fullWidth: true,
                    variant: "secondary",
                    disabled: true,
                    children: "Sold Out — Join Waitlist Below"
                }, void 0, false, {
                    fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    fullWidth: true,
                    onClick: ()=>setConfirmOpen(true),
                    children: "Buy Ticket"
                }, void 0, false, {
                    fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                open: confirmOpen,
                onClose: ()=>{
                    setConfirmOpen(false);
                    reset();
                },
                title: "Confirm Purchase",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 text-sm text-zinc-600 dark:text-zinc-400",
                        children: [
                            "You are about to purchase 1 ticket for",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-zinc-900 dark:text-zinc-50",
                                children: event.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 text-sm text-zinc-600 dark:text-zinc-400",
                        children: [
                            "Price: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(event.priceWei)
                            }, void 0, false, {
                                fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                                lineNumber: 66,
                                columnNumber: 18
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    tx.status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600",
                        children: tx.error
                    }, void 0, false, {
                        fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    tx.status === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700",
                        children: "Ticket minted! 🎉"
                    }, void 0, false, {
                        fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "secondary",
                                fullWidth: true,
                                onClick: ()=>setConfirmOpen(false),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                fullWidth: true,
                                loading: tx.status === "pending",
                                disabled: tx.status === "success",
                                onClick: handleBuy,
                                children: "Confirm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/events/BuyTicketPanel.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(BuyTicketPanel, "nmcfXFulBPOEnL52YuMcsKZWXT0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTickets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHasTicket"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMintTicket"]
    ];
});
_c = BuyTicketPanel;
var _c;
__turbopack_context__.k.register(_c, "BuyTicketPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useWaitlist.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMyWaitlistEntries",
    ()=>useMyWaitlistEntries,
    "useWaitlist",
    ()=>useWaitlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/WalletContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function useWaitlist(eventId) {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [joining, setJoining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [leaving, setLeaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWaitlist.useCallback[fetchStats]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const params = new URLSearchParams({
                    eventId: String(eventId)
                });
                if (address) params.set("address", address);
                const res = await fetch(`/api/waitlist/${eventId}?${params.toString()}`);
                if (!res.ok) throw new Error("Failed to fetch waitlist");
                const data = await res.json();
                setStats(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Error");
            } finally{
                setLoading(false);
            }
        }
    }["useWaitlist.useCallback[fetchStats]"], [
        eventId,
        address
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWaitlist.useEffect": ()=>{
            fetchStats();
        }
    }["useWaitlist.useEffect"], [
        fetchStats
    ]);
    const join = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWaitlist.useCallback[join]": async ()=>{
            if (!isConnected || !address) return;
            setJoining(true);
            setError(null);
            try {
                const res = await fetch(`/api/waitlist/${eventId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        address
                    })
                });
                if (!res.ok) throw new Error("Failed to join waitlist");
                await fetchStats();
            } catch (err) {
                setError(err instanceof Error ? err.message : "Error");
            } finally{
                setJoining(false);
            }
        }
    }["useWaitlist.useCallback[join]"], [
        isConnected,
        address,
        eventId,
        fetchStats
    ]);
    const leave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWaitlist.useCallback[leave]": async ()=>{
            if (!isConnected || !address) return;
            setLeaving(true);
            setError(null);
            try {
                const res = await fetch(`/api/waitlist/${eventId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        address
                    })
                });
                if (!res.ok) throw new Error("Failed to leave waitlist");
                await fetchStats();
            } catch (err) {
                setError(err instanceof Error ? err.message : "Error");
            } finally{
                setLeaving(false);
            }
        }
    }["useWaitlist.useCallback[leave]"], [
        isConnected,
        address,
        eventId,
        fetchStats
    ]);
    return {
        stats,
        loading,
        joining,
        leaving,
        error,
        join,
        leave,
        refetch: fetchStats
    };
}
_s(useWaitlist, "AYbCMwlZyAan3eSMRlkMkzI4nGA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
function useMyWaitlistEntries() {
    _s1();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const [entries, setEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMyWaitlistEntries.useEffect": ()=>{
            if (!isConnected || !address) return;
            const fetch_ = {
                "useMyWaitlistEntries.useEffect.fetch_": async ()=>{
                    setLoading(true);
                    try {
                        const res = await fetch(`/api/waitlist?address=${address}`);
                        if (!res.ok) throw new Error("Failed to fetch waitlist entries");
                        const data = await res.json();
                        setEntries(data);
                    } catch (err) {
                        setError(err instanceof Error ? err.message : "Error");
                    } finally{
                        setLoading(false);
                    }
                }
            }["useMyWaitlistEntries.useEffect.fetch_"];
            fetch_();
        }
    }["useMyWaitlistEntries.useEffect"], [
        address,
        isConnected
    ]);
    return {
        entries,
        loading,
        error
    };
}
_s1(useMyWaitlistEntries, "fyoC3Q1pPR08sMMUYWehSxLIJEw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WalletContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Spinner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageSpinner",
    ()=>PageSpinner,
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
const sizeMap = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12"
};
function Spinner({ size = "md", className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        role: "status",
        "aria-label": "Loading",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block animate-spin rounded-full border-2 border-zinc-200 border-t-violet-600", sizeMap[size], className)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Spinner.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Spinner;
function PageSpinner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-[40vh] w-full items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
            size: "lg"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Spinner.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Spinner.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = PageSpinner;
var _c, _c1;
__turbopack_context__.k.register(_c, "Spinner");
__turbopack_context__.k.register(_c1, "PageSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/waitlist/JoinWaitlistButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JoinWaitlistButton",
    ()=>JoinWaitlistButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWaitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useWaitlist.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Spinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wallet$2f$WalletGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wallet/WalletGuard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function JoinWaitlistButton({ eventId }) {
    _s();
    const { stats, loading, joining, leaving, error, join, leave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWaitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitlist"])(eventId);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
        size: "sm"
    }, void 0, false, {
        fileName: "[project]/src/components/waitlist/JoinWaitlistButton.tsx",
        lineNumber: 16,
        columnNumber: 23
    }, this);
    const onList = stats?.userPosition !== undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wallet$2f$WalletGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletGuard"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-zinc-500",
                    children: [
                        stats.totalWaiting,
                        " people waiting",
                        onList && ` • You are #${stats.userPosition}`
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/waitlist/JoinWaitlistButton.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-red-500",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/waitlist/JoinWaitlistButton.tsx",
                    lineNumber: 29,
                    columnNumber: 19
                }, this),
                onList ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "secondary",
                    size: "sm",
                    loading: leaving,
                    onClick: leave,
                    children: "Leave Waitlist"
                }, void 0, false, {
                    fileName: "[project]/src/components/waitlist/JoinWaitlistButton.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "secondary",
                    size: "sm",
                    loading: joining,
                    onClick: join,
                    children: "Join Waitlist"
                }, void 0, false, {
                    fileName: "[project]/src/components/waitlist/JoinWaitlistButton.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/waitlist/JoinWaitlistButton.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/waitlist/JoinWaitlistButton.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(JoinWaitlistButton, "cmxpjUZGNcgESJm609ubL6RPS94=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWaitlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitlist"]
    ];
});
_c = JoinWaitlistButton;
var _c;
__turbopack_context__.k.register(_c, "JoinWaitlistButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/events/[eventId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/PageWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$events$2f$BuyTicketPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/events/BuyTicketPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$waitlist$2f$JoinWaitlistButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/waitlist/JoinWaitlistButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Spinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useEvents.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function EventDetailPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { event, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(Number(params.eventId));
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageSpinner"], {}, void 0, false, {
        fileName: "[project]/src/app/events/[eventId]/page.tsx",
        lineNumber: 16,
        columnNumber: 23
    }, this);
    if (error || !event) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageWrapper"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500",
            children: error ?? "Event not found"
        }, void 0, false, {
            fileName: "[project]/src/app/events/[eventId]/page.tsx",
            lineNumber: 18,
            columnNumber: 25
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/events/[eventId]/page.tsx",
        lineNumber: 18,
        columnNumber: 12
    }, this);
    const soldOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSoldOut"])(event.soldCount, event.maxTickets);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageWrapper"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-8 lg:grid-cols-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-2 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-64 w-full rounded-2xl bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-6xl",
                            children: "🎵"
                        }, void 0, false, {
                            fileName: "[project]/src/app/events/[eventId]/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "soulbound",
                                    children: "Soulbound"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/events/[eventId]/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                soldOut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "danger",
                                    children: "Sold Out"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/events/[eventId]/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/events/[eventId]/page.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-zinc-900 dark:text-white",
                            children: event.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/events/[eventId]/page.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-zinc-500 dark:text-zinc-400 space-y-1 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Artist: ",
                                        event.artist || "—"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/events/[eventId]/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Venue: ",
                                        event.venue || "—"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/events/[eventId]/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "City: ",
                                        event.city || "—"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/events/[eventId]/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Date: ",
                                        event.date || "—"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/events/[eventId]/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/events/[eventId]/page.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: event.description || "No description provided."
                        }, void 0, false, {
                            fileName: "[project]/src/app/events/[eventId]/page.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/events/[eventId]/page.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$events$2f$BuyTicketPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuyTicketPanel"], {
                            event: event
                        }, void 0, false, {
                            fileName: "[project]/src/app/events/[eventId]/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        soldOut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-2 font-semibold text-zinc-800 dark:text-zinc-100",
                                    children: "Join the Waitlist"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/events/[eventId]/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-3 text-sm text-zinc-500 dark:text-zinc-400",
                                    children: "Get notified automatically when a ticket is returned."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/events/[eventId]/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$waitlist$2f$JoinWaitlistButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JoinWaitlistButton"], {
                                    eventId: event.id
                                }, void 0, false, {
                                    fileName: "[project]/src/app/events/[eventId]/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/events/[eventId]/page.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/events/[eventId]/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/[eventId]/page.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/events/[eventId]/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(EventDetailPage, "OYrz07SQgp9naQZipRRQrfBCEkM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"]
    ];
});
_c = EventDetailPage;
var _c;
__turbopack_context__.k.register(_c, "EventDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_48c405d7._.js.map