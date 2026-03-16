module.exports = [
"[project]/frontend/src/components/ui/Beams.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$src$2f$math$2f$MathUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/three/src/math/MathUtils.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function extendMaterial(BaseMaterial, cfg) {
    const physical = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ShaderLib"].physical;
    const { vertexShader: baseVert, fragmentShader: baseFrag, uniforms: baseUniforms } = physical;
    const baseDefines = physical.defines ?? {};
    const uniforms = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniformsUtils"].clone(baseUniforms);
    const defaults = new BaseMaterial(cfg.material || {});
    if (defaults.color) uniforms.diffuse.value = defaults.color;
    if ('roughness' in defaults) uniforms.roughness.value = defaults.roughness;
    if ('metalness' in defaults) uniforms.metalness.value = defaults.metalness;
    if ('envMap' in defaults) uniforms.envMap.value = defaults.envMap;
    if ('envMapIntensity' in defaults) uniforms.envMapIntensity.value = defaults.envMapIntensity;
    Object.entries(cfg.uniforms ?? {}).forEach(([key, u])=>{
        uniforms[key] = u !== null && typeof u === 'object' && 'value' in u ? u : {
            value: u
        };
    });
    let vert = `${cfg.header}\n${cfg.vertexHeader ?? ''}\n${baseVert}`;
    let frag = `${cfg.header}\n${cfg.fragmentHeader ?? ''}\n${baseFrag}`;
    for (const [inc, code] of Object.entries(cfg.vertex ?? {})){
        vert = vert.replace(inc, `${inc}\n${code}`);
    }
    for (const [inc, code] of Object.entries(cfg.fragment ?? {})){
        frag = frag.replace(inc, `${inc}\n${code}`);
    }
    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
        defines: {
            ...baseDefines
        },
        uniforms,
        vertexShader: vert,
        fragmentShader: frag,
        lights: true,
        fog: !!cfg.material?.fog
    });
    return mat;
}
const CanvasWrapper = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        dpr: [
            1,
            2
        ],
        frameloop: "always",
        className: "w-full h-full relative",
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/ui/Beams.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const hexToNormalizedRGB = (hex)=>{
    const clean = hex.replace('#', '');
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    return [
        r / 255,
        g / 255,
        b / 255
    ];
};
const noise = `
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) +
           (c - a)* u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
}
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
float cnoise(vec3 P){
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;
  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));
  g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));
  g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;
  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x,Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x,Pf1.y,Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy,Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy,Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x,Pf0.y,Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x,Pf1.yz));
  float n111 = dot(g111, Pf1);
  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);
  vec2 n_yz = mix(n_z.xy,n_z.zw,fade_xyz.y);
  float n_xyz = mix(n_yz.x,n_yz.y,fade_xyz.x);
  return 2.2 * n_xyz;
}
`;
const Beams = ({ beamWidth = 2, beamHeight = 15, beamNumber = 12, lightColor = '#ffffff', speed = 2, noiseIntensity = 1.75, scale = 0.2, rotation = 0 })=>{
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const beamMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>extendMaterial(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"], {
            header: `
  varying vec3 vEye;
  varying float vNoise;
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float time;
  uniform float uSpeed;
  uniform float uNoiseIntensity;
  uniform float uScale;
  ${noise}`,
            vertexHeader: `
  float getPos(vec3 pos) {
    vec3 noisePos =
      vec3(pos.x * 0., pos.y - uv.y, pos.z + time * uSpeed * 3.) * uScale;
    return cnoise(noisePos);
  }
  vec3 getCurrentPos(vec3 pos) {
    vec3 newpos = pos;
    newpos.z += getPos(pos);
    return newpos;
  }
  vec3 getNormal(vec3 pos) {
    vec3 curpos = getCurrentPos(pos);
    vec3 nextposX = getCurrentPos(pos + vec3(0.01, 0.0, 0.0));
    vec3 nextposZ = getCurrentPos(pos + vec3(0.0, -0.01, 0.0));
    vec3 tangentX = normalize(nextposX - curpos);
    vec3 tangentZ = normalize(nextposZ - curpos);
    return normalize(cross(tangentZ, tangentX));
  }`,
            fragmentHeader: '',
            vertex: {
                '#include <begin_vertex>': `transformed.z += getPos(transformed.xyz);`,
                '#include <beginnormal_vertex>': `objectNormal = getNormal(position.xyz);`
            },
            fragment: {
                '#include <dithering_fragment>': `
    float randomNoise = noise(gl_FragCoord.xy);
    gl_FragColor.rgb -= randomNoise / 15. * uNoiseIntensity;`
            },
            material: {
                fog: true
            },
            uniforms: {
                diffuse: new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](...hexToNormalizedRGB('#000000')),
                time: {
                    shared: true,
                    mixed: true,
                    linked: true,
                    value: 0
                },
                roughness: 0.3,
                metalness: 0.3,
                uSpeed: {
                    shared: true,
                    mixed: true,
                    linked: true,
                    value: speed
                },
                envMapIntensity: 10,
                uNoiseIntensity: noiseIntensity,
                uScale: scale
            }
        }), [
        speed,
        noiseIntensity,
        scale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CanvasWrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                rotation: [
                    0,
                    0,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$src$2f$math$2f$MathUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["degToRad"])(rotation)
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaneNoise, {
                        ref: meshRef,
                        material: beamMaterial,
                        count: beamNumber,
                        width: beamWidth,
                        height: beamHeight
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/ui/Beams.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DirLight, {
                        color: lightColor,
                        position: [
                            0,
                            3,
                            10
                        ]
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/ui/Beams.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/ui/Beams.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 1
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ui/Beams.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                attach: "background",
                args: [
                    '#000000'
                ]
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ui/Beams.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"], {
                makeDefault: true,
                position: [
                    0,
                    0,
                    20
                ],
                fov: 30
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ui/Beams.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/ui/Beams.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function createStackedPlanesBufferGeometry(n, width, height, spacing, heightSegments) {
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    const numVertices = n * (heightSegments + 1) * 2;
    const numFaces = n * heightSegments * 2;
    const positions = new Float32Array(numVertices * 3);
    const indices = new Uint32Array(numFaces * 3);
    const uvs = new Float32Array(numVertices * 2);
    let vertexOffset = 0;
    let indexOffset = 0;
    let uvOffset = 0;
    const totalWidth = n * width + (n - 1) * spacing;
    const xOffsetBase = -totalWidth / 2;
    for(let i = 0; i < n; i++){
        const xOffset = xOffsetBase + i * (width + spacing);
        const uvXOffset = Math.random() * 300;
        const uvYOffset = Math.random() * 300;
        for(let j = 0; j <= heightSegments; j++){
            const y = height * (j / heightSegments - 0.5);
            const v0 = [
                xOffset,
                y,
                0
            ];
            const v1 = [
                xOffset + width,
                y,
                0
            ];
            positions.set([
                ...v0,
                ...v1
            ], vertexOffset * 3);
            const uvY = j / heightSegments;
            uvs.set([
                uvXOffset,
                uvY + uvYOffset,
                uvXOffset + 1,
                uvY + uvYOffset
            ], uvOffset);
            if (j < heightSegments) {
                const a = vertexOffset, b = vertexOffset + 1, c = vertexOffset + 2, d = vertexOffset + 3;
                indices.set([
                    a,
                    b,
                    c,
                    c,
                    b,
                    d
                ], indexOffset);
                indexOffset += 6;
            }
            vertexOffset += 2;
            uvOffset += 4;
        }
    }
    geometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
    geometry.setAttribute('uv', new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](uvs, 2));
    geometry.setIndex(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](indices, 1));
    geometry.computeVertexNormals();
    return geometry;
}
const MergedPlanes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ material, width, count, height }, ref)=>{
    const mesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>mesh.current);
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>createStackedPlanesBufferGeometry(count, width, height, 0, 100), [
        count,
        width,
        height
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((_, delta)=>{
        mesh.current.material.uniforms.time.value += 0.1 * delta;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: mesh,
        geometry: geometry,
        material: material
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/ui/Beams.tsx",
        lineNumber: 336,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
});
MergedPlanes.displayName = 'MergedPlanes';
const PlaneNoise = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MergedPlanes, {
        ref: ref,
        material: props.material,
        width: props.width,
        count: props.count,
        height: props.height
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/ui/Beams.tsx",
        lineNumber: 349,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
PlaneNoise.displayName = 'PlaneNoise';
const DirLight = ({ position, color })=>{
    const dir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!dir.current) return;
        const cam = dir.current.shadow.camera;
        cam.top = 24;
        cam.bottom = -24;
        cam.left = -24;
        cam.right = 24;
        cam.far = 64;
        dir.current.shadow.bias = -0.004;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
        ref: dir,
        color: color,
        intensity: 1,
        position: position
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/ui/Beams.tsx",
        lineNumber: 371,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Beams;
}),
];

//# sourceMappingURL=frontend_src_components_ui_Beams_tsx_2d68c28d._.js.map