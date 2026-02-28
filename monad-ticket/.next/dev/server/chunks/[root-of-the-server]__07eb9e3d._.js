module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/waitlist/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * In-memory waitlist store (replace with a DB in production).
 *
 * GET  /api/waitlist?address=0x...          → all entries for address
 * GET  /api/waitlist/[eventId]?address=0x.. → stats for event
 * POST /api/waitlist/[eventId]              → join
 * DELETE /api/waitlist/[eventId]            → leave
 */ __turbopack_context__.s([
    "GET",
    ()=>GET,
    "store",
    ()=>store
]);
const g = globalThis;
if (!g._waitlist) g._waitlist = {
    entries: [],
    nextId: 1
};
const store = g._waitlist;
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const address = searchParams.get("address")?.toLowerCase();
    if (!address) {
        return Response.json({
            error: "address query param required"
        }, {
            status: 400
        });
    }
    const entries = store.entries.filter((e)=>e.userAddress.toLowerCase() === address && e.status === "waiting");
    return Response.json(entries);
}
}),
"[project]/src/app/api/waitlist/[eventId]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$waitlist$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/waitlist/route.ts [app-route] (ecmascript)");
;
async function GET(request, { params }) {
    const { eventId } = await params;
    const id = parseInt(eventId);
    const { searchParams } = new URL(request.url);
    const address = searchParams.get("address")?.toLowerCase();
    const waiting = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$waitlist$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["store"].entries.filter((e)=>e.eventId === id && e.status === "waiting");
    const userEntry = address ? waiting.find((e)=>e.userAddress.toLowerCase() === address) : undefined;
    const stats = {
        eventId: id,
        totalWaiting: waiting.length,
        userPosition: userEntry ? userEntry.position : undefined
    };
    return Response.json(stats);
}
async function POST(request, { params }) {
    const { eventId } = await params;
    const id = parseInt(eventId);
    const { address } = await request.json();
    if (!address) {
        return Response.json({
            error: "address required"
        }, {
            status: 400
        });
    }
    const alreadyIn = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$waitlist$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["store"].entries.find((e)=>e.eventId === id && e.userAddress.toLowerCase() === address.toLowerCase() && e.status === "waiting");
    if (alreadyIn) {
        return Response.json({
            error: "Already on waitlist"
        }, {
            status: 409
        });
    }
    const position = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$waitlist$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["store"].entries.filter((e)=>e.eventId === id && e.status === "waiting").length + 1;
    const entry = {
        id: String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$waitlist$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["store"].nextId++),
        eventId: id,
        userAddress: address.toLowerCase(),
        joinedAt: new Date().toISOString(),
        position,
        status: "waiting"
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$waitlist$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["store"].entries.push(entry);
    return Response.json(entry, {
        status: 201
    });
}
async function DELETE(request, { params }) {
    const { eventId } = await params;
    const id = parseInt(eventId);
    const { address } = await request.json();
    const idx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$waitlist$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["store"].entries.findIndex((e)=>e.eventId === id && e.userAddress.toLowerCase() === address.toLowerCase() && e.status === "waiting");
    if (idx === -1) {
        return Response.json({
            error: "Not on waitlist"
        }, {
            status: 404
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$waitlist$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["store"].entries.splice(idx, 1);
    // Re-rank remaining entries for this event
    let pos = 1;
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$waitlist$2f$route$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["store"].entries.filter((e)=>e.eventId === id && e.status === "waiting").sort((a, b)=>new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime()).forEach((e)=>{
        e.position = pos++;
    });
    return new Response(null, {
        status: 204
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07eb9e3d._.js.map