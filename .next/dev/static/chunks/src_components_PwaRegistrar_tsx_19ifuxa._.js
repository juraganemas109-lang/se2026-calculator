(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/PwaRegistrar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PwaRegistrar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function PwaRegistrar() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PwaRegistrar.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && 'serviceWorker' in navigator) {
                const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.startsWith('192.168.'); // local network IP
                const isHttps = window.location.protocol === 'https:';
                if (isHttps || isLocalhost) {
                    window.navigator.serviceWorker.register('/sw.js').then({
                        "PwaRegistrar.useEffect": (reg)=>{
                            console.log('Service Worker registered successfully. Scope:', reg.scope);
                        }
                    }["PwaRegistrar.useEffect"]).catch({
                        "PwaRegistrar.useEffect": (err)=>{
                            console.error('Service Worker registration failed:', err);
                        }
                    }["PwaRegistrar.useEffect"]);
                }
            }
        }
    }["PwaRegistrar.useEffect"], []);
    return null;
}
_s(PwaRegistrar, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PwaRegistrar;
var _c;
__turbopack_context__.k.register(_c, "PwaRegistrar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_PwaRegistrar_tsx_19ifuxa._.js.map