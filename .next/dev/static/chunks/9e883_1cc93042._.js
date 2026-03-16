(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryObserver",
    ()=>QueryObserver
]);
// src/queryObserver.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var QueryObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(client, options){
        super();
        this.options = options;
        this.#client = client;
        this.#selectError = null;
        this.#currentThenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
        this.bindMethods();
        this.setOptions(options);
    }
    #client;
    #currentQuery = void 0;
    #currentQueryInitialState = void 0;
    #currentResult = void 0;
    #currentResultState;
    #currentResultOptions;
    #currentThenable;
    #selectError;
    #selectFn;
    #selectResult;
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    #lastQueryWithDefinedData;
    #staleTimeoutId;
    #refetchIntervalId;
    #currentRefetchInterval;
    #trackedProps = /* @__PURE__ */ new Set();
    bindMethods() {
        this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
        if (this.listeners.size === 1) {
            this.#currentQuery.addObserver(this);
            if (shouldFetchOnMount(this.#currentQuery, this.options)) {
                this.#executeFetch();
            } else {
                this.updateResult();
            }
            this.#updateTimers();
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.destroy();
        }
    }
    shouldFetchOnReconnect() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
        this.listeners = /* @__PURE__ */ new Set();
        this.#clearStaleTimeout();
        this.#clearRefetchInterval();
        this.#currentQuery.removeObserver(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        const prevQuery = this.#currentQuery;
        this.options = this.#client.defaultQueryOptions(options);
        if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== "boolean") {
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        }
        this.#updateQuery();
        this.#currentQuery.setOptions(this.options);
        if (prevOptions._defaulted && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: this.#currentQuery,
                observer: this
            });
        }
        const mounted = this.hasListeners();
        if (mounted && shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)) {
            this.#executeFetch();
        }
        this.updateResult();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(prevOptions.staleTime, this.#currentQuery))) {
            this.#updateStaleTimeout();
        }
        const nextRefetchInterval = this.#computeRefetchInterval();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
            this.#updateRefetchInterval(nextRefetchInterval);
        }
    }
    getOptimisticResult(options) {
        const query = this.#client.getQueryCache().build(this.#client, options);
        const result = this.createResult(query, options);
        if (shouldAssignObserverCurrentProperties(this, result)) {
            this.#currentResult = result;
            this.#currentResultOptions = this.options;
            this.#currentResultState = this.#currentQuery.state;
        }
        return result;
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    trackResult(result, onPropTracked) {
        return new Proxy(result, {
            get: (target, key)=>{
                this.trackProp(key);
                onPropTracked?.(key);
                if (key === "promise") {
                    this.trackProp("data");
                    if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
                        this.#currentThenable.reject(new Error("experimental_prefetchInRender feature flag is not enabled"));
                    }
                }
                return Reflect.get(target, key);
            }
        });
    }
    trackProp(key) {
        this.#trackedProps.add(key);
    }
    getCurrentQuery() {
        return this.#currentQuery;
    }
    refetch({ ...options } = {}) {
        return this.fetch({
            ...options
        });
    }
    fetchOptimistic(options) {
        const defaultedOptions = this.#client.defaultQueryOptions(options);
        const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
        return query.fetch().then(()=>this.createResult(query, defaultedOptions));
    }
    fetch(fetchOptions) {
        return this.#executeFetch({
            ...fetchOptions,
            cancelRefetch: fetchOptions.cancelRefetch ?? true
        }).then(()=>{
            this.updateResult();
            return this.#currentResult;
        });
    }
    #executeFetch(fetchOptions) {
        this.#updateQuery();
        let promise = this.#currentQuery.fetch(this.options, fetchOptions);
        if (!fetchOptions?.throwOnError) {
            promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        }
        return promise;
    }
    #updateStaleTimeout() {
        this.#clearStaleTimeout();
        const staleTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] || this.#currentResult.isStale || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(staleTime)) {
            return;
        }
        const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.#currentResult.dataUpdatedAt, staleTime);
        const timeout = time + 1;
        this.#staleTimeoutId = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
            if (!this.#currentResult.isStale) {
                this.updateResult();
            }
        }, timeout);
    }
    #computeRefetchInterval() {
        return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
    }
    #updateRefetchInterval(nextInterval) {
        this.#clearRefetchInterval();
        this.#currentRefetchInterval = nextInterval;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) === false || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
            return;
        }
        this.#refetchIntervalId = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setInterval(()=>{
            if (this.options.refetchIntervalInBackground || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusManager"].isFocused()) {
                this.#executeFetch();
            }
        }, this.#currentRefetchInterval);
    }
    #updateTimers() {
        this.#updateStaleTimeout();
        this.#updateRefetchInterval(this.#computeRefetchInterval());
    }
    #clearStaleTimeout() {
        if (this.#staleTimeoutId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#staleTimeoutId);
            this.#staleTimeoutId = void 0;
        }
    }
    #clearRefetchInterval() {
        if (this.#refetchIntervalId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearInterval(this.#refetchIntervalId);
            this.#refetchIntervalId = void 0;
        }
    }
    createResult(query, options) {
        const prevQuery = this.#currentQuery;
        const prevOptions = this.options;
        const prevResult = this.#currentResult;
        const prevResultState = this.#currentResultState;
        const prevResultOptions = this.#currentResultOptions;
        const queryChange = query !== prevQuery;
        const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
        const { state } = query;
        let newState = {
            ...state
        };
        let isPlaceholderData = false;
        let data;
        if (options._optimisticResults) {
            const mounted = this.hasListeners();
            const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
            const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
            if (fetchOnMount || fetchOptionally) {
                newState = {
                    ...newState,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchState"])(state.data, query.options)
                };
            }
            if (options._optimisticResults === "isRestoring") {
                newState.fetchStatus = "idle";
            }
        }
        let { error, errorUpdatedAt, status } = newState;
        data = newState.data;
        let skipSelect = false;
        if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
            let placeholderData;
            if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
                placeholderData = prevResult.data;
                skipSelect = true;
            } else {
                placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(this.#lastQueryWithDefinedData?.state.data, this.#lastQueryWithDefinedData) : options.placeholderData;
            }
            if (placeholderData !== void 0) {
                status = "success";
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, placeholderData, options);
                isPlaceholderData = true;
            }
        }
        if (options.select && data !== void 0 && !skipSelect) {
            if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
                data = this.#selectResult;
            } else {
                try {
                    this.#selectFn = options.select;
                    data = options.select(data);
                    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, data, options);
                    this.#selectResult = data;
                    this.#selectError = null;
                } catch (selectError) {
                    this.#selectError = selectError;
                }
            }
        }
        if (this.#selectError) {
            error = this.#selectError;
            data = this.#selectResult;
            errorUpdatedAt = Date.now();
            status = "error";
        }
        const isFetching = newState.fetchStatus === "fetching";
        const isPending = status === "pending";
        const isError = status === "error";
        const isLoading = isPending && isFetching;
        const hasData = data !== void 0;
        const result = {
            status,
            fetchStatus: newState.fetchStatus,
            isPending,
            isSuccess: status === "success",
            isError,
            isInitialLoading: isLoading,
            isLoading,
            data,
            dataUpdatedAt: newState.dataUpdatedAt,
            error,
            errorUpdatedAt,
            failureCount: newState.fetchFailureCount,
            failureReason: newState.fetchFailureReason,
            errorUpdateCount: newState.errorUpdateCount,
            isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
            isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
            isFetching,
            isRefetching: isFetching && !isPending,
            isLoadingError: isError && !hasData,
            isPaused: newState.fetchStatus === "paused",
            isPlaceholderData,
            isRefetchError: isError && hasData,
            isStale: isStale(query, options),
            refetch: this.refetch,
            promise: this.#currentThenable,
            isEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false
        };
        const nextResult = result;
        if (this.options.experimental_prefetchInRender) {
            const hasResultData = nextResult.data !== void 0;
            const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
            const finalizeThenableIfPossible = (thenable)=>{
                if (isErrorWithoutData) {
                    thenable.reject(nextResult.error);
                } else if (hasResultData) {
                    thenable.resolve(nextResult.data);
                }
            };
            const recreateThenable = ()=>{
                const pending = this.#currentThenable = nextResult.promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
                finalizeThenableIfPossible(pending);
            };
            const prevThenable = this.#currentThenable;
            switch(prevThenable.status){
                case "pending":
                    if (query.queryHash === prevQuery.queryHash) {
                        finalizeThenableIfPossible(prevThenable);
                    }
                    break;
                case "fulfilled":
                    if (isErrorWithoutData || nextResult.data !== prevThenable.value) {
                        recreateThenable();
                    }
                    break;
                case "rejected":
                    if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) {
                        recreateThenable();
                    }
                    break;
            }
        }
        return nextResult;
    }
    updateResult() {
        const prevResult = this.#currentResult;
        const nextResult = this.createResult(this.#currentQuery, this.options);
        this.#currentResultState = this.#currentQuery.state;
        this.#currentResultOptions = this.options;
        if (this.#currentResultState.data !== void 0) {
            this.#lastQueryWithDefinedData = this.#currentQuery;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(nextResult, prevResult)) {
            return;
        }
        this.#currentResult = nextResult;
        const shouldNotifyListeners = ()=>{
            if (!prevResult) {
                return true;
            }
            const { notifyOnChangeProps } = this.options;
            const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
            if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
                return true;
            }
            const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
            if (this.options.throwOnError) {
                includedProps.add("error");
            }
            return Object.keys(this.#currentResult).some((key)=>{
                const typedKey = key;
                const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
                return changed && includedProps.has(typedKey);
            });
        };
        this.#notify({
            listeners: shouldNotifyListeners()
        });
    }
    #updateQuery() {
        const query = this.#client.getQueryCache().build(this.#client, this.options);
        if (query === this.#currentQuery) {
            return;
        }
        const prevQuery = this.#currentQuery;
        this.#currentQuery = query;
        this.#currentQueryInitialState = query.state;
        if (this.hasListeners()) {
            prevQuery?.removeObserver(this);
            query.addObserver(this);
        }
    }
    onQueryUpdate() {
        this.updateResult();
        if (this.hasListeners()) {
            this.#updateTimers();
        }
    }
    #notify(notifyOptions) {
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (notifyOptions.listeners) {
                this.listeners.forEach((listener)=>{
                    listener(this.#currentResult);
                });
            }
            this.#client.getQueryCache().notify({
                query: this.#currentQuery,
                type: "observerResultsUpdated"
            });
        });
    }
};
function shouldLoadOnMount(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query) !== "static") {
        const value = typeof field === "function" ? field(query) : field;
        return value === "always" || value !== false && isStale(query, options);
    }
    return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(observer.getCurrentResult(), optimisticResult)) {
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=queryObserver.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
// src/QueryErrorResetBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function createValue() {
    let isReset = false;
    return {
        clearReset: ()=>{
            isReset = false;
        },
        reset: ()=>{
            isReset = true;
        },
        isReset: ()=>{
            return isReset;
        }
    };
}
var QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](createValue());
var useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({ children })=>{
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "QueryErrorResetBoundary.useState": ()=>createValue()
    }["QueryErrorResetBoundary.useState"]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
 //# sourceMappingURL=QueryErrorResetBoundary.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensurePreventErrorBoundaryRetry",
    ()=>ensurePreventErrorBoundaryRetry,
    "getHasError",
    ()=>getHasError,
    "useClearResetErrorBoundary",
    ()=>useClearResetErrorBoundary
]);
// src/errorBoundaryUtils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
"use client";
;
;
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query)=>{
    const throwOnError = query?.state.error && typeof options.throwOnError === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(options.throwOnError, [
        query.state.error,
        query
    ]) : options.throwOnError;
    if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
        if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
        }
    }
};
var useClearResetErrorBoundary = (errorResetBoundary)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useClearResetErrorBoundary.useEffect": ()=>{
            errorResetBoundary.clearReset();
        }
    }["useClearResetErrorBoundary.useEffect"], [
        errorResetBoundary
    ]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
 //# sourceMappingURL=errorBoundaryUtils.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
// src/IsRestoringProvider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](false);
var useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
;
 //# sourceMappingURL=IsRestoringProvider.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultThrowOnError",
    ()=>defaultThrowOnError,
    "ensureSuspenseTimers",
    ()=>ensureSuspenseTimers,
    "fetchOptimistic",
    ()=>fetchOptimistic,
    "shouldSuspend",
    ()=>shouldSuspend,
    "willFetch",
    ()=>willFetch
]);
// src/suspense.ts
var defaultThrowOnError = (_error, query)=>query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value)=>value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args)=>clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
        }
    }
};
var willFetch = (result, isRestoring)=>result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result)=>defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });
;
 //# sourceMappingURL=suspense.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useBaseQuery(options, Observer, queryClient) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof options !== "object" || Array.isArray(options)) {
            throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
        }
    }
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    const query = client.getQueryCache().get(defaultedOptions.queryHash);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) {
            console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
        }
    }
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary, query);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useBaseQuery.useState": ()=>new Observer(client, defaultedOptions)
    }["useBaseQuery.useState"]);
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && options.subscribed !== false;
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useBaseQuery.useSyncExternalStore.useCallback": (onStoreChange)=>{
            const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
            observer.updateResult();
            return unsubscribe;
        }
    }["useBaseQuery.useSyncExternalStore.useCallback"], [
        observer,
        shouldSubscribe
    ]), {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"], {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useBaseQuery.useEffect": ()=>{
            observer.setOptions(defaultedOptions);
        }
    }["useBaseQuery.useEffect"], [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHasError"])({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query,
        suspense: defaultedOptions.suspense
    })) {
        throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
    if (defaultedOptions.experimental_prefetchInRender && !__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["willFetch"])(result, isRestoring)) {
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary) : // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        query?.promise;
        promise?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
 //# sourceMappingURL=useBaseQuery.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
// src/useQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)");
"use client";
;
;
function useQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useQuery.js.map
}),
"[project]/frontend/node_modules/base64-js/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
    }
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength){
        parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    }
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}
}),
"[project]/frontend/node_modules/ieee754/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8){}
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8){}
    if (e === 0) {
        e = 1 - eBias;
    } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) {
            value += rt / c;
        } else {
            value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8){}
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8){}
    buffer[offset + i - d] |= s * 128;
};
}),
"[project]/frontend/node_modules/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ const base64 = __turbopack_context__.r("[project]/frontend/node_modules/base64-js/index.js [app-client] (ecmascript)");
const ieee754 = __turbopack_context__.r("[project]/frontend/node_modules/ieee754/index.js [app-client] (ecmascript)");
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
}
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
    }
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
            throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192; // not used by this implementation
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') {
        return fromString(value, encodingOrOffset);
    }
    if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
    }
    if (value == null) {
        throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
    }
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof value === 'number') {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
    }
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) {
        return Buffer.from(valueOf, encodingOrOffset, length);
    }
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
        return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    }
    throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be of type number');
    } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
    }
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
        return createBuffer(size);
    }
    if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpreted as a start offset.
        return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    }
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
    }
    if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding);
    }
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        buf = buf.slice(0, actual);
    }
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1){
        buf[i] = array[i] & 255;
    }
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
    }
    let buf;
    if (byteOffset === undefined && length === undefined) {
        buf = new Uint8Array(array);
    } else if (length === undefined) {
        buf = new Uint8Array(array, byteOffset);
    } else {
        buf = new Uint8Array(array, byteOffset, length);
    }
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
            return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
            return createBuffer(0);
        }
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
    }
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
    }
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) {
        length = 0;
    }
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    }
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i){
        if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
        }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
        return Buffer.alloc(0);
    }
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i){
            length += list[i].length;
        }
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else {
                Uint8Array.prototype.set.call(buffer, buf, pos);
            }
        } else if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
            buf.copy(buffer, pos);
        }
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) {
        return string.length;
    }
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
    }
    if (typeof string !== 'string') {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
    }
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;){
        switch(encoding){
            case 'ascii':
            case 'latin1':
            case 'binary':
                return len;
            case 'utf8':
            case 'utf-8':
                return utf8ToBytes(string).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return len * 2;
            case 'hex':
                return len >>> 1;
            case 'base64':
                return base64ToBytes(string).length;
            default:
                if (loweredCase) {
                    return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
                    ;
                }
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
        }
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) {
        start = 0;
    }
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) {
        return '';
    }
    if (end === undefined || end > this.length) {
        end = this.length;
    }
    if (end <= 0) {
        return '';
    }
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
        return '';
    }
    if (!encoding) encoding = 'utf8';
    while(true){
        switch(encoding){
            case 'hex':
                return hexSlice(this, start, end);
            case 'utf8':
            case 'utf-8':
                return utf8Slice(this, start, end);
            case 'ascii':
                return asciiSlice(this, start, end);
            case 'latin1':
            case 'binary':
                return latin1Slice(this, start, end);
            case 'base64':
                return base64Slice(this, start, end);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return utf16leSlice(this, start, end);
            default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                encoding = (encoding + '').toLowerCase();
                loweredCase = true;
        }
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits');
    }
    for(let i = 0; i < len; i += 2){
        swap(this, i, i + 1);
    }
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits');
    }
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits');
    }
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) {
    Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
}
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) {
        target = Buffer.from(target, target.offset, target.byteLength);
    }
    if (!Buffer.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
    }
    if (start === undefined) {
        start = 0;
    }
    if (end === undefined) {
        end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
        thisStart = 0;
    }
    if (thisEnd === undefined) {
        thisEnd = this.length;
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index');
    }
    if (thisStart >= thisEnd && start >= end) {
        return 0;
    }
    if (thisStart >= thisEnd) {
        return -1;
    }
    if (start >= end) {
        return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i){
        if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
        }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset; // Coerce to Number.
    if (numberIsNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : buffer.length - 1;
    }
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
    }
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
            return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) {
                return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
                return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) {
                return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) {
            return buf[i];
        } else {
            return buf.readUInt16BE(i * indexSize);
        }
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++){
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                if (foundIndex === -1) foundIndex = i;
                if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
                if (foundIndex !== -1) i -= i - foundIndex;
                foundIndex = -1;
            }
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++){
                if (read(arr, i + j) !== read(val, j)) {
                    found = false;
                    break;
                }
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) {
        length = remaining;
    } else {
        length = Number(length);
        if (length > remaining) {
            length = remaining;
        }
    }
    const strLen = string.length;
    if (length > strLen / 2) {
        length = strLen / 2;
    }
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else {
        throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    }
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds');
    }
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;){
        switch(encoding){
            case 'hex':
                return hexWrite(this, string, offset, length);
            case 'utf8':
            case 'utf-8':
                return utf8Write(this, string, offset, length);
            case 'ascii':
            case 'latin1':
            case 'binary':
                return asciiWrite(this, string, offset, length);
            case 'base64':
                // Warning: maxLength not taken into account in base64Write
                return base64Write(this, string, offset, length);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return ucs2Write(this, string, offset, length);
            default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
        }
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
    } else {
        return base64.fromByteArray(buf.slice(start, end));
    }
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) {
                        codePoint = firstByte;
                    }
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                            codePoint = tempCodePoint;
                        }
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
        ;
    }
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len){
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i){
        ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i){
        ret += String.fromCharCode(buf[i]);
    }
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i){
        out += hexSliceLookupTable[buf[i]];
    }
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2){
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) {
        start = len;
    }
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) {
        end = len;
    }
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100)){
        val += this[offset + i] * mul;
    }
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
    }
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100)){
        val += this[offset + --byteLength] * mul;
    }
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8);
    }
    const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8);
    }
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100)){
        val += this[offset + i] * mul;
    }
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100)){
        val += this[offset + --i] * mul;
    }
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8);
    }
    const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24) // Overflow
    ;
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8);
    }
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        this[offset + i] = value / mul & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        this[offset + i] = value / mul & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
    }
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
        // Use built-in when available, missing from IE11
        this.copyWithin(targetStart, start, end);
    } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    }
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
            throw new TypeError('encoding must be a string');
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
            throw new TypeError('Unknown encoding: ' + encoding);
        }
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
                // Fast path: If `val` fits into a single byte, use that numeric value.
                val = code;
            }
        }
    } else if (typeof val === 'number') {
        val = val & 255;
    } else if (typeof val === 'boolean') {
        val = Number(val);
    }
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index');
    }
    if (end <= start) {
        return this;
    }
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') {
        for(i = start; i < end; ++i){
            this[i] = val;
        }
    } else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for(i = 0; i < end - start; ++i){
            this[i + start] = bytes[i % len];
        }
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack; // eslint-disable-line no-unused-expressions
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) {
        return `${name} is outside of buffer bounds`;
    }
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
    } else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
        }
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3){
        res = `_${val.slice(i - 3, i)}${res}`;
    }
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
        boundsError(offset, buf.length - (byteLength + 1));
    }
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) {
                range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            } else {
                range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
            }
        } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== 'number') {
        throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
    }
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    }
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0){
        str = str + '=';
    }
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
            // valid bmp char, but last char was a lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else {
            throw new Error('Invalid code point');
        }
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j){
            table[i16 + j] = alphabet[i] + alphabet[j];
        }
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}
}),
"[project]/frontend/node_modules/oidc-token-hash/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
const { strict: assert } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/assert/assert.js [app-client] (ecmascript)");
const { createHash } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)");
const { format } = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)");
let encode;
if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isEncoding('base64url')) {
    encode = (input)=>input.toString('base64url');
} else {
    const fromBase64 = (base64)=>base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    encode = (input)=>fromBase64(input.toString('base64'));
}
/** SPECIFICATION
 * Its (_hash) value is the base64url encoding of the left-most half of the hash of the octets of
 * the ASCII representation of the token value, where the hash algorithm used is the hash algorithm
 * used in the alg Header Parameter of the ID Token's JOSE Header. For instance, if the alg is
 * RS256, hash the token value with SHA-256, then take the left-most 128 bits and base64url encode
 * them. The _hash value is a case sensitive string.
 */ /**
 * @name getHash
 * @api private
 *
 * returns the sha length based off the JOSE alg heade value, defaults to sha256
 *
 * @param token {String} token value to generate the hash from
 * @param alg {String} ID Token JOSE header alg value (i.e. RS256, HS384, ES512, PS256)
 * @param [crv] {String} For EdDSA the curve decides what hash algorithm is used. Required for EdDSA
 */ function getHash(alg, crv) {
    switch(alg){
        case 'HS256':
        case 'RS256':
        case 'PS256':
        case 'ES256':
        case 'ES256K':
            return createHash('sha256');
        case 'HS384':
        case 'RS384':
        case 'PS384':
        case 'ES384':
            return createHash('sha384');
        case 'HS512':
        case 'RS512':
        case 'PS512':
        case 'ES512':
        case 'Ed25519':
            return createHash('sha512');
        case 'Ed448':
            return createHash('shake256', {
                outputLength: 114
            });
        case 'ML-DSA-44':
        case 'ML-DSA-65':
        case 'ML-DSA-87':
            return createHash('shake256', {
                outputLength: 64
            });
        case 'EdDSA':
            switch(crv){
                case 'Ed25519':
                    return createHash('sha512');
                case 'Ed448':
                    return createHash('shake256', {
                        outputLength: 114
                    });
                default:
                    throw new TypeError('unrecognized or invalid EdDSA curve provided');
            }
        default:
            throw new TypeError('unrecognized or invalid JWS algorithm provided');
    }
}
function generate(token, alg, crv) {
    const digest = getHash(alg, crv).update(token).digest();
    return encode(digest.slice(0, digest.length / 2));
}
function validate(names, actual, source, alg, crv) {
    if (typeof names.claim !== 'string' || !names.claim) {
        throw new TypeError('names.claim must be a non-empty string');
    }
    if (typeof names.source !== 'string' || !names.source) {
        throw new TypeError('names.source must be a non-empty string');
    }
    assert(typeof actual === 'string' && actual, `${names.claim} must be a non-empty string`);
    assert(typeof source === 'string' && source, `${names.source} must be a non-empty string`);
    let expected;
    let msg;
    try {
        expected = generate(source, alg, crv);
    } catch (err) {
        msg = format('%s could not be validated (%s)', names.claim, err.message);
    }
    msg = msg || format('%s mismatch, expected %s, got: %s', names.claim, expected, actual);
    assert.equal(expected, actual, msg);
}
module.exports = {
    validate,
    generate
};
}),
"[project]/frontend/node_modules/openid-client/node_modules/yallist/iterator.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function(Yallist) {
    Yallist.prototype[Symbol.iterator] = function*() {
        for(let walker = this.head; walker; walker = walker.next){
            yield walker.value;
        }
    };
};
}),
"[project]/frontend/node_modules/openid-client/node_modules/yallist/yallist.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = Yallist;
Yallist.Node = Node;
Yallist.create = Yallist;
function Yallist(list) {
    var self = this;
    if (!(self instanceof Yallist)) {
        self = new Yallist();
    }
    self.tail = null;
    self.head = null;
    self.length = 0;
    if (list && typeof list.forEach === 'function') {
        list.forEach(function(item) {
            self.push(item);
        });
    } else if (arguments.length > 0) {
        for(var i = 0, l = arguments.length; i < l; i++){
            self.push(arguments[i]);
        }
    }
    return self;
}
Yallist.prototype.removeNode = function(node) {
    if (node.list !== this) {
        throw new Error('removing node which does not belong to this list');
    }
    var next = node.next;
    var prev = node.prev;
    if (next) {
        next.prev = prev;
    }
    if (prev) {
        prev.next = next;
    }
    if (node === this.head) {
        this.head = next;
    }
    if (node === this.tail) {
        this.tail = prev;
    }
    node.list.length--;
    node.next = null;
    node.prev = null;
    node.list = null;
    return next;
};
Yallist.prototype.unshiftNode = function(node) {
    if (node === this.head) {
        return;
    }
    if (node.list) {
        node.list.removeNode(node);
    }
    var head = this.head;
    node.list = this;
    node.next = head;
    if (head) {
        head.prev = node;
    }
    this.head = node;
    if (!this.tail) {
        this.tail = node;
    }
    this.length++;
};
Yallist.prototype.pushNode = function(node) {
    if (node === this.tail) {
        return;
    }
    if (node.list) {
        node.list.removeNode(node);
    }
    var tail = this.tail;
    node.list = this;
    node.prev = tail;
    if (tail) {
        tail.next = node;
    }
    this.tail = node;
    if (!this.head) {
        this.head = node;
    }
    this.length++;
};
Yallist.prototype.push = function() {
    for(var i = 0, l = arguments.length; i < l; i++){
        push(this, arguments[i]);
    }
    return this.length;
};
Yallist.prototype.unshift = function() {
    for(var i = 0, l = arguments.length; i < l; i++){
        unshift(this, arguments[i]);
    }
    return this.length;
};
Yallist.prototype.pop = function() {
    if (!this.tail) {
        return undefined;
    }
    var res = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
        this.tail.next = null;
    } else {
        this.head = null;
    }
    this.length--;
    return res;
};
Yallist.prototype.shift = function() {
    if (!this.head) {
        return undefined;
    }
    var res = this.head.value;
    this.head = this.head.next;
    if (this.head) {
        this.head.prev = null;
    } else {
        this.tail = null;
    }
    this.length--;
    return res;
};
Yallist.prototype.forEach = function(fn, thisp) {
    thisp = thisp || this;
    for(var walker = this.head, i = 0; walker !== null; i++){
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
    }
};
Yallist.prototype.forEachReverse = function(fn, thisp) {
    thisp = thisp || this;
    for(var walker = this.tail, i = this.length - 1; walker !== null; i--){
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
    }
};
Yallist.prototype.get = function(n) {
    for(var i = 0, walker = this.head; walker !== null && i < n; i++){
        // abort out of the list early if we hit a cycle
        walker = walker.next;
    }
    if (i === n && walker !== null) {
        return walker.value;
    }
};
Yallist.prototype.getReverse = function(n) {
    for(var i = 0, walker = this.tail; walker !== null && i < n; i++){
        // abort out of the list early if we hit a cycle
        walker = walker.prev;
    }
    if (i === n && walker !== null) {
        return walker.value;
    }
};
Yallist.prototype.map = function(fn, thisp) {
    thisp = thisp || this;
    var res = new Yallist();
    for(var walker = this.head; walker !== null;){
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
    }
    return res;
};
Yallist.prototype.mapReverse = function(fn, thisp) {
    thisp = thisp || this;
    var res = new Yallist();
    for(var walker = this.tail; walker !== null;){
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
    }
    return res;
};
Yallist.prototype.reduce = function(fn, initial) {
    var acc;
    var walker = this.head;
    if (arguments.length > 1) {
        acc = initial;
    } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
    } else {
        throw new TypeError('Reduce of empty list with no initial value');
    }
    for(var i = 0; walker !== null; i++){
        acc = fn(acc, walker.value, i);
        walker = walker.next;
    }
    return acc;
};
Yallist.prototype.reduceReverse = function(fn, initial) {
    var acc;
    var walker = this.tail;
    if (arguments.length > 1) {
        acc = initial;
    } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
    } else {
        throw new TypeError('Reduce of empty list with no initial value');
    }
    for(var i = this.length - 1; walker !== null; i--){
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
    }
    return acc;
};
Yallist.prototype.toArray = function() {
    var arr = new Array(this.length);
    for(var i = 0, walker = this.head; walker !== null; i++){
        arr[i] = walker.value;
        walker = walker.next;
    }
    return arr;
};
Yallist.prototype.toArrayReverse = function() {
    var arr = new Array(this.length);
    for(var i = 0, walker = this.tail; walker !== null; i++){
        arr[i] = walker.value;
        walker = walker.prev;
    }
    return arr;
};
Yallist.prototype.slice = function(from, to) {
    to = to || this.length;
    if (to < 0) {
        to += this.length;
    }
    from = from || 0;
    if (from < 0) {
        from += this.length;
    }
    var ret = new Yallist();
    if (to < from || to < 0) {
        return ret;
    }
    if (from < 0) {
        from = 0;
    }
    if (to > this.length) {
        to = this.length;
    }
    for(var i = 0, walker = this.head; walker !== null && i < from; i++){
        walker = walker.next;
    }
    for(; walker !== null && i < to; i++, walker = walker.next){
        ret.push(walker.value);
    }
    return ret;
};
Yallist.prototype.sliceReverse = function(from, to) {
    to = to || this.length;
    if (to < 0) {
        to += this.length;
    }
    from = from || 0;
    if (from < 0) {
        from += this.length;
    }
    var ret = new Yallist();
    if (to < from || to < 0) {
        return ret;
    }
    if (from < 0) {
        from = 0;
    }
    if (to > this.length) {
        to = this.length;
    }
    for(var i = this.length, walker = this.tail; walker !== null && i > to; i--){
        walker = walker.prev;
    }
    for(; walker !== null && i > from; i--, walker = walker.prev){
        ret.push(walker.value);
    }
    return ret;
};
Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
    if (start > this.length) {
        start = this.length - 1;
    }
    if (start < 0) {
        start = this.length + start;
    }
    for(var i = 0, walker = this.head; walker !== null && i < start; i++){
        walker = walker.next;
    }
    var ret = [];
    for(var i = 0; walker && i < deleteCount; i++){
        ret.push(walker.value);
        walker = this.removeNode(walker);
    }
    if (walker === null) {
        walker = this.tail;
    }
    if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
    }
    for(var i = 0; i < nodes.length; i++){
        walker = insert(this, walker, nodes[i]);
    }
    return ret;
};
Yallist.prototype.reverse = function() {
    var head = this.head;
    var tail = this.tail;
    for(var walker = head; walker !== null; walker = walker.prev){
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
    }
    this.head = tail;
    this.tail = head;
    return this;
};
function insert(self, node, value) {
    var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);
    if (inserted.next === null) {
        self.tail = inserted;
    }
    if (inserted.prev === null) {
        self.head = inserted;
    }
    self.length++;
    return inserted;
}
function push(self, item) {
    self.tail = new Node(item, self.tail, null, self);
    if (!self.head) {
        self.head = self.tail;
    }
    self.length++;
}
function unshift(self, item) {
    self.head = new Node(item, null, self.head, self);
    if (!self.tail) {
        self.tail = self.head;
    }
    self.length++;
}
function Node(value, prev, next, list) {
    if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
    }
    this.list = list;
    this.value = value;
    if (prev) {
        prev.next = this;
        this.prev = prev;
    } else {
        this.prev = null;
    }
    if (next) {
        next.prev = this;
        this.next = next;
    } else {
        this.next = null;
    }
}
try {
    // add if support for Symbol.iterator is present
    __turbopack_context__.r("[project]/frontend/node_modules/openid-client/node_modules/yallist/iterator.js [app-client] (ecmascript)")(Yallist);
} catch (er) {}
}),
"[project]/frontend/node_modules/openid-client/node_modules/lru-cache/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// A linked list to keep track of recently-used-ness
const Yallist = __turbopack_context__.r("[project]/frontend/node_modules/openid-client/node_modules/yallist/yallist.js [app-client] (ecmascript)");
const MAX = Symbol('max');
const LENGTH = Symbol('length');
const LENGTH_CALCULATOR = Symbol('lengthCalculator');
const ALLOW_STALE = Symbol('allowStale');
const MAX_AGE = Symbol('maxAge');
const DISPOSE = Symbol('dispose');
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet');
const LRU_LIST = Symbol('lruList');
const CACHE = Symbol('cache');
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet');
const naiveLength = ()=>1;
// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
    constructor(options){
        if (typeof options === 'number') options = {
            max: options
        };
        if (!options) options = {};
        if (options.max && (typeof options.max !== 'number' || options.max < 0)) throw new TypeError('max must be a non-negative number');
        // Kind of weird to have a default max of Infinity, but oh well.
        const max = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== 'function' ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== 'number') throw new TypeError('maxAge must be a number');
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
    }
    // resize the cache when the max changes.
    set max(mL) {
        if (typeof mL !== 'number' || mL < 0) throw new TypeError('max must be a non-negative number');
        this[MAX] = mL || Infinity;
        trim(this);
    }
    get max() {
        return this[MAX];
    }
    set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
    }
    get allowStale() {
        return this[ALLOW_STALE];
    }
    set maxAge(mA) {
        if (typeof mA !== 'number') throw new TypeError('maxAge must be a non-negative number');
        this[MAX_AGE] = mA;
        trim(this);
    }
    get maxAge() {
        return this[MAX_AGE];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(lC) {
        if (typeof lC !== 'function') lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
            this[LENGTH_CALCULATOR] = lC;
            this[LENGTH] = 0;
            this[LRU_LIST].forEach((hit)=>{
                hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
                this[LENGTH] += hit.length;
            });
        }
        trim(this);
    }
    get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
    }
    get length() {
        return this[LENGTH];
    }
    get itemCount() {
        return this[LRU_LIST].length;
    }
    rforEach(fn, thisp) {
        thisp = thisp || this;
        for(let walker = this[LRU_LIST].tail; walker !== null;){
            const prev = walker.prev;
            forEachStep(this, fn, walker, thisp);
            walker = prev;
        }
    }
    forEach(fn, thisp) {
        thisp = thisp || this;
        for(let walker = this[LRU_LIST].head; walker !== null;){
            const next = walker.next;
            forEachStep(this, fn, walker, thisp);
            walker = next;
        }
    }
    keys() {
        return this[LRU_LIST].toArray().map((k)=>k.key);
    }
    values() {
        return this[LRU_LIST].toArray().map((k)=>k.value);
    }
    reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
            this[LRU_LIST].forEach((hit)=>this[DISPOSE](hit.key, hit.value));
        }
        this[CACHE] = new Map(); // hash of items by key
        this[LRU_LIST] = new Yallist(); // list of items in order of use recency
        this[LENGTH] = 0; // length of items in the list
    }
    dump() {
        return this[LRU_LIST].map((hit)=>isStale(this, hit) ? false : {
                k: hit.key,
                v: hit.value,
                e: hit.now + (hit.maxAge || 0)
            }).toArray().filter((h)=>h);
    }
    dumpLru() {
        return this[LRU_LIST];
    }
    set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== 'number') throw new TypeError('maxAge must be a number');
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
            if (len > this[MAX]) {
                del(this, this[CACHE].get(key));
                return false;
            }
            const node = this[CACHE].get(key);
            const item = node.value;
            // dispose of the old one before overwriting
            // split out into 2 ifs for better coverage tracking
            if (this[DISPOSE]) {
                if (!this[NO_DISPOSE_ON_SET]) this[DISPOSE](key, item.value);
            }
            item.now = now;
            item.maxAge = maxAge;
            item.value = value;
            this[LENGTH] += len - item.length;
            item.length = len;
            this.get(key);
            trim(this);
            return true;
        }
        const hit = new Entry(key, value, len, now, maxAge);
        // oversized objects fall out of cache automatically.
        if (hit.length > this[MAX]) {
            if (this[DISPOSE]) this[DISPOSE](key, value);
            return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
    }
    has(key) {
        if (!this[CACHE].has(key)) return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
    }
    get(key) {
        return get(this, key, true);
    }
    peek(key) {
        return get(this, key, false);
    }
    pop() {
        const node = this[LRU_LIST].tail;
        if (!node) return null;
        del(this, node);
        return node.value;
    }
    del(key) {
        del(this, this[CACHE].get(key));
    }
    load(arr) {
        // reset the cache
        this.reset();
        const now = Date.now();
        // A previous serialized cache has the most recent items first
        for(let l = arr.length - 1; l >= 0; l--){
            const hit = arr[l];
            const expiresAt = hit.e || 0;
            if (expiresAt === 0) // the item was created without expiration in a non aged cache
            this.set(hit.k, hit.v);
            else {
                const maxAge = expiresAt - now;
                // dont add already expired items
                if (maxAge > 0) {
                    this.set(hit.k, hit.v, maxAge);
                }
            }
        }
    }
    prune() {
        this[CACHE].forEach((value, key)=>get(this, key, false));
    }
}
const get = (self, key, doUse)=>{
    const node = self[CACHE].get(key);
    if (node) {
        const hit = node.value;
        if (isStale(self, hit)) {
            del(self, node);
            if (!self[ALLOW_STALE]) return undefined;
        } else {
            if (doUse) {
                if (self[UPDATE_AGE_ON_GET]) node.value.now = Date.now();
                self[LRU_LIST].unshiftNode(node);
            }
        }
        return hit.value;
    }
};
const isStale = (self, hit)=>{
    if (!hit || !hit.maxAge && !self[MAX_AGE]) return false;
    const diff = Date.now() - hit.now;
    return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
};
const trim = (self)=>{
    if (self[LENGTH] > self[MAX]) {
        for(let walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null;){
            // We know that we're about to delete this one, and also
            // what the next least recently used key will be, so just
            // go ahead and set it now.
            const prev = walker.prev;
            del(self, walker);
            walker = prev;
        }
    }
};
const del = (self, node)=>{
    if (node) {
        const hit = node.value;
        if (self[DISPOSE]) self[DISPOSE](hit.key, hit.value);
        self[LENGTH] -= hit.length;
        self[CACHE].delete(hit.key);
        self[LRU_LIST].removeNode(node);
    }
};
class Entry {
    constructor(key, value, length, now, maxAge){
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
    }
}
const forEachStep = (self, fn, node, thisp)=>{
    let hit = node.value;
    if (isStale(self, hit)) {
        del(self, node);
        if (!self[ALLOW_STALE]) hit = undefined;
    }
    if (hit) fn.call(thisp, hit.value, hit.key, self);
};
module.exports = LRUCache;
}),
"[project]/frontend/node_modules/object-hash/dist/object_hash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e) {
    var t;
    ("TURBOPACK compile-time truthy", 1) ? module.exports = e() : "TURBOPACK unreachable";
}(function() {
    return (function o(i, u, a) {
        function s(n, e) {
            if (!u[n]) {
                if (!i[n]) {
                    var t = "function" == ("TURBOPACK compile-time value", "function") && /*TURBOPACK member replacement*/ __turbopack_context__.t;
                    if (!e && t) return t(n, !0);
                    if ("TURBOPACK compile-time truthy", 1) return f(n, !0);
                    //TURBOPACK unreachable
                    ;
                }
                var r = u[n] = {
                    exports: {}
                };
                i[n][0].call(r.exports, function(e) {
                    var t = i[n][1][e];
                    return s(t || e);
                }, r, r.exports, o, i, u, a);
            }
            return u[n].exports;
        }
        for(var f = "function" == ("TURBOPACK compile-time value", "function") && /*TURBOPACK member replacement*/ __turbopack_context__.t, e = 0; e < a.length; e++)s(a[e]);
        return s;
    })({
        1: [
            function(w, b, m) {
                (function(e, t, f, n, r, o, i, u, a) {
                    "use strict";
                    var s = w("crypto");
                    function c(e, t) {
                        return function(e, t) {
                            var n;
                            n = "passthrough" !== t.algorithm ? s.createHash(t.algorithm) : new y;
                            void 0 === n.write && (n.write = n.update, n.end = n.update);
                            g(t, n).dispatch(e), n.update || n.end("");
                            if (n.digest) return n.digest("buffer" === t.encoding ? void 0 : t.encoding);
                            var r = n.read();
                            return "buffer" !== t.encoding ? r.toString(t.encoding) : r;
                        }(e, t = h(e, t));
                    }
                    (m = b.exports = c).sha1 = function(e) {
                        return c(e);
                    }, m.keys = function(e) {
                        return c(e, {
                            excludeValues: !0,
                            algorithm: "sha1",
                            encoding: "hex"
                        });
                    }, m.MD5 = function(e) {
                        return c(e, {
                            algorithm: "md5",
                            encoding: "hex"
                        });
                    }, m.keysMD5 = function(e) {
                        return c(e, {
                            algorithm: "md5",
                            encoding: "hex",
                            excludeValues: !0
                        });
                    };
                    var l = s.getHashes ? s.getHashes().slice() : [
                        "sha1",
                        "md5"
                    ];
                    l.push("passthrough");
                    var d = [
                        "buffer",
                        "hex",
                        "binary",
                        "base64"
                    ];
                    function h(e, t) {
                        t = t || {};
                        var n = {};
                        if (n.algorithm = t.algorithm || "sha1", n.encoding = t.encoding || "hex", n.excludeValues = !!t.excludeValues, n.algorithm = n.algorithm.toLowerCase(), n.encoding = n.encoding.toLowerCase(), n.ignoreUnknown = !0 === t.ignoreUnknown, n.respectType = !1 !== t.respectType, n.respectFunctionNames = !1 !== t.respectFunctionNames, n.respectFunctionProperties = !1 !== t.respectFunctionProperties, n.unorderedArrays = !0 === t.unorderedArrays, n.unorderedSets = !1 !== t.unorderedSets, n.unorderedObjects = !1 !== t.unorderedObjects, n.replacer = t.replacer || void 0, n.excludeKeys = t.excludeKeys || void 0, void 0 === e) throw new Error("Object argument required.");
                        for(var r = 0; r < l.length; ++r)l[r].toLowerCase() === n.algorithm.toLowerCase() && (n.algorithm = l[r]);
                        if (-1 === l.indexOf(n.algorithm)) throw new Error('Algorithm "' + n.algorithm + '"  not supported. supported values: ' + l.join(", "));
                        if (-1 === d.indexOf(n.encoding) && "passthrough" !== n.algorithm) throw new Error('Encoding "' + n.encoding + '"  not supported. supported values: ' + d.join(", "));
                        return n;
                    }
                    function p(e) {
                        if ("function" == typeof e) {
                            return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e));
                        }
                    }
                    function g(u, t, a) {
                        a = a || [];
                        function s(e) {
                            return t.update ? t.update(e, "utf8") : t.write(e, "utf8");
                        }
                        return {
                            dispatch: function(e) {
                                return u.replacer && (e = u.replacer(e)), this["_" + (null === e ? "null" : typeof e)](e);
                            },
                            _object: function(t) {
                                var e = Object.prototype.toString.call(t), n = /\[object (.*)\]/i.exec(e);
                                n = (n = n ? n[1] : "unknown:[" + e + "]").toLowerCase();
                                var r;
                                if (0 <= (r = a.indexOf(t))) return this.dispatch("[CIRCULAR:" + r + "]");
                                if (a.push(t), void 0 !== f && f.isBuffer && f.isBuffer(t)) return s("buffer:"), s(t);
                                if ("object" === n || "function" === n || "asyncfunction" === n) {
                                    var o = Object.keys(t);
                                    u.unorderedObjects && (o = o.sort()), !1 === u.respectType || p(t) || o.splice(0, 0, "prototype", "__proto__", "constructor"), u.excludeKeys && (o = o.filter(function(e) {
                                        return !u.excludeKeys(e);
                                    })), s("object:" + o.length + ":");
                                    var i = this;
                                    return o.forEach(function(e) {
                                        i.dispatch(e), s(":"), u.excludeValues || i.dispatch(t[e]), s(",");
                                    });
                                }
                                if (!this["_" + n]) {
                                    if (u.ignoreUnknown) return s("[" + n + "]");
                                    throw new Error('Unknown object type "' + n + '"');
                                }
                                this["_" + n](t);
                            },
                            _array: function(e, t) {
                                t = void 0 !== t ? t : !1 !== u.unorderedArrays;
                                var n = this;
                                if (s("array:" + e.length + ":"), !t || e.length <= 1) return e.forEach(function(e) {
                                    return n.dispatch(e);
                                });
                                var r = [], o = e.map(function(e) {
                                    var t = new y, n = a.slice();
                                    return g(u, t, n).dispatch(e), r = r.concat(n.slice(a.length)), t.read().toString();
                                });
                                return a = a.concat(r), o.sort(), this._array(o, !1);
                            },
                            _date: function(e) {
                                return s("date:" + e.toJSON());
                            },
                            _symbol: function(e) {
                                return s("symbol:" + e.toString());
                            },
                            _error: function(e) {
                                return s("error:" + e.toString());
                            },
                            _boolean: function(e) {
                                return s("bool:" + e.toString());
                            },
                            _string: function(e) {
                                s("string:" + e.length + ":"), s(e.toString());
                            },
                            _function: function(e) {
                                s("fn:"), p(e) ? this.dispatch("[native]") : this.dispatch(e.toString()), !1 !== u.respectFunctionNames && this.dispatch("function-name:" + String(e.name)), u.respectFunctionProperties && this._object(e);
                            },
                            _number: function(e) {
                                return s("number:" + e.toString());
                            },
                            _xml: function(e) {
                                return s("xml:" + e.toString());
                            },
                            _null: function() {
                                return s("Null");
                            },
                            _undefined: function() {
                                return s("Undefined");
                            },
                            _regexp: function(e) {
                                return s("regex:" + e.toString());
                            },
                            _uint8array: function(e) {
                                return s("uint8array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _uint8clampedarray: function(e) {
                                return s("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _int8array: function(e) {
                                return s("uint8array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _uint16array: function(e) {
                                return s("uint16array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _int16array: function(e) {
                                return s("uint16array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _uint32array: function(e) {
                                return s("uint32array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _int32array: function(e) {
                                return s("uint32array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _float32array: function(e) {
                                return s("float32array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _float64array: function(e) {
                                return s("float64array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _arraybuffer: function(e) {
                                return s("arraybuffer:"), this.dispatch(new Uint8Array(e));
                            },
                            _url: function(e) {
                                return s("url:" + e.toString());
                            },
                            _map: function(e) {
                                s("map:");
                                var t = Array.from(e);
                                return this._array(t, !1 !== u.unorderedSets);
                            },
                            _set: function(e) {
                                s("set:");
                                var t = Array.from(e);
                                return this._array(t, !1 !== u.unorderedSets);
                            },
                            _file: function(e) {
                                return s("file:"), this.dispatch([
                                    e.name,
                                    e.size,
                                    e.type,
                                    e.lastModfied
                                ]);
                            },
                            _blob: function() {
                                if (u.ignoreUnknown) return s("[blob]");
                                throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n');
                            },
                            _domwindow: function() {
                                return s("domwindow");
                            },
                            _bigint: function(e) {
                                return s("bigint:" + e.toString());
                            },
                            _process: function() {
                                return s("process");
                            },
                            _timer: function() {
                                return s("timer");
                            },
                            _pipe: function() {
                                return s("pipe");
                            },
                            _tcp: function() {
                                return s("tcp");
                            },
                            _udp: function() {
                                return s("udp");
                            },
                            _tty: function() {
                                return s("tty");
                            },
                            _statwatcher: function() {
                                return s("statwatcher");
                            },
                            _securecontext: function() {
                                return s("securecontext");
                            },
                            _connection: function() {
                                return s("connection");
                            },
                            _zlib: function() {
                                return s("zlib");
                            },
                            _context: function() {
                                return s("context");
                            },
                            _nodescript: function() {
                                return s("nodescript");
                            },
                            _httpparser: function() {
                                return s("httpparser");
                            },
                            _dataview: function() {
                                return s("dataview");
                            },
                            _signal: function() {
                                return s("signal");
                            },
                            _fsevent: function() {
                                return s("fsevent");
                            },
                            _tlswrap: function() {
                                return s("tlswrap");
                            }
                        };
                    }
                    function y() {
                        return {
                            buf: "",
                            write: function(e) {
                                this.buf += e;
                            },
                            end: function(e) {
                                this.buf += e;
                            },
                            read: function() {
                                return this.buf;
                            }
                        };
                    }
                    m.writeToStream = function(e, t, n) {
                        return void 0 === n && (n = t, t = {}), g(t = h(e, t), n).dispatch(e);
                    };
                }).call(this, w("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_7eac155c.js", "/");
            },
            {
                buffer: 3,
                crypto: 5,
                lYpoI2: 10
            }
        ],
        2: [
            function(e, t, f) {
                (function(e, t, n, r, o, i, u, a, s) {
                    !function(e) {
                        "use strict";
                        var f = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "+".charCodeAt(0), r = "/".charCodeAt(0), o = "0".charCodeAt(0), i = "a".charCodeAt(0), u = "A".charCodeAt(0), a = "-".charCodeAt(0), s = "_".charCodeAt(0);
                        function c(e) {
                            var t = e.charCodeAt(0);
                            return t === n || t === a ? 62 : t === r || t === s ? 63 : t < o ? -1 : t < o + 10 ? t - o + 26 + 26 : t < u + 26 ? t - u : t < i + 26 ? t - i + 26 : void 0;
                        }
                        e.toByteArray = function(e) {
                            var t, n;
                            if (0 < e.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                            var r = e.length, o = "=" === e.charAt(r - 2) ? 2 : "=" === e.charAt(r - 1) ? 1 : 0, i = new f(3 * e.length / 4 - o), u = 0 < o ? e.length - 4 : e.length, a = 0;
                            function s(e) {
                                i[a++] = e;
                            }
                            for(t = 0; t < u; t += 4, 0)s((16711680 & (n = c(e.charAt(t)) << 18 | c(e.charAt(t + 1)) << 12 | c(e.charAt(t + 2)) << 6 | c(e.charAt(t + 3)))) >> 16), s((65280 & n) >> 8), s(255 & n);
                            return 2 == o ? s(255 & (n = c(e.charAt(t)) << 2 | c(e.charAt(t + 1)) >> 4)) : 1 == o && (s((n = c(e.charAt(t)) << 10 | c(e.charAt(t + 1)) << 4 | c(e.charAt(t + 2)) >> 2) >> 8 & 255), s(255 & n)), i;
                        }, e.fromByteArray = function(e) {
                            var t, n, r, o, i = e.length % 3, u = "";
                            function a(e) {
                                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e);
                            }
                            for(t = 0, r = e.length - i; t < r; t += 3)n = (e[t] << 16) + (e[t + 1] << 8) + e[t + 2], u += a((o = n) >> 18 & 63) + a(o >> 12 & 63) + a(o >> 6 & 63) + a(63 & o);
                            switch(i){
                                case 1:
                                    u += a((n = e[e.length - 1]) >> 2), u += a(n << 4 & 63), u += "==";
                                    break;
                                case 2:
                                    u += a((n = (e[e.length - 2] << 8) + e[e.length - 1]) >> 10), u += a(n >> 4 & 63), u += a(n << 2 & 63), u += "=";
                            }
                            return u;
                        };
                    }(void 0 === f ? this.base64js = {} : f);
                }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
            },
            {
                buffer: 3,
                lYpoI2: 10
            }
        ],
        3: [
            function(O, e, H) {
                (function(e, t, g, n, r, o, i, u, a) {
                    var s = O("base64-js"), f = O("ieee754");
                    function g(e, t, n) {
                        if (!(this instanceof g)) return new g(e, t, n);
                        var r, o, i, u, a, s = typeof e;
                        if ("base64" === t && "string" == s) for(e = (r = e).trim ? r.trim() : r.replace(/^\s+|\s+$/g, ""); e.length % 4 != 0;)e += "=";
                        if ("number" == s) o = x(e);
                        else if ("string" == s) o = g.byteLength(e, t);
                        else {
                            if ("object" != s) throw new Error("First argument needs to be a number, array or string.");
                            o = x(e.length);
                        }
                        if (g._useTypedArrays ? i = g._augment(new Uint8Array(o)) : ((i = this).length = o, i._isBuffer = !0), g._useTypedArrays && "number" == typeof e.byteLength) i._set(e);
                        else if (S(a = e) || g.isBuffer(a) || a && "object" == typeof a && "number" == typeof a.length) for(u = 0; u < o; u++)g.isBuffer(e) ? i[u] = e.readUInt8(u) : i[u] = e[u];
                        else if ("string" == s) i.write(e, 0, t);
                        else if ("number" == s && !g._useTypedArrays && !n) for(u = 0; u < o; u++)i[u] = 0;
                        return i;
                    }
                    function y(e, t, n, r) {
                        return g._charsWritten = T(function(e) {
                            for(var t = [], n = 0; n < e.length; n++)t.push(255 & e.charCodeAt(n));
                            return t;
                        }(t), e, n, r);
                    }
                    function w(e, t, n, r) {
                        return g._charsWritten = T(function(e) {
                            for(var t, n, r, o = [], i = 0; i < e.length; i++)t = e.charCodeAt(i), n = t >> 8, r = t % 256, o.push(r), o.push(n);
                            return o;
                        }(t), e, n, r);
                    }
                    function c(e, t, n) {
                        var r = "";
                        n = Math.min(e.length, n);
                        for(var o = t; o < n; o++)r += String.fromCharCode(e[o]);
                        return r;
                    }
                    function l(e, t, n, r) {
                        r || (D("boolean" == typeof n, "missing or invalid endian"), D(null != t, "missing offset"), D(t + 1 < e.length, "Trying to read beyond buffer length"));
                        var o, i = e.length;
                        if (!(i <= t)) return n ? (o = e[t], t + 1 < i && (o |= e[t + 1] << 8)) : (o = e[t] << 8, t + 1 < i && (o |= e[t + 1])), o;
                    }
                    function d(e, t, n, r) {
                        r || (D("boolean" == typeof n, "missing or invalid endian"), D(null != t, "missing offset"), D(t + 3 < e.length, "Trying to read beyond buffer length"));
                        var o, i = e.length;
                        if (!(i <= t)) return n ? (t + 2 < i && (o = e[t + 2] << 16), t + 1 < i && (o |= e[t + 1] << 8), o |= e[t], t + 3 < i && (o += e[t + 3] << 24 >>> 0)) : (t + 1 < i && (o = e[t + 1] << 16), t + 2 < i && (o |= e[t + 2] << 8), t + 3 < i && (o |= e[t + 3]), o += e[t] << 24 >>> 0), o;
                    }
                    function h(e, t, n, r) {
                        if (r || (D("boolean" == typeof n, "missing or invalid endian"), D(null != t, "missing offset"), D(t + 1 < e.length, "Trying to read beyond buffer length")), !(e.length <= t)) {
                            var o = l(e, t, n, !0);
                            return 32768 & o ? -1 * (65535 - o + 1) : o;
                        }
                    }
                    function p(e, t, n, r) {
                        if (r || (D("boolean" == typeof n, "missing or invalid endian"), D(null != t, "missing offset"), D(t + 3 < e.length, "Trying to read beyond buffer length")), !(e.length <= t)) {
                            var o = d(e, t, n, !0);
                            return 2147483648 & o ? -1 * (4294967295 - o + 1) : o;
                        }
                    }
                    function b(e, t, n, r) {
                        return r || (D("boolean" == typeof n, "missing or invalid endian"), D(t + 3 < e.length, "Trying to read beyond buffer length")), f.read(e, t, n, 23, 4);
                    }
                    function m(e, t, n, r) {
                        return r || (D("boolean" == typeof n, "missing or invalid endian"), D(t + 7 < e.length, "Trying to read beyond buffer length")), f.read(e, t, n, 52, 8);
                    }
                    function v(e, t, n, r, o) {
                        o || (D(null != t, "missing value"), D("boolean" == typeof r, "missing or invalid endian"), D(null != n, "missing offset"), D(n + 1 < e.length, "trying to write beyond buffer length"), N(t, 65535));
                        var i = e.length;
                        if (!(i <= n)) for(var u = 0, a = Math.min(i - n, 2); u < a; u++)e[n + u] = (t & 255 << 8 * (r ? u : 1 - u)) >>> 8 * (r ? u : 1 - u);
                    }
                    function _(e, t, n, r, o) {
                        o || (D(null != t, "missing value"), D("boolean" == typeof r, "missing or invalid endian"), D(null != n, "missing offset"), D(n + 3 < e.length, "trying to write beyond buffer length"), N(t, 4294967295));
                        var i = e.length;
                        if (!(i <= n)) for(var u = 0, a = Math.min(i - n, 4); u < a; u++)e[n + u] = t >>> 8 * (r ? u : 3 - u) & 255;
                    }
                    function E(e, t, n, r, o) {
                        o || (D(null != t, "missing value"), D("boolean" == typeof r, "missing or invalid endian"), D(null != n, "missing offset"), D(n + 1 < e.length, "Trying to write beyond buffer length"), Y(t, 32767, -32768)), e.length <= n || v(e, 0 <= t ? t : 65535 + t + 1, n, r, o);
                    }
                    function I(e, t, n, r, o) {
                        o || (D(null != t, "missing value"), D("boolean" == typeof r, "missing or invalid endian"), D(null != n, "missing offset"), D(n + 3 < e.length, "Trying to write beyond buffer length"), Y(t, 2147483647, -2147483648)), e.length <= n || _(e, 0 <= t ? t : 4294967295 + t + 1, n, r, o);
                    }
                    function A(e, t, n, r, o) {
                        o || (D(null != t, "missing value"), D("boolean" == typeof r, "missing or invalid endian"), D(null != n, "missing offset"), D(n + 3 < e.length, "Trying to write beyond buffer length"), F(t, 34028234663852886e22, -34028234663852886e22)), e.length <= n || f.write(e, t, n, r, 23, 4);
                    }
                    function B(e, t, n, r, o) {
                        o || (D(null != t, "missing value"), D("boolean" == typeof r, "missing or invalid endian"), D(null != n, "missing offset"), D(n + 7 < e.length, "Trying to write beyond buffer length"), F(t, 17976931348623157e292, -17976931348623157e292)), e.length <= n || f.write(e, t, n, r, 52, 8);
                    }
                    H.Buffer = g, H.SlowBuffer = g, H.INSPECT_MAX_BYTES = 50, g.poolSize = 8192, g._useTypedArrays = function() {
                        try {
                            var e = new ArrayBuffer(0), t = new Uint8Array(e);
                            return t.foo = function() {
                                return 42;
                            }, 42 === t.foo() && "function" == typeof t.subarray;
                        } catch (e) {
                            return !1;
                        }
                    }(), g.isEncoding = function(e) {
                        switch(String(e).toLowerCase()){
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "binary":
                            case "base64":
                            case "raw":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1;
                        }
                    }, g.isBuffer = function(e) {
                        return !(null == e || !e._isBuffer);
                    }, g.byteLength = function(e, t) {
                        var n;
                        switch(e += "", t || "utf8"){
                            case "hex":
                                n = e.length / 2;
                                break;
                            case "utf8":
                            case "utf-8":
                                n = C(e).length;
                                break;
                            case "ascii":
                            case "binary":
                            case "raw":
                                n = e.length;
                                break;
                            case "base64":
                                n = k(e).length;
                                break;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                n = 2 * e.length;
                                break;
                            default:
                                throw new Error("Unknown encoding");
                        }
                        return n;
                    }, g.concat = function(e, t) {
                        if (D(S(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e.length) return new g(0);
                        if (1 === e.length) return e[0];
                        if ("number" != typeof t) for(o = t = 0; o < e.length; o++)t += e[o].length;
                        for(var n = new g(t), r = 0, o = 0; o < e.length; o++){
                            var i = e[o];
                            i.copy(n, r), r += i.length;
                        }
                        return n;
                    }, g.prototype.write = function(e, t, n, r) {
                        var o;
                        isFinite(t) ? isFinite(n) || (r = n, n = void 0) : (o = r, r = t, t = n, n = o), t = Number(t) || 0;
                        var i, u, a, s, f, c, l, d, h, p = this.length - t;
                        switch((!n || p < (n = Number(n))) && (n = p), r = String(r || "utf8").toLowerCase()){
                            case "hex":
                                i = function(e, t, n, r) {
                                    n = Number(n) || 0;
                                    var o = e.length - n;
                                    (!r || o < (r = Number(r))) && (r = o);
                                    var i = t.length;
                                    D(i % 2 == 0, "Invalid hex string"), i / 2 < r && (r = i / 2);
                                    for(var u = 0; u < r; u++){
                                        var a = parseInt(t.substr(2 * u, 2), 16);
                                        D(!isNaN(a), "Invalid hex string"), e[n + u] = a;
                                    }
                                    return g._charsWritten = 2 * u, u;
                                }(this, e, t, n);
                                break;
                            case "utf8":
                            case "utf-8":
                                c = this, l = e, d = t, h = n, i = g._charsWritten = T(C(l), c, d, h);
                                break;
                            case "ascii":
                            case "binary":
                                i = y(this, e, t, n);
                                break;
                            case "base64":
                                u = this, a = e, s = t, f = n, i = g._charsWritten = T(k(a), u, s, f);
                                break;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                i = w(this, e, t, n);
                                break;
                            default:
                                throw new Error("Unknown encoding");
                        }
                        return i;
                    }, g.prototype.toString = function(e, t, n) {
                        var r, o, i, u, a = this;
                        if (e = String(e || "utf8").toLowerCase(), t = Number(t) || 0, (n = void 0 !== n ? Number(n) : n = a.length) === t) return "";
                        switch(e){
                            case "hex":
                                r = function(e, t, n) {
                                    var r = e.length;
                                    (!t || t < 0) && (t = 0);
                                    (!n || n < 0 || r < n) && (n = r);
                                    for(var o = "", i = t; i < n; i++)o += j(e[i]);
                                    return o;
                                }(a, t, n);
                                break;
                            case "utf8":
                            case "utf-8":
                                r = function(e, t, n) {
                                    var r = "", o = "";
                                    n = Math.min(e.length, n);
                                    for(var i = t; i < n; i++)e[i] <= 127 ? (r += M(o) + String.fromCharCode(e[i]), o = "") : o += "%" + e[i].toString(16);
                                    return r + M(o);
                                }(a, t, n);
                                break;
                            case "ascii":
                            case "binary":
                                r = c(a, t, n);
                                break;
                            case "base64":
                                o = a, u = n, r = 0 === (i = t) && u === o.length ? s.fromByteArray(o) : s.fromByteArray(o.slice(i, u));
                                break;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                r = function(e, t, n) {
                                    for(var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2)o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                                    return o;
                                }(a, t, n);
                                break;
                            default:
                                throw new Error("Unknown encoding");
                        }
                        return r;
                    }, g.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        };
                    }, g.prototype.copy = function(e, t, n, r) {
                        if (n = n || 0, r || 0 === r || (r = this.length), t = t || 0, r !== n && 0 !== e.length && 0 !== this.length) {
                            D(n <= r, "sourceEnd < sourceStart"), D(0 <= t && t < e.length, "targetStart out of bounds"), D(0 <= n && n < this.length, "sourceStart out of bounds"), D(0 <= r && r <= this.length, "sourceEnd out of bounds"), r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                            var o = r - n;
                            if (o < 100 || !g._useTypedArrays) for(var i = 0; i < o; i++)e[i + t] = this[i + n];
                            else e._set(this.subarray(n, n + o), t);
                        }
                    }, g.prototype.slice = function(e, t) {
                        var n = this.length;
                        if (e = U(e, n, 0), t = U(t, n, n), g._useTypedArrays) return g._augment(this.subarray(e, t));
                        for(var r = t - e, o = new g(r, void 0, !0), i = 0; i < r; i++)o[i] = this[i + e];
                        return o;
                    }, g.prototype.get = function(e) {
                        return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e);
                    }, g.prototype.set = function(e, t) {
                        return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t);
                    }, g.prototype.readUInt8 = function(e, t) {
                        if (t || (D(null != e, "missing offset"), D(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return this[e];
                    }, g.prototype.readUInt16LE = function(e, t) {
                        return l(this, e, !0, t);
                    }, g.prototype.readUInt16BE = function(e, t) {
                        return l(this, e, !1, t);
                    }, g.prototype.readUInt32LE = function(e, t) {
                        return d(this, e, !0, t);
                    }, g.prototype.readUInt32BE = function(e, t) {
                        return d(this, e, !1, t);
                    }, g.prototype.readInt8 = function(e, t) {
                        if (t || (D(null != e, "missing offset"), D(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
                    }, g.prototype.readInt16LE = function(e, t) {
                        return h(this, e, !0, t);
                    }, g.prototype.readInt16BE = function(e, t) {
                        return h(this, e, !1, t);
                    }, g.prototype.readInt32LE = function(e, t) {
                        return p(this, e, !0, t);
                    }, g.prototype.readInt32BE = function(e, t) {
                        return p(this, e, !1, t);
                    }, g.prototype.readFloatLE = function(e, t) {
                        return b(this, e, !0, t);
                    }, g.prototype.readFloatBE = function(e, t) {
                        return b(this, e, !1, t);
                    }, g.prototype.readDoubleLE = function(e, t) {
                        return m(this, e, !0, t);
                    }, g.prototype.readDoubleBE = function(e, t) {
                        return m(this, e, !1, t);
                    }, g.prototype.writeUInt8 = function(e, t, n) {
                        n || (D(null != e, "missing value"), D(null != t, "missing offset"), D(t < this.length, "trying to write beyond buffer length"), N(e, 255)), t >= this.length || (this[t] = e);
                    }, g.prototype.writeUInt16LE = function(e, t, n) {
                        v(this, e, t, !0, n);
                    }, g.prototype.writeUInt16BE = function(e, t, n) {
                        v(this, e, t, !1, n);
                    }, g.prototype.writeUInt32LE = function(e, t, n) {
                        _(this, e, t, !0, n);
                    }, g.prototype.writeUInt32BE = function(e, t, n) {
                        _(this, e, t, !1, n);
                    }, g.prototype.writeInt8 = function(e, t, n) {
                        n || (D(null != e, "missing value"), D(null != t, "missing offset"), D(t < this.length, "Trying to write beyond buffer length"), Y(e, 127, -128)), t >= this.length || (0 <= e ? this.writeUInt8(e, t, n) : this.writeUInt8(255 + e + 1, t, n));
                    }, g.prototype.writeInt16LE = function(e, t, n) {
                        E(this, e, t, !0, n);
                    }, g.prototype.writeInt16BE = function(e, t, n) {
                        E(this, e, t, !1, n);
                    }, g.prototype.writeInt32LE = function(e, t, n) {
                        I(this, e, t, !0, n);
                    }, g.prototype.writeInt32BE = function(e, t, n) {
                        I(this, e, t, !1, n);
                    }, g.prototype.writeFloatLE = function(e, t, n) {
                        A(this, e, t, !0, n);
                    }, g.prototype.writeFloatBE = function(e, t, n) {
                        A(this, e, t, !1, n);
                    }, g.prototype.writeDoubleLE = function(e, t, n) {
                        B(this, e, t, !0, n);
                    }, g.prototype.writeDoubleBE = function(e, t, n) {
                        B(this, e, t, !1, n);
                    }, g.prototype.fill = function(e, t, n) {
                        if (e = e || 0, t = t || 0, n = n || this.length, "string" == typeof e && (e = e.charCodeAt(0)), D("number" == typeof e && !isNaN(e), "value is not a number"), D(t <= n, "end < start"), n !== t && 0 !== this.length) {
                            D(0 <= t && t < this.length, "start out of bounds"), D(0 <= n && n <= this.length, "end out of bounds");
                            for(var r = t; r < n; r++)this[r] = e;
                        }
                    }, g.prototype.inspect = function() {
                        for(var e = [], t = this.length, n = 0; n < t; n++)if (e[n] = j(this[n]), n === H.INSPECT_MAX_BYTES) {
                            e[n + 1] = "...";
                            break;
                        }
                        return "<Buffer " + e.join(" ") + ">";
                    }, g.prototype.toArrayBuffer = function() {
                        if ("undefined" == typeof Uint8Array) throw new Error("Buffer.toArrayBuffer not supported in this browser");
                        if (g._useTypedArrays) return new g(this).buffer;
                        for(var e = new Uint8Array(this.length), t = 0, n = e.length; t < n; t += 1)e[t] = this[t];
                        return e.buffer;
                    };
                    var L = g.prototype;
                    function U(e, t, n) {
                        return "number" != typeof e ? n : t <= (e = ~~e) ? t : 0 <= e || 0 <= (e += t) ? e : 0;
                    }
                    function x(e) {
                        return (e = ~~Math.ceil(+e)) < 0 ? 0 : e;
                    }
                    function S(e) {
                        return (Array.isArray || function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e);
                        })(e);
                    }
                    function j(e) {
                        return e < 16 ? "0" + e.toString(16) : e.toString(16);
                    }
                    function C(e) {
                        for(var t = [], n = 0; n < e.length; n++){
                            var r = e.charCodeAt(n);
                            if (r <= 127) t.push(e.charCodeAt(n));
                            else {
                                var o = n;
                                55296 <= r && r <= 57343 && n++;
                                for(var i = encodeURIComponent(e.slice(o, n + 1)).substr(1).split("%"), u = 0; u < i.length; u++)t.push(parseInt(i[u], 16));
                            }
                        }
                        return t;
                    }
                    function k(e) {
                        return s.toByteArray(e);
                    }
                    function T(e, t, n, r) {
                        for(var o = 0; o < r && !(o + n >= t.length || o >= e.length); o++)t[o + n] = e[o];
                        return o;
                    }
                    function M(e) {
                        try {
                            return decodeURIComponent(e);
                        } catch (e) {
                            return String.fromCharCode(65533);
                        }
                    }
                    function N(e, t) {
                        D("number" == typeof e, "cannot write a non-number as a number"), D(0 <= e, "specified a negative value for writing an unsigned value"), D(e <= t, "value is larger than maximum value for type"), D(Math.floor(e) === e, "value has a fractional component");
                    }
                    function Y(e, t, n) {
                        D("number" == typeof e, "cannot write a non-number as a number"), D(e <= t, "value larger than maximum allowed value"), D(n <= e, "value smaller than minimum allowed value"), D(Math.floor(e) === e, "value has a fractional component");
                    }
                    function F(e, t, n) {
                        D("number" == typeof e, "cannot write a non-number as a number"), D(e <= t, "value larger than maximum allowed value"), D(n <= e, "value smaller than minimum allowed value");
                    }
                    function D(e, t) {
                        if (!e) throw new Error(t || "Failed assertion");
                    }
                    g._augment = function(e) {
                        return e._isBuffer = !0, e._get = e.get, e._set = e.set, e.get = L.get, e.set = L.set, e.write = L.write, e.toString = L.toString, e.toLocaleString = L.toString, e.toJSON = L.toJSON, e.copy = L.copy, e.slice = L.slice, e.readUInt8 = L.readUInt8, e.readUInt16LE = L.readUInt16LE, e.readUInt16BE = L.readUInt16BE, e.readUInt32LE = L.readUInt32LE, e.readUInt32BE = L.readUInt32BE, e.readInt8 = L.readInt8, e.readInt16LE = L.readInt16LE, e.readInt16BE = L.readInt16BE, e.readInt32LE = L.readInt32LE, e.readInt32BE = L.readInt32BE, e.readFloatLE = L.readFloatLE, e.readFloatBE = L.readFloatBE, e.readDoubleLE = L.readDoubleLE, e.readDoubleBE = L.readDoubleBE, e.writeUInt8 = L.writeUInt8, e.writeUInt16LE = L.writeUInt16LE, e.writeUInt16BE = L.writeUInt16BE, e.writeUInt32LE = L.writeUInt32LE, e.writeUInt32BE = L.writeUInt32BE, e.writeInt8 = L.writeInt8, e.writeInt16LE = L.writeInt16LE, e.writeInt16BE = L.writeInt16BE, e.writeInt32LE = L.writeInt32LE, e.writeInt32BE = L.writeInt32BE, e.writeFloatLE = L.writeFloatLE, e.writeFloatBE = L.writeFloatBE, e.writeDoubleLE = L.writeDoubleLE, e.writeDoubleBE = L.writeDoubleBE, e.fill = L.fill, e.inspect = L.inspect, e.toArrayBuffer = L.toArrayBuffer, e;
                    };
                }).call(this, O("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, O("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
            },
            {
                "base64-js": 2,
                buffer: 3,
                ieee754: 11,
                lYpoI2: 10
            }
        ],
        4: [
            function(l, d, e) {
                (function(e, t, u, n, r, o, i, a, s) {
                    var u = l("buffer").Buffer, f = 4, c = new u(f);
                    c.fill(0);
                    d.exports = {
                        hash: function(e, t, n, r) {
                            return u.isBuffer(e) || (e = new u(e)), function(e, t, n) {
                                for(var r = new u(t), o = n ? r.writeInt32BE : r.writeInt32LE, i = 0; i < e.length; i++)o.call(r, e[i], 4 * i, !0);
                                return r;
                            }(t(function(e, t) {
                                var n;
                                e.length % f != 0 && (n = e.length + (f - e.length % f), e = u.concat([
                                    e,
                                    c
                                ], n));
                                for(var r = [], o = t ? e.readInt32BE : e.readInt32LE, i = 0; i < e.length; i += f)r.push(o.call(e, i));
                                return r;
                            }(e, r), 8 * e.length), n, r);
                        }
                    };
                }).call(this, l("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
            },
            {
                buffer: 3,
                lYpoI2: 10
            }
        ],
        5: [
            function(w, e, b) {
                (function(e, t, a, n, r, o, i, u, s) {
                    var a = w("buffer").Buffer, f = w("./sha"), c = w("./sha256"), l = w("./rng"), d = {
                        sha1: f,
                        sha256: c,
                        md5: w("./md5")
                    }, h = 64, p = new a(h);
                    function g(e, r) {
                        var o = d[e = e || "sha1"], i = [];
                        return o || y("algorithm:", e, "is not yet supported"), {
                            update: function(e) {
                                return a.isBuffer(e) || (e = new a(e)), i.push(e), e.length, this;
                            },
                            digest: function(e) {
                                var t = a.concat(i), n = r ? function(e, t, n) {
                                    a.isBuffer(t) || (t = new a(t)), a.isBuffer(n) || (n = new a(n)), t.length > h ? t = e(t) : t.length < h && (t = a.concat([
                                        t,
                                        p
                                    ], h));
                                    for(var r = new a(h), o = new a(h), i = 0; i < h; i++)r[i] = 54 ^ t[i], o[i] = 92 ^ t[i];
                                    var u = e(a.concat([
                                        r,
                                        n
                                    ]));
                                    return e(a.concat([
                                        o,
                                        u
                                    ]));
                                }(o, r, t) : o(t);
                                return i = null, e ? n.toString(e) : n;
                            }
                        };
                    }
                    function y() {
                        var e = [].slice.call(arguments).join(" ");
                        throw new Error([
                            e,
                            "we accept pull requests",
                            "http://github.com/dominictarr/crypto-browserify"
                        ].join("\n"));
                    }
                    p.fill(0), b.createHash = function(e) {
                        return g(e);
                    }, b.createHmac = g, b.randomBytes = function(e, t) {
                        if (!t || !t.call) return new a(l(e));
                        try {
                            t.call(this, void 0, new a(l(e)));
                        } catch (e) {
                            t(e);
                        }
                    }, function(e, t) {
                        for(var n in e)t(e[n], n);
                    }([
                        "createCredentials",
                        "createCipher",
                        "createCipheriv",
                        "createDecipher",
                        "createDecipheriv",
                        "createSign",
                        "createVerify",
                        "createDiffieHellman",
                        "pbkdf2"
                    ], function(e) {
                        b[e] = function() {
                            y("sorry,", e, "is not implemented yet");
                        };
                    });
                }).call(this, w("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
            },
            {
                "./md5": 6,
                "./rng": 7,
                "./sha": 8,
                "./sha256": 9,
                buffer: 3,
                lYpoI2: 10
            }
        ],
        6: [
            function(w, b, e) {
                (function(e, t, n, r, o, i, u, a, s) {
                    var f = w("./helpers");
                    function c(e, t) {
                        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                        for(var n = 1732584193, r = -271733879, o = -1732584194, i = 271733878, u = 0; u < e.length; u += 16){
                            var a = n, s = r, f = o, c = i, n = d(n, r, o, i, e[u + 0], 7, -680876936), i = d(i, n, r, o, e[u + 1], 12, -389564586), o = d(o, i, n, r, e[u + 2], 17, 606105819), r = d(r, o, i, n, e[u + 3], 22, -1044525330);
                            n = d(n, r, o, i, e[u + 4], 7, -176418897), i = d(i, n, r, o, e[u + 5], 12, 1200080426), o = d(o, i, n, r, e[u + 6], 17, -1473231341), r = d(r, o, i, n, e[u + 7], 22, -45705983), n = d(n, r, o, i, e[u + 8], 7, 1770035416), i = d(i, n, r, o, e[u + 9], 12, -1958414417), o = d(o, i, n, r, e[u + 10], 17, -42063), r = d(r, o, i, n, e[u + 11], 22, -1990404162), n = d(n, r, o, i, e[u + 12], 7, 1804603682), i = d(i, n, r, o, e[u + 13], 12, -40341101), o = d(o, i, n, r, e[u + 14], 17, -1502002290), n = h(n, r = d(r, o, i, n, e[u + 15], 22, 1236535329), o, i, e[u + 1], 5, -165796510), i = h(i, n, r, o, e[u + 6], 9, -1069501632), o = h(o, i, n, r, e[u + 11], 14, 643717713), r = h(r, o, i, n, e[u + 0], 20, -373897302), n = h(n, r, o, i, e[u + 5], 5, -701558691), i = h(i, n, r, o, e[u + 10], 9, 38016083), o = h(o, i, n, r, e[u + 15], 14, -660478335), r = h(r, o, i, n, e[u + 4], 20, -405537848), n = h(n, r, o, i, e[u + 9], 5, 568446438), i = h(i, n, r, o, e[u + 14], 9, -1019803690), o = h(o, i, n, r, e[u + 3], 14, -187363961), r = h(r, o, i, n, e[u + 8], 20, 1163531501), n = h(n, r, o, i, e[u + 13], 5, -1444681467), i = h(i, n, r, o, e[u + 2], 9, -51403784), o = h(o, i, n, r, e[u + 7], 14, 1735328473), n = p(n, r = h(r, o, i, n, e[u + 12], 20, -1926607734), o, i, e[u + 5], 4, -378558), i = p(i, n, r, o, e[u + 8], 11, -2022574463), o = p(o, i, n, r, e[u + 11], 16, 1839030562), r = p(r, o, i, n, e[u + 14], 23, -35309556), n = p(n, r, o, i, e[u + 1], 4, -1530992060), i = p(i, n, r, o, e[u + 4], 11, 1272893353), o = p(o, i, n, r, e[u + 7], 16, -155497632), r = p(r, o, i, n, e[u + 10], 23, -1094730640), n = p(n, r, o, i, e[u + 13], 4, 681279174), i = p(i, n, r, o, e[u + 0], 11, -358537222), o = p(o, i, n, r, e[u + 3], 16, -722521979), r = p(r, o, i, n, e[u + 6], 23, 76029189), n = p(n, r, o, i, e[u + 9], 4, -640364487), i = p(i, n, r, o, e[u + 12], 11, -421815835), o = p(o, i, n, r, e[u + 15], 16, 530742520), n = g(n, r = p(r, o, i, n, e[u + 2], 23, -995338651), o, i, e[u + 0], 6, -198630844), i = g(i, n, r, o, e[u + 7], 10, 1126891415), o = g(o, i, n, r, e[u + 14], 15, -1416354905), r = g(r, o, i, n, e[u + 5], 21, -57434055), n = g(n, r, o, i, e[u + 12], 6, 1700485571), i = g(i, n, r, o, e[u + 3], 10, -1894986606), o = g(o, i, n, r, e[u + 10], 15, -1051523), r = g(r, o, i, n, e[u + 1], 21, -2054922799), n = g(n, r, o, i, e[u + 8], 6, 1873313359), i = g(i, n, r, o, e[u + 15], 10, -30611744), o = g(o, i, n, r, e[u + 6], 15, -1560198380), r = g(r, o, i, n, e[u + 13], 21, 1309151649), n = g(n, r, o, i, e[u + 4], 6, -145523070), i = g(i, n, r, o, e[u + 11], 10, -1120210379), o = g(o, i, n, r, e[u + 2], 15, 718787259), r = g(r, o, i, n, e[u + 9], 21, -343485551), n = y(n, a), r = y(r, s), o = y(o, f), i = y(i, c);
                        }
                        return Array(n, r, o, i);
                    }
                    function l(e, t, n, r, o, i) {
                        return y((u = y(y(t, e), y(r, i))) << (a = o) | u >>> 32 - a, n);
                        //TURBOPACK unreachable
                        ;
                        var u, a;
                    }
                    function d(e, t, n, r, o, i, u) {
                        return l(t & n | ~t & r, e, t, o, i, u);
                    }
                    function h(e, t, n, r, o, i, u) {
                        return l(t & r | n & ~r, e, t, o, i, u);
                    }
                    function p(e, t, n, r, o, i, u) {
                        return l(t ^ n ^ r, e, t, o, i, u);
                    }
                    function g(e, t, n, r, o, i, u) {
                        return l(n ^ (t | ~r), e, t, o, i, u);
                    }
                    function y(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
                    }
                    b.exports = function(e) {
                        return f.hash(e, c, 16);
                    };
                }).call(this, w("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
            },
            {
                "./helpers": 4,
                buffer: 3,
                lYpoI2: 10
            }
        ],
        7: [
            function(e, l, t) {
                (function(e, t, n, r, o, i, u, a, s) {
                    var f, c;
                    c = function(e) {
                        for(var t, n = new Array(e), r = 0; r < e; r++)0 == (3 & r) && (t = 4294967296 * Math.random()), n[r] = t >>> ((3 & r) << 3) & 255;
                        return n;
                    }, l.exports = f || c;
                }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
            },
            {
                buffer: 3,
                lYpoI2: 10
            }
        ],
        8: [
            function(l, d, e) {
                (function(e, t, n, r, o, i, u, a, s) {
                    var f = l("./helpers");
                    function c(e, t) {
                        e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;
                        for(var n, r, o, i, u, a = Array(80), s = 1732584193, f = -271733879, c = -1732584194, l = 271733878, d = -1009589776, h = 0; h < e.length; h += 16){
                            for(var p = s, g = f, y = c, w = l, b = d, m = 0; m < 80; m++){
                                a[m] = m < 16 ? e[h + m] : E(a[m - 3] ^ a[m - 8] ^ a[m - 14] ^ a[m - 16], 1);
                                var v = _(_(E(s, 5), (o = f, i = c, u = l, (r = m) < 20 ? o & i | ~o & u : !(r < 40) && r < 60 ? o & i | o & u | i & u : o ^ i ^ u)), _(_(d, a[m]), (n = m) < 20 ? 1518500249 : n < 40 ? 1859775393 : n < 60 ? -1894007588 : -899497514)), d = l, l = c, c = E(f, 30), f = s, s = v;
                            }
                            s = _(s, p), f = _(f, g), c = _(c, y), l = _(l, w), d = _(d, b);
                        }
                        return Array(s, f, c, l, d);
                    }
                    function _(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
                    }
                    function E(e, t) {
                        return e << t | e >>> 32 - t;
                    }
                    d.exports = function(e) {
                        return f.hash(e, c, 20, !0);
                    };
                }).call(this, l("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
            },
            {
                "./helpers": 4,
                buffer: 3,
                lYpoI2: 10
            }
        ],
        9: [
            function(l, d, e) {
                (function(e, t, n, r, o, i, u, a, s) {
                    function B(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
                    }
                    function L(e, t) {
                        return e >>> t | e << 32 - t;
                    }
                    function f(e, t) {
                        var n, r, o, i, u, a, s, f, c, l, d = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), h = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), p = new Array(64);
                        e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;
                        for(var g, y, w, b, m, v, _, E, I = 0; I < e.length; I += 16){
                            n = h[0], r = h[1], o = h[2], i = h[3], u = h[4], a = h[5], s = h[6], f = h[7];
                            for(var A = 0; A < 64; A++)p[A] = A < 16 ? e[A + I] : B(B(B((E = p[A - 2], L(E, 17) ^ L(E, 19) ^ E >>> 10), p[A - 7]), (_ = p[A - 15], L(_, 7) ^ L(_, 18) ^ _ >>> 3)), p[A - 16]), c = B(B(B(B(f, L(v = u, 6) ^ L(v, 11) ^ L(v, 25)), (m = u) & a ^ ~m & s), d[A]), p[A]), l = B(L(b = n, 2) ^ L(b, 13) ^ L(b, 22), (g = n) & (y = r) ^ g & (w = o) ^ y & w), f = s, s = a, a = u, u = B(i, c), i = o, o = r, r = n, n = B(c, l);
                            h[0] = B(n, h[0]), h[1] = B(r, h[1]), h[2] = B(o, h[2]), h[3] = B(i, h[3]), h[4] = B(u, h[4]), h[5] = B(a, h[5]), h[6] = B(s, h[6]), h[7] = B(f, h[7]);
                        }
                        return h;
                    }
                    var c = l("./helpers");
                    d.exports = function(e) {
                        return c.hash(e, f, 32, !0);
                    };
                }).call(this, l("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
            },
            {
                "./helpers": 4,
                buffer: 3,
                lYpoI2: 10
            }
        ],
        10: [
            function(e, c, t) {
                (function(e, t, n, r, o, i, u, a, s) {
                    function f() {}
                    (e = c.exports = {}).nextTick = function() {
                        var e = "undefined" != typeof window && window.setImmediate, t = "undefined" != typeof window && window.postMessage && window.addEventListener;
                        if (e) return function(e) {
                            return window.setImmediate(e);
                        };
                        if (t) {
                            var n = [];
                            return window.addEventListener("message", function(e) {
                                var t = e.source;
                                t !== window && null !== t || "process-tick" !== e.data || (e.stopPropagation(), 0 < n.length && n.shift()());
                            }, !0), function(e) {
                                n.push(e), window.postMessage("process-tick", "*");
                            };
                        }
                        return function(e) {
                            setTimeout(e, 0);
                        };
                    }(), e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.on = f, e.addListener = f, e.once = f, e.off = f, e.removeListener = f, e.removeAllListeners = f, e.emit = f, e.binding = function(e) {
                        throw new Error("process.binding is not supported");
                    }, e.cwd = function() {
                        return "/";
                    }, e.chdir = function(e) {
                        throw new Error("process.chdir is not supported");
                    };
                }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
            },
            {
                buffer: 3,
                lYpoI2: 10
            }
        ],
        11: [
            function(e, t, f) {
                (function(e, t, n, r, o, i, u, a, s) {
                    f.read = function(e, t, n, r, o) {
                        var i, u, a = 8 * o - r - 1, s = (1 << a) - 1, f = s >> 1, c = -7, l = n ? o - 1 : 0, d = n ? -1 : 1, h = e[t + l];
                        for(l += d, i = h & (1 << -c) - 1, h >>= -c, c += a; 0 < c; i = 256 * i + e[t + l], l += d, c -= 8);
                        for(u = i & (1 << -c) - 1, i >>= -c, c += r; 0 < c; u = 256 * u + e[t + l], l += d, c -= 8);
                        if (0 === i) i = 1 - f;
                        else {
                            if (i === s) return u ? NaN : 1 / 0 * (h ? -1 : 1);
                            u += Math.pow(2, r), i -= f;
                        }
                        return (h ? -1 : 1) * u * Math.pow(2, i - r);
                    }, f.write = function(e, t, n, r, o, i) {
                        var u, a, s, f = 8 * i - o - 1, c = (1 << f) - 1, l = c >> 1, d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = r ? 0 : i - 1, p = r ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                        for(t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, u = c) : (u = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -u)) < 1 && (u--, s *= 2), 2 <= (t += 1 <= u + l ? d / s : d * Math.pow(2, 1 - l)) * s && (u++, s /= 2), c <= u + l ? (a = 0, u = c) : 1 <= u + l ? (a = (t * s - 1) * Math.pow(2, o), u += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, o), u = 0)); 8 <= o; e[n + h] = 255 & a, h += p, a /= 256, o -= 8);
                        for(u = u << o | a, f += o; 0 < f; e[n + h] = 255 & u, h += p, u /= 256, f -= 8);
                        e[n + h - p] |= 128 * g;
                    };
                }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/ieee754/index.js", "/node_modules/ieee754");
            },
            {
                buffer: 3,
                lYpoI2: 10
            }
        ]
    }, {}, [
        1
    ])(1);
});
}),
"[project]/frontend/node_modules/oauth/lib/sha1.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS 180-1
 * Version 2.2 Copyright Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */ /*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */ var hexcase = 1; /* hex output format. 0 - lowercase; 1 - uppercase        */ 
var b64pad = "="; /* base-64 pad character. "=" for strict RFC compliance   */ 
/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */ function hex_sha1(s) {
    return rstr2hex(rstr_sha1(str2rstr_utf8(s)));
}
function b64_sha1(s) {
    return rstr2b64(rstr_sha1(str2rstr_utf8(s)));
}
function any_sha1(s, e) {
    return rstr2any(rstr_sha1(str2rstr_utf8(s)), e);
}
function hex_hmac_sha1(k, d) {
    return rstr2hex(rstr_hmac_sha1(str2rstr_utf8(k), str2rstr_utf8(d)));
}
function b64_hmac_sha1(k, d) {
    return rstr2b64(rstr_hmac_sha1(str2rstr_utf8(k), str2rstr_utf8(d)));
}
function any_hmac_sha1(k, d, e) {
    return rstr2any(rstr_hmac_sha1(str2rstr_utf8(k), str2rstr_utf8(d)), e);
}
/*
 * Perform a simple self-test to see if the VM is working
 */ function sha1_vm_test() {
    return hex_sha1("abc").toLowerCase() == "a9993e364706816aba3e25717850c26c9cd0d89d";
}
/*
 * Calculate the SHA1 of a raw string
 */ function rstr_sha1(s) {
    return binb2rstr(binb_sha1(rstr2binb(s), s.length * 8));
}
/*
 * Calculate the HMAC-SHA1 of a key and some data (raw strings)
 */ function rstr_hmac_sha1(key, data) {
    var bkey = rstr2binb(key);
    if (bkey.length > 16) bkey = binb_sha1(bkey, key.length * 8);
    var ipad = Array(16), opad = Array(16);
    for(var i = 0; i < 16; i++){
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }
    var hash = binb_sha1(ipad.concat(rstr2binb(data)), 512 + data.length * 8);
    return binb2rstr(binb_sha1(opad.concat(hash), 512 + 160));
}
/*
 * Convert a raw string to a hex string
 */ function rstr2hex(input) {
    try {
        hexcase;
    } catch (e) {
        hexcase = 0;
    }
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var output = "";
    var x;
    for(var i = 0; i < input.length; i++){
        x = input.charCodeAt(i);
        output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
    }
    return output;
}
/*
 * Convert a raw string to a base-64 string
 */ function rstr2b64(input) {
    try {
        b64pad;
    } catch (e) {
        b64pad = '';
    }
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var output = "";
    var len = input.length;
    for(var i = 0; i < len; i += 3){
        var triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
        for(var j = 0; j < 4; j++){
            if (i * 8 + j * 6 > input.length * 8) output += b64pad;
            else output += tab.charAt(triplet >>> 6 * (3 - j) & 0x3F);
        }
    }
    return output;
}
/*
 * Convert a raw string to an arbitrary string encoding
 */ function rstr2any(input, encoding) {
    var divisor = encoding.length;
    var remainders = Array();
    var i, q, x, quotient;
    /* Convert to an array of 16-bit big-endian values, forming the dividend */ var dividend = Array(Math.ceil(input.length / 2));
    for(i = 0; i < dividend.length; i++){
        dividend[i] = input.charCodeAt(i * 2) << 8 | input.charCodeAt(i * 2 + 1);
    }
    /*
   * Repeatedly perform a long division. The binary array forms the dividend,
   * the length of the encoding is the divisor. Once computed, the quotient
   * forms the dividend for the next step. We stop when the dividend is zero.
   * All remainders are stored for later use.
   */ while(dividend.length > 0){
        quotient = Array();
        x = 0;
        for(i = 0; i < dividend.length; i++){
            x = (x << 16) + dividend[i];
            q = Math.floor(x / divisor);
            x -= q * divisor;
            if (quotient.length > 0 || q > 0) quotient[quotient.length] = q;
        }
        remainders[remainders.length] = x;
        dividend = quotient;
    }
    /* Convert the remainders to the output string */ var output = "";
    for(i = remainders.length - 1; i >= 0; i--)output += encoding.charAt(remainders[i]);
    /* Append leading zero equivalents */ var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
    for(i = output.length; i < full_length; i++)output = encoding[0] + output;
    return output;
}
/*
 * Encode a string as utf-8.
 * For efficiency, this assumes the input is valid utf-16.
 */ function str2rstr_utf8(input) {
    var output = "";
    var i = -1;
    var x, y;
    while(++i < input.length){
        /* Decode utf-16 surrogate pairs */ x = input.charCodeAt(i);
        y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
        if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
            x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
            i++;
        }
        /* Encode output as utf-8 */ if (x <= 0x7F) output += String.fromCharCode(x);
        else if (x <= 0x7FF) output += String.fromCharCode(0xC0 | x >>> 6 & 0x1F, 0x80 | x & 0x3F);
        else if (x <= 0xFFFF) output += String.fromCharCode(0xE0 | x >>> 12 & 0x0F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
        else if (x <= 0x1FFFFF) output += String.fromCharCode(0xF0 | x >>> 18 & 0x07, 0x80 | x >>> 12 & 0x3F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
    }
    return output;
}
/*
 * Encode a string as utf-16
 */ function str2rstr_utf16le(input) {
    var output = "";
    for(var i = 0; i < input.length; i++)output += String.fromCharCode(input.charCodeAt(i) & 0xFF, input.charCodeAt(i) >>> 8 & 0xFF);
    return output;
}
function str2rstr_utf16be(input) {
    var output = "";
    for(var i = 0; i < input.length; i++)output += String.fromCharCode(input.charCodeAt(i) >>> 8 & 0xFF, input.charCodeAt(i) & 0xFF);
    return output;
}
/*
 * Convert a raw string to an array of big-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function rstr2binb(input) {
    var output = Array(input.length >> 2);
    for(var i = 0; i < output.length; i++)output[i] = 0;
    for(var i = 0; i < input.length * 8; i += 8)output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << 24 - i % 32;
    return output;
}
/*
 * Convert an array of big-endian words to a string
 */ function binb2rstr(input) {
    var output = "";
    for(var i = 0; i < input.length * 32; i += 8)output += String.fromCharCode(input[i >> 5] >>> 24 - i % 32 & 0xFF);
    return output;
}
/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */ function binb_sha1(x, len) {
    /* append padding */ x[len >> 5] |= 0x80 << 24 - len % 32;
    x[(len + 64 >> 9 << 4) + 15] = len;
    var w = Array(80);
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    var e = -1009589776;
    for(var i = 0; i < x.length; i += 16){
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        var olde = e;
        for(var j = 0; j < 80; j++){
            if (j < 16) w[j] = x[i + j];
            else w[j] = bit_rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            var t = safe_add(safe_add(bit_rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
            e = d;
            d = c;
            c = bit_rol(b, 30);
            b = a;
            a = t;
        }
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
        e = safe_add(e, olde);
    }
    return Array(a, b, c, d, e);
}
/*
 * Perform the appropriate triplet combination function for the current
 * iteration
 */ function sha1_ft(t, b, c, d) {
    if (t < 20) return b & c | ~b & d;
    if (t < 40) return b ^ c ^ d;
    if (t < 60) return b & c | b & d | c & d;
    return b ^ c ^ d;
}
/*
 * Determine the appropriate additive constant for the current iteration
 */ function sha1_kt(t) {
    return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xFFFF;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bit_rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
exports.HMACSHA1 = function(key, data) {
    return b64_hmac_sha1(key, data);
};
}),
"[project]/frontend/node_modules/oauth/lib/_utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Returns true if this is a host that closes *before* it ends?!?!
module.exports.isAnEarlyCloseHost = function(hostName) {
    return hostName && hostName.match(".*google(apis)?.com$");
};
}),
"[project]/frontend/node_modules/oauth/lib/oauth.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var crypto = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)"), sha1 = __turbopack_context__.r("[project]/frontend/node_modules/oauth/lib/sha1.js [app-client] (ecmascript)"), http = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/stream-http/index.js [app-client] (ecmascript)"), https = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/https-browserify/index.js [app-client] (ecmascript)"), URL = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)"), querystring = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/querystring-es3/index.js [app-client] (ecmascript)"), OAuthUtils = __turbopack_context__.r("[project]/frontend/node_modules/oauth/lib/_utils.js [app-client] (ecmascript)");
exports.OAuth = function(requestUrl, accessUrl, consumerKey, consumerSecret, version, authorize_callback, signatureMethod, nonceSize, customHeaders) {
    this._isEcho = false;
    this._requestUrl = requestUrl;
    this._accessUrl = accessUrl;
    this._consumerKey = consumerKey;
    this._consumerSecret = this._encodeData(consumerSecret);
    if (signatureMethod == "RSA-SHA1") {
        this._privateKey = consumerSecret;
    }
    this._version = version;
    if (authorize_callback === undefined) {
        this._authorize_callback = "oob";
    } else {
        this._authorize_callback = authorize_callback;
    }
    if (signatureMethod != "PLAINTEXT" && signatureMethod != "HMAC-SHA1" && signatureMethod != "RSA-SHA1") throw new Error("Un-supported signature method: " + signatureMethod);
    this._signatureMethod = signatureMethod;
    this._nonceSize = nonceSize || 32;
    this._headers = customHeaders || {
        "Accept": "*/*",
        "Connection": "close",
        "User-Agent": "Node authentication"
    };
    this._clientOptions = this._defaultClientOptions = {
        "requestTokenHttpMethod": "POST",
        "accessTokenHttpMethod": "POST",
        "followRedirects": true
    };
    this._oauthParameterSeperator = ",";
};
exports.OAuthEcho = function(realm, verify_credentials, consumerKey, consumerSecret, version, signatureMethod, nonceSize, customHeaders) {
    this._isEcho = true;
    this._realm = realm;
    this._verifyCredentials = verify_credentials;
    this._consumerKey = consumerKey;
    this._consumerSecret = this._encodeData(consumerSecret);
    if (signatureMethod == "RSA-SHA1") {
        this._privateKey = consumerSecret;
    }
    this._version = version;
    if (signatureMethod != "PLAINTEXT" && signatureMethod != "HMAC-SHA1" && signatureMethod != "RSA-SHA1") throw new Error("Un-supported signature method: " + signatureMethod);
    this._signatureMethod = signatureMethod;
    this._nonceSize = nonceSize || 32;
    this._headers = customHeaders || {
        "Accept": "*/*",
        "Connection": "close",
        "User-Agent": "Node authentication"
    };
    this._oauthParameterSeperator = ",";
};
exports.OAuthEcho.prototype = exports.OAuth.prototype;
exports.OAuth.prototype._getTimestamp = function() {
    return Math.floor(new Date().getTime() / 1000);
};
exports.OAuth.prototype._encodeData = function(toEncode) {
    if (toEncode == null || toEncode == "") return "";
    else {
        var result = encodeURIComponent(toEncode);
        // Fix the mismatch between OAuth's  RFC3986's and Javascript's beliefs in what is right and wrong ;)
        return result.replace(/\!/g, "%21").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
    }
};
exports.OAuth.prototype._decodeData = function(toDecode) {
    if (toDecode != null) {
        toDecode = toDecode.replace(/\+/g, " ");
    }
    return decodeURIComponent(toDecode);
};
exports.OAuth.prototype._getSignature = function(method, url, parameters, tokenSecret) {
    var signatureBase = this._createSignatureBase(method, url, parameters);
    return this._createSignature(signatureBase, tokenSecret);
};
exports.OAuth.prototype._normalizeUrl = function(url) {
    var parsedUrl = URL.parse(url, true);
    var port = "";
    if (parsedUrl.port) {
        if (parsedUrl.protocol == "http:" && parsedUrl.port != "80" || parsedUrl.protocol == "https:" && parsedUrl.port != "443") {
            port = ":" + parsedUrl.port;
        }
    }
    if (!parsedUrl.pathname || parsedUrl.pathname == "") parsedUrl.pathname = "/";
    return parsedUrl.protocol + "//" + parsedUrl.hostname + port + parsedUrl.pathname;
};
// Is the parameter considered an OAuth parameter
exports.OAuth.prototype._isParameterNameAnOAuthParameter = function(parameter) {
    var m = parameter.match('^oauth_');
    if (m && m[0] === "oauth_") {
        return true;
    } else {
        return false;
    }
};
// build the OAuth request authorization header
exports.OAuth.prototype._buildAuthorizationHeaders = function(orderedParameters) {
    var authHeader = "OAuth ";
    if (this._isEcho) {
        authHeader += 'realm="' + this._realm + '",';
    }
    for(var i = 0; i < orderedParameters.length; i++){
        // Whilst the all the parameters should be included within the signature, only the oauth_ arguments
        // should appear within the authorization header.
        if (this._isParameterNameAnOAuthParameter(orderedParameters[i][0])) {
            authHeader += "" + this._encodeData(orderedParameters[i][0]) + "=\"" + this._encodeData(orderedParameters[i][1]) + "\"" + this._oauthParameterSeperator;
        }
    }
    authHeader = authHeader.substring(0, authHeader.length - this._oauthParameterSeperator.length);
    return authHeader;
};
// Takes an object literal that represents the arguments, and returns an array
// of argument/value pairs.
exports.OAuth.prototype._makeArrayOfArgumentsHash = function(argumentsHash) {
    var argument_pairs = [];
    for(var key in argumentsHash){
        if (argumentsHash.hasOwnProperty(key)) {
            var value = argumentsHash[key];
            if (Array.isArray(value)) {
                for(var i = 0; i < value.length; i++){
                    argument_pairs[argument_pairs.length] = [
                        key,
                        value[i]
                    ];
                }
            } else {
                argument_pairs[argument_pairs.length] = [
                    key,
                    value
                ];
            }
        }
    }
    return argument_pairs;
};
// Sorts the encoded key value pairs by encoded name, then encoded value
exports.OAuth.prototype._sortRequestParams = function(argument_pairs) {
    // Sort by name, then value.
    argument_pairs.sort(function(a, b) {
        if (a[0] == b[0]) {
            return a[1] < b[1] ? -1 : 1;
        } else return a[0] < b[0] ? -1 : 1;
    });
    return argument_pairs;
};
exports.OAuth.prototype._normaliseRequestParams = function(args) {
    var argument_pairs = this._makeArrayOfArgumentsHash(args);
    // First encode them #3.4.1.3.2 .1
    for(var i = 0; i < argument_pairs.length; i++){
        argument_pairs[i][0] = this._encodeData(argument_pairs[i][0]);
        argument_pairs[i][1] = this._encodeData(argument_pairs[i][1]);
    }
    // Then sort them #3.4.1.3.2 .2
    argument_pairs = this._sortRequestParams(argument_pairs);
    // Then concatenate together #3.4.1.3.2 .3 & .4
    var args = "";
    for(var i = 0; i < argument_pairs.length; i++){
        args += argument_pairs[i][0];
        args += "=";
        args += argument_pairs[i][1];
        if (i < argument_pairs.length - 1) args += "&";
    }
    return args;
};
exports.OAuth.prototype._createSignatureBase = function(method, url, parameters) {
    url = this._encodeData(this._normalizeUrl(url));
    parameters = this._encodeData(parameters);
    return method.toUpperCase() + "&" + url + "&" + parameters;
};
exports.OAuth.prototype._createSignature = function(signatureBase, tokenSecret) {
    if (tokenSecret === undefined) var tokenSecret = "";
    else tokenSecret = this._encodeData(tokenSecret);
    // consumerSecret is already encoded
    var key = this._consumerSecret + "&" + tokenSecret;
    var hash = "";
    if (this._signatureMethod == "PLAINTEXT") {
        hash = key;
    } else if (this._signatureMethod == "RSA-SHA1") {
        key = this._privateKey || "";
        hash = crypto.createSign("RSA-SHA1").update(signatureBase).sign(key, 'base64');
    } else {
        if (crypto.Hmac) {
            hash = crypto.createHmac("sha1", key).update(signatureBase).digest("base64");
        } else {
            hash = sha1.HMACSHA1(key, signatureBase);
        }
    }
    return hash;
};
exports.OAuth.prototype.NONCE_CHARS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
];
exports.OAuth.prototype._getNonce = function(nonceSize) {
    var result = [];
    var chars = this.NONCE_CHARS;
    var char_pos;
    var nonce_chars_length = chars.length;
    for(var i = 0; i < nonceSize; i++){
        char_pos = Math.floor(Math.random() * nonce_chars_length);
        result[i] = chars[char_pos];
    }
    return result.join('');
};
exports.OAuth.prototype._createClient = function(port, hostname, method, path, headers, sslEnabled) {
    var options = {
        host: hostname,
        port: port,
        path: path,
        method: method,
        headers: headers
    };
    var httpModel;
    if (sslEnabled) {
        httpModel = https;
    } else {
        httpModel = http;
    }
    return httpModel.request(options);
};
exports.OAuth.prototype._prepareParameters = function(oauth_token, oauth_token_secret, method, url, extra_params) {
    var oauthParameters = {
        "oauth_timestamp": this._getTimestamp(),
        "oauth_nonce": this._getNonce(this._nonceSize),
        "oauth_version": this._version,
        "oauth_signature_method": this._signatureMethod,
        "oauth_consumer_key": this._consumerKey
    };
    if (oauth_token) {
        oauthParameters["oauth_token"] = oauth_token;
    }
    var sig;
    if (this._isEcho) {
        sig = this._getSignature("GET", this._verifyCredentials, this._normaliseRequestParams(oauthParameters), oauth_token_secret);
    } else {
        if (extra_params) {
            for(var key in extra_params){
                if (extra_params.hasOwnProperty(key)) oauthParameters[key] = extra_params[key];
            }
        }
        var parsedUrl = URL.parse(url, false);
        if (parsedUrl.query) {
            var key2;
            var extraParameters = querystring.parse(parsedUrl.query);
            for(var key in extraParameters){
                var value = extraParameters[key];
                if (typeof value == "object") {
                    // TODO: This probably should be recursive
                    for(key2 in value){
                        oauthParameters[key + "[" + key2 + "]"] = value[key2];
                    }
                } else {
                    oauthParameters[key] = value;
                }
            }
        }
        sig = this._getSignature(method, url, this._normaliseRequestParams(oauthParameters), oauth_token_secret);
    }
    var orderedParameters = this._sortRequestParams(this._makeArrayOfArgumentsHash(oauthParameters));
    orderedParameters[orderedParameters.length] = [
        "oauth_signature",
        sig
    ];
    return orderedParameters;
};
exports.OAuth.prototype._performSecureRequest = function(oauth_token, oauth_token_secret, method, url, extra_params, post_body, post_content_type, callback) {
    var orderedParameters = this._prepareParameters(oauth_token, oauth_token_secret, method, url, extra_params);
    if (!post_content_type) {
        post_content_type = "application/x-www-form-urlencoded";
    }
    var parsedUrl = URL.parse(url, false);
    if (parsedUrl.protocol == "http:" && !parsedUrl.port) parsedUrl.port = 80;
    if (parsedUrl.protocol == "https:" && !parsedUrl.port) parsedUrl.port = 443;
    var headers = {};
    var authorization = this._buildAuthorizationHeaders(orderedParameters);
    if (this._isEcho) {
        headers["X-Verify-Credentials-Authorization"] = authorization;
    } else {
        headers["Authorization"] = authorization;
    }
    headers["Host"] = parsedUrl.host;
    for(var key in this._headers){
        if (this._headers.hasOwnProperty(key)) {
            headers[key] = this._headers[key];
        }
    }
    // Filter out any passed extra_params that are really to do with OAuth
    for(var key in extra_params){
        if (this._isParameterNameAnOAuthParameter(key)) {
            delete extra_params[key];
        }
    }
    if ((method == "POST" || method == "PUT") && post_body == null && extra_params != null) {
        // Fix the mismatch between the output of querystring.stringify() and this._encodeData()
        post_body = querystring.stringify(extra_params).replace(/\!/g, "%21").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
    }
    if (post_body) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(post_body)) {
            headers["Content-length"] = post_body.length;
        } else {
            headers["Content-length"] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].byteLength(post_body);
        }
    } else {
        headers["Content-length"] = 0;
    }
    headers["Content-Type"] = post_content_type;
    var path;
    if (!parsedUrl.pathname || parsedUrl.pathname == "") parsedUrl.pathname = "/";
    if (parsedUrl.query) path = parsedUrl.pathname + "?" + parsedUrl.query;
    else path = parsedUrl.pathname;
    var request;
    if (parsedUrl.protocol == "https:") {
        request = this._createClient(parsedUrl.port, parsedUrl.hostname, method, path, headers, true);
    } else {
        request = this._createClient(parsedUrl.port, parsedUrl.hostname, method, path, headers);
    }
    var clientOptions = this._clientOptions;
    if (callback) {
        var data = "";
        var self = this;
        // Some hosts *cough* google appear to close the connection early / send no content-length header
        // allow this behaviour.
        var allowEarlyClose = OAuthUtils.isAnEarlyCloseHost(parsedUrl.hostname);
        var callbackCalled = false;
        var passBackControl = function(response) {
            if (!callbackCalled) {
                callbackCalled = true;
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    callback(null, data, response);
                } else {
                    // Follow 301 or 302 redirects with Location HTTP header
                    if ((response.statusCode == 301 || response.statusCode == 302) && clientOptions.followRedirects && response.headers && response.headers.location) {
                        self._performSecureRequest(oauth_token, oauth_token_secret, method, response.headers.location, extra_params, post_body, post_content_type, callback);
                    } else {
                        callback({
                            statusCode: response.statusCode,
                            data: data
                        }, data, response);
                    }
                }
            }
        };
        request.on('response', function(response) {
            response.setEncoding('utf8');
            response.on('data', function(chunk) {
                data += chunk;
            });
            response.on('end', function() {
                passBackControl(response);
            });
            response.on('close', function() {
                if (allowEarlyClose) {
                    passBackControl(response);
                }
            });
        });
        request.on("error", function(err) {
            if (!callbackCalled) {
                callbackCalled = true;
                callback(err);
            }
        });
        if ((method == "POST" || method == "PUT") && post_body != null && post_body != "") {
            request.write(post_body);
        }
        request.end();
    } else {
        if ((method == "POST" || method == "PUT") && post_body != null && post_body != "") {
            request.write(post_body);
        }
        return request;
    }
    return;
};
exports.OAuth.prototype.setClientOptions = function(options) {
    var key, mergedOptions = {}, hasOwnProperty = Object.prototype.hasOwnProperty;
    for(key in this._defaultClientOptions){
        if (!hasOwnProperty.call(options, key)) {
            mergedOptions[key] = this._defaultClientOptions[key];
        } else {
            mergedOptions[key] = options[key];
        }
    }
    this._clientOptions = mergedOptions;
};
exports.OAuth.prototype.getOAuthAccessToken = function(oauth_token, oauth_token_secret, oauth_verifier, callback) {
    var extraParams = {};
    if (typeof oauth_verifier == "function") {
        callback = oauth_verifier;
    } else {
        extraParams.oauth_verifier = oauth_verifier;
    }
    this._performSecureRequest(oauth_token, oauth_token_secret, this._clientOptions.accessTokenHttpMethod, this._accessUrl, extraParams, null, null, function(error, data, response) {
        if (error) callback(error);
        else {
            var results = querystring.parse(data);
            var oauth_access_token = results["oauth_token"];
            delete results["oauth_token"];
            var oauth_access_token_secret = results["oauth_token_secret"];
            delete results["oauth_token_secret"];
            callback(null, oauth_access_token, oauth_access_token_secret, results);
        }
    });
};
// Deprecated
exports.OAuth.prototype.getProtectedResource = function(url, method, oauth_token, oauth_token_secret, callback) {
    this._performSecureRequest(oauth_token, oauth_token_secret, method, url, null, "", null, callback);
};
exports.OAuth.prototype.delete = function(url, oauth_token, oauth_token_secret, callback) {
    return this._performSecureRequest(oauth_token, oauth_token_secret, "DELETE", url, null, "", null, callback);
};
exports.OAuth.prototype.get = function(url, oauth_token, oauth_token_secret, callback) {
    return this._performSecureRequest(oauth_token, oauth_token_secret, "GET", url, null, "", null, callback);
};
exports.OAuth.prototype._putOrPost = function(method, url, oauth_token, oauth_token_secret, post_body, post_content_type, callback) {
    var extra_params = null;
    if (typeof post_content_type == "function") {
        callback = post_content_type;
        post_content_type = null;
    }
    if (typeof post_body != "string" && !__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(post_body)) {
        post_content_type = "application/x-www-form-urlencoded";
        extra_params = post_body;
        post_body = null;
    }
    return this._performSecureRequest(oauth_token, oauth_token_secret, method, url, extra_params, post_body, post_content_type, callback);
};
exports.OAuth.prototype.put = function(url, oauth_token, oauth_token_secret, post_body, post_content_type, callback) {
    return this._putOrPost("PUT", url, oauth_token, oauth_token_secret, post_body, post_content_type, callback);
};
exports.OAuth.prototype.post = function(url, oauth_token, oauth_token_secret, post_body, post_content_type, callback) {
    return this._putOrPost("POST", url, oauth_token, oauth_token_secret, post_body, post_content_type, callback);
};
/**
 * Gets a request token from the OAuth provider and passes that information back
 * to the calling code.
 *
 * The callback should expect a function of the following form:
 *
 * function(err, token, token_secret, parsedQueryString) {}
 *
 * This method has optional parameters so can be called in the following 2 ways:
 *
 * 1) Primary use case: Does a basic request with no extra parameters
 *  getOAuthRequestToken( callbackFunction )
 *
 * 2) As above but allows for provision of extra parameters to be sent as part of the query to the server.
 *  getOAuthRequestToken( extraParams, callbackFunction )
 *
 * N.B. This method will HTTP POST verbs by default, if you wish to override this behaviour you will
 * need to provide a requestTokenHttpMethod option when creating the client.
 *
 **/ exports.OAuth.prototype.getOAuthRequestToken = function(extraParams, callback) {
    if (typeof extraParams == "function") {
        callback = extraParams;
        extraParams = {};
    }
    // Callbacks are 1.0A related
    if (this._authorize_callback) {
        extraParams["oauth_callback"] = this._authorize_callback;
    }
    this._performSecureRequest(null, null, this._clientOptions.requestTokenHttpMethod, this._requestUrl, extraParams, null, null, function(error, data, response) {
        if (error) callback(error);
        else {
            var results = querystring.parse(data);
            var oauth_token = results["oauth_token"];
            var oauth_token_secret = results["oauth_token_secret"];
            delete results["oauth_token"];
            delete results["oauth_token_secret"];
            callback(null, oauth_token, oauth_token_secret, results);
        }
    });
};
exports.OAuth.prototype.signUrl = function(url, oauth_token, oauth_token_secret, method) {
    if (method === undefined) {
        var method = "GET";
    }
    var orderedParameters = this._prepareParameters(oauth_token, oauth_token_secret, method, url, {});
    var parsedUrl = URL.parse(url, false);
    var query = "";
    for(var i = 0; i < orderedParameters.length; i++){
        query += orderedParameters[i][0] + "=" + this._encodeData(orderedParameters[i][1]) + "&";
    }
    query = query.substring(0, query.length - 1);
    return parsedUrl.protocol + "//" + parsedUrl.host + parsedUrl.pathname + "?" + query;
};
exports.OAuth.prototype.authHeader = function(url, oauth_token, oauth_token_secret, method) {
    if (method === undefined) {
        var method = "GET";
    }
    var orderedParameters = this._prepareParameters(oauth_token, oauth_token_secret, method, url, {});
    return this._buildAuthorizationHeaders(orderedParameters);
};
}),
"[project]/frontend/node_modules/oauth/lib/oauth2.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var querystring = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/querystring-es3/index.js [app-client] (ecmascript)"), crypto = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)"), https = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/https-browserify/index.js [app-client] (ecmascript)"), http = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/stream-http/index.js [app-client] (ecmascript)"), URL = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)"), OAuthUtils = __turbopack_context__.r("[project]/frontend/node_modules/oauth/lib/_utils.js [app-client] (ecmascript)");
exports.OAuth2 = function(clientId, clientSecret, baseSite, authorizePath, accessTokenPath, customHeaders) {
    this._clientId = clientId;
    this._clientSecret = clientSecret;
    this._baseSite = baseSite;
    this._authorizeUrl = authorizePath || "/oauth/authorize";
    this._accessTokenUrl = accessTokenPath || "/oauth/access_token";
    this._accessTokenName = "access_token";
    this._authMethod = "Bearer";
    this._customHeaders = customHeaders || {};
    this._useAuthorizationHeaderForGET = false;
    //our agent
    this._agent = undefined;
};
// Allows you to set an agent to use instead of the default HTTP or
// HTTPS agents. Useful when dealing with your own certificates.
exports.OAuth2.prototype.setAgent = function(agent) {
    this._agent = agent;
};
// This 'hack' method is required for sites that don't use
// 'access_token' as the name of the access token (for requests).
// ( http://tools.ietf.org/html/draft-ietf-oauth-v2-16#section-7 )
// it isn't clear what the correct value should be atm, so allowing
// for specific (temporary?) override for now.
exports.OAuth2.prototype.setAccessTokenName = function(name) {
    this._accessTokenName = name;
};
// Sets the authorization method for Authorization header.
// e.g. Authorization: Bearer <token>  # "Bearer" is the authorization method.
exports.OAuth2.prototype.setAuthMethod = function(authMethod) {
    this._authMethod = authMethod;
};
// If you use the OAuth2 exposed 'get' method (and don't construct your own _request call )
// this will specify whether to use an 'Authorize' header instead of passing the access_token as a query parameter
exports.OAuth2.prototype.useAuthorizationHeaderforGET = function(useIt) {
    this._useAuthorizationHeaderForGET = useIt;
};
exports.OAuth2.prototype._getAccessTokenUrl = function() {
    return this._baseSite + this._accessTokenUrl; /* + "?" + querystring.stringify(params); */ 
};
// Build the authorization header. In particular, build the part after the colon.
// e.g. Authorization: Bearer <token>  # Build "Bearer <token>"
exports.OAuth2.prototype.buildAuthHeader = function(token) {
    return this._authMethod + ' ' + token;
};
exports.OAuth2.prototype._chooseHttpLibrary = function(parsedUrl) {
    var http_library = https;
    // As this is OAUth2, we *assume* https unless told explicitly otherwise.
    if (parsedUrl.protocol != "https:") {
        http_library = http;
    }
    return http_library;
};
exports.OAuth2.prototype._request = function(method, url, headers, post_body, access_token, callback) {
    var parsedUrl = URL.parse(url, true);
    if (parsedUrl.protocol == "https:" && !parsedUrl.port) {
        parsedUrl.port = 443;
    }
    var http_library = this._chooseHttpLibrary(parsedUrl);
    var realHeaders = {};
    for(var key in this._customHeaders){
        realHeaders[key] = this._customHeaders[key];
    }
    if (headers) {
        for(var key in headers){
            realHeaders[key] = headers[key];
        }
    }
    realHeaders['Host'] = parsedUrl.host;
    if (!realHeaders['User-Agent']) {
        realHeaders['User-Agent'] = 'Node-oauth';
    }
    if (post_body) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(post_body)) {
            realHeaders["Content-Length"] = post_body.length;
        } else {
            realHeaders["Content-Length"] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].byteLength(post_body);
        }
    } else {
        realHeaders["Content-length"] = 0;
    }
    if (access_token && !('Authorization' in realHeaders)) {
        if (!parsedUrl.query) parsedUrl.query = {};
        parsedUrl.query[this._accessTokenName] = access_token;
    }
    var queryStr = querystring.stringify(parsedUrl.query);
    if (queryStr) queryStr = "?" + queryStr;
    var options = {
        host: parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.pathname + queryStr,
        method: method,
        headers: realHeaders
    };
    this._executeRequest(http_library, options, post_body, callback);
};
exports.OAuth2.prototype._executeRequest = function(http_library, options, post_body, callback) {
    // Some hosts *cough* google appear to close the connection early / send no content-length header
    // allow this behaviour.
    var allowEarlyClose = OAuthUtils.isAnEarlyCloseHost(options.host);
    var callbackCalled = false;
    function passBackControl(response, result) {
        if (!callbackCalled) {
            callbackCalled = true;
            if (!(response.statusCode >= 200 && response.statusCode <= 299) && response.statusCode != 301 && response.statusCode != 302) {
                callback({
                    statusCode: response.statusCode,
                    data: result
                });
            } else {
                callback(null, result, response);
            }
        }
    }
    var result = "";
    //set the agent on the request options
    if (this._agent) {
        options.agent = this._agent;
    }
    var request = http_library.request(options);
    request.on('response', function(response) {
        response.on("data", function(chunk) {
            result += chunk;
        });
        response.on("close", function(err) {
            if (allowEarlyClose) {
                passBackControl(response, result);
            }
        });
        response.addListener("end", function() {
            passBackControl(response, result);
        });
    });
    request.on('error', function(e) {
        callbackCalled = true;
        callback(e);
    });
    if ((options.method == 'POST' || options.method == 'PUT') && post_body) {
        request.write(post_body);
    }
    request.end();
};
exports.OAuth2.prototype.getAuthorizeUrl = function(params) {
    var params = params || {};
    params['client_id'] = this._clientId;
    return this._baseSite + this._authorizeUrl + "?" + querystring.stringify(params);
};
exports.OAuth2.prototype.getOAuthAccessToken = function(code, params, callback) {
    var params = params || {};
    params['client_id'] = this._clientId;
    params['client_secret'] = this._clientSecret;
    var codeParam = params.grant_type === 'refresh_token' ? 'refresh_token' : 'code';
    params[codeParam] = code;
    var post_data = querystring.stringify(params);
    var post_headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    this._request("POST", this._getAccessTokenUrl(), post_headers, post_data, null, function(error, data, response) {
        if (error) callback(error);
        else {
            var results;
            try {
                // As of http://tools.ietf.org/html/draft-ietf-oauth-v2-07
                // responses should be in JSON
                results = JSON.parse(data);
            } catch (e) {
                // .... However both Facebook + Github currently use rev05 of the spec
                // and neither seem to specify a content-type correctly in their response headers :(
                // clients of these services will suffer a *minor* performance cost of the exception
                // being thrown
                results = querystring.parse(data);
            }
            var access_token = results["access_token"];
            var refresh_token = results["refresh_token"];
            delete results["refresh_token"];
            callback(null, access_token, refresh_token, results); // callback results =-=
        }
    });
};
// Deprecated
exports.OAuth2.prototype.getProtectedResource = function(url, access_token, callback) {
    this._request("GET", url, {}, "", access_token, callback);
};
exports.OAuth2.prototype.get = function(url, access_token, callback) {
    if (this._useAuthorizationHeaderForGET) {
        var headers = {
            'Authorization': this.buildAuthHeader(access_token)
        };
        access_token = null;
    } else {
        headers = {};
    }
    this._request("GET", url, headers, "", access_token, callback);
};
}),
"[project]/frontend/node_modules/oauth/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports.OAuth = __turbopack_context__.r("[project]/frontend/node_modules/oauth/lib/oauth.js [app-client] (ecmascript)").OAuth;
exports.OAuthEcho = __turbopack_context__.r("[project]/frontend/node_modules/oauth/lib/oauth.js [app-client] (ecmascript)").OAuthEcho;
exports.OAuth2 = __turbopack_context__.r("[project]/frontend/node_modules/oauth/lib/oauth2.js [app-client] (ecmascript)").OAuth2;
}),
"[project]/frontend/node_modules/@panva/hkdf/dist/web/runtime/hkdf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const getGlobal = ()=>{
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    throw new Error('unable to locate global object');
};
const __TURBOPACK__default__export__ = async (digest, ikm, salt, info, keylen)=>{
    const { crypto: { subtle } } = getGlobal();
    return new Uint8Array(await subtle.deriveBits({
        name: 'HKDF',
        hash: `SHA-${digest.substr(3)}`,
        salt,
        info
    }, await subtle.importKey('raw', ikm, 'HKDF', false, [
        'deriveBits'
    ]), keylen << 3));
};
}),
"[project]/frontend/node_modules/@panva/hkdf/dist/web/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>hkdf,
    "hkdf",
    ()=>hkdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$panva$2f$hkdf$2f$dist$2f$web$2f$runtime$2f$hkdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@panva/hkdf/dist/web/runtime/hkdf.js [app-client] (ecmascript)");
;
function normalizeDigest(digest) {
    switch(digest){
        case 'sha256':
        case 'sha384':
        case 'sha512':
        case 'sha1':
            return digest;
        default:
            throw new TypeError('unsupported "digest" value');
    }
}
function normalizeUint8Array(input, label) {
    if (typeof input === 'string') return new TextEncoder().encode(input);
    if (!(input instanceof Uint8Array)) throw new TypeError(`"${label}"" must be an instance of Uint8Array or a string`);
    return input;
}
function normalizeIkm(input) {
    const ikm = normalizeUint8Array(input, 'ikm');
    if (!ikm.byteLength) throw new TypeError(`"ikm" must be at least one byte in length`);
    return ikm;
}
function normalizeInfo(input) {
    const info = normalizeUint8Array(input, 'info');
    if (info.byteLength > 1024) {
        throw TypeError('"info" must not contain more than 1024 bytes');
    }
    return info;
}
function normalizeKeylen(input, digest) {
    if (typeof input !== 'number' || !Number.isInteger(input) || input < 1) {
        throw new TypeError('"keylen" must be a positive integer');
    }
    const hashlen = parseInt(digest.substr(3), 10) >> 3 || 20;
    if (input > 255 * hashlen) {
        throw new TypeError('"keylen" too large');
    }
    return input;
}
async function hkdf(digest, ikm, salt, info, keylen) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$panva$2f$hkdf$2f$dist$2f$web$2f$runtime$2f$hkdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(normalizeDigest(digest), normalizeIkm(ikm), normalizeUint8Array(salt, 'salt'), normalizeInfo(info), normalizeKeylen(keylen, digest));
}
;
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/rng.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
        // find the complete implementation of crypto (msCrypto) on IE11.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
        if (!getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
    }
    return getRandomValues(rnds8);
}
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/regex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/validate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/regex.js [app-client] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/stringify.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/validate.js [app-client] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var byteToHex = [];
for(var i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).substr(1));
}
function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/v1.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/rng.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/stringify.js [app-client] (ecmascript)"); // **`v1()` - Generate time-based UUID**
;
;
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var _nodeId;
var _clockseq; // Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || new Array(16);
    options = options || {};
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        var seedBytes = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        if (node == null) {
            // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
            node = _nodeId = [
                seedBytes[0] | 0x01,
                seedBytes[1],
                seedBytes[2],
                seedBytes[3],
                seedBytes[4],
                seedBytes[5]
            ];
        }
        if (clockseq == null) {
            // Per 4.2.2, randomize (14 bit) clockseq
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
        }
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) {
        clockseq = clockseq + 1 & 0x3fff;
    } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0;
    } // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(var n = 0; n < 6; ++n){
        b[i + n] = node[n];
    }
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(b);
}
const __TURBOPACK__default__export__ = v1;
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/parse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/validate.js [app-client] (ecmascript)");
;
function parse(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    var v;
    var arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
const __TURBOPACK__default__export__ = parse;
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/v35.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DNS",
    ()=>DNS,
    "URL",
    ()=>URL,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/parse.js [app-client] (ecmascript)");
;
;
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    var bytes = [];
    for(var i = 0; i < str.length; ++i){
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
}
var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function __TURBOPACK__default__export__(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        if (typeof value === 'string') {
            value = stringToBytes(value);
        }
        if (typeof namespace === 'string') {
            namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(namespace);
        }
        if (namespace.length !== 16) {
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
        } // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        var bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(var i = 0; i < 16; ++i){
                buf[offset + i] = bytes[i];
            }
            return buf;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/md5.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */ function md5(bytes) {
    if (typeof bytes === 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = new Uint8Array(msg.length);
        for(var i = 0; i < msg.length; ++i){
            bytes[i] = msg.charCodeAt(i);
        }
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */ function md5ToHexEncodedArray(input) {
    var output = [];
    var length32 = input.length * 32;
    var hexTab = '0123456789abcdef';
    for(var i = 0; i < length32; i += 8){
        var x = input[i >> 5] >>> i % 32 & 0xff;
        var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
    }
    return output;
}
/**
 * Calculate output length with padding and bit length
 */ function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */ function wordsToMd5(x, len) {
    /* append padding */ x[len >> 5] |= 0x80 << len % 32;
    x[getOutputLength(len) - 1] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for(var i = 0; i < x.length; i += 16){
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return [
        a,
        b,
        c,
        d
    ];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function bytesToWords(input) {
    if (input.length === 0) {
        return [];
    }
    var length8 = input.length * 8;
    var output = new Uint32Array(getOutputLength(length8));
    for(var i = 0; i < length8; i += 8){
        output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
    }
    return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */ function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
const __TURBOPACK__default__export__ = md5;
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/v3.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v35$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/v35.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$md5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/md5.js [app-client] (ecmascript)");
;
;
var v3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v35$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('v3', 0x30, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$md5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v3;
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/rng.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/stringify.js [app-client] (ecmascript)");
;
;
function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(var i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/sha1.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
    switch(s){
        case 0:
            return x & y ^ ~x & z;
        case 1:
            return x ^ y ^ z;
        case 2:
            return x & y ^ x & z ^ y & z;
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return x << n | x >>> 32 - n;
}
function sha1(bytes) {
    var K = [
        0x5a827999,
        0x6ed9eba1,
        0x8f1bbcdc,
        0xca62c1d6
    ];
    var H = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    if (typeof bytes === 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = [];
        for(var i = 0; i < msg.length; ++i){
            bytes.push(msg.charCodeAt(i));
        }
    } else if (!Array.isArray(bytes)) {
        // Convert Array-like to Array
        bytes = Array.prototype.slice.call(bytes);
    }
    bytes.push(0x80);
    var l = bytes.length / 4 + 2;
    var N = Math.ceil(l / 16);
    var M = new Array(N);
    for(var _i = 0; _i < N; ++_i){
        var arr = new Uint32Array(16);
        for(var j = 0; j < 16; ++j){
            arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
        }
        M[_i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
    for(var _i2 = 0; _i2 < N; ++_i2){
        var W = new Uint32Array(80);
        for(var t = 0; t < 16; ++t){
            W[t] = M[_i2][t];
        }
        for(var _t = 16; _t < 80; ++_t){
            W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
        }
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];
        for(var _t2 = 0; _t2 < 80; ++_t2){
            var s = Math.floor(_t2 / 20);
            var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
    }
    return [
        H[0] >> 24 & 0xff,
        H[0] >> 16 & 0xff,
        H[0] >> 8 & 0xff,
        H[0] & 0xff,
        H[1] >> 24 & 0xff,
        H[1] >> 16 & 0xff,
        H[1] >> 8 & 0xff,
        H[1] & 0xff,
        H[2] >> 24 & 0xff,
        H[2] >> 16 & 0xff,
        H[2] >> 8 & 0xff,
        H[2] & 0xff,
        H[3] >> 24 & 0xff,
        H[3] >> 16 & 0xff,
        H[3] >> 8 & 0xff,
        H[3] & 0xff,
        H[4] >> 24 & 0xff,
        H[4] >> 16 & 0xff,
        H[4] >> 8 & 0xff,
        H[4] & 0xff
    ];
}
const __TURBOPACK__default__export__ = sha1;
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/v5.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v35$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/v35.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$sha1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/sha1.js [app-client] (ecmascript)");
;
;
var v5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v35$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('v5', 0x50, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$sha1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v5;
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/nil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = '00000000-0000-0000-0000-000000000000';
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/validate.js [app-client] (ecmascript)");
;
function version(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    return parseInt(uuid.substr(14, 1), 16);
}
const __TURBOPACK__default__export__ = version;
}),
"[project]/frontend/node_modules/uuid/dist/esm-browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NIL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$nil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "stringify",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "v1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "v3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "v5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "validate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/v1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/v3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/v5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$nil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/nil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/validate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-browser/parse.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/preact/dist/preact.module.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Component",
    ()=>x,
    "Fragment",
    ()=>k,
    "cloneElement",
    ()=>Q,
    "createContext",
    ()=>R,
    "createElement",
    ()=>_,
    "createRef",
    ()=>b,
    "h",
    ()=>_,
    "hydrate",
    ()=>K,
    "isValidElement",
    ()=>t,
    "options",
    ()=>l,
    "render",
    ()=>J,
    "toChildArray",
    ()=>L
]);
var n, l, u, t, i, r, o, e, f, c, s, a, h, p = {}, v = [], y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, d = Array.isArray;
function w(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function g(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
}
function _(l, u, t) {
    var i, r, o, e = {};
    for(o in u)"key" == o ? i = u[o] : "ref" == o ? r = u[o] : e[o] = u[o];
    if (arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for(o in l.defaultProps)void 0 === e[o] && (e[o] = l.defaultProps[o]);
    return m(l, e, i, r, null);
}
function m(n, t, i, r, o) {
    var e = {
        type: n,
        props: t,
        key: i,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: null == o ? ++u : o,
        __i: -1,
        __u: 0
    };
    return null == o && null != l.vnode && l.vnode(e), e;
}
function b() {
    return {
        current: null
    };
}
function k(n) {
    return n.children;
}
function x(n, l) {
    this.props = n, this.context = l;
}
function S(n, l) {
    if (null == l) return n.__ ? S(n.__, n.__i + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? S(n) : null;
}
function C(n) {
    if (n.__P && n.__d) {
        var u = n.__v, t = u.__e, i = [], r = [], o = w({}, u);
        o.__v = u.__v + 1, l.vnode && l.vnode(o), z(n.__P, o, u, n.__n, n.__P.namespaceURI, 32 & u.__u ? [
            t
        ] : null, i, null == t ? S(u) : t, !!(32 & u.__u), r), o.__v = u.__v, o.__.__k[o.__i] = o, V(i, o, r), u.__e = u.__ = null, o.__e != t && M(o);
    }
}
function M(n) {
    if (null != (n = n.__) && null != n.__c) return n.__e = n.__c.base = null, n.__k.some(function(l) {
        if (null != l && null != l.__e) return n.__e = n.__c.base = l.__e;
    }), M(n);
}
function $(n) {
    (!n.__d && (n.__d = !0) && i.push(n) && !I.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(I);
}
function I() {
    for(var n, l = 1; i.length;)i.length > l && i.sort(e), n = i.shift(), l = i.length, C(n);
    I.__r = 0;
}
function P(n, l, u, t, i, r, o, e, f, c, s) {
    var a, h, y, d, w, g, _, m = t && t.__k || v, b = l.length;
    for(f = A(u, l, m, f, b), a = 0; a < b; a++)null != (y = u.__k[a]) && (h = -1 != y.__i && m[y.__i] || p, y.__i = a, g = z(n, y, h, i, r, o, e, f, c, s), d = y.__e, y.ref && h.ref != y.ref && (h.ref && D(h.ref, null, y), s.push(y.ref, y.__c || d, y)), null == w && null != d && (w = d), (_ = !!(4 & y.__u)) || h.__k === y.__k ? f = H(y, f, n, _) : "function" == typeof y.type && void 0 !== g ? f = g : d && (f = d.nextSibling), y.__u &= -7);
    return u.__e = w, f;
}
function A(n, l, u, t, i) {
    var r, o, e, f, c, s = u.length, a = s, h = 0;
    for(n.__k = new Array(i), r = 0; r < i; r++)null != (o = l[r]) && "boolean" != typeof o && "function" != typeof o ? ("string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? o = n.__k[r] = m(null, o, null, null, null) : d(o) ? o = n.__k[r] = m(k, {
        children: o
    }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? o = n.__k[r] = m(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : n.__k[r] = o, f = r + h, o.__ = n, o.__b = n.__b + 1, e = null, -1 != (c = o.__i = T(o, u, f, a)) && (a--, (e = u[c]) && (e.__u |= 2)), null == e || null == e.__v ? (-1 == c && (i > s ? h-- : i < s && h++), "function" != typeof o.type && (o.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, o.__u |= 4))) : n.__k[r] = null;
    if (a) for(r = 0; r < s; r++)null != (e = u[r]) && 0 == (2 & e.__u) && (e.__e == t && (t = S(e)), E(e, e));
    return t;
}
function H(n, l, u, t) {
    var i, r;
    if ("function" == typeof n.type) {
        for(i = n.__k, r = 0; i && r < i.length; r++)i[r] && (i[r].__ = n, l = H(i[r], l, u, t));
        return l;
    }
    n.__e != l && (t && (l && n.type && !l.parentNode && (l = S(n)), u.insertBefore(n.__e, l || null)), l = n.__e);
    do {
        l = l && l.nextSibling;
    }while (null != l && 8 == l.nodeType)
    return l;
}
function L(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (d(n) ? n.some(function(n) {
        L(n, l);
    }) : l.push(n)), l;
}
function T(n, l, u, t) {
    var i, r, o, e = n.key, f = n.type, c = l[u], s = null != c && 0 == (2 & c.__u);
    if (null === c && null == e || s && e == c.key && f == c.type) return u;
    if (t > (s ? 1 : 0)) {
        for(i = u - 1, r = u + 1; i >= 0 || r < l.length;)if (null != (c = l[o = i >= 0 ? i-- : r++]) && 0 == (2 & c.__u) && e == c.key && f == c.type) return o;
    }
    return -1;
}
function j(n, l, u) {
    "-" == l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || y.test(l) ? u : u + "px";
}
function F(n, l, u, t, i) {
    var r, o;
    n: if ("style" == l) if ("string" == typeof u) n.style.cssText = u;
    else {
        if ("string" == typeof t && (n.style.cssText = t = ""), t) for(l in t)u && l in u || j(n.style, l, "");
        if (u) for(l in u)t && u[l] == t[l] || j(n.style, l, u[l]);
    }
    else if ("o" == l[0] && "n" == l[1]) r = l != (l = l.replace(f, "$1")), o = l.toLowerCase(), l = o in n || "onFocusOut" == l || "onFocusIn" == l ? o.slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? t ? u.u = t.u : (u.u = c, n.addEventListener(l, r ? a : s, r)) : n.removeEventListener(l, r ? a : s, r);
    else {
        if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
    }
}
function O(n) {
    return function(u) {
        if (this.l) {
            var t = this.l[u.type + n];
            if (null == u.t) u.t = c++;
            else if (u.t < t.u) return;
            return t(l.event ? l.event(u) : u);
        }
    };
}
function z(n, u, t, i, r, o, e, f, c, s) {
    var a, h, p, y, _, m, b, S, C, M, $, I, A, H, L, T = u.type;
    if (void 0 !== u.constructor) return null;
    128 & t.__u && (c = !!(32 & t.__u), o = [
        f = u.__e = t.__e
    ]), (a = l.__b) && a(u);
    n: if ("function" == typeof T) try {
        if (S = u.props, C = "prototype" in T && T.prototype.render, M = (a = T.contextType) && i[a.__c], $ = a ? M ? M.props.value : a.__ : i, t.__c ? b = (h = u.__c = t.__c).__ = h.__E : (C ? u.__c = h = new T(S, $) : (u.__c = h = new x(S, $), h.constructor = T, h.render = G), M && M.sub(h), h.state || (h.state = {}), h.__n = i, p = h.__d = !0, h.__h = [], h._sb = []), C && null == h.__s && (h.__s = h.state), C && null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = w({}, h.__s)), w(h.__s, T.getDerivedStateFromProps(S, h.__s))), y = h.props, _ = h.state, h.__v = u, p) C && null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), C && null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
            if (C && null == T.getDerivedStateFromProps && S !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(S, $), u.__v == t.__v || !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(S, h.__s, $)) {
                u.__v != t.__v && (h.props = S, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function(n) {
                    n && (n.__ = u);
                }), v.push.apply(h.__h, h._sb), h._sb = [], h.__h.length && e.push(h);
                break n;
            }
            null != h.componentWillUpdate && h.componentWillUpdate(S, h.__s, $), C && null != h.componentDidUpdate && h.__h.push(function() {
                h.componentDidUpdate(y, _, m);
            });
        }
        if (h.context = $, h.props = S, h.__P = n, h.__e = !1, I = l.__r, A = 0, C) h.state = h.__s, h.__d = !1, I && I(u), a = h.render(h.props, h.state, h.context), v.push.apply(h.__h, h._sb), h._sb = [];
        else do {
            h.__d = !1, I && I(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
        }while (h.__d && ++A < 25)
        h.state = h.__s, null != h.getChildContext && (i = w(w({}, i), h.getChildContext())), C && !p && null != h.getSnapshotBeforeUpdate && (m = h.getSnapshotBeforeUpdate(y, _)), H = null != a && a.type === k && null == a.key ? q(a.props.children) : a, f = P(n, d(H) ? H : [
            H
        ], u, t, i, r, o, e, f, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && e.push(h), b && (h.__E = h.__ = null);
    } catch (n) {
        if (u.__v = null, c || null != o) if (n.then) {
            for(u.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;)f = f.nextSibling;
            o[o.indexOf(f)] = null, u.__e = f;
        } else {
            for(L = o.length; L--;)g(o[L]);
            N(u);
        }
        else u.__e = t.__e, u.__k = t.__k, n.then || N(u);
        l.__e(n, u, t);
    }
    else null == o && u.__v == t.__v ? (u.__k = t.__k, u.__e = t.__e) : f = u.__e = B(t.__e, u, t, i, r, o, e, c, s);
    return (a = l.diffed) && a(u), 128 & u.__u ? void 0 : f;
}
function N(n) {
    n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(N));
}
function V(n, u, t) {
    for(var i = 0; i < t.length; i++)D(t[i], t[++i], t[++i]);
    l.__c && l.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            l.__e(n, u.__v);
        }
    });
}
function q(n) {
    return "object" != typeof n || null == n || n.__b > 0 ? n : d(n) ? n.map(q) : w({}, n);
}
function B(u, t, i, r, o, e, f, c, s) {
    var a, h, v, y, w, _, m, b = i.props || p, k = t.props, x = t.type;
    if ("svg" == x ? o = "http://www.w3.org/2000/svg" : "math" == x ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != e) {
        for(a = 0; a < e.length; a++)if ((w = e[a]) && "setAttribute" in w == !!x && (x ? w.localName == x : 3 == w.nodeType)) {
            u = w, e[a] = null;
            break;
        }
    }
    if (null == u) {
        if (null == x) return document.createTextNode(k);
        u = document.createElementNS(o, x, k.is && k), c && (l.__m && l.__m(t, e), c = !1), e = null;
    }
    if (null == x) b === k || c && u.data == k || (u.data = k);
    else {
        if (e = e && n.call(u.childNodes), !c && null != e) for(b = {}, a = 0; a < u.attributes.length; a++)b[(w = u.attributes[a]).name] = w.value;
        for(a in b)w = b[a], "dangerouslySetInnerHTML" == a ? v = w : "children" == a || a in k || "value" == a && "defaultValue" in k || "checked" == a && "defaultChecked" in k || F(u, a, null, w, o);
        for(a in k)w = k[a], "children" == a ? y = w : "dangerouslySetInnerHTML" == a ? h = w : "value" == a ? _ = w : "checked" == a ? m = w : c && "function" != typeof w || b[a] === w || F(u, a, w, b[a], o);
        if (h) c || v && (h.__html == v.__html || h.__html == u.innerHTML) || (u.innerHTML = h.__html), t.__k = [];
        else if (v && (u.innerHTML = ""), P("template" == t.type ? u.content : u, d(y) ? y : [
            y
        ], t, i, r, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : o, e, f, e ? e[0] : i.__k && S(i, 0), c, s), null != e) for(a = e.length; a--;)g(e[a]);
        c || (a = "value", "progress" == x && null == _ ? u.removeAttribute("value") : null != _ && (_ !== u[a] || "progress" == x && !_ || "option" == x && _ != b[a]) && F(u, a, _, b[a], o), a = "checked", null != m && m != u[a] && F(u, a, m, b[a], o));
    }
    return u;
}
function D(n, u, t) {
    try {
        if ("function" == typeof n) {
            var i = "function" == typeof n.__u;
            i && n.__u(), i && null == u || (n.__u = n(u));
        } else n.current = u;
    } catch (n) {
        l.__e(n, t);
    }
}
function E(n, u, t) {
    var i, r;
    if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || D(i, null, u)), null != (i = n.__c)) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (n) {
            l.__e(n, u);
        }
        i.base = i.__P = null;
    }
    if (i = n.__k) for(r = 0; r < i.length; r++)i[r] && E(i[r], u, t || "function" != typeof n.type);
    t || g(n.__e), n.__c = n.__ = n.__e = void 0;
}
function G(n, l, u) {
    return this.constructor(n, u);
}
function J(u, t, i) {
    var r, o, e, f;
    t == document && (t = document.documentElement), l.__ && l.__(u, t), o = (r = "function" == typeof i) ? null : i && i.__k || t.__k, e = [], f = [], z(t, u = (!r && i || t).__k = _(k, null, [
        u
    ]), o || p, p, t.namespaceURI, !r && i ? [
        i
    ] : o ? null : t.firstChild ? n.call(t.childNodes) : null, e, !r && i ? i : o ? o.__e : t.firstChild, r, f), V(e, u, f);
}
function K(n, l) {
    J(n, l, K);
}
function Q(l, u, t) {
    var i, r, o, e, f = w({}, l.props);
    for(o in l.type && l.type.defaultProps && (e = l.type.defaultProps), u)"key" == o ? i = u[o] : "ref" == o ? r = u[o] : f[o] = void 0 === u[o] && null != e ? e[o] : u[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), m(l.type, f, i || l.key, r || l.ref, null);
}
function R(n) {
    function l(n) {
        var u, t;
        return this.getChildContext || (u = new Set, (t = {})[l.__c] = this, this.getChildContext = function() {
            return t;
        }, this.componentWillUnmount = function() {
            u = null;
        }, this.shouldComponentUpdate = function(n) {
            this.props.value != n.value && u.forEach(function(n) {
                n.__e = !0, $(n);
            });
        }, this.sub = function(n) {
            u.add(n);
            var l = n.componentWillUnmount;
            n.componentWillUnmount = function() {
                u && u.delete(n), l && l.call(n);
            };
        }), n.children;
    }
    return l.__c = "__cC" + h++, l.__ = n, l.Provider = l.__l = (l.Consumer = function(n, l) {
        return n.children(l);
    }).contextType = l, l;
}
n = v.slice, l = {
    __e: function(n, l, u, t) {
        for(var i, r, o; l = l.__;)if ((i = l.__c) && !i.__) try {
            if ((r = i.constructor) && null != r.getDerivedStateFromError && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), o = i.__d), o) return i.__E = i;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, u = 0, t = function(n) {
    return null != n && void 0 === n.constructor;
}, x.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s != this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n && (n = n(w({}, u), this.props)), n && w(u, n), null != n && this.__v && (l && this._sb.push(l), $(this));
}, x.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), $(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, I.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = O(!1), a = O(!0), h = 0;
;
 //# sourceMappingURL=preact.module.js.map
}),
"[project]/frontend/node_modules/preact-render-to-string/dist/index.module.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "render",
    ()=>S,
    "renderToStaticMarkup",
    ()=>S,
    "renderToString",
    ()=>S,
    "shallowRender",
    ()=>x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/preact/dist/preact.module.js [app-client] (ecmascript)");
;
var n = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, o = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, i = /[\s\n\\/='"\0<>]/, l = /^xlink:?./, a = /["&<]/;
function s(e) {
    if (!1 === a.test(e += "")) return e;
    for(var t = 0, r = 0, n = "", o = ""; r < e.length; r++){
        switch(e.charCodeAt(r)){
            case 34:
                o = "&quot;";
                break;
            case 38:
                o = "&amp;";
                break;
            case 60:
                o = "&lt;";
                break;
            default:
                continue;
        }
        r !== t && (n += e.slice(t, r)), n += o, t = r + 1;
    }
    return r !== t && (n += e.slice(t, r)), n;
}
var f = function(e, t) {
    return String(e).replace(/(\n+)/g, "$1" + (t || "\t"));
}, u = function(e, t, r) {
    return String(e).length > (t || 40) || !r && -1 !== String(e).indexOf("\n") || -1 !== String(e).indexOf("<");
}, c = {}, _ = /([A-Z])/g;
function p(e) {
    var t = "";
    for(var r in e){
        var o = e[r];
        null != o && "" !== o && (t && (t += " "), t += "-" == r[0] ? r : c[r] || (c[r] = r.replace(_, "-$1").toLowerCase()), t = "number" == typeof o && !1 === n.test(r) ? t + ": " + o + "px;" : t + ": " + o + ";");
    }
    return t || void 0;
}
function d(e, t) {
    return Array.isArray(t) ? t.reduce(d, e) : null != t && !1 !== t && e.push(t), e;
}
function v() {
    this.__d = !0;
}
function h(e, t) {
    return {
        __v: e,
        context: t,
        props: e.props,
        setState: v,
        forceUpdate: v,
        __d: !0,
        __h: []
    };
}
function g(e, t) {
    var r = e.contextType, n = r && t[r.__c];
    return null != r ? n ? n.props.value : r.__ : t;
}
var y = [];
function m(r, n, a, c, _, v) {
    if (null == r || "boolean" == typeof r) return "";
    if ("object" != typeof r) return "function" == typeof r ? "" : s(r);
    var b = a.pretty, x = b && "string" == typeof b ? b : "\t";
    if (Array.isArray(r)) {
        for(var k = "", S = 0; S < r.length; S++)b && S > 0 && (k += "\n"), k += m(r[S], n, a, c, _, v);
        return k;
    }
    if (void 0 !== r.constructor) return "";
    var w, C = r.type, O = r.props, j = !1;
    if ("function" == typeof C) {
        if (j = !0, !a.shallow || !c && !1 !== a.renderRootComponent) {
            if (C === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
                var A = [];
                return d(A, r.props.children), m(A, n, a, !1 !== a.shallowHighOrder, _, v);
            }
            var F, H = r.__c = h(r, n);
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__b && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__b(r);
            var M = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__r;
            if (C.prototype && "function" == typeof C.prototype.render) {
                var L = g(C, n);
                (H = r.__c = new C(O, L)).__v = r, H._dirty = H.__d = !0, H.props = O, null == H.state && (H.state = {}), null == H._nextState && null == H.__s && (H._nextState = H.__s = H.state), H.context = L, C.getDerivedStateFromProps ? H.state = Object.assign({}, H.state, C.getDerivedStateFromProps(H.props, H.state)) : H.componentWillMount && (H.componentWillMount(), H.state = H._nextState !== H.state ? H._nextState : H.__s !== H.state ? H.__s : H.state), M && M(r), F = H.render(H.props, H.state, H.context);
            } else for(var T = g(C, n), E = 0; H.__d && E++ < 25;)H.__d = !1, M && M(r), F = C.call(r.__c, O, T);
            return H.getChildContext && (n = Object.assign({}, n, H.getChildContext())), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].diffed && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].diffed(r), m(F, n, a, !1 !== a.shallowHighOrder, _, v);
        }
        C = (w = C).displayName || w !== Function && w.name || function(e) {
            var t = (Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/) || "")[1];
            if (!t) {
                for(var r = -1, n = y.length; n--;)if (y[n] === e) {
                    r = n;
                    break;
                }
                r < 0 && (r = y.push(e) - 1), t = "UnnamedComponent" + r;
            }
            return t;
        }(w);
    }
    var $, D, N = "<" + C;
    if (O) {
        var P = Object.keys(O);
        a && !0 === a.sortAttributes && P.sort();
        for(var W = 0; W < P.length; W++){
            var I = P[W], R = O[I];
            if ("children" !== I) {
                if (!i.test(I) && (a && a.allAttributes || "key" !== I && "ref" !== I && "__self" !== I && "__source" !== I)) {
                    if ("defaultValue" === I) I = "value";
                    else if ("defaultChecked" === I) I = "checked";
                    else if ("defaultSelected" === I) I = "selected";
                    else if ("className" === I) {
                        if (void 0 !== O.class) continue;
                        I = "class";
                    } else _ && l.test(I) && (I = I.toLowerCase().replace(/^xlink:?/, "xlink:"));
                    if ("htmlFor" === I) {
                        if (O.for) continue;
                        I = "for";
                    }
                    "style" === I && R && "object" == typeof R && (R = p(R)), "a" === I[0] && "r" === I[1] && "boolean" == typeof R && (R = String(R));
                    var U = a.attributeHook && a.attributeHook(I, R, n, a, j);
                    if (U || "" === U) N += U;
                    else if ("dangerouslySetInnerHTML" === I) D = R && R.__html;
                    else if ("textarea" === C && "value" === I) $ = R;
                    else if ((R || 0 === R || "" === R) && "function" != typeof R) {
                        if (!(!0 !== R && "" !== R || (R = I, a && a.xml))) {
                            N = N + " " + I;
                            continue;
                        }
                        if ("value" === I) {
                            if ("select" === C) {
                                v = R;
                                continue;
                            }
                            "option" === C && v == R && void 0 === O.selected && (N += " selected");
                        }
                        N = N + " " + I + '="' + s(R) + '"';
                    }
                }
            } else $ = R;
        }
    }
    if (b) {
        var V = N.replace(/\n\s*/, " ");
        V === N || ~V.indexOf("\n") ? b && ~N.indexOf("\n") && (N += "\n") : N = V;
    }
    if (N += ">", i.test(C)) throw new Error(C + " is not a valid HTML tag name in " + N);
    var q, z = o.test(C) || a.voidElements && a.voidElements.test(C), Z = [];
    if (D) b && u(D) && (D = "\n" + x + f(D, x)), N += D;
    else if (null != $ && d(q = [], $).length) {
        for(var B = b && ~N.indexOf("\n"), G = !1, J = 0; J < q.length; J++){
            var K = q[J];
            if (null != K && !1 !== K) {
                var Q = m(K, n, a, !0, "svg" === C || "foreignObject" !== C && _, v);
                if (b && !B && u(Q) && (B = !0), Q) if (b) {
                    var X = Q.length > 0 && "<" != Q[0];
                    G && X ? Z[Z.length - 1] += Q : Z.push(Q), G = X;
                } else Z.push(Q);
            }
        }
        if (b && B) for(var Y = Z.length; Y--;)Z[Y] = "\n" + x + f(Z[Y], x);
    }
    if (Z.length || D) N += Z.join("");
    else if (a && a.xml) return N.substring(0, N.length - 1) + " />";
    return !z || q || D ? (b && ~N.indexOf("\n") && (N += "\n"), N = N + "</" + C + ">") : N = N.replace(/>$/, " />"), N;
}
var b = {
    shallow: !0
};
S.render = S;
var x = function(e, t) {
    return S(e, t, b);
}, k = [];
function S(n, o, i) {
    o = o || {};
    var l = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__s;
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__s = !0;
    var a, s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null);
    return s.__k = [
        n
    ], a = i && (i.pretty || i.voidElements || i.sortAttributes || i.shallow || i.allAttributes || i.xml || i.attributeHook) ? m(n, o, i) : F(n, o, !1, void 0, s), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__c && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__c(n, k), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__s = l, k.length = 0, a;
}
function w(e) {
    return null == e || "boolean" == typeof e ? null : "string" == typeof e || "number" == typeof e || "bigint" == typeof e ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(null, null, e) : e;
}
function C(e, t) {
    return "className" === e ? "class" : "htmlFor" === e ? "for" : "defaultValue" === e ? "value" : "defaultChecked" === e ? "checked" : "defaultSelected" === e ? "selected" : t && l.test(e) ? e.toLowerCase().replace(/^xlink:?/, "xlink:") : e;
}
function O(e, t) {
    return "style" === e && null != t && "object" == typeof t ? p(t) : "a" === e[0] && "r" === e[1] && "boolean" == typeof t ? String(t) : t;
}
var j = Array.isArray, A = Object.assign;
function F(r, n, l, a, f) {
    if (null == r || !0 === r || !1 === r || "" === r) return "";
    if ("object" != typeof r) return "function" == typeof r ? "" : s(r);
    if (j(r)) {
        var u = "";
        f.__k = r;
        for(var c = 0; c < r.length; c++)u += F(r[c], n, l, a, f), r[c] = w(r[c]);
        return u;
    }
    if (void 0 !== r.constructor) return "";
    r.__ = f, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__b && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__b(r);
    var _ = r.type, p = r.props;
    if ("function" == typeof _) {
        var d;
        if (_ === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) d = p.children;
        else {
            d = _.prototype && "function" == typeof _.prototype.render ? function(e, r) {
                var n = e.type, o = g(n, r), i = new n(e.props, o);
                e.__c = i, i.__v = e, i.__d = !0, i.props = e.props, null == i.state && (i.state = {}), null == i.__s && (i.__s = i.state), i.context = o, n.getDerivedStateFromProps ? i.state = A({}, i.state, n.getDerivedStateFromProps(i.props, i.state)) : i.componentWillMount && (i.componentWillMount(), i.state = i.__s !== i.state ? i.__s : i.state);
                var l = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__r;
                return l && l(e), i.render(i.props, i.state, i.context);
            }(r, n) : function(e, r) {
                var n, o = h(e, r), i = g(e.type, r);
                e.__c = o;
                for(var l = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].__r, a = 0; o.__d && a++ < 25;)o.__d = !1, l && l(e), n = e.type.call(o, e.props, i);
                return n;
            }(r, n);
            var v = r.__c;
            v.getChildContext && (n = A({}, n, v.getChildContext()));
        }
        var y = F(d = null != d && d.type === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"] && null == d.key ? d.props.children : d, n, l, a, r);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].diffed && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].diffed(r), r.__ = void 0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].unmount && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].unmount(r), y;
    }
    var m, b, x = "<";
    if (x += _, p) for(var k in m = p.children, p){
        var S = p[k];
        if (!("key" === k || "ref" === k || "__self" === k || "__source" === k || "children" === k || "className" === k && "class" in p || "htmlFor" === k && "for" in p || i.test(k))) {
            if (S = O(k = C(k, l), S), "dangerouslySetInnerHTML" === k) b = S && S.__html;
            else if ("textarea" === _ && "value" === k) m = S;
            else if ((S || 0 === S || "" === S) && "function" != typeof S) {
                if (!0 === S || "" === S) {
                    S = k, x = x + " " + k;
                    continue;
                }
                if ("value" === k) {
                    if ("select" === _) {
                        a = S;
                        continue;
                    }
                    "option" !== _ || a != S || "selected" in p || (x += " selected");
                }
                x = x + " " + k + '="' + s(S) + '"';
            }
        }
    }
    var H = x;
    if (x += ">", i.test(_)) throw new Error(_ + " is not a valid HTML tag name in " + x);
    var M = "", L = !1;
    if (b) M += b, L = !0;
    else if ("string" == typeof m) M += s(m), L = !0;
    else if (j(m)) {
        r.__k = m;
        for(var T = 0; T < m.length; T++){
            var E = m[T];
            if (m[T] = w(E), null != E && !1 !== E) {
                var $ = F(E, n, "svg" === _ || "foreignObject" !== _ && l, a, r);
                $ && (M += $, L = !0);
            }
        }
    } else if (null != m && !1 !== m && !0 !== m) {
        r.__k = [
            w(m)
        ];
        var D = F(m, n, "svg" === _ || "foreignObject" !== _ && l, a, r);
        D && (M += D, L = !0);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].diffed && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].diffed(r), r.__ = void 0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].unmount && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$preact$2f$dist$2f$preact$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["options"].unmount(r), L) x += M;
    else if (o.test(_)) return H + " />";
    return x + "</" + _ + ">";
}
S.shallowRender = x;
const __TURBOPACK__default__export__ = S;
;
 //# sourceMappingURL=index.module.js.map
}),
"[project]/frontend/node_modules/@babel/runtime/helpers/extends.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _extends() {
    return module.exports = _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/frontend/node_modules/next-auth/node_modules/cookie/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module exports.
 * @public
 */ exports.parse = parse;
exports.serialize = serialize;
/**
 * Module variables.
 * @private
 */ var __toString = Object.prototype.toString;
var __hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * RegExp to match cookie-name in RFC 6265 sec 4.1.1
 * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
 * which has been replaced by the token definition in RFC 7230 appendix B.
 *
 * cookie-name       = token
 * token             = 1*tchar
 * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
 *                     "*" / "+" / "-" / "." / "^" / "_" /
 *                     "`" / "|" / "~" / DIGIT / ALPHA
 */ var cookieNameRegExp = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
/**
 * RegExp to match cookie-value in RFC 6265 sec 4.1.1
 *
 * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
 * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
 *                     ; US-ASCII characters excluding CTLs,
 *                     ; whitespace DQUOTE, comma, semicolon,
 *                     ; and backslash
 */ var cookieValueRegExp = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/;
/**
 * RegExp to match domain-value in RFC 6265 sec 4.1.1
 *
 * domain-value      = <subdomain>
 *                     ; defined in [RFC1034], Section 3.5, as
 *                     ; enhanced by [RFC1123], Section 2.1
 * <subdomain>       = <label> | <subdomain> "." <label>
 * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
 *                     Labels must be 63 characters or less.
 *                     'let-dig' not 'letter' in the first char, per RFC1123
 * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
 * <let-dig-hyp>     = <let-dig> | "-"
 * <let-dig>         = <letter> | <digit>
 * <letter>          = any one of the 52 alphabetic characters A through Z in
 *                     upper case and a through z in lower case
 * <digit>           = any one of the ten digits 0 through 9
 *
 * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
 *
 * > (Note that a leading %x2E ("."), if present, is ignored even though that
 * character is not permitted, but a trailing %x2E ("."), if present, will
 * cause the user agent to ignore the attribute.)
 */ var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
/**
 * RegExp to match path-value in RFC 6265 sec 4.1.1
 *
 * path-value        = <any CHAR except CTLs or ";">
 * CHAR              = %x01-7F
 *                     ; defined in RFC 5234 appendix B.1
 */ var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [opt]
 * @return {object}
 * @public
 */ function parse(str, opt) {
    if (typeof str !== 'string') {
        throw new TypeError('argument str must be a string');
    }
    var obj = {};
    var len = str.length;
    // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
    if (len < 2) return obj;
    var dec = opt && opt.decode || decode;
    var index = 0;
    var eqIdx = 0;
    var endIdx = 0;
    do {
        eqIdx = str.indexOf('=', index);
        if (eqIdx === -1) break; // No more cookie pairs.
        endIdx = str.indexOf(';', index);
        if (endIdx === -1) {
            endIdx = len;
        } else if (eqIdx > endIdx) {
            // backtrack on prior semicolon
            index = str.lastIndexOf(';', eqIdx - 1) + 1;
            continue;
        }
        var keyStartIdx = startIndex(str, index, eqIdx);
        var keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        var key = str.slice(keyStartIdx, keyEndIdx);
        // only assign once
        if (!__hasOwnProperty.call(obj, key)) {
            var valStartIdx = startIndex(str, eqIdx + 1, endIdx);
            var valEndIdx = endIndex(str, endIdx, valStartIdx);
            if (str.charCodeAt(valStartIdx) === 0x22 /* " */  && str.charCodeAt(valEndIdx - 1) === 0x22 /* " */ ) {
                valStartIdx++;
                valEndIdx--;
            }
            var val = str.slice(valStartIdx, valEndIdx);
            obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
    }while (index < len)
    return obj;
}
function startIndex(str, index, max) {
    do {
        var code = str.charCodeAt(index);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) return index;
    }while (++index < max)
    return max;
}
function endIndex(str, index, min) {
    while(index > min){
        var code = str.charCodeAt(--index);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) return index + 1;
    }
    return min;
}
/**
 * Serialize data into a cookie header.
 *
 * Serialize a name value pair into a cookie string suitable for
 * http headers. An optional options object specifies cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [opt]
 * @return {string}
 * @public
 */ function serialize(name, val, opt) {
    var enc = opt && opt.encode || encodeURIComponent;
    if (typeof enc !== 'function') {
        throw new TypeError('option encode is invalid');
    }
    if (!cookieNameRegExp.test(name)) {
        throw new TypeError('argument name is invalid');
    }
    var value = enc(val);
    if (!cookieValueRegExp.test(value)) {
        throw new TypeError('argument val is invalid');
    }
    var str = name + '=' + value;
    if (!opt) return str;
    if (null != opt.maxAge) {
        var maxAge = Math.floor(opt.maxAge);
        if (!isFinite(maxAge)) {
            throw new TypeError('option maxAge is invalid');
        }
        str += '; Max-Age=' + maxAge;
    }
    if (opt.domain) {
        if (!domainValueRegExp.test(opt.domain)) {
            throw new TypeError('option domain is invalid');
        }
        str += '; Domain=' + opt.domain;
    }
    if (opt.path) {
        if (!pathValueRegExp.test(opt.path)) {
            throw new TypeError('option path is invalid');
        }
        str += '; Path=' + opt.path;
    }
    if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
            throw new TypeError('option expires is invalid');
        }
        str += '; Expires=' + expires.toUTCString();
    }
    if (opt.httpOnly) {
        str += '; HttpOnly';
    }
    if (opt.secure) {
        str += '; Secure';
    }
    if (opt.partitioned) {
        str += '; Partitioned';
    }
    if (opt.priority) {
        var priority = typeof opt.priority === 'string' ? opt.priority.toLowerCase() : opt.priority;
        switch(priority){
            case 'low':
                str += '; Priority=Low';
                break;
            case 'medium':
                str += '; Priority=Medium';
                break;
            case 'high':
                str += '; Priority=High';
                break;
            default:
                throw new TypeError('option priority is invalid');
        }
    }
    if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch(sameSite){
            case true:
                str += '; SameSite=Strict';
                break;
            case 'lax':
                str += '; SameSite=Lax';
                break;
            case 'strict':
                str += '; SameSite=Strict';
                break;
            case 'none':
                str += '; SameSite=None';
                break;
            default:
                throw new TypeError('option sameSite is invalid');
        }
    }
    return str;
}
/**
 * URL-decode string value. Optimized to skip native call when no %.
 *
 * @param {string} str
 * @returns {string}
 */ function decode(str) {
    return str.indexOf('%') !== -1 ? decodeURIComponent(str) : str;
}
/**
 * Determine if value is a Date.
 *
 * @param {*} val
 * @private
 */ function isDate(val) {
    return __toString.call(val) === '[object Date]';
}
/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */ function tryDecode(str, decode) {
    try {
        return decode(str);
    } catch (e) {
        return str;
    }
}
}),
"[project]/frontend/node_modules/browser-image-compression/dist/browser-image-compression.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>imageCompression
]);
/**
 * Browser Image Compression
 * v2.0.2
 * by Donald <donaldcwl@gmail.com>
 * https://github.com/Donaldcwl/browser-image-compression
 */ function _mergeNamespaces(e, t1) {
    return t1.forEach(function(t1) {
        t1 && "string" != typeof t1 && !Array.isArray(t1) && Object.keys(t1).forEach(function(r) {
            if ("default" !== r && !(r in e)) {
                var i = Object.getOwnPropertyDescriptor(t1, r);
                Object.defineProperty(e, r, i.get ? i : {
                    enumerable: !0,
                    get: function() {
                        return t1[r];
                    }
                });
            }
        });
    }), Object.freeze(e);
}
function copyExifWithoutOrientation(e, t1) {
    return new Promise(function(r, i) {
        let o;
        return getApp1Segment(e).then(function(e) {
            try {
                return o = e, r(new Blob([
                    t1.slice(0, 2),
                    o,
                    t1.slice(2)
                ], {
                    type: "image/jpeg"
                }));
            } catch (e) {
                return i(e);
            }
        }, i);
    });
}
const getApp1Segment = (e)=>new Promise((t1, r)=>{
        const i = new FileReader;
        i.addEventListener("load", ({ target: { result: e } })=>{
            const i = new DataView(e);
            let o = 0;
            if (65496 !== i.getUint16(o)) return r("not a valid JPEG");
            for(o += 2;;){
                const a = i.getUint16(o);
                if (65498 === a) break;
                const s = i.getUint16(o + 2);
                if (65505 === a && 1165519206 === i.getUint32(o + 4)) {
                    const a = o + 10;
                    let f;
                    switch(i.getUint16(a)){
                        case 18761:
                            f = !0;
                            break;
                        case 19789:
                            f = !1;
                            break;
                        default:
                            return r("TIFF header contains invalid endian");
                    }
                    if (42 !== i.getUint16(a + 2, f)) return r("TIFF header contains invalid version");
                    const l = i.getUint32(a + 4, f), c = a + l + 2 + 12 * i.getUint16(a + l, f);
                    for(let e = a + l + 2; e < c; e += 12){
                        if (274 == i.getUint16(e, f)) {
                            if (3 !== i.getUint16(e + 2, f)) return r("Orientation data type is invalid");
                            if (1 !== i.getUint32(e + 4, f)) return r("Orientation data count is invalid");
                            i.setUint16(e + 8, 1, f);
                            break;
                        }
                    }
                    return t1(e.slice(o, o + 2 + s));
                }
                o += 2 + s;
            }
            return t1(new Blob);
        }), i.readAsArrayBuffer(e);
    });
var e = {}, t1 = {
    get exports () {
        return e;
    },
    set exports (t){
        e = t;
    }
};
!function(e) {
    var r, i, UZIP = {};
    t1.exports = UZIP, UZIP.parse = function(e, t1) {
        for(var r = UZIP.bin.readUshort, i = UZIP.bin.readUint, o = 0, a = {}, s = new Uint8Array(e), f = s.length - 4; 101010256 != i(s, f);)f--;
        o = f;
        o += 4;
        var l = r(s, o += 4);
        r(s, o += 2);
        var c = i(s, o += 2), u = i(s, o += 4);
        o += 4, o = u;
        for(var h = 0; h < l; h++){
            i(s, o), o += 4, o += 4, o += 4, i(s, o += 4);
            c = i(s, o += 4);
            var d = i(s, o += 4), A = r(s, o += 4), g = r(s, o + 2), p = r(s, o + 4);
            o += 6;
            var m = i(s, o += 8);
            o += 4, o += A + g + p, UZIP._readLocal(s, m, a, c, d, t1);
        }
        return a;
    }, UZIP._readLocal = function(e, t1, r, i, o, a) {
        var s = UZIP.bin.readUshort, f = UZIP.bin.readUint;
        f(e, t1), s(e, t1 += 4), s(e, t1 += 2);
        var l = s(e, t1 += 2);
        f(e, t1 += 2), f(e, t1 += 4), t1 += 4;
        var c = s(e, t1 += 8), u = s(e, t1 += 2);
        t1 += 2;
        var h = UZIP.bin.readUTF8(e, t1, c);
        if (t1 += c, t1 += u, a) r[h] = {
            size: o,
            csize: i
        };
        else {
            var d = new Uint8Array(e.buffer, t1);
            if (0 == l) r[h] = new Uint8Array(d.buffer.slice(t1, t1 + i));
            else {
                if (8 != l) throw "unknown compression method: " + l;
                var A = new Uint8Array(o);
                UZIP.inflateRaw(d, A), r[h] = A;
            }
        }
    }, UZIP.inflateRaw = function(e, t1) {
        return UZIP.F.inflate(e, t1);
    }, UZIP.inflate = function(e, t1) {
        return e[0], e[1], UZIP.inflateRaw(new Uint8Array(e.buffer, e.byteOffset + 2, e.length - 6), t1);
    }, UZIP.deflate = function(e, t1) {
        null == t1 && (t1 = {
            level: 6
        });
        var r = 0, i = new Uint8Array(50 + Math.floor(1.1 * e.length));
        i[r] = 120, i[r + 1] = 156, r += 2, r = UZIP.F.deflateRaw(e, i, r, t1.level);
        var o = UZIP.adler(e, 0, e.length);
        return i[r + 0] = o >>> 24 & 255, i[r + 1] = o >>> 16 & 255, i[r + 2] = o >>> 8 & 255, i[r + 3] = o >>> 0 & 255, new Uint8Array(i.buffer, 0, r + 4);
    }, UZIP.deflateRaw = function(e, t1) {
        null == t1 && (t1 = {
            level: 6
        });
        var r = new Uint8Array(50 + Math.floor(1.1 * e.length)), i = UZIP.F.deflateRaw(e, r, i, t1.level);
        return new Uint8Array(r.buffer, 0, i);
    }, UZIP.encode = function(e, t1) {
        null == t1 && (t1 = !1);
        var r = 0, i = UZIP.bin.writeUint, o = UZIP.bin.writeUshort, a = {};
        for(var s in e){
            var f = !UZIP._noNeed(s) && !t1, l = e[s], c = UZIP.crc.crc(l, 0, l.length);
            a[s] = {
                cpr: f,
                usize: l.length,
                crc: c,
                file: f ? UZIP.deflateRaw(l) : l
            };
        }
        for(var s in a)r += a[s].file.length + 30 + 46 + 2 * UZIP.bin.sizeUTF8(s);
        r += 22;
        var u = new Uint8Array(r), h = 0, d = [];
        for(var s in a){
            var A = a[s];
            d.push(h), h = UZIP._writeHeader(u, h, s, A, 0);
        }
        var g = 0, p = h;
        for(var s in a){
            A = a[s];
            d.push(h), h = UZIP._writeHeader(u, h, s, A, 1, d[g++]);
        }
        var m = h - p;
        return i(u, h, 101010256), h += 4, o(u, h += 4, g), o(u, h += 2, g), i(u, h += 2, m), i(u, h += 4, p), h += 4, h += 2, u.buffer;
    }, UZIP._noNeed = function(e) {
        var t1 = e.split(".").pop().toLowerCase();
        return -1 != "png,jpg,jpeg,zip".indexOf(t1);
    }, UZIP._writeHeader = function(e, t1, r, i, o, a) {
        var s = UZIP.bin.writeUint, f = UZIP.bin.writeUshort, l = i.file;
        return s(e, t1, 0 == o ? 67324752 : 33639248), t1 += 4, 1 == o && (t1 += 2), f(e, t1, 20), f(e, t1 += 2, 0), f(e, t1 += 2, i.cpr ? 8 : 0), s(e, t1 += 2, 0), s(e, t1 += 4, i.crc), s(e, t1 += 4, l.length), s(e, t1 += 4, i.usize), f(e, t1 += 4, UZIP.bin.sizeUTF8(r)), f(e, t1 += 2, 0), t1 += 2, 1 == o && (t1 += 2, t1 += 2, s(e, t1 += 6, a), t1 += 4), t1 += UZIP.bin.writeUTF8(e, t1, r), 0 == o && (e.set(l, t1), t1 += l.length), t1;
    }, UZIP.crc = {
        table: function() {
            for(var e = new Uint32Array(256), t1 = 0; t1 < 256; t1++){
                for(var r = t1, i = 0; i < 8; i++)1 & r ? r = 3988292384 ^ r >>> 1 : r >>>= 1;
                e[t1] = r;
            }
            return e;
        }(),
        update: function(e, t1, r, i) {
            for(var o = 0; o < i; o++)e = UZIP.crc.table[255 & (e ^ t1[r + o])] ^ e >>> 8;
            return e;
        },
        crc: function(e, t1, r) {
            return 4294967295 ^ UZIP.crc.update(4294967295, e, t1, r);
        }
    }, UZIP.adler = function(e, t1, r) {
        for(var i = 1, o = 0, a = t1, s = t1 + r; a < s;){
            for(var f = Math.min(a + 5552, s); a < f;)o += i += e[a++];
            i %= 65521, o %= 65521;
        }
        return o << 16 | i;
    }, UZIP.bin = {
        readUshort: function(e, t1) {
            return e[t1] | e[t1 + 1] << 8;
        },
        writeUshort: function(e, t1, r) {
            e[t1] = 255 & r, e[t1 + 1] = r >> 8 & 255;
        },
        readUint: function(e, t1) {
            return 16777216 * e[t1 + 3] + (e[t1 + 2] << 16 | e[t1 + 1] << 8 | e[t1]);
        },
        writeUint: function(e, t1, r) {
            e[t1] = 255 & r, e[t1 + 1] = r >> 8 & 255, e[t1 + 2] = r >> 16 & 255, e[t1 + 3] = r >> 24 & 255;
        },
        readASCII: function(e, t1, r) {
            for(var i = "", o = 0; o < r; o++)i += String.fromCharCode(e[t1 + o]);
            return i;
        },
        writeASCII: function(e, t1, r) {
            for(var i = 0; i < r.length; i++)e[t1 + i] = r.charCodeAt(i);
        },
        pad: function(e) {
            return e.length < 2 ? "0" + e : e;
        },
        readUTF8: function(e, t1, r) {
            for(var i, o = "", a = 0; a < r; a++)o += "%" + UZIP.bin.pad(e[t1 + a].toString(16));
            try {
                i = decodeURIComponent(o);
            } catch (i) {
                return UZIP.bin.readASCII(e, t1, r);
            }
            return i;
        },
        writeUTF8: function(e, t1, r) {
            for(var i = r.length, o = 0, a = 0; a < i; a++){
                var s = r.charCodeAt(a);
                if (0 == (4294967168 & s)) e[t1 + o] = s, o++;
                else if (0 == (4294965248 & s)) e[t1 + o] = 192 | s >> 6, e[t1 + o + 1] = 128 | s >> 0 & 63, o += 2;
                else if (0 == (4294901760 & s)) e[t1 + o] = 224 | s >> 12, e[t1 + o + 1] = 128 | s >> 6 & 63, e[t1 + o + 2] = 128 | s >> 0 & 63, o += 3;
                else {
                    if (0 != (4292870144 & s)) throw "e";
                    e[t1 + o] = 240 | s >> 18, e[t1 + o + 1] = 128 | s >> 12 & 63, e[t1 + o + 2] = 128 | s >> 6 & 63, e[t1 + o + 3] = 128 | s >> 0 & 63, o += 4;
                }
            }
            return o;
        },
        sizeUTF8: function(e) {
            for(var t1 = e.length, r = 0, i = 0; i < t1; i++){
                var o = e.charCodeAt(i);
                if (0 == (4294967168 & o)) r++;
                else if (0 == (4294965248 & o)) r += 2;
                else if (0 == (4294901760 & o)) r += 3;
                else {
                    if (0 != (4292870144 & o)) throw "e";
                    r += 4;
                }
            }
            return r;
        }
    }, UZIP.F = {}, UZIP.F.deflateRaw = function(e, t1, r, i) {
        var o = [
            [
                0,
                0,
                0,
                0,
                0
            ],
            [
                4,
                4,
                8,
                4,
                0
            ],
            [
                4,
                5,
                16,
                8,
                0
            ],
            [
                4,
                6,
                16,
                16,
                0
            ],
            [
                4,
                10,
                16,
                32,
                0
            ],
            [
                8,
                16,
                32,
                32,
                0
            ],
            [
                8,
                16,
                128,
                128,
                0
            ],
            [
                8,
                32,
                128,
                256,
                0
            ],
            [
                32,
                128,
                258,
                1024,
                1
            ],
            [
                32,
                258,
                258,
                4096,
                1
            ]
        ][i], a = UZIP.F.U, s = UZIP.F._goodIndex;
        UZIP.F._hash;
        var f = UZIP.F._putsE, l = 0, c = r << 3, u = 0, h = e.length;
        if (0 == i) {
            for(; l < h;){
                f(t1, c, l + (_ = Math.min(65535, h - l)) == h ? 1 : 0), c = UZIP.F._copyExact(e, l, _, t1, c + 8), l += _;
            }
            return c >>> 3;
        }
        var d = a.lits, A = a.strt, g = a.prev, p = 0, m = 0, w = 0, v = 0, b = 0, y = 0;
        for(h > 2 && (A[y = UZIP.F._hash(e, 0)] = 0), l = 0; l < h; l++){
            if (b = y, l + 1 < h - 2) {
                y = UZIP.F._hash(e, l + 1);
                var E = l + 1 & 32767;
                g[E] = A[y], A[y] = E;
            }
            if (u <= l) {
                (p > 14e3 || m > 26697) && h - l > 100 && (u < l && (d[p] = l - u, p += 2, u = l), c = UZIP.F._writeBlock(l == h - 1 || u == h ? 1 : 0, d, p, v, e, w, l - w, t1, c), p = m = v = 0, w = l);
                var F = 0;
                l < h - 2 && (F = UZIP.F._bestMatch(e, l, g, b, Math.min(o[2], h - l), o[3]));
                var _ = F >>> 16, B = 65535 & F;
                if (0 != F) {
                    B = 65535 & F;
                    var U = s(_ = F >>> 16, a.of0);
                    a.lhst[257 + U]++;
                    var C = s(B, a.df0);
                    a.dhst[C]++, v += a.exb[U] + a.dxb[C], d[p] = _ << 23 | l - u, d[p + 1] = B << 16 | U << 8 | C, p += 2, u = l + _;
                } else a.lhst[e[l]]++;
                m++;
            }
        }
        for(w == l && 0 != e.length || (u < l && (d[p] = l - u, p += 2, u = l), c = UZIP.F._writeBlock(1, d, p, v, e, w, l - w, t1, c), p = 0, m = 0, p = m = v = 0, w = l); 0 != (7 & c);)c++;
        return c >>> 3;
    }, UZIP.F._bestMatch = function(e, t1, r, i, o, a) {
        var s = 32767 & t1, f = r[s], l = s - f + 32768 & 32767;
        if (f == s || i != UZIP.F._hash(e, t1 - l)) return 0;
        for(var c = 0, u = 0, h = Math.min(32767, t1); l <= h && 0 != --a && f != s;){
            if (0 == c || e[t1 + c] == e[t1 + c - l]) {
                var d = UZIP.F._howLong(e, t1, l);
                if (d > c) {
                    if (u = l, (c = d) >= o) break;
                    l + 2 < d && (d = l + 2);
                    for(var A = 0, g = 0; g < d - 2; g++){
                        var p = t1 - l + g + 32768 & 32767, m = p - r[p] + 32768 & 32767;
                        m > A && (A = m, f = p);
                    }
                }
            }
            l += (s = f) - (f = r[s]) + 32768 & 32767;
        }
        return c << 16 | u;
    }, UZIP.F._howLong = function(e, t1, r) {
        if (e[t1] != e[t1 - r] || e[t1 + 1] != e[t1 + 1 - r] || e[t1 + 2] != e[t1 + 2 - r]) return 0;
        var i = t1, o = Math.min(e.length, t1 + 258);
        for(t1 += 3; t1 < o && e[t1] == e[t1 - r];)t1++;
        return t1 - i;
    }, UZIP.F._hash = function(e, t1) {
        return (e[t1] << 8 | e[t1 + 1]) + (e[t1 + 2] << 4) & 65535;
    }, UZIP.saved = 0, UZIP.F._writeBlock = function(e, t1, r, i, o, a, s, f, l) {
        var c, u, h, d, A, g, p, m, w, v = UZIP.F.U, b = UZIP.F._putsF, y = UZIP.F._putsE;
        v.lhst[256]++, u = (c = UZIP.F.getTrees())[0], h = c[1], d = c[2], A = c[3], g = c[4], p = c[5], m = c[6], w = c[7];
        var E = 32 + (0 == (l + 3 & 7) ? 0 : 8 - (l + 3 & 7)) + (s << 3), F = i + UZIP.F.contSize(v.fltree, v.lhst) + UZIP.F.contSize(v.fdtree, v.dhst), _ = i + UZIP.F.contSize(v.ltree, v.lhst) + UZIP.F.contSize(v.dtree, v.dhst);
        _ += 14 + 3 * p + UZIP.F.contSize(v.itree, v.ihst) + (2 * v.ihst[16] + 3 * v.ihst[17] + 7 * v.ihst[18]);
        for(var B = 0; B < 286; B++)v.lhst[B] = 0;
        for(B = 0; B < 30; B++)v.dhst[B] = 0;
        for(B = 0; B < 19; B++)v.ihst[B] = 0;
        var U = E < F && E < _ ? 0 : F < _ ? 1 : 2;
        if (b(f, l, e), b(f, l + 1, U), l += 3, 0 == U) {
            for(; 0 != (7 & l);)l++;
            l = UZIP.F._copyExact(o, a, s, f, l);
        } else {
            var C, I;
            if (1 == U && (C = v.fltree, I = v.fdtree), 2 == U) {
                UZIP.F.makeCodes(v.ltree, u), UZIP.F.revCodes(v.ltree, u), UZIP.F.makeCodes(v.dtree, h), UZIP.F.revCodes(v.dtree, h), UZIP.F.makeCodes(v.itree, d), UZIP.F.revCodes(v.itree, d), C = v.ltree, I = v.dtree, y(f, l, A - 257), y(f, l += 5, g - 1), y(f, l += 5, p - 4), l += 4;
                for(var Q = 0; Q < p; Q++)y(f, l + 3 * Q, v.itree[1 + (v.ordr[Q] << 1)]);
                l += 3 * p, l = UZIP.F._codeTiny(m, v.itree, f, l), l = UZIP.F._codeTiny(w, v.itree, f, l);
            }
            for(var M = a, x = 0; x < r; x += 2){
                for(var S = t1[x], R = S >>> 23, T = M + (8388607 & S); M < T;)l = UZIP.F._writeLit(o[M++], C, f, l);
                if (0 != R) {
                    var O = t1[x + 1], P = O >> 16, H = O >> 8 & 255, L = 255 & O;
                    y(f, l = UZIP.F._writeLit(257 + H, C, f, l), R - v.of0[H]), l += v.exb[H], b(f, l = UZIP.F._writeLit(L, I, f, l), P - v.df0[L]), l += v.dxb[L], M += R;
                }
            }
            l = UZIP.F._writeLit(256, C, f, l);
        }
        return l;
    }, UZIP.F._copyExact = function(e, t1, r, i, o) {
        var a = o >>> 3;
        return i[a] = r, i[a + 1] = r >>> 8, i[a + 2] = 255 - i[a], i[a + 3] = 255 - i[a + 1], a += 4, i.set(new Uint8Array(e.buffer, t1, r), a), o + (r + 4 << 3);
    }, UZIP.F.getTrees = function() {
        for(var e = UZIP.F.U, t1 = UZIP.F._hufTree(e.lhst, e.ltree, 15), r = UZIP.F._hufTree(e.dhst, e.dtree, 15), i = [], o = UZIP.F._lenCodes(e.ltree, i), a = [], s = UZIP.F._lenCodes(e.dtree, a), f = 0; f < i.length; f += 2)e.ihst[i[f]]++;
        for(f = 0; f < a.length; f += 2)e.ihst[a[f]]++;
        for(var l = UZIP.F._hufTree(e.ihst, e.itree, 7), c = 19; c > 4 && 0 == e.itree[1 + (e.ordr[c - 1] << 1)];)c--;
        return [
            t1,
            r,
            l,
            o,
            s,
            c,
            i,
            a
        ];
    }, UZIP.F.getSecond = function(e) {
        for(var t1 = [], r = 0; r < e.length; r += 2)t1.push(e[r + 1]);
        return t1;
    }, UZIP.F.nonZero = function(e) {
        for(var t1 = "", r = 0; r < e.length; r += 2)0 != e[r + 1] && (t1 += (r >> 1) + ",");
        return t1;
    }, UZIP.F.contSize = function(e, t1) {
        for(var r = 0, i = 0; i < t1.length; i++)r += t1[i] * e[1 + (i << 1)];
        return r;
    }, UZIP.F._codeTiny = function(e, t1, r, i) {
        for(var o = 0; o < e.length; o += 2){
            var a = e[o], s = e[o + 1];
            i = UZIP.F._writeLit(a, t1, r, i);
            var f = 16 == a ? 2 : 17 == a ? 3 : 7;
            a > 15 && (UZIP.F._putsE(r, i, s, f), i += f);
        }
        return i;
    }, UZIP.F._lenCodes = function(e, t1) {
        for(var r = e.length; 2 != r && 0 == e[r - 1];)r -= 2;
        for(var i = 0; i < r; i += 2){
            var o = e[i + 1], a = i + 3 < r ? e[i + 3] : -1, s = i + 5 < r ? e[i + 5] : -1, f = 0 == i ? -1 : e[i - 1];
            if (0 == o && a == o && s == o) {
                for(var l = i + 5; l + 2 < r && e[l + 2] == o;)l += 2;
                (c = Math.min(l + 1 - i >>> 1, 138)) < 11 ? t1.push(17, c - 3) : t1.push(18, c - 11), i += 2 * c - 2;
            } else if (o == f && a == o && s == o) {
                for(l = i + 5; l + 2 < r && e[l + 2] == o;)l += 2;
                var c = Math.min(l + 1 - i >>> 1, 6);
                t1.push(16, c - 3), i += 2 * c - 2;
            } else t1.push(o, 0);
        }
        return r >>> 1;
    }, UZIP.F._hufTree = function(e, t1, r) {
        var i = [], o = e.length, a = t1.length, s = 0;
        for(s = 0; s < a; s += 2)t1[s] = 0, t1[s + 1] = 0;
        for(s = 0; s < o; s++)0 != e[s] && i.push({
            lit: s,
            f: e[s]
        });
        var f = i.length, l = i.slice(0);
        if (0 == f) return 0;
        if (1 == f) {
            var c = i[0].lit;
            l = 0 == c ? 1 : 0;
            return t1[1 + (c << 1)] = 1, t1[1 + (l << 1)] = 1, 1;
        }
        i.sort(function(e, t1) {
            return e.f - t1.f;
        });
        var u = i[0], h = i[1], d = 0, A = 1, g = 2;
        for(i[0] = {
            lit: -1,
            f: u.f + h.f,
            l: u,
            r: h,
            d: 0
        }; A != f - 1;)u = d != A && (g == f || i[d].f < i[g].f) ? i[d++] : i[g++], h = d != A && (g == f || i[d].f < i[g].f) ? i[d++] : i[g++], i[A++] = {
            lit: -1,
            f: u.f + h.f,
            l: u,
            r: h
        };
        var p = UZIP.F.setDepth(i[A - 1], 0);
        for(p > r && (UZIP.F.restrictDepth(l, r, p), p = r), s = 0; s < f; s++)t1[1 + (l[s].lit << 1)] = l[s].d;
        return p;
    }, UZIP.F.setDepth = function(e, t1) {
        return -1 != e.lit ? (e.d = t1, t1) : Math.max(UZIP.F.setDepth(e.l, t1 + 1), UZIP.F.setDepth(e.r, t1 + 1));
    }, UZIP.F.restrictDepth = function(e, t1, r) {
        var i = 0, o = 1 << r - t1, a = 0;
        for(e.sort(function(e, t1) {
            return t1.d == e.d ? e.f - t1.f : t1.d - e.d;
        }), i = 0; i < e.length && e[i].d > t1; i++){
            var s = e[i].d;
            e[i].d = t1, a += o - (1 << r - s);
        }
        for(a >>>= r - t1; a > 0;){
            (s = e[i].d) < t1 ? (e[i].d++, a -= 1 << t1 - s - 1) : i++;
        }
        for(; i >= 0; i--)e[i].d == t1 && a < 0 && (e[i].d--, a++);
        0 != a && console.log("debt left");
    }, UZIP.F._goodIndex = function(e, t1) {
        var r = 0;
        return t1[16 | r] <= e && (r |= 16), t1[8 | r] <= e && (r |= 8), t1[4 | r] <= e && (r |= 4), t1[2 | r] <= e && (r |= 2), t1[1 | r] <= e && (r |= 1), r;
    }, UZIP.F._writeLit = function(e, t1, r, i) {
        return UZIP.F._putsF(r, i, t1[e << 1]), i + t1[1 + (e << 1)];
    }, UZIP.F.inflate = function(e, t1) {
        var r = Uint8Array;
        if (3 == e[0] && 0 == e[1]) return t1 || new r(0);
        var i = UZIP.F, o = i._bitsF, a = i._bitsE, s = i._decodeTiny, f = i.makeCodes, l = i.codes2map, c = i._get17, u = i.U, h = null == t1;
        h && (t1 = new r(e.length >>> 2 << 3));
        for(var d, A, g = 0, p = 0, m = 0, w = 0, v = 0, b = 0, y = 0, E = 0, F = 0; 0 == g;)if (g = o(e, F, 1), p = o(e, F + 1, 2), F += 3, 0 != p) {
            if (h && (t1 = UZIP.F._check(t1, E + (1 << 17))), 1 == p && (d = u.flmap, A = u.fdmap, b = 511, y = 31), 2 == p) {
                m = a(e, F, 5) + 257, w = a(e, F + 5, 5) + 1, v = a(e, F + 10, 4) + 4, F += 14;
                for(var _ = 0; _ < 38; _ += 2)u.itree[_] = 0, u.itree[_ + 1] = 0;
                var B = 1;
                for(_ = 0; _ < v; _++){
                    var U = a(e, F + 3 * _, 3);
                    u.itree[1 + (u.ordr[_] << 1)] = U, U > B && (B = U);
                }
                F += 3 * v, f(u.itree, B), l(u.itree, B, u.imap), d = u.lmap, A = u.dmap, F = s(u.imap, (1 << B) - 1, m + w, e, F, u.ttree);
                var C = i._copyOut(u.ttree, 0, m, u.ltree);
                b = (1 << C) - 1;
                var I = i._copyOut(u.ttree, m, w, u.dtree);
                y = (1 << I) - 1, f(u.ltree, C), l(u.ltree, C, d), f(u.dtree, I), l(u.dtree, I, A);
            }
            for(;;){
                var Q = d[c(e, F) & b];
                F += 15 & Q;
                var M = Q >>> 4;
                if (M >>> 8 == 0) t1[E++] = M;
                else {
                    if (256 == M) break;
                    var x = E + M - 254;
                    if (M > 264) {
                        var S = u.ldef[M - 257];
                        x = E + (S >>> 3) + a(e, F, 7 & S), F += 7 & S;
                    }
                    var R = A[c(e, F) & y];
                    F += 15 & R;
                    var T = R >>> 4, O = u.ddef[T], P = (O >>> 4) + o(e, F, 15 & O);
                    for(F += 15 & O, h && (t1 = UZIP.F._check(t1, E + (1 << 17))); E < x;)t1[E] = t1[E++ - P], t1[E] = t1[E++ - P], t1[E] = t1[E++ - P], t1[E] = t1[E++ - P];
                    E = x;
                }
            }
        } else {
            0 != (7 & F) && (F += 8 - (7 & F));
            var H = 4 + (F >>> 3), L = e[H - 4] | e[H - 3] << 8;
            h && (t1 = UZIP.F._check(t1, E + L)), t1.set(new r(e.buffer, e.byteOffset + H, L), E), F = H + L << 3, E += L;
        }
        return t1.length == E ? t1 : t1.slice(0, E);
    }, UZIP.F._check = function(e, t1) {
        var r = e.length;
        if (t1 <= r) return e;
        var i = new Uint8Array(Math.max(r << 1, t1));
        return i.set(e, 0), i;
    }, UZIP.F._decodeTiny = function(e, t1, r, i, o, a) {
        for(var s = UZIP.F._bitsE, f = UZIP.F._get17, l = 0; l < r;){
            var c = e[f(i, o) & t1];
            o += 15 & c;
            var u = c >>> 4;
            if (u <= 15) a[l] = u, l++;
            else {
                var h = 0, d = 0;
                16 == u ? (d = 3 + s(i, o, 2), o += 2, h = a[l - 1]) : 17 == u ? (d = 3 + s(i, o, 3), o += 3) : 18 == u && (d = 11 + s(i, o, 7), o += 7);
                for(var A = l + d; l < A;)a[l] = h, l++;
            }
        }
        return o;
    }, UZIP.F._copyOut = function(e, t1, r, i) {
        for(var o = 0, a = 0, s = i.length >>> 1; a < r;){
            var f = e[a + t1];
            i[a << 1] = 0, i[1 + (a << 1)] = f, f > o && (o = f), a++;
        }
        for(; a < s;)i[a << 1] = 0, i[1 + (a << 1)] = 0, a++;
        return o;
    }, UZIP.F.makeCodes = function(e, t1) {
        for(var r, i, o, a, s = UZIP.F.U, f = e.length, l = s.bl_count, c = 0; c <= t1; c++)l[c] = 0;
        for(c = 1; c < f; c += 2)l[e[c]]++;
        var u = s.next_code;
        for(r = 0, l[0] = 0, i = 1; i <= t1; i++)r = r + l[i - 1] << 1, u[i] = r;
        for(o = 0; o < f; o += 2)0 != (a = e[o + 1]) && (e[o] = u[a], u[a]++);
    }, UZIP.F.codes2map = function(e, t1, r) {
        for(var i = e.length, o = UZIP.F.U.rev15, a = 0; a < i; a += 2)if (0 != e[a + 1]) for(var s = a >> 1, f = e[a + 1], l = s << 4 | f, c = t1 - f, u = e[a] << c, h = u + (1 << c); u != h;){
            r[o[u] >>> 15 - t1] = l, u++;
        }
    }, UZIP.F.revCodes = function(e, t1) {
        for(var r = UZIP.F.U.rev15, i = 15 - t1, o = 0; o < e.length; o += 2){
            var a = e[o] << t1 - e[o + 1];
            e[o] = r[a] >>> i;
        }
    }, UZIP.F._putsE = function(e, t1, r) {
        r <<= 7 & t1;
        var i = t1 >>> 3;
        e[i] |= r, e[i + 1] |= r >>> 8;
    }, UZIP.F._putsF = function(e, t1, r) {
        r <<= 7 & t1;
        var i = t1 >>> 3;
        e[i] |= r, e[i + 1] |= r >>> 8, e[i + 2] |= r >>> 16;
    }, UZIP.F._bitsE = function(e, t1, r) {
        return (e[t1 >>> 3] | e[1 + (t1 >>> 3)] << 8) >>> (7 & t1) & (1 << r) - 1;
    }, UZIP.F._bitsF = function(e, t1, r) {
        return (e[t1 >>> 3] | e[1 + (t1 >>> 3)] << 8 | e[2 + (t1 >>> 3)] << 16) >>> (7 & t1) & (1 << r) - 1;
    }, UZIP.F._get17 = function(e, t1) {
        return (e[t1 >>> 3] | e[1 + (t1 >>> 3)] << 8 | e[2 + (t1 >>> 3)] << 16) >>> (7 & t1);
    }, UZIP.F._get25 = function(e, t1) {
        return (e[t1 >>> 3] | e[1 + (t1 >>> 3)] << 8 | e[2 + (t1 >>> 3)] << 16 | e[3 + (t1 >>> 3)] << 24) >>> (7 & t1);
    }, UZIP.F.U = (r = Uint16Array, i = Uint32Array, {
        next_code: new r(16),
        bl_count: new r(16),
        ordr: [
            16,
            17,
            18,
            0,
            8,
            7,
            9,
            6,
            10,
            5,
            11,
            4,
            12,
            3,
            13,
            2,
            14,
            1,
            15
        ],
        of0: [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            13,
            15,
            17,
            19,
            23,
            27,
            31,
            35,
            43,
            51,
            59,
            67,
            83,
            99,
            115,
            131,
            163,
            195,
            227,
            258,
            999,
            999,
            999
        ],
        exb: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            5,
            5,
            5,
            5,
            0,
            0,
            0,
            0
        ],
        ldef: new r(32),
        df0: [
            1,
            2,
            3,
            4,
            5,
            7,
            9,
            13,
            17,
            25,
            33,
            49,
            65,
            97,
            129,
            193,
            257,
            385,
            513,
            769,
            1025,
            1537,
            2049,
            3073,
            4097,
            6145,
            8193,
            12289,
            16385,
            24577,
            65535,
            65535
        ],
        dxb: [
            0,
            0,
            0,
            0,
            1,
            1,
            2,
            2,
            3,
            3,
            4,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            8,
            8,
            9,
            9,
            10,
            10,
            11,
            11,
            12,
            12,
            13,
            13,
            0,
            0
        ],
        ddef: new i(32),
        flmap: new r(512),
        fltree: [],
        fdmap: new r(32),
        fdtree: [],
        lmap: new r(32768),
        ltree: [],
        ttree: [],
        dmap: new r(32768),
        dtree: [],
        imap: new r(512),
        itree: [],
        rev15: new r(32768),
        lhst: new i(286),
        dhst: new i(30),
        ihst: new i(19),
        lits: new i(15e3),
        strt: new r(65536),
        prev: new r(32768)
    }), function() {
        for(var e = UZIP.F.U, t1 = 0; t1 < 32768; t1++){
            var r = t1;
            r = (4278255360 & (r = (4042322160 & (r = (3435973836 & (r = (2863311530 & r) >>> 1 | (1431655765 & r) << 1)) >>> 2 | (858993459 & r) << 2)) >>> 4 | (252645135 & r) << 4)) >>> 8 | (16711935 & r) << 8, e.rev15[t1] = (r >>> 16 | r << 16) >>> 17;
        }
        function pushV(e, t1, r) {
            for(; 0 != t1--;)e.push(0, r);
        }
        for(t1 = 0; t1 < 32; t1++)e.ldef[t1] = e.of0[t1] << 3 | e.exb[t1], e.ddef[t1] = e.df0[t1] << 4 | e.dxb[t1];
        pushV(e.fltree, 144, 8), pushV(e.fltree, 112, 9), pushV(e.fltree, 24, 7), pushV(e.fltree, 8, 8), UZIP.F.makeCodes(e.fltree, 9), UZIP.F.codes2map(e.fltree, 9, e.flmap), UZIP.F.revCodes(e.fltree, 9), pushV(e.fdtree, 32, 5), UZIP.F.makeCodes(e.fdtree, 5), UZIP.F.codes2map(e.fdtree, 5, e.fdmap), UZIP.F.revCodes(e.fdtree, 5), pushV(e.itree, 19, 0), pushV(e.ltree, 286, 0), pushV(e.dtree, 30, 0), pushV(e.ttree, 320, 0);
    }();
}();
var UZIP = _mergeNamespaces({
    __proto__: null,
    default: e
}, [
    e
]);
const UPNG = function() {
    var e = {
        nextZero (e, t1) {
            for(; 0 != e[t1];)t1++;
            return t1;
        },
        readUshort: (e, t1)=>e[t1] << 8 | e[t1 + 1],
        writeUshort (e, t1, r) {
            e[t1] = r >> 8 & 255, e[t1 + 1] = 255 & r;
        },
        readUint: (e, t1)=>16777216 * e[t1] + (e[t1 + 1] << 16 | e[t1 + 2] << 8 | e[t1 + 3]),
        writeUint (e, t1, r) {
            e[t1] = r >> 24 & 255, e[t1 + 1] = r >> 16 & 255, e[t1 + 2] = r >> 8 & 255, e[t1 + 3] = 255 & r;
        },
        readASCII (e, t1, r) {
            let i = "";
            for(let o = 0; o < r; o++)i += String.fromCharCode(e[t1 + o]);
            return i;
        },
        writeASCII (e, t1, r) {
            for(let i = 0; i < r.length; i++)e[t1 + i] = r.charCodeAt(i);
        },
        readBytes (e, t1, r) {
            const i = [];
            for(let o = 0; o < r; o++)i.push(e[t1 + o]);
            return i;
        },
        pad: (e)=>e.length < 2 ? `0${e}` : e,
        readUTF8 (t1, r, i) {
            let o, a = "";
            for(let o = 0; o < i; o++)a += `%${e.pad(t1[r + o].toString(16))}`;
            try {
                o = decodeURIComponent(a);
            } catch (o) {
                return e.readASCII(t1, r, i);
            }
            return o;
        }
    };
    function decodeImage(t1, r, i, o) {
        const a = r * i, s = _getBPP(o), f = Math.ceil(r * s / 8), l = new Uint8Array(4 * a), c = new Uint32Array(l.buffer), { ctype: u } = o, { depth: h } = o, d = e.readUshort;
        if (6 == u) {
            const e = a << 2;
            if (8 == h) for(var A = 0; A < e; A += 4)l[A] = t1[A], l[A + 1] = t1[A + 1], l[A + 2] = t1[A + 2], l[A + 3] = t1[A + 3];
            if (16 == h) for(A = 0; A < e; A++)l[A] = t1[A << 1];
        } else if (2 == u) {
            const e = o.tabs.tRNS;
            if (null == e) {
                if (8 == h) for(A = 0; A < a; A++){
                    var g = 3 * A;
                    c[A] = 255 << 24 | t1[g + 2] << 16 | t1[g + 1] << 8 | t1[g];
                }
                if (16 == h) for(A = 0; A < a; A++){
                    g = 6 * A;
                    c[A] = 255 << 24 | t1[g + 4] << 16 | t1[g + 2] << 8 | t1[g];
                }
            } else {
                var p = e[0];
                const r = e[1], i = e[2];
                if (8 == h) for(A = 0; A < a; A++){
                    var m = A << 2;
                    g = 3 * A;
                    c[A] = 255 << 24 | t1[g + 2] << 16 | t1[g + 1] << 8 | t1[g], t1[g] == p && t1[g + 1] == r && t1[g + 2] == i && (l[m + 3] = 0);
                }
                if (16 == h) for(A = 0; A < a; A++){
                    m = A << 2, g = 6 * A;
                    c[A] = 255 << 24 | t1[g + 4] << 16 | t1[g + 2] << 8 | t1[g], d(t1, g) == p && d(t1, g + 2) == r && d(t1, g + 4) == i && (l[m + 3] = 0);
                }
            }
        } else if (3 == u) {
            const e = o.tabs.PLTE, s = o.tabs.tRNS, c = s ? s.length : 0;
            if (1 == h) for(var w = 0; w < i; w++){
                var v = w * f, b = w * r;
                for(A = 0; A < r; A++){
                    m = b + A << 2;
                    var y = 3 * (E = t1[v + (A >> 3)] >> 7 - ((7 & A) << 0) & 1);
                    l[m] = e[y], l[m + 1] = e[y + 1], l[m + 2] = e[y + 2], l[m + 3] = E < c ? s[E] : 255;
                }
            }
            if (2 == h) for(w = 0; w < i; w++)for(v = w * f, b = w * r, A = 0; A < r; A++){
                m = b + A << 2, y = 3 * (E = t1[v + (A >> 2)] >> 6 - ((3 & A) << 1) & 3);
                l[m] = e[y], l[m + 1] = e[y + 1], l[m + 2] = e[y + 2], l[m + 3] = E < c ? s[E] : 255;
            }
            if (4 == h) for(w = 0; w < i; w++)for(v = w * f, b = w * r, A = 0; A < r; A++){
                m = b + A << 2, y = 3 * (E = t1[v + (A >> 1)] >> 4 - ((1 & A) << 2) & 15);
                l[m] = e[y], l[m + 1] = e[y + 1], l[m + 2] = e[y + 2], l[m + 3] = E < c ? s[E] : 255;
            }
            if (8 == h) for(A = 0; A < a; A++){
                var E;
                m = A << 2, y = 3 * (E = t1[A]);
                l[m] = e[y], l[m + 1] = e[y + 1], l[m + 2] = e[y + 2], l[m + 3] = E < c ? s[E] : 255;
            }
        } else if (4 == u) {
            if (8 == h) for(A = 0; A < a; A++){
                m = A << 2;
                var F = t1[_ = A << 1];
                l[m] = F, l[m + 1] = F, l[m + 2] = F, l[m + 3] = t1[_ + 1];
            }
            if (16 == h) for(A = 0; A < a; A++){
                var _;
                m = A << 2, F = t1[_ = A << 2];
                l[m] = F, l[m + 1] = F, l[m + 2] = F, l[m + 3] = t1[_ + 2];
            }
        } else if (0 == u) for(p = o.tabs.tRNS ? o.tabs.tRNS : -1, w = 0; w < i; w++){
            const e = w * f, i = w * r;
            if (1 == h) for(var B = 0; B < r; B++){
                var U = (F = 255 * (t1[e + (B >>> 3)] >>> 7 - (7 & B) & 1)) == 255 * p ? 0 : 255;
                c[i + B] = U << 24 | F << 16 | F << 8 | F;
            }
            else if (2 == h) for(B = 0; B < r; B++){
                U = (F = 85 * (t1[e + (B >>> 2)] >>> 6 - ((3 & B) << 1) & 3)) == 85 * p ? 0 : 255;
                c[i + B] = U << 24 | F << 16 | F << 8 | F;
            }
            else if (4 == h) for(B = 0; B < r; B++){
                U = (F = 17 * (t1[e + (B >>> 1)] >>> 4 - ((1 & B) << 2) & 15)) == 17 * p ? 0 : 255;
                c[i + B] = U << 24 | F << 16 | F << 8 | F;
            }
            else if (8 == h) for(B = 0; B < r; B++){
                U = (F = t1[e + B]) == p ? 0 : 255;
                c[i + B] = U << 24 | F << 16 | F << 8 | F;
            }
            else if (16 == h) for(B = 0; B < r; B++){
                F = t1[e + (B << 1)], U = d(t1, e + (B << 1)) == p ? 0 : 255;
                c[i + B] = U << 24 | F << 16 | F << 8 | F;
            }
        }
        return l;
    }
    function _decompress(e, r, i, o) {
        const a = _getBPP(e), s = Math.ceil(i * a / 8), f = new Uint8Array((s + 1 + e.interlace) * o);
        return r = e.tabs.CgBI ? t1(r, f) : _inflate(r, f), 0 == e.interlace ? r = _filterZero(r, e, 0, i, o) : 1 == e.interlace && (r = function _readInterlace(e, t1) {
            const r = t1.width, i = t1.height, o = _getBPP(t1), a = o >> 3, s = Math.ceil(r * o / 8), f = new Uint8Array(i * s);
            let l = 0;
            const c = [
                0,
                0,
                4,
                0,
                2,
                0,
                1
            ], u = [
                0,
                4,
                0,
                2,
                0,
                1,
                0
            ], h = [
                8,
                8,
                8,
                4,
                4,
                2,
                2
            ], d = [
                8,
                8,
                4,
                4,
                2,
                2,
                1
            ];
            let A = 0;
            for(; A < 7;){
                const p = h[A], m = d[A];
                let w = 0, v = 0, b = c[A];
                for(; b < i;)b += p, v++;
                let y = u[A];
                for(; y < r;)y += m, w++;
                const E = Math.ceil(w * o / 8);
                _filterZero(e, t1, l, w, v);
                let F = 0, _ = c[A];
                for(; _ < i;){
                    let t1 = u[A], i = l + F * E << 3;
                    for(; t1 < r;){
                        var g;
                        if (1 == o) g = (g = e[i >> 3]) >> 7 - (7 & i) & 1, f[_ * s + (t1 >> 3)] |= g << 7 - ((7 & t1) << 0);
                        if (2 == o) g = (g = e[i >> 3]) >> 6 - (7 & i) & 3, f[_ * s + (t1 >> 2)] |= g << 6 - ((3 & t1) << 1);
                        if (4 == o) g = (g = e[i >> 3]) >> 4 - (7 & i) & 15, f[_ * s + (t1 >> 1)] |= g << 4 - ((1 & t1) << 2);
                        if (o >= 8) {
                            const r = _ * s + t1 * a;
                            for(let t1 = 0; t1 < a; t1++)f[r + t1] = e[(i >> 3) + t1];
                        }
                        i += o, t1 += m;
                    }
                    F++, _ += p;
                }
                w * v != 0 && (l += v * (1 + E)), A += 1;
            }
            return f;
        }(r, e)), r;
    }
    function _inflate(e, r) {
        return t1(new Uint8Array(e.buffer, 2, e.length - 6), r);
    }
    var t1 = function() {
        const e = {
            H: {}
        };
        return e.H.N = function(t1, r) {
            const i = Uint8Array;
            let o, a, s = 0, f = 0, l = 0, c = 0, u = 0, h = 0, d = 0, A = 0, g = 0;
            if (3 == t1[0] && 0 == t1[1]) return r || new i(0);
            const p = e.H, m = p.b, w = p.e, v = p.R, b = p.n, y = p.A, E = p.Z, F = p.m, _ = null == r;
            for(_ && (r = new i(t1.length >>> 2 << 5)); 0 == s;)if (s = m(t1, g, 1), f = m(t1, g + 1, 2), g += 3, 0 != f) {
                if (_ && (r = e.H.W(r, A + (1 << 17))), 1 == f && (o = F.J, a = F.h, h = 511, d = 31), 2 == f) {
                    l = w(t1, g, 5) + 257, c = w(t1, g + 5, 5) + 1, u = w(t1, g + 10, 4) + 4, g += 14;
                    let e = 1;
                    for(var B = 0; B < 38; B += 2)F.Q[B] = 0, F.Q[B + 1] = 0;
                    for(B = 0; B < u; B++){
                        const r = w(t1, g + 3 * B, 3);
                        F.Q[1 + (F.X[B] << 1)] = r, r > e && (e = r);
                    }
                    g += 3 * u, b(F.Q, e), y(F.Q, e, F.u), o = F.w, a = F.d, g = v(F.u, (1 << e) - 1, l + c, t1, g, F.v);
                    const r = p.V(F.v, 0, l, F.C);
                    h = (1 << r) - 1;
                    const i = p.V(F.v, l, c, F.D);
                    d = (1 << i) - 1, b(F.C, r), y(F.C, r, o), b(F.D, i), y(F.D, i, a);
                }
                for(;;){
                    const e = o[E(t1, g) & h];
                    g += 15 & e;
                    const i = e >>> 4;
                    if (i >>> 8 == 0) r[A++] = i;
                    else {
                        if (256 == i) break;
                        {
                            let e = A + i - 254;
                            if (i > 264) {
                                const r = F.q[i - 257];
                                e = A + (r >>> 3) + w(t1, g, 7 & r), g += 7 & r;
                            }
                            const o = a[E(t1, g) & d];
                            g += 15 & o;
                            const s = o >>> 4, f = F.c[s], l = (f >>> 4) + m(t1, g, 15 & f);
                            for(g += 15 & f; A < e;)r[A] = r[A++ - l], r[A] = r[A++ - l], r[A] = r[A++ - l], r[A] = r[A++ - l];
                            A = e;
                        }
                    }
                }
            } else {
                0 != (7 & g) && (g += 8 - (7 & g));
                const o = 4 + (g >>> 3), a = t1[o - 4] | t1[o - 3] << 8;
                _ && (r = e.H.W(r, A + a)), r.set(new i(t1.buffer, t1.byteOffset + o, a), A), g = o + a << 3, A += a;
            }
            return r.length == A ? r : r.slice(0, A);
        }, e.H.W = function(e, t1) {
            const r = e.length;
            if (t1 <= r) return e;
            const i = new Uint8Array(r << 1);
            return i.set(e, 0), i;
        }, e.H.R = function(t1, r, i, o, a, s) {
            const f = e.H.e, l = e.H.Z;
            let c = 0;
            for(; c < i;){
                const e = t1[l(o, a) & r];
                a += 15 & e;
                const i = e >>> 4;
                if (i <= 15) s[c] = i, c++;
                else {
                    let e = 0, t1 = 0;
                    16 == i ? (t1 = 3 + f(o, a, 2), a += 2, e = s[c - 1]) : 17 == i ? (t1 = 3 + f(o, a, 3), a += 3) : 18 == i && (t1 = 11 + f(o, a, 7), a += 7);
                    const r = c + t1;
                    for(; c < r;)s[c] = e, c++;
                }
            }
            return a;
        }, e.H.V = function(e, t1, r, i) {
            let o = 0, a = 0;
            const s = i.length >>> 1;
            for(; a < r;){
                const r = e[a + t1];
                i[a << 1] = 0, i[1 + (a << 1)] = r, r > o && (o = r), a++;
            }
            for(; a < s;)i[a << 1] = 0, i[1 + (a << 1)] = 0, a++;
            return o;
        }, e.H.n = function(t1, r) {
            const i = e.H.m, o = t1.length;
            let a, s, f;
            let l;
            const c = i.j;
            for(var u = 0; u <= r; u++)c[u] = 0;
            for(u = 1; u < o; u += 2)c[t1[u]]++;
            const h = i.K;
            for(a = 0, c[0] = 0, s = 1; s <= r; s++)a = a + c[s - 1] << 1, h[s] = a;
            for(f = 0; f < o; f += 2)l = t1[f + 1], 0 != l && (t1[f] = h[l], h[l]++);
        }, e.H.A = function(t1, r, i) {
            const o = t1.length, a = e.H.m.r;
            for(let e = 0; e < o; e += 2)if (0 != t1[e + 1]) {
                const o = e >> 1, s = t1[e + 1], f = o << 4 | s, l = r - s;
                let c = t1[e] << l;
                const u = c + (1 << l);
                for(; c != u;){
                    i[a[c] >>> 15 - r] = f, c++;
                }
            }
        }, e.H.l = function(t1, r) {
            const i = e.H.m.r, o = 15 - r;
            for(let e = 0; e < t1.length; e += 2){
                const a = t1[e] << r - t1[e + 1];
                t1[e] = i[a] >>> o;
            }
        }, e.H.M = function(e, t1, r) {
            r <<= 7 & t1;
            const i = t1 >>> 3;
            e[i] |= r, e[i + 1] |= r >>> 8;
        }, e.H.I = function(e, t1, r) {
            r <<= 7 & t1;
            const i = t1 >>> 3;
            e[i] |= r, e[i + 1] |= r >>> 8, e[i + 2] |= r >>> 16;
        }, e.H.e = function(e, t1, r) {
            return (e[t1 >>> 3] | e[1 + (t1 >>> 3)] << 8) >>> (7 & t1) & (1 << r) - 1;
        }, e.H.b = function(e, t1, r) {
            return (e[t1 >>> 3] | e[1 + (t1 >>> 3)] << 8 | e[2 + (t1 >>> 3)] << 16) >>> (7 & t1) & (1 << r) - 1;
        }, e.H.Z = function(e, t1) {
            return (e[t1 >>> 3] | e[1 + (t1 >>> 3)] << 8 | e[2 + (t1 >>> 3)] << 16) >>> (7 & t1);
        }, e.H.i = function(e, t1) {
            return (e[t1 >>> 3] | e[1 + (t1 >>> 3)] << 8 | e[2 + (t1 >>> 3)] << 16 | e[3 + (t1 >>> 3)] << 24) >>> (7 & t1);
        }, e.H.m = function() {
            const e = Uint16Array, t1 = Uint32Array;
            return {
                K: new e(16),
                j: new e(16),
                X: [
                    16,
                    17,
                    18,
                    0,
                    8,
                    7,
                    9,
                    6,
                    10,
                    5,
                    11,
                    4,
                    12,
                    3,
                    13,
                    2,
                    14,
                    1,
                    15
                ],
                S: [
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    13,
                    15,
                    17,
                    19,
                    23,
                    27,
                    31,
                    35,
                    43,
                    51,
                    59,
                    67,
                    83,
                    99,
                    115,
                    131,
                    163,
                    195,
                    227,
                    258,
                    999,
                    999,
                    999
                ],
                T: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    2,
                    2,
                    3,
                    3,
                    3,
                    3,
                    4,
                    4,
                    4,
                    4,
                    5,
                    5,
                    5,
                    5,
                    0,
                    0,
                    0,
                    0
                ],
                q: new e(32),
                p: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    7,
                    9,
                    13,
                    17,
                    25,
                    33,
                    49,
                    65,
                    97,
                    129,
                    193,
                    257,
                    385,
                    513,
                    769,
                    1025,
                    1537,
                    2049,
                    3073,
                    4097,
                    6145,
                    8193,
                    12289,
                    16385,
                    24577,
                    65535,
                    65535
                ],
                z: [
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    2,
                    2,
                    3,
                    3,
                    4,
                    4,
                    5,
                    5,
                    6,
                    6,
                    7,
                    7,
                    8,
                    8,
                    9,
                    9,
                    10,
                    10,
                    11,
                    11,
                    12,
                    12,
                    13,
                    13,
                    0,
                    0
                ],
                c: new t1(32),
                J: new e(512),
                _: [],
                h: new e(32),
                $: [],
                w: new e(32768),
                C: [],
                v: [],
                d: new e(32768),
                D: [],
                u: new e(512),
                Q: [],
                r: new e(32768),
                s: new t1(286),
                Y: new t1(30),
                a: new t1(19),
                t: new t1(15e3),
                k: new e(65536),
                g: new e(32768)
            };
        }(), function() {
            const t1 = e.H.m;
            for(var r = 0; r < 32768; r++){
                let e = r;
                e = (2863311530 & e) >>> 1 | (1431655765 & e) << 1, e = (3435973836 & e) >>> 2 | (858993459 & e) << 2, e = (4042322160 & e) >>> 4 | (252645135 & e) << 4, e = (4278255360 & e) >>> 8 | (16711935 & e) << 8, t1.r[r] = (e >>> 16 | e << 16) >>> 17;
            }
            function n(e, t1, r) {
                for(; 0 != t1--;)e.push(0, r);
            }
            for(r = 0; r < 32; r++)t1.q[r] = t1.S[r] << 3 | t1.T[r], t1.c[r] = t1.p[r] << 4 | t1.z[r];
            n(t1._, 144, 8), n(t1._, 112, 9), n(t1._, 24, 7), n(t1._, 8, 8), e.H.n(t1._, 9), e.H.A(t1._, 9, t1.J), e.H.l(t1._, 9), n(t1.$, 32, 5), e.H.n(t1.$, 5), e.H.A(t1.$, 5, t1.h), e.H.l(t1.$, 5), n(t1.Q, 19, 0), n(t1.C, 286, 0), n(t1.D, 30, 0), n(t1.v, 320, 0);
        }(), e.H.N;
    }();
    function _getBPP(e) {
        return [
            1,
            null,
            3,
            1,
            2,
            null,
            4
        ][e.ctype] * e.depth;
    }
    function _filterZero(e, t1, r, i, o) {
        let a = _getBPP(t1);
        const s = Math.ceil(i * a / 8);
        let f, l;
        a = Math.ceil(a / 8);
        let c = e[r], u = 0;
        if (c > 1 && (e[r] = [
            0,
            0,
            1
        ][c - 2]), 3 == c) for(u = a; u < s; u++)e[u + 1] = e[u + 1] + (e[u + 1 - a] >>> 1) & 255;
        for(let t1 = 0; t1 < o; t1++)if (f = r + t1 * s, l = f + t1 + 1, c = e[l - 1], u = 0, 0 == c) for(; u < s; u++)e[f + u] = e[l + u];
        else if (1 == c) {
            for(; u < a; u++)e[f + u] = e[l + u];
            for(; u < s; u++)e[f + u] = e[l + u] + e[f + u - a];
        } else if (2 == c) for(; u < s; u++)e[f + u] = e[l + u] + e[f + u - s];
        else if (3 == c) {
            for(; u < a; u++)e[f + u] = e[l + u] + (e[f + u - s] >>> 1);
            for(; u < s; u++)e[f + u] = e[l + u] + (e[f + u - s] + e[f + u - a] >>> 1);
        } else {
            for(; u < a; u++)e[f + u] = e[l + u] + _paeth(0, e[f + u - s], 0);
            for(; u < s; u++)e[f + u] = e[l + u] + _paeth(e[f + u - a], e[f + u - s], e[f + u - a - s]);
        }
        return e;
    }
    function _paeth(e, t1, r) {
        const i = e + t1 - r, o = i - e, a = i - t1, s = i - r;
        return o * o <= a * a && o * o <= s * s ? e : a * a <= s * s ? t1 : r;
    }
    function _IHDR(t1, r, i) {
        i.width = e.readUint(t1, r), r += 4, i.height = e.readUint(t1, r), r += 4, i.depth = t1[r], r++, i.ctype = t1[r], r++, i.compress = t1[r], r++, i.filter = t1[r], r++, i.interlace = t1[r], r++;
    }
    function _copyTile(e, t1, r, i, o, a, s, f, l) {
        const c = Math.min(t1, o), u = Math.min(r, a);
        let h = 0, d = 0;
        for(let r = 0; r < u; r++)for(let a = 0; a < c; a++)if (s >= 0 && f >= 0 ? (h = r * t1 + a << 2, d = (f + r) * o + s + a << 2) : (h = (-f + r) * t1 - s + a << 2, d = r * o + a << 2), 0 == l) i[d] = e[h], i[d + 1] = e[h + 1], i[d + 2] = e[h + 2], i[d + 3] = e[h + 3];
        else if (1 == l) {
            var A = e[h + 3] * (1 / 255), g = e[h] * A, p = e[h + 1] * A, m = e[h + 2] * A, w = i[d + 3] * (1 / 255), v = i[d] * w, b = i[d + 1] * w, y = i[d + 2] * w;
            const t1 = 1 - A, r = A + w * t1, o = 0 == r ? 0 : 1 / r;
            i[d + 3] = 255 * r, i[d + 0] = (g + v * t1) * o, i[d + 1] = (p + b * t1) * o, i[d + 2] = (m + y * t1) * o;
        } else if (2 == l) {
            A = e[h + 3], g = e[h], p = e[h + 1], m = e[h + 2], w = i[d + 3], v = i[d], b = i[d + 1], y = i[d + 2];
            A == w && g == v && p == b && m == y ? (i[d] = 0, i[d + 1] = 0, i[d + 2] = 0, i[d + 3] = 0) : (i[d] = g, i[d + 1] = p, i[d + 2] = m, i[d + 3] = A);
        } else if (3 == l) {
            A = e[h + 3], g = e[h], p = e[h + 1], m = e[h + 2], w = i[d + 3], v = i[d], b = i[d + 1], y = i[d + 2];
            if (A == w && g == v && p == b && m == y) continue;
            if (A < 220 && w > 20) return !1;
        }
        return !0;
    }
    return {
        decode: function decode(r) {
            const i = new Uint8Array(r);
            let o = 8;
            const a = e, s = a.readUshort, f = a.readUint, l = {
                tabs: {},
                frames: []
            }, c = new Uint8Array(i.length);
            let u, h = 0, d = 0;
            const A = [
                137,
                80,
                78,
                71,
                13,
                10,
                26,
                10
            ];
            for(var g = 0; g < 8; g++)if (i[g] != A[g]) throw "The input is not a PNG file!";
            for(; o < i.length;){
                const e = a.readUint(i, o);
                o += 4;
                const r = a.readASCII(i, o, 4);
                if (o += 4, "IHDR" == r) _IHDR(i, o, l);
                else if ("iCCP" == r) {
                    for(var p = o; 0 != i[p];)p++;
                    a.readASCII(i, o, p - o), i[p + 1];
                    const s = i.slice(p + 2, o + e);
                    let f = null;
                    try {
                        f = _inflate(s);
                    } catch (e) {
                        f = t1(s);
                    }
                    l.tabs[r] = f;
                } else if ("CgBI" == r) l.tabs[r] = i.slice(o, o + 4);
                else if ("IDAT" == r) {
                    for(g = 0; g < e; g++)c[h + g] = i[o + g];
                    h += e;
                } else if ("acTL" == r) l.tabs[r] = {
                    num_frames: f(i, o),
                    num_plays: f(i, o + 4)
                }, u = new Uint8Array(i.length);
                else if ("fcTL" == r) {
                    if (0 != d) (E = l.frames[l.frames.length - 1]).data = _decompress(l, u.slice(0, d), E.rect.width, E.rect.height), d = 0;
                    const e = {
                        x: f(i, o + 12),
                        y: f(i, o + 16),
                        width: f(i, o + 4),
                        height: f(i, o + 8)
                    };
                    let t1 = s(i, o + 22);
                    t1 = s(i, o + 20) / (0 == t1 ? 100 : t1);
                    const r = {
                        rect: e,
                        delay: Math.round(1e3 * t1),
                        dispose: i[o + 24],
                        blend: i[o + 25]
                    };
                    l.frames.push(r);
                } else if ("fdAT" == r) {
                    for(g = 0; g < e - 4; g++)u[d + g] = i[o + g + 4];
                    d += e - 4;
                } else if ("pHYs" == r) l.tabs[r] = [
                    a.readUint(i, o),
                    a.readUint(i, o + 4),
                    i[o + 8]
                ];
                else if ("cHRM" == r) {
                    l.tabs[r] = [];
                    for(g = 0; g < 8; g++)l.tabs[r].push(a.readUint(i, o + 4 * g));
                } else if ("tEXt" == r || "zTXt" == r) {
                    null == l.tabs[r] && (l.tabs[r] = {});
                    var m = a.nextZero(i, o), w = a.readASCII(i, o, m - o), v = o + e - m - 1;
                    if ("tEXt" == r) y = a.readASCII(i, m + 1, v);
                    else {
                        var b = _inflate(i.slice(m + 2, m + 2 + v));
                        y = a.readUTF8(b, 0, b.length);
                    }
                    l.tabs[r][w] = y;
                } else if ("iTXt" == r) {
                    null == l.tabs[r] && (l.tabs[r] = {});
                    m = 0, p = o;
                    m = a.nextZero(i, p);
                    w = a.readASCII(i, p, m - p);
                    const t1 = i[p = m + 1];
                    var y;
                    i[p + 1], p += 2, m = a.nextZero(i, p), a.readASCII(i, p, m - p), p = m + 1, m = a.nextZero(i, p), a.readUTF8(i, p, m - p);
                    v = e - ((p = m + 1) - o);
                    if (0 == t1) y = a.readUTF8(i, p, v);
                    else {
                        b = _inflate(i.slice(p, p + v));
                        y = a.readUTF8(b, 0, b.length);
                    }
                    l.tabs[r][w] = y;
                } else if ("PLTE" == r) l.tabs[r] = a.readBytes(i, o, e);
                else if ("hIST" == r) {
                    const e = l.tabs.PLTE.length / 3;
                    l.tabs[r] = [];
                    for(g = 0; g < e; g++)l.tabs[r].push(s(i, o + 2 * g));
                } else if ("tRNS" == r) 3 == l.ctype ? l.tabs[r] = a.readBytes(i, o, e) : 0 == l.ctype ? l.tabs[r] = s(i, o) : 2 == l.ctype && (l.tabs[r] = [
                    s(i, o),
                    s(i, o + 2),
                    s(i, o + 4)
                ]);
                else if ("gAMA" == r) l.tabs[r] = a.readUint(i, o) / 1e5;
                else if ("sRGB" == r) l.tabs[r] = i[o];
                else if ("bKGD" == r) 0 == l.ctype || 4 == l.ctype ? l.tabs[r] = [
                    s(i, o)
                ] : 2 == l.ctype || 6 == l.ctype ? l.tabs[r] = [
                    s(i, o),
                    s(i, o + 2),
                    s(i, o + 4)
                ] : 3 == l.ctype && (l.tabs[r] = i[o]);
                else if ("IEND" == r) break;
                o += e, a.readUint(i, o), o += 4;
            }
            var E;
            return 0 != d && ((E = l.frames[l.frames.length - 1]).data = _decompress(l, u.slice(0, d), E.rect.width, E.rect.height)), l.data = _decompress(l, c, l.width, l.height), delete l.compress, delete l.interlace, delete l.filter, l;
        },
        toRGBA8: function toRGBA8(e) {
            const t1 = e.width, r = e.height;
            if (null == e.tabs.acTL) return [
                decodeImage(e.data, t1, r, e).buffer
            ];
            const i = [];
            null == e.frames[0].data && (e.frames[0].data = e.data);
            const o = t1 * r * 4, a = new Uint8Array(o), s = new Uint8Array(o), f = new Uint8Array(o);
            for(let c = 0; c < e.frames.length; c++){
                const u = e.frames[c], h = u.rect.x, d = u.rect.y, A = u.rect.width, g = u.rect.height, p = decodeImage(u.data, A, g, e);
                if (0 != c) for(var l = 0; l < o; l++)f[l] = a[l];
                if (0 == u.blend ? _copyTile(p, A, g, a, t1, r, h, d, 0) : 1 == u.blend && _copyTile(p, A, g, a, t1, r, h, d, 1), i.push(a.buffer.slice(0)), 0 == u.dispose) ;
                else if (1 == u.dispose) _copyTile(s, A, g, a, t1, r, h, d, 0);
                else if (2 == u.dispose) for(l = 0; l < o; l++)a[l] = f[l];
            }
            return i;
        },
        _paeth: _paeth,
        _copyTile: _copyTile,
        _bin: e
    };
}();
!function() {
    const { _copyTile: e } = UPNG, { _bin: t1 } = UPNG, r = UPNG._paeth;
    var i = {
        table: function() {
            const e = new Uint32Array(256);
            for(let t1 = 0; t1 < 256; t1++){
                let r = t1;
                for(let e = 0; e < 8; e++)1 & r ? r = 3988292384 ^ r >>> 1 : r >>>= 1;
                e[t1] = r;
            }
            return e;
        }(),
        update (e, t1, r, o) {
            for(let a = 0; a < o; a++)e = i.table[255 & (e ^ t1[r + a])] ^ e >>> 8;
            return e;
        },
        crc: (e, t1, r)=>4294967295 ^ i.update(4294967295, e, t1, r)
    };
    function addErr(e, t1, r, i) {
        t1[r] += e[0] * i >> 4, t1[r + 1] += e[1] * i >> 4, t1[r + 2] += e[2] * i >> 4, t1[r + 3] += e[3] * i >> 4;
    }
    function N(e) {
        return Math.max(0, Math.min(255, e));
    }
    function D(e, t1) {
        const r = e[0] - t1[0], i = e[1] - t1[1], o = e[2] - t1[2], a = e[3] - t1[3];
        return r * r + i * i + o * o + a * a;
    }
    function dither(e, t1, r, i, o, a, s) {
        null == s && (s = 1);
        const f = i.length, l = [];
        for(var c = 0; c < f; c++){
            const e = i[c];
            l.push([
                e >>> 0 & 255,
                e >>> 8 & 255,
                e >>> 16 & 255,
                e >>> 24 & 255
            ]);
        }
        for(c = 0; c < f; c++){
            let e = 4294967295;
            for(var u = 0, h = 0; h < f; h++){
                var d = D(l[c], l[h]);
                h != c && d < e && (e = d, u = h);
            }
        }
        const A = new Uint32Array(o.buffer), g = new Int16Array(t1 * r * 4), p = [
            0,
            8,
            2,
            10,
            12,
            4,
            14,
            6,
            3,
            11,
            1,
            9,
            15,
            7,
            13,
            5
        ];
        for(c = 0; c < p.length; c++)p[c] = 255 * ((p[c] + .5) / 16 - .5);
        for(let o = 0; o < r; o++)for(let w = 0; w < t1; w++){
            var m;
            c = 4 * (o * t1 + w);
            if (2 != s) m = [
                N(e[c] + g[c]),
                N(e[c + 1] + g[c + 1]),
                N(e[c + 2] + g[c + 2]),
                N(e[c + 3] + g[c + 3])
            ];
            else {
                d = p[4 * (3 & o) + (3 & w)];
                m = [
                    N(e[c] + d),
                    N(e[c + 1] + d),
                    N(e[c + 2] + d),
                    N(e[c + 3] + d)
                ];
            }
            u = 0;
            let v = 16777215;
            for(h = 0; h < f; h++){
                const e = D(m, l[h]);
                e < v && (v = e, u = h);
            }
            const b = l[u], y = [
                m[0] - b[0],
                m[1] - b[1],
                m[2] - b[2],
                m[3] - b[3]
            ];
            1 == s && (w != t1 - 1 && addErr(y, g, c + 4, 7), o != r - 1 && (0 != w && addErr(y, g, c + 4 * t1 - 4, 3), addErr(y, g, c + 4 * t1, 5), w != t1 - 1 && addErr(y, g, c + 4 * t1 + 4, 1))), a[c >> 2] = u, A[c >> 2] = i[u];
        }
    }
    function _main(e, r, o, a, s) {
        null == s && (s = {});
        const { crc: f } = i, l = t1.writeUint, c = t1.writeUshort, u = t1.writeASCII;
        let h = 8;
        const d = e.frames.length > 1;
        let A, g = !1, p = 33 + (d ? 20 : 0);
        if (null != s.sRGB && (p += 13), null != s.pHYs && (p += 21), null != s.iCCP && (A = pako.deflate(s.iCCP), p += 21 + A.length + 4), 3 == e.ctype) {
            for(var m = e.plte.length, w = 0; w < m; w++)e.plte[w] >>> 24 != 255 && (g = !0);
            p += 8 + 3 * m + 4 + (g ? 8 + 1 * m + 4 : 0);
        }
        for(var v = 0; v < e.frames.length; v++){
            d && (p += 38), p += (F = e.frames[v]).cimg.length + 12, 0 != v && (p += 4);
        }
        p += 12;
        const b = new Uint8Array(p), y = [
            137,
            80,
            78,
            71,
            13,
            10,
            26,
            10
        ];
        for(w = 0; w < 8; w++)b[w] = y[w];
        if (l(b, h, 13), h += 4, u(b, h, "IHDR"), h += 4, l(b, h, r), h += 4, l(b, h, o), h += 4, b[h] = e.depth, h++, b[h] = e.ctype, h++, b[h] = 0, h++, b[h] = 0, h++, b[h] = 0, h++, l(b, h, f(b, h - 17, 17)), h += 4, null != s.sRGB && (l(b, h, 1), h += 4, u(b, h, "sRGB"), h += 4, b[h] = s.sRGB, h++, l(b, h, f(b, h - 5, 5)), h += 4), null != s.iCCP) {
            const e = 13 + A.length;
            l(b, h, e), h += 4, u(b, h, "iCCP"), h += 4, u(b, h, "ICC profile"), h += 11, h += 2, b.set(A, h), h += A.length, l(b, h, f(b, h - (e + 4), e + 4)), h += 4;
        }
        if (null != s.pHYs && (l(b, h, 9), h += 4, u(b, h, "pHYs"), h += 4, l(b, h, s.pHYs[0]), h += 4, l(b, h, s.pHYs[1]), h += 4, b[h] = s.pHYs[2], h++, l(b, h, f(b, h - 13, 13)), h += 4), d && (l(b, h, 8), h += 4, u(b, h, "acTL"), h += 4, l(b, h, e.frames.length), h += 4, l(b, h, null != s.loop ? s.loop : 0), h += 4, l(b, h, f(b, h - 12, 12)), h += 4), 3 == e.ctype) {
            l(b, h, 3 * (m = e.plte.length)), h += 4, u(b, h, "PLTE"), h += 4;
            for(w = 0; w < m; w++){
                const t1 = 3 * w, r = e.plte[w], i = 255 & r, o = r >>> 8 & 255, a = r >>> 16 & 255;
                b[h + t1 + 0] = i, b[h + t1 + 1] = o, b[h + t1 + 2] = a;
            }
            if (h += 3 * m, l(b, h, f(b, h - 3 * m - 4, 3 * m + 4)), h += 4, g) {
                l(b, h, m), h += 4, u(b, h, "tRNS"), h += 4;
                for(w = 0; w < m; w++)b[h + w] = e.plte[w] >>> 24 & 255;
                h += m, l(b, h, f(b, h - m - 4, m + 4)), h += 4;
            }
        }
        let E = 0;
        for(v = 0; v < e.frames.length; v++){
            var F = e.frames[v];
            d && (l(b, h, 26), h += 4, u(b, h, "fcTL"), h += 4, l(b, h, E++), h += 4, l(b, h, F.rect.width), h += 4, l(b, h, F.rect.height), h += 4, l(b, h, F.rect.x), h += 4, l(b, h, F.rect.y), h += 4, c(b, h, a[v]), h += 2, c(b, h, 1e3), h += 2, b[h] = F.dispose, h++, b[h] = F.blend, h++, l(b, h, f(b, h - 30, 30)), h += 4);
            const t1 = F.cimg;
            l(b, h, (m = t1.length) + (0 == v ? 0 : 4)), h += 4;
            const r = h;
            u(b, h, 0 == v ? "IDAT" : "fdAT"), h += 4, 0 != v && (l(b, h, E++), h += 4), b.set(t1, h), h += m, l(b, h, f(b, r, h - r)), h += 4;
        }
        return l(b, h, 0), h += 4, u(b, h, "IEND"), h += 4, l(b, h, f(b, h - 4, 4)), h += 4, b.buffer;
    }
    function compressPNG(e, t1, r) {
        for(let i = 0; i < e.frames.length; i++){
            const o = e.frames[i];
            o.rect.width;
            const a = o.rect.height, s = new Uint8Array(a * o.bpl + a);
            o.cimg = _filterZero(o.img, a, o.bpp, o.bpl, s, t1, r);
        }
    }
    function compress(t1, r, i, o, a) {
        const s = a[0], f = a[1], l = a[2], c = a[3], u = a[4], h = a[5];
        let d = 6, A = 8, g = 255;
        for(var p = 0; p < t1.length; p++){
            const e = new Uint8Array(t1[p]);
            for(var m = e.length, w = 0; w < m; w += 4)g &= e[w + 3];
        }
        const v = 255 != g, b = function framize(t1, r, i, o, a, s) {
            const f = [];
            for(var l = 0; l < t1.length; l++){
                const h = new Uint8Array(t1[l]), A = new Uint32Array(h.buffer);
                var c;
                let g = 0, p = 0, m = r, w = i, v = o ? 1 : 0;
                if (0 != l) {
                    const b = s || o || 1 == l || 0 != f[l - 2].dispose ? 1 : 2;
                    let y = 0, E = 1e9;
                    for(let e = 0; e < b; e++){
                        var u = new Uint8Array(t1[l - 1 - e]);
                        const o = new Uint32Array(t1[l - 1 - e]);
                        let s = r, f = i, c = -1, h = -1;
                        for(let e = 0; e < i; e++)for(let t1 = 0; t1 < r; t1++){
                            A[d = e * r + t1] != o[d] && (t1 < s && (s = t1), t1 > c && (c = t1), e < f && (f = e), e > h && (h = e));
                        }
                        -1 == c && (s = f = c = h = 0), a && (1 == (1 & s) && s--, 1 == (1 & f) && f--);
                        const v = (c - s + 1) * (h - f + 1);
                        v < E && (E = v, y = e, g = s, p = f, m = c - s + 1, w = h - f + 1);
                    }
                    u = new Uint8Array(t1[l - 1 - y]);
                    1 == y && (f[l - 1].dispose = 2), c = new Uint8Array(m * w * 4), e(u, r, i, c, m, w, -g, -p, 0), v = e(h, r, i, c, m, w, -g, -p, 3) ? 1 : 0, 1 == v ? _prepareDiff(h, r, i, c, {
                        x: g,
                        y: p,
                        width: m,
                        height: w
                    }) : e(h, r, i, c, m, w, -g, -p, 0);
                } else c = h.slice(0);
                f.push({
                    rect: {
                        x: g,
                        y: p,
                        width: m,
                        height: w
                    },
                    img: c,
                    blend: v,
                    dispose: 0
                });
            }
            if (o) for(l = 0; l < f.length; l++){
                if (1 == (A = f[l]).blend) continue;
                const e = A.rect, o = f[l - 1].rect, s = Math.min(e.x, o.x), c = Math.min(e.y, o.y), u = {
                    x: s,
                    y: c,
                    width: Math.max(e.x + e.width, o.x + o.width) - s,
                    height: Math.max(e.y + e.height, o.y + o.height) - c
                };
                f[l - 1].dispose = 1, l - 1 != 0 && _updateFrame(t1, r, i, f, l - 1, u, a), _updateFrame(t1, r, i, f, l, u, a);
            }
            let h = 0;
            if (1 != t1.length) for(var d = 0; d < f.length; d++){
                var A;
                h += (A = f[d]).rect.width * A.rect.height;
            }
            return f;
        }(t1, r, i, s, f, l), y = {}, E = [], F = [];
        if (0 != o) {
            const e = [];
            for(w = 0; w < b.length; w++)e.push(b[w].img.buffer);
            const t1 = function concatRGBA(e) {
                let t1 = 0;
                for(var r = 0; r < e.length; r++)t1 += e[r].byteLength;
                const i = new Uint8Array(t1);
                let o = 0;
                for(r = 0; r < e.length; r++){
                    const t1 = new Uint8Array(e[r]), a = t1.length;
                    for(let e = 0; e < a; e += 4){
                        let r = t1[e], a = t1[e + 1], s = t1[e + 2];
                        const f = t1[e + 3];
                        0 == f && (r = a = s = 0), i[o + e] = r, i[o + e + 1] = a, i[o + e + 2] = s, i[o + e + 3] = f;
                    }
                    o += a;
                }
                return i.buffer;
            }(e), r = quantize(t1, o);
            for(w = 0; w < r.plte.length; w++)E.push(r.plte[w].est.rgba);
            let i = 0;
            for(w = 0; w < b.length; w++){
                const e = (B = b[w]).img.length;
                var _ = new Uint8Array(r.inds.buffer, i >> 2, e >> 2);
                F.push(_);
                const t1 = new Uint8Array(r.abuf, i, e);
                h && dither(B.img, B.rect.width, B.rect.height, E, t1, _), B.img.set(t1), i += e;
            }
        } else for(p = 0; p < b.length; p++){
            var B = b[p];
            const e = new Uint32Array(B.img.buffer);
            var U = B.rect.width;
            m = e.length, _ = new Uint8Array(m);
            F.push(_);
            for(w = 0; w < m; w++){
                const t1 = e[w];
                if (0 != w && t1 == e[w - 1]) _[w] = _[w - 1];
                else if (w > U && t1 == e[w - U]) _[w] = _[w - U];
                else {
                    let e = y[t1];
                    if (null == e && (y[t1] = e = E.length, E.push(t1), E.length >= 300)) break;
                    _[w] = e;
                }
            }
        }
        const C = E.length;
        C <= 256 && 0 == u && (A = C <= 2 ? 1 : C <= 4 ? 2 : C <= 16 ? 4 : 8, A = Math.max(A, c));
        for(p = 0; p < b.length; p++){
            (B = b[p]).rect.x, B.rect.y;
            U = B.rect.width;
            const e = B.rect.height;
            let t1 = B.img;
            new Uint32Array(t1.buffer);
            let r = 4 * U, i = 4;
            if (C <= 256 && 0 == u) {
                r = Math.ceil(A * U / 8);
                var I = new Uint8Array(r * e);
                const o = F[p];
                for(let t1 = 0; t1 < e; t1++){
                    w = t1 * r;
                    const e = t1 * U;
                    if (8 == A) for(var Q = 0; Q < U; Q++)I[w + Q] = o[e + Q];
                    else if (4 == A) for(Q = 0; Q < U; Q++)I[w + (Q >> 1)] |= o[e + Q] << 4 - 4 * (1 & Q);
                    else if (2 == A) for(Q = 0; Q < U; Q++)I[w + (Q >> 2)] |= o[e + Q] << 6 - 2 * (3 & Q);
                    else if (1 == A) for(Q = 0; Q < U; Q++)I[w + (Q >> 3)] |= o[e + Q] << 7 - 1 * (7 & Q);
                }
                t1 = I, d = 3, i = 1;
            } else if (0 == v && 1 == b.length) {
                I = new Uint8Array(U * e * 3);
                const o = U * e;
                for(w = 0; w < o; w++){
                    const e = 3 * w, r = 4 * w;
                    I[e] = t1[r], I[e + 1] = t1[r + 1], I[e + 2] = t1[r + 2];
                }
                t1 = I, d = 2, i = 3, r = 3 * U;
            }
            B.img = t1, B.bpl = r, B.bpp = i;
        }
        return {
            ctype: d,
            depth: A,
            plte: E,
            frames: b
        };
    }
    function _updateFrame(t1, r, i, o, a, s, f) {
        const l = Uint8Array, c = Uint32Array, u = new l(t1[a - 1]), h = new c(t1[a - 1]), d = a + 1 < t1.length ? new l(t1[a + 1]) : null, A = new l(t1[a]), g = new c(A.buffer);
        let p = r, m = i, w = -1, v = -1;
        for(let e = 0; e < s.height; e++)for(let t1 = 0; t1 < s.width; t1++){
            const i = s.x + t1, f = s.y + e, l = f * r + i, c = g[l];
            0 == c || 0 == o[a - 1].dispose && h[l] == c && (null == d || 0 != d[4 * l + 3]) || (i < p && (p = i), i > w && (w = i), f < m && (m = f), f > v && (v = f));
        }
        -1 == w && (p = m = w = v = 0), f && (1 == (1 & p) && p--, 1 == (1 & m) && m--), s = {
            x: p,
            y: m,
            width: w - p + 1,
            height: v - m + 1
        };
        const b = o[a];
        b.rect = s, b.blend = 1, b.img = new Uint8Array(s.width * s.height * 4), 0 == o[a - 1].dispose ? (e(u, r, i, b.img, s.width, s.height, -s.x, -s.y, 0), _prepareDiff(A, r, i, b.img, s)) : e(A, r, i, b.img, s.width, s.height, -s.x, -s.y, 0);
    }
    function _prepareDiff(t1, r, i, o, a) {
        e(t1, r, i, o, a.width, a.height, -a.x, -a.y, 2);
    }
    function _filterZero(e, t1, r, i, o, a, s) {
        const f = [];
        let l, c = [
            0,
            1,
            2,
            3,
            4
        ];
        -1 != a ? c = [
            a
        ] : (t1 * i > 5e5 || 1 == r) && (c = [
            0
        ]), s && (l = {
            level: 0
        });
        const u = UZIP;
        for(var h = 0; h < c.length; h++){
            for(let a = 0; a < t1; a++)_filterLine(o, e, a, i, r, c[h]);
            f.push(u.deflate(o, l));
        }
        let d, A = 1e9;
        for(h = 0; h < f.length; h++)f[h].length < A && (d = h, A = f[h].length);
        return f[d];
    }
    function _filterLine(e, t1, i, o, a, s) {
        const f = i * o;
        let l = f + i;
        if (e[l] = s, l++, 0 == s) if (o < 500) for(var c = 0; c < o; c++)e[l + c] = t1[f + c];
        else e.set(new Uint8Array(t1.buffer, f, o), l);
        else if (1 == s) {
            for(c = 0; c < a; c++)e[l + c] = t1[f + c];
            for(c = a; c < o; c++)e[l + c] = t1[f + c] - t1[f + c - a] + 256 & 255;
        } else if (0 == i) {
            for(c = 0; c < a; c++)e[l + c] = t1[f + c];
            if (2 == s) for(c = a; c < o; c++)e[l + c] = t1[f + c];
            if (3 == s) for(c = a; c < o; c++)e[l + c] = t1[f + c] - (t1[f + c - a] >> 1) + 256 & 255;
            if (4 == s) for(c = a; c < o; c++)e[l + c] = t1[f + c] - r(t1[f + c - a], 0, 0) + 256 & 255;
        } else {
            if (2 == s) for(c = 0; c < o; c++)e[l + c] = t1[f + c] + 256 - t1[f + c - o] & 255;
            if (3 == s) {
                for(c = 0; c < a; c++)e[l + c] = t1[f + c] + 256 - (t1[f + c - o] >> 1) & 255;
                for(c = a; c < o; c++)e[l + c] = t1[f + c] + 256 - (t1[f + c - o] + t1[f + c - a] >> 1) & 255;
            }
            if (4 == s) {
                for(c = 0; c < a; c++)e[l + c] = t1[f + c] + 256 - r(0, t1[f + c - o], 0) & 255;
                for(c = a; c < o; c++)e[l + c] = t1[f + c] + 256 - r(t1[f + c - a], t1[f + c - o], t1[f + c - a - o]) & 255;
            }
        }
    }
    function quantize(e, t1) {
        const r = new Uint8Array(e), i = r.slice(0), o = new Uint32Array(i.buffer), a = getKDtree(i, t1), s = a[0], f = a[1], l = r.length, c = new Uint8Array(l >> 2);
        let u;
        if (r.length < 2e7) for(var h = 0; h < l; h += 4){
            u = getNearest(s, d = r[h] * (1 / 255), A = r[h + 1] * (1 / 255), g = r[h + 2] * (1 / 255), p = r[h + 3] * (1 / 255)), c[h >> 2] = u.ind, o[h >> 2] = u.est.rgba;
        }
        else for(h = 0; h < l; h += 4){
            var d = r[h] * (1 / 255), A = r[h + 1] * (1 / 255), g = r[h + 2] * (1 / 255), p = r[h + 3] * (1 / 255);
            for(u = s; u.left;)u = planeDst(u.est, d, A, g, p) <= 0 ? u.left : u.right;
            c[h >> 2] = u.ind, o[h >> 2] = u.est.rgba;
        }
        return {
            abuf: i.buffer,
            inds: c,
            plte: f
        };
    }
    function getKDtree(e, t1, r) {
        null == r && (r = 1e-4);
        const i = new Uint32Array(e.buffer), o = {
            i0: 0,
            i1: e.length,
            bst: null,
            est: null,
            tdst: 0,
            left: null,
            right: null
        };
        o.bst = stats(e, o.i0, o.i1), o.est = estats(o.bst);
        const a = [
            o
        ];
        for(; a.length < t1;){
            let t1 = 0, o = 0;
            for(var s = 0; s < a.length; s++)a[s].est.L > t1 && (t1 = a[s].est.L, o = s);
            if (t1 < r) break;
            const f = a[o], l = splitPixels(e, i, f.i0, f.i1, f.est.e, f.est.eMq255);
            if (f.i0 >= l || f.i1 <= l) {
                f.est.L = 0;
                continue;
            }
            const c = {
                i0: f.i0,
                i1: l,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null
            };
            c.bst = stats(e, c.i0, c.i1), c.est = estats(c.bst);
            const u = {
                i0: l,
                i1: f.i1,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null
            };
            u.bst = {
                R: [],
                m: [],
                N: f.bst.N - c.bst.N
            };
            for(s = 0; s < 16; s++)u.bst.R[s] = f.bst.R[s] - c.bst.R[s];
            for(s = 0; s < 4; s++)u.bst.m[s] = f.bst.m[s] - c.bst.m[s];
            u.est = estats(u.bst), f.left = c, f.right = u, a[o] = c, a.push(u);
        }
        a.sort((e, t1)=>t1.bst.N - e.bst.N);
        for(s = 0; s < a.length; s++)a[s].ind = s;
        return [
            o,
            a
        ];
    }
    function getNearest(e, t1, r, i, o) {
        if (null == e.left) return e.tdst = function dist(e, t1, r, i, o) {
            const a = t1 - e[0], s = r - e[1], f = i - e[2], l = o - e[3];
            return a * a + s * s + f * f + l * l;
        }(e.est.q, t1, r, i, o), e;
        const a = planeDst(e.est, t1, r, i, o);
        let s = e.left, f = e.right;
        a > 0 && (s = e.right, f = e.left);
        const l = getNearest(s, t1, r, i, o);
        if (l.tdst <= a * a) return l;
        const c = getNearest(f, t1, r, i, o);
        return c.tdst < l.tdst ? c : l;
    }
    function planeDst(e, t1, r, i, o) {
        const { e: a } = e;
        return a[0] * t1 + a[1] * r + a[2] * i + a[3] * o - e.eMq;
    }
    function splitPixels(e, t1, r, i, o, a) {
        for(i -= 4; r < i;){
            for(; vecDot(e, r, o) <= a;)r += 4;
            for(; vecDot(e, i, o) > a;)i -= 4;
            if (r >= i) break;
            const s = t1[r >> 2];
            t1[r >> 2] = t1[i >> 2], t1[i >> 2] = s, r += 4, i -= 4;
        }
        for(; vecDot(e, r, o) > a;)r -= 4;
        return r + 4;
    }
    function vecDot(e, t1, r) {
        return e[t1] * r[0] + e[t1 + 1] * r[1] + e[t1 + 2] * r[2] + e[t1 + 3] * r[3];
    }
    function stats(e, t1, r) {
        const i = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ], o = [
            0,
            0,
            0,
            0
        ], a = r - t1 >> 2;
        for(let a = t1; a < r; a += 4){
            const t1 = e[a] * (1 / 255), r = e[a + 1] * (1 / 255), s = e[a + 2] * (1 / 255), f = e[a + 3] * (1 / 255);
            o[0] += t1, o[1] += r, o[2] += s, o[3] += f, i[0] += t1 * t1, i[1] += t1 * r, i[2] += t1 * s, i[3] += t1 * f, i[5] += r * r, i[6] += r * s, i[7] += r * f, i[10] += s * s, i[11] += s * f, i[15] += f * f;
        }
        return i[4] = i[1], i[8] = i[2], i[9] = i[6], i[12] = i[3], i[13] = i[7], i[14] = i[11], {
            R: i,
            m: o,
            N: a
        };
    }
    function estats(e) {
        const { R: t1 } = e, { m: r } = e, { N: i } = e, a = r[0], s = r[1], f = r[2], l = r[3], c = 0 == i ? 0 : 1 / i, u = [
            t1[0] - a * a * c,
            t1[1] - a * s * c,
            t1[2] - a * f * c,
            t1[3] - a * l * c,
            t1[4] - s * a * c,
            t1[5] - s * s * c,
            t1[6] - s * f * c,
            t1[7] - s * l * c,
            t1[8] - f * a * c,
            t1[9] - f * s * c,
            t1[10] - f * f * c,
            t1[11] - f * l * c,
            t1[12] - l * a * c,
            t1[13] - l * s * c,
            t1[14] - l * f * c,
            t1[15] - l * l * c
        ], h = u, d = o;
        let A = [
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random()
        ], g = 0, p = 0;
        if (0 != i) for(let e = 0; e < 16 && (A = d.multVec(h, A), p = Math.sqrt(d.dot(A, A)), A = d.sml(1 / p, A), !(0 != e && Math.abs(p - g) < 1e-9)); e++)g = p;
        const m = [
            a * c,
            s * c,
            f * c,
            l * c
        ];
        return {
            Cov: u,
            q: m,
            e: A,
            L: g,
            eMq255: d.dot(d.sml(255, m), A),
            eMq: d.dot(A, m),
            rgba: (Math.round(255 * m[3]) << 24 | Math.round(255 * m[2]) << 16 | Math.round(255 * m[1]) << 8 | Math.round(255 * m[0]) << 0) >>> 0
        };
    }
    var o = {
        multVec: (e, t1)=>[
                e[0] * t1[0] + e[1] * t1[1] + e[2] * t1[2] + e[3] * t1[3],
                e[4] * t1[0] + e[5] * t1[1] + e[6] * t1[2] + e[7] * t1[3],
                e[8] * t1[0] + e[9] * t1[1] + e[10] * t1[2] + e[11] * t1[3],
                e[12] * t1[0] + e[13] * t1[1] + e[14] * t1[2] + e[15] * t1[3]
            ],
        dot: (e, t1)=>e[0] * t1[0] + e[1] * t1[1] + e[2] * t1[2] + e[3] * t1[3],
        sml: (e, t1)=>[
                e * t1[0],
                e * t1[1],
                e * t1[2],
                e * t1[3]
            ]
    };
    UPNG.encode = function encode(e, t1, r, i, o, a, s) {
        null == i && (i = 0), null == s && (s = !1);
        const f = compress(e, t1, r, i, [
            !1,
            !1,
            !1,
            0,
            s,
            !1
        ]);
        return compressPNG(f, -1), _main(f, t1, r, o, a);
    }, UPNG.encodeLL = function encodeLL(e, t1, r, i, o, a, s, f) {
        const l = {
            ctype: 0 + (1 == i ? 0 : 2) + (0 == o ? 0 : 4),
            depth: a,
            frames: []
        }, c = (i + o) * a, u = c * t1;
        for(let i = 0; i < e.length; i++)l.frames.push({
            rect: {
                x: 0,
                y: 0,
                width: t1,
                height: r
            },
            img: new Uint8Array(e[i]),
            blend: 0,
            dispose: 1,
            bpp: Math.ceil(c / 8),
            bpl: Math.ceil(u / 8)
        });
        return compressPNG(l, 0, !0), _main(l, t1, r, s, f);
    }, UPNG.encode.compress = compress, UPNG.encode.dither = dither, UPNG.quantize = quantize, UPNG.quantize.getKDtree = getKDtree, UPNG.quantize.getNearest = getNearest;
}();
const r = {
    toArrayBuffer (e, t1) {
        const i = e.width, o = e.height, a = i << 2, s = e.getContext("2d").getImageData(0, 0, i, o), f = new Uint32Array(s.data.buffer), l = (32 * i + 31) / 32 << 2, c = l * o, u = 122 + c, h = new ArrayBuffer(u), d = new DataView(h), A = 1 << 20;
        let g, p, m, w, v = A, b = 0, y = 0, E = 0;
        function set16(e) {
            d.setUint16(y, e, !0), y += 2;
        }
        function set32(e) {
            d.setUint32(y, e, !0), y += 4;
        }
        function seek(e) {
            y += e;
        }
        set16(19778), set32(u), seek(4), set32(122), set32(108), set32(i), set32(-o >>> 0), set16(1), set16(32), set32(3), set32(c), set32(2835), set32(2835), seek(8), set32(16711680), set32(65280), set32(255), set32(4278190080), set32(1466527264), function convert() {
            for(; b < o && v > 0;){
                for(w = 122 + b * l, g = 0; g < a;)v--, p = f[E++], m = p >>> 24, d.setUint32(w + g, p << 8 | m), g += 4;
                b++;
            }
            E < f.length ? (v = A, setTimeout(convert, r._dly)) : t1(h);
        }();
    },
    toBlob (e, t1) {
        this.toArrayBuffer(e, (e)=>{
            t1(new Blob([
                e
            ], {
                type: "image/bmp"
            }));
        });
    },
    _dly: 9
};
var i = {
    CHROME: "CHROME",
    FIREFOX: "FIREFOX",
    DESKTOP_SAFARI: "DESKTOP_SAFARI",
    IE: "IE",
    IOS: "IOS",
    ETC: "ETC"
}, o = {
    [i.CHROME]: 16384,
    [i.FIREFOX]: 11180,
    [i.DESKTOP_SAFARI]: 16384,
    [i.IE]: 8192,
    [i.IOS]: 4096,
    [i.ETC]: 8192
};
const a = "undefined" != typeof window, s = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope, f = a && window.cordova && window.cordova.require && window.cordova.require("cordova/modulemapper"), CustomFile = (a || s) && (f && f.getOriginalSymbol(window, "File") || "undefined" != typeof File && File), CustomFileReader = (a || s) && (f && f.getOriginalSymbol(window, "FileReader") || "undefined" != typeof FileReader && FileReader);
function getFilefromDataUrl(e, t1, r = Date.now()) {
    return new Promise((i)=>{
        const o = e.split(","), a = o[0].match(/:(.*?);/)[1], s = globalThis.atob(o[1]);
        let f = s.length;
        const l = new Uint8Array(f);
        for(; f--;)l[f] = s.charCodeAt(f);
        const c = new Blob([
            l
        ], {
            type: a
        });
        c.name = t1, c.lastModified = r, i(c);
    });
}
function getDataUrlFromFile(e) {
    return new Promise((t1, r)=>{
        const i = new CustomFileReader;
        i.onload = ()=>t1(i.result), i.onerror = (e)=>r(e), i.readAsDataURL(e);
    });
}
function loadImage(e) {
    return new Promise((t1, r)=>{
        const i = new Image;
        i.onload = ()=>t1(i), i.onerror = (e)=>r(e), i.src = e;
    });
}
function getBrowserName() {
    if (void 0 !== getBrowserName.cachedResult) return getBrowserName.cachedResult;
    let e = i.ETC;
    const { userAgent: t1 } = navigator;
    return /Chrom(e|ium)/i.test(t1) ? e = i.CHROME : /iP(ad|od|hone)/i.test(t1) && /WebKit/i.test(t1) ? e = i.IOS : /Safari/i.test(t1) ? e = i.DESKTOP_SAFARI : /Firefox/i.test(t1) ? e = i.FIREFOX : (/MSIE/i.test(t1) || !0 == !!document.documentMode) && (e = i.IE), getBrowserName.cachedResult = e, getBrowserName.cachedResult;
}
function approximateBelowMaximumCanvasSizeOfBrowser(e, t1) {
    const r = getBrowserName(), i = o[r];
    let a = e, s = t1, f = a * s;
    const l = a > s ? s / a : a / s;
    for(; f > i * i;){
        const e = (i + a) / 2, t1 = (i + s) / 2;
        e < t1 ? (s = t1, a = t1 * l) : (s = e * l, a = e), f = a * s;
    }
    return {
        width: a,
        height: s
    };
}
function getNewCanvasAndCtx(e, t1) {
    let r, i;
    try {
        if (r = new OffscreenCanvas(e, t1), i = r.getContext("2d"), null === i) throw new Error("getContext of OffscreenCanvas returns null");
    } catch (e) {
        r = document.createElement("canvas"), i = r.getContext("2d");
    }
    return r.width = e, r.height = t1, [
        r,
        i
    ];
}
function drawImageInCanvas(e, t1) {
    const { width: r, height: i } = approximateBelowMaximumCanvasSizeOfBrowser(e.width, e.height), [o, a] = getNewCanvasAndCtx(r, i);
    return t1 && /jpe?g/.test(t1) && (a.fillStyle = "white", a.fillRect(0, 0, o.width, o.height)), a.drawImage(e, 0, 0, o.width, o.height), o;
}
function isIOS() {
    return void 0 !== isIOS.cachedResult || (isIOS.cachedResult = [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
    ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "undefined" != typeof document && "ontouchend" in document), isIOS.cachedResult;
}
function drawFileInCanvas(e, t1 = {}) {
    return new Promise(function(r, o) {
        let a, s;
        var $Try_2_Post = function() {
            try {
                return s = drawImageInCanvas(a, t1.fileType || e.type), r([
                    a,
                    s
                ]);
            } catch (e) {
                return o(e);
            }
        }, $Try_2_Catch = function(t1) {
            try {
                0;
                var $Try_3_Catch = function(e) {
                    try {
                        throw e;
                    } catch (e) {
                        return o(e);
                    }
                };
                try {
                    let t1;
                    return getDataUrlFromFile(e).then(function(e) {
                        try {
                            return t1 = e, loadImage(t1).then(function(e) {
                                try {
                                    return a = e, function() {
                                        try {
                                            return $Try_2_Post();
                                        } catch (e) {
                                            return o(e);
                                        }
                                    }();
                                } catch (e) {
                                    return $Try_3_Catch(e);
                                }
                            }, $Try_3_Catch);
                        } catch (e) {
                            return $Try_3_Catch(e);
                        }
                    }, $Try_3_Catch);
                } catch (e) {
                    $Try_3_Catch(e);
                }
            } catch (e) {
                return o(e);
            }
        };
        try {
            if (isIOS() || [
                i.DESKTOP_SAFARI,
                i.MOBILE_SAFARI
            ].includes(getBrowserName())) throw new Error("Skip createImageBitmap on IOS and Safari");
            return createImageBitmap(e).then(function(e) {
                try {
                    return a = e, $Try_2_Post();
                } catch (e) {
                    return $Try_2_Catch();
                }
            }, $Try_2_Catch);
        } catch (e) {
            $Try_2_Catch();
        }
    });
}
function canvasToFile(e, t1, i, o, a = 1) {
    return new Promise(function(s, f) {
        let l;
        if ("image/png" === t1) {
            let c, u, h;
            return c = e.getContext("2d"), { data: u } = c.getImageData(0, 0, e.width, e.height), h = UPNG.encode([
                u.buffer
            ], e.width, e.height, 4096 * a), l = new Blob([
                h
            ], {
                type: t1
            }), l.name = i, l.lastModified = o, $If_4.call(this);
        }
        {
            if ("image/bmp" === t1) return new Promise((t1)=>r.toBlob(e, t1)).then((function(e) {
                try {
                    return l = e, l.name = i, l.lastModified = o, $If_5.call(this);
                } catch (e) {
                    return f(e);
                }
            }).bind(this), f);
            {
                if ("function" == typeof OffscreenCanvas && e instanceof OffscreenCanvas) return e.convertToBlob({
                    type: t1,
                    quality: a
                }).then((function(e) {
                    try {
                        return l = e, l.name = i, l.lastModified = o, $If_6.call(this);
                    } catch (e) {
                        return f(e);
                    }
                }).bind(this), f);
                {
                    let d;
                    return d = e.toDataURL(t1, a), getFilefromDataUrl(d, i, o).then((function(e) {
                        try {
                            return l = e, $If_6.call(this);
                        } catch (e) {
                            return f(e);
                        }
                    }).bind(this), f);
                }
                //TURBOPACK unreachable
                ;
                function $If_6() {
                    return $If_5.call(this);
                }
            }
            function $If_5() {
                return $If_4.call(this);
            }
        }
        //TURBOPACK unreachable
        ;
        function $If_4() {
            return s(l);
        }
    });
}
function cleanupCanvasMemory(e) {
    e.width = 0, e.height = 0;
}
function isAutoOrientationInBrowser() {
    return new Promise(function(e, t1) {
        let r, i, o, a, s;
        return void 0 !== isAutoOrientationInBrowser.cachedResult ? e(isAutoOrientationInBrowser.cachedResult) : (r = "data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==", getFilefromDataUrl("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==", "test.jpg", Date.now()).then(function(r) {
            try {
                return i = r, drawFileInCanvas(i).then(function(r) {
                    try {
                        return o = r[1], canvasToFile(o, i.type, i.name, i.lastModified).then(function(r) {
                            try {
                                return a = r, cleanupCanvasMemory(o), drawFileInCanvas(a).then(function(r) {
                                    try {
                                        return s = r[0], isAutoOrientationInBrowser.cachedResult = 1 === s.width && 2 === s.height, e(isAutoOrientationInBrowser.cachedResult);
                                    } catch (e) {
                                        return t1(e);
                                    }
                                }, t1);
                            } catch (e) {
                                return t1(e);
                            }
                        }, t1);
                    } catch (e) {
                        return t1(e);
                    }
                }, t1);
            } catch (e) {
                return t1(e);
            }
        }, t1));
    });
}
function getExifOrientation(e) {
    return new Promise((t1, r)=>{
        const i = new CustomFileReader;
        i.onload = (e)=>{
            const r = new DataView(e.target.result);
            if (65496 != r.getUint16(0, !1)) return t1(-2);
            const i = r.byteLength;
            let o = 2;
            for(; o < i;){
                if (r.getUint16(o + 2, !1) <= 8) return t1(-1);
                const e = r.getUint16(o, !1);
                if (o += 2, 65505 == e) {
                    if (1165519206 != r.getUint32(o += 2, !1)) return t1(-1);
                    const e = 18761 == r.getUint16(o += 6, !1);
                    o += r.getUint32(o + 4, e);
                    const i = r.getUint16(o, e);
                    o += 2;
                    for(let a = 0; a < i; a++)if (274 == r.getUint16(o + 12 * a, e)) return t1(r.getUint16(o + 12 * a + 8, e));
                } else {
                    if (65280 != (65280 & e)) break;
                    o += r.getUint16(o, !1);
                }
            }
            return t1(-1);
        }, i.onerror = (e)=>r(e), i.readAsArrayBuffer(e);
    });
}
function handleMaxWidthOrHeight(e, t1) {
    const { width: r } = e, { height: i } = e, { maxWidthOrHeight: o } = t1;
    let a, s = e;
    return isFinite(o) && (r > o || i > o) && ([s, a] = getNewCanvasAndCtx(r, i), r > i ? (s.width = o, s.height = i / r * o) : (s.width = r / i * o, s.height = o), a.drawImage(e, 0, 0, s.width, s.height), cleanupCanvasMemory(e)), s;
}
function followExifOrientation(e, t1) {
    const { width: r } = e, { height: i } = e, [o, a] = getNewCanvasAndCtx(r, i);
    switch(t1 > 4 && t1 < 9 ? (o.width = i, o.height = r) : (o.width = r, o.height = i), t1){
        case 2:
            a.transform(-1, 0, 0, 1, r, 0);
            break;
        case 3:
            a.transform(-1, 0, 0, -1, r, i);
            break;
        case 4:
            a.transform(1, 0, 0, -1, 0, i);
            break;
        case 5:
            a.transform(0, 1, 1, 0, 0, 0);
            break;
        case 6:
            a.transform(0, 1, -1, 0, i, 0);
            break;
        case 7:
            a.transform(0, -1, -1, 0, i, r);
            break;
        case 8:
            a.transform(0, -1, 1, 0, 0, r);
    }
    return a.drawImage(e, 0, 0, r, i), cleanupCanvasMemory(e), o;
}
function compress(e, t1, r = 0) {
    return new Promise(function(i, o) {
        let a, s, f, l, c, u, h, d, A, g, p, m, w, v, b, y, E, F, _, B;
        function incProgress(e = 5) {
            if (t1.signal && t1.signal.aborted) throw t1.signal.reason;
            a += e, t1.onProgress(Math.min(a, 100));
        }
        function setProgress(e) {
            if (t1.signal && t1.signal.aborted) throw t1.signal.reason;
            a = Math.min(Math.max(e, a), 100), t1.onProgress(a);
        }
        return a = r, s = t1.maxIteration || 10, f = 1024 * t1.maxSizeMB * 1024, incProgress(), drawFileInCanvas(e, t1).then((function(r) {
            try {
                return [, l] = r, incProgress(), c = handleMaxWidthOrHeight(l, t1), incProgress(), new Promise(function(r, i) {
                    var o;
                    if (!(o = t1.exifOrientation)) return getExifOrientation(e).then((function(e) {
                        try {
                            return o = e, $If_2.call(this);
                        } catch (e) {
                            return i(e);
                        }
                    }).bind(this), i);
                    function $If_2() {
                        return r(o);
                    }
                    return $If_2.call(this);
                }).then((function(r) {
                    try {
                        return u = r, incProgress(), isAutoOrientationInBrowser().then((function(r) {
                            try {
                                return h = r ? c : followExifOrientation(c, u), incProgress(), d = t1.initialQuality || 1, A = t1.fileType || e.type, canvasToFile(h, A, e.name, e.lastModified, d).then((function(r) {
                                    try {
                                        {
                                            if (g = r, incProgress(), p = g.size > f, m = g.size > e.size, !p && !m) return setProgress(100), i(g);
                                            var a;
                                            function $Loop_3() {
                                                if (s-- && (b > f || b > w)) {
                                                    let t1, r;
                                                    return t1 = B ? .95 * _.width : _.width, r = B ? .95 * _.height : _.height, [E, F] = getNewCanvasAndCtx(t1, r), F.drawImage(_, 0, 0, t1, r), d *= "image/png" === A ? .85 : .95, canvasToFile(E, A, e.name, e.lastModified, d).then(function(e) {
                                                        try {
                                                            return y = e, cleanupCanvasMemory(_), _ = E, b = y.size, setProgress(Math.min(99, Math.floor((v - b) / (v - f) * 100))), $Loop_3;
                                                        } catch (e) {
                                                            return o(e);
                                                        }
                                                    }, o);
                                                }
                                                return [
                                                    1
                                                ];
                                            }
                                            return w = e.size, v = g.size, b = v, _ = h, B = !t1.alwaysKeepResolution && p, (a = (function(e) {
                                                for(; e;){
                                                    if (e.then) return void e.then(a, o);
                                                    try {
                                                        if (e.pop) {
                                                            if (e.length) return e.pop() ? $Loop_3_exit.call(this) : e;
                                                            e = $Loop_3;
                                                        } else e = e.call(this);
                                                    } catch (e) {
                                                        return o(e);
                                                    }
                                                }
                                            }).bind(this))($Loop_3);
                                            //TURBOPACK unreachable
                                            ;
                                            function $Loop_3_exit() {
                                                return cleanupCanvasMemory(_), cleanupCanvasMemory(E), cleanupCanvasMemory(c), cleanupCanvasMemory(h), cleanupCanvasMemory(l), setProgress(100), i(y);
                                            }
                                        }
                                    } catch (u) {
                                        return o(u);
                                    }
                                }).bind(this), o);
                            } catch (e) {
                                return o(e);
                            }
                        }).bind(this), o);
                    } catch (e) {
                        return o(e);
                    }
                }).bind(this), o);
            } catch (e) {
                return o(e);
            }
        }).bind(this), o);
    });
}
const l = "\nlet scriptImported = false\nself.addEventListener('message', async (e) => {\n  const { file, id, imageCompressionLibUrl, options } = e.data\n  options.onProgress = (progress) => self.postMessage({ progress, id })\n  try {\n    if (!scriptImported) {\n      // console.log('[worker] importScripts', imageCompressionLibUrl)\n      self.importScripts(imageCompressionLibUrl)\n      scriptImported = true\n    }\n    // console.log('[worker] self', self)\n    const compressedFile = await imageCompression(file, options)\n    self.postMessage({ file: compressedFile, id })\n  } catch (e) {\n    // console.error('[worker] error', e)\n    self.postMessage({ error: e.message + '\\n' + e.stack, id })\n  }\n})\n";
let c;
function compressOnWebWorker(e, t1) {
    return new Promise((r, i)=>{
        c || (c = function createWorkerScriptURL(e) {
            const t1 = [];
            return "function" == typeof e ? t1.push(`(${e})()`) : t1.push(e), URL.createObjectURL(new Blob(t1));
        }(l));
        const o = new Worker(c);
        o.addEventListener("message", function handler(e) {
            if (t1.signal && t1.signal.aborted) o.terminate();
            else if (void 0 === e.data.progress) {
                if (e.data.error) return i(new Error(e.data.error)), void o.terminate();
                r(e.data.file), o.terminate();
            } else t1.onProgress(e.data.progress);
        }), o.addEventListener("error", i), t1.signal && t1.signal.addEventListener("abort", ()=>{
            i(t1.signal.reason), o.terminate();
        }), o.postMessage({
            file: e,
            imageCompressionLibUrl: t1.libURL,
            options: {
                ...t1,
                onProgress: void 0,
                signal: void 0
            }
        });
    });
}
function imageCompression(e, t1) {
    return new Promise(function(r, i) {
        let o, a, s, f, l, c;
        if (o = {
            ...t1
        }, s = 0, { onProgress: f } = o, o.maxSizeMB = o.maxSizeMB || Number.POSITIVE_INFINITY, l = "boolean" != typeof o.useWebWorker || o.useWebWorker, delete o.useWebWorker, o.onProgress = (e)=>{
            s = e, "function" == typeof f && f(s);
        }, !(e instanceof Blob || e instanceof CustomFile)) return i(new Error("The file given is not an instance of Blob or File"));
        if (!/^image/.test(e.type)) return i(new Error("The file given is not an image"));
        if (c = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope, !l || "function" != typeof Worker || c) return compress(e, o).then((function(e) {
            try {
                return a = e, $If_4.call(this);
            } catch (e) {
                return i(e);
            }
        }).bind(this), i);
        var u = (function() {
            try {
                return $If_4.call(this);
            } catch (e) {
                return i(e);
            }
        }).bind(this), $Try_1_Catch = function(t1) {
            try {
                return compress(e, o).then(function(e) {
                    try {
                        return a = e, u();
                    } catch (e) {
                        return i(e);
                    }
                }, i);
            } catch (e) {
                return i(e);
            }
        };
        try {
            return o.libURL = o.libURL || "https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js", compressOnWebWorker(e, o).then(function(e) {
                try {
                    return a = e, u();
                } catch (e) {
                    return $Try_1_Catch();
                }
            }, $Try_1_Catch);
        } catch (e) {
            $Try_1_Catch();
        }
        function $If_4() {
            try {
                a.name = e.name, a.lastModified = e.lastModified;
            } catch (e) {}
            try {
                o.preserveExif && "image/jpeg" === e.type && (!o.fileType || o.fileType && o.fileType === e.type) && (a = copyExifWithoutOrientation(e, a));
            } catch (e) {}
            return r(a);
        }
    });
}
imageCompression.getDataUrlFromFile = getDataUrlFromFile, imageCompression.getFilefromDataUrl = getFilefromDataUrl, imageCompression.loadImage = loadImage, imageCompression.drawImageInCanvas = drawImageInCanvas, imageCompression.drawFileInCanvas = drawFileInCanvas, imageCompression.canvasToFile = canvasToFile, imageCompression.getExifOrientation = getExifOrientation, imageCompression.handleMaxWidthOrHeight = handleMaxWidthOrHeight, imageCompression.followExifOrientation = followExifOrientation, imageCompression.cleanupCanvasMemory = cleanupCanvasMemory, imageCompression.isAutoOrientationInBrowser = isAutoOrientationInBrowser, imageCompression.approximateBelowMaximumCanvasSizeOfBrowser = approximateBelowMaximumCanvasSizeOfBrowser, imageCompression.copyExifWithoutOrientation = copyExifWithoutOrientation, imageCompression.getBrowserName = getBrowserName, imageCompression.version = "2.0.2";
;
 //# sourceMappingURL=browser-image-compression.mjs.map
}),
"[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/frontend/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}),
"[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), shim = __turbopack_context__.r("[project]/frontend/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/frontend/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)");
}
}),
"[project]/frontend/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}),
"[project]/frontend/node_modules/zustand/esm/traditional.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWithEqualityFn",
    ()=>createWithEqualityFn,
    "useStoreWithEqualityFn",
    ()=>useStoreWithEqualityFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
;
;
;
const { useSyncExternalStoreWithSelector } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const identity = (arg)=>arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getInitialState, selector, equalityFn);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createWithEqualityFnImpl = (createState, defaultEqualityFn)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn)=>useStoreWithEqualityFn(api, selector, equalityFn);
    Object.assign(useBoundStoreWithEqualityFn, api);
    return useBoundStoreWithEqualityFn;
};
const createWithEqualityFn = (createState, defaultEqualityFn)=>createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;
;
}),
"[project]/frontend/node_modules/suspend-react/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clear",
    ()=>clear,
    "peek",
    ()=>peek,
    "preload",
    ()=>preload,
    "suspend",
    ()=>suspend
]);
const isPromise = (promise)=>typeof promise === 'object' && typeof promise.then === 'function';
const globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a, b)=>a === b) {
    if (arrA === arrB) return true;
    if (!arrA || !arrB) return false;
    const len = arrA.length;
    if (arrB.length !== len) return false;
    for(let i = 0; i < len; i++)if (!equal(arrA[i], arrB[i])) return false;
    return true;
}
function query(fn, keys = null, preload = false, config = {}) {
    // If no keys were given, the function is the key
    if (keys === null) keys = [
        fn
    ];
    for (const entry of globalCache){
        // Find a match
        if (shallowEqualArrays(keys, entry.keys, entry.equal)) {
            // If we're pre-loading and the element is present, just return
            if (preload) return undefined; // If an error occurred, throw
            if (Object.prototype.hasOwnProperty.call(entry, 'error')) throw entry.error; // If a response was successful, return
            if (Object.prototype.hasOwnProperty.call(entry, 'response')) {
                if (config.lifespan && config.lifespan > 0) {
                    if (entry.timeout) clearTimeout(entry.timeout);
                    entry.timeout = setTimeout(entry.remove, config.lifespan);
                }
                return entry.response;
            } // If the promise is still unresolved, throw
            if (!preload) throw entry.promise;
        }
    } // The request is new or has changed.
    const entry = {
        keys,
        equal: config.equal,
        remove: ()=>{
            const index = globalCache.indexOf(entry);
            if (index !== -1) globalCache.splice(index, 1);
        },
        promise: (isPromise(fn) ? fn : fn(...keys) // When it resolves, store its value
        ).then((response)=>{
            entry.response = response; // Remove the entry in time if a lifespan was given
            if (config.lifespan && config.lifespan > 0) {
                entry.timeout = setTimeout(entry.remove, config.lifespan);
            }
        }) // Store caught errors, they will be thrown in the render-phase to bubble into an error-bound
        .catch((error)=>entry.error = error)
    }; // Register the entry
    globalCache.push(entry); // And throw the promise, this yields control back to React
    if (!preload) throw entry.promise;
    return undefined;
}
const suspend = (fn, keys, config)=>query(fn, keys, false, config);
const preload = (fn, keys, config)=>void query(fn, keys, true, config);
const peek = (keys)=>{
    var _globalCache$find;
    return (_globalCache$find = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal))) == null ? void 0 : _globalCache$find.response;
};
const clear = (keys)=>{
    if (keys === undefined || keys.length === 0) globalCache.splice(0, globalCache.length);
    else {
        const entry = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal));
        if (entry) entry.remove();
    }
};
;
}),
"[project]/frontend/node_modules/scheduler/cjs/scheduler.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function performWorkUntilDeadline() {
        needsPaint = !1;
        if (isMessageLoopRunning) {
            var currentTime = exports.unstable_now();
            startTime = currentTime;
            var hasMoreWork = !0;
            try {
                a: {
                    isHostCallbackScheduled = !1;
                    isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
                    isPerformingWork = !0;
                    var previousPriorityLevel = currentPriorityLevel;
                    try {
                        b: {
                            advanceTimers(currentTime);
                            for(currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());){
                                var callback = currentTask.callback;
                                if ("function" === typeof callback) {
                                    currentTask.callback = null;
                                    currentPriorityLevel = currentTask.priorityLevel;
                                    var continuationCallback = callback(currentTask.expirationTime <= currentTime);
                                    currentTime = exports.unstable_now();
                                    if ("function" === typeof continuationCallback) {
                                        currentTask.callback = continuationCallback;
                                        advanceTimers(currentTime);
                                        hasMoreWork = !0;
                                        break b;
                                    }
                                    currentTask === peek(taskQueue) && pop(taskQueue);
                                    advanceTimers(currentTime);
                                } else pop(taskQueue);
                                currentTask = peek(taskQueue);
                            }
                            if (null !== currentTask) hasMoreWork = !0;
                            else {
                                var firstTimer = peek(timerQueue);
                                null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                                hasMoreWork = !1;
                            }
                        }
                        break a;
                    } finally{
                        currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
                    }
                    hasMoreWork = void 0;
                }
            } finally{
                hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
            }
        }
    }
    function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        a: for(; 0 < index;){
            var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
            if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
            else break a;
        }
    }
    function peek(heap) {
        return 0 === heap.length ? null : heap[0];
    }
    function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
            heap[0] = last;
            a: for(var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;){
                var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
                if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
                else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
                else break a;
            }
        }
        return first;
    }
    function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
    }
    function advanceTimers(currentTime) {
        for(var timer = peek(timerQueue); null !== timer;){
            if (null === timer.callback) pop(timerQueue);
            else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
            else break;
            timer = peek(timerQueue);
        }
    }
    function handleTimeout(currentTime) {
        isHostTimeoutScheduled = !1;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
        else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
    }
    function shouldYieldToHost() {
        return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
    }
    function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
            callback(exports.unstable_now());
        }, ms);
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    exports.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
            return localDate.now() - initialTime;
        };
    }
    var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = !1, isHostCallbackScheduled = !1, isHostTimeoutScheduled = !1, needsPaint = !1, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null, isMessageLoopRunning = !1, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
    if ("function" === typeof localSetImmediate) var schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
    };
    else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
            port.postMessage(null);
        };
    } else schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
    };
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(task) {
        task.callback = null;
    };
    exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
    };
    exports.unstable_next = function(eventHandler) {
        switch(currentPriorityLevel){
            case 1:
            case 2:
            case 3:
                var priorityLevel = 3;
                break;
            default:
                priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_requestPaint = function() {
        needsPaint = !0;
    };
    exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch(priorityLevel){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch(priorityLevel){
            case 1:
                var timeout = -1;
                break;
            case 2:
                timeout = 250;
                break;
            case 5:
                timeout = 1073741823;
                break;
            case 4:
                timeout = 1e4;
                break;
            default:
                timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
            id: taskIdCounter++,
            callback: callback,
            priorityLevel: priorityLevel,
            startTime: options,
            expirationTime: timeout,
            sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
        return priorityLevel;
    };
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
                return callback.apply(this, arguments);
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        };
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/frontend/node_modules/scheduler/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/scheduler/cjs/scheduler.development.js [app-client] (ecmascript)");
}
}),
"[project]/frontend/node_modules/its-fine/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FiberProvider",
    ()=>m,
    "traverseFiber",
    ()=>i,
    "useContainer",
    ()=>w,
    "useContextBridge",
    ()=>x,
    "useContextMap",
    ()=>h,
    "useFiber",
    ()=>c,
    "useNearestChild",
    ()=>v,
    "useNearestParent",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const f = /* @__PURE__ */ (()=>{
    var e, t;
    return typeof window != "undefined" && (((e = window.document) == null ? void 0 : e.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative");
})() ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
function i(e, t, r) {
    if (!e) return;
    if (r(e) === !0) return e;
    let n = t ? e.return : e.child;
    for(; n;){
        const u = i(n, t, r);
        if (u) return u;
        n = t ? null : n.sibling;
    }
}
function l(e) {
    try {
        return Object.defineProperties(e, {
            _currentRenderer: {
                get () {
                    return null;
                },
                set () {}
            },
            _currentRenderer2: {
                get () {
                    return null;
                },
                set () {}
            }
        });
    } catch (t) {
        return e;
    }
}
const a = /* @__PURE__ */ l(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null));
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    render() {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](a.Provider, {
            value: this._reactInternals
        }, this.props.children);
    }
}
function c() {
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](a);
    if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "c.useMemo": ()=>{
            for (const n of [
                e,
                e == null ? void 0 : e.alternate
            ]){
                if (!n) continue;
                const u = i(n, !1, {
                    "c.useMemo.u": (d)=>{
                        let s = d.memoizedState;
                        for(; s;){
                            if (s.memoizedState === t) return !0;
                            s = s.next;
                        }
                    }
                }["c.useMemo.u"]);
                if (u) return u;
            }
        }
    }["c.useMemo"], [
        e,
        t
    ]);
}
function w() {
    const e = c(), t = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "w.useMemo[t]": ()=>i(e, !0, {
                "w.useMemo[t]": (r)=>{
                    var n;
                    return ((n = r.stateNode) == null ? void 0 : n.containerInfo) != null;
                }
            }["w.useMemo[t]"])
    }["w.useMemo[t]"], [
        e
    ]);
    return t == null ? void 0 : t.stateNode.containerInfo;
}
function v(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !1, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
function y(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !0, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
const p = Symbol.for("react.context"), b = (e)=>e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p;
function h() {
    const e = c(), [t] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "h.useState": ()=>/* @__PURE__ */ new Map()
    }["h.useState"]);
    t.clear();
    let r = e;
    for(; r;){
        const n = r.type;
        b(n) && n !== a && !t.has(n) && t.set(n, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"](l(n))), r = r.return;
    }
    return t;
}
function x() {
    const e = h();
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "x.useMemo": ()=>Array.from(e.keys()).reduce({
                "x.useMemo": (t, r)=>({
                        "x.useMemo": (n)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](t, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](r.Provider, {
                                ...n,
                                value: e.get(r)
                            }))
                    })["x.useMemo"]
            }["x.useMemo"], {
                "x.useMemo": (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](m, {
                        ...t
                    })
            }["x.useMemo"])
    }["x.useMemo"], [
        e
    ]);
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/react-use-measure/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>j
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function g(n, t) {
    let o;
    return (...i)=>{
        window.clearTimeout(o), o = window.setTimeout(()=>n(...i), t);
    };
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i } = {
    debounce: 0,
    scroll: !1,
    offsetSize: !1
}) {
    const a = o || (typeof window == "undefined" ? class {
    } : window.ResizeObserver);
    if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
    const [c, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0
    }), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        element: null,
        scrollContainers: null,
        resizeObserver: null,
        lastBounds: c,
        orientationHandler: null
    }), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(w.current = !0, ()=>void (w.current = !1)));
    const [z, m, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const r = ()=>{
            if (!e.current.element) return;
            const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e.current.element.getBoundingClientRect(), l = {
                left: y,
                top: C,
                width: H,
                height: O,
                bottom: S,
                right: x,
                x: B,
                y: R
            };
            e.current.element instanceof HTMLElement && i && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h(e.current.lastBounds = l);
        };
        return [
            r,
            f ? g(r, f) : r,
            d ? g(r, d) : r
        ];
    }, [
        h,
        i,
        d,
        f
    ]);
    function v() {
        e.current.scrollContainers && (e.current.scrollContainers.forEach((r)=>r.removeEventListener("scroll", s, !0)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
    }
    function b() {
        e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r)=>r.addEventListener("scroll", s, {
                capture: !0,
                passive: !0
            })), e.current.orientationHandler = ()=>{
            s();
        }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
    }
    const L = (r)=>{
        !r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
    };
    return X(s, !!t), W(m), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        v(), b();
    }, [
        t,
        s,
        m
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>v, []), [
        L,
        c,
        z
    ];
}
function W(n) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = n;
        return window.addEventListener("resize", t), ()=>void window.removeEventListener("resize", t);
    }, [
        n
    ]);
}
function X(n, t) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (t) {
            const o = n;
            return window.addEventListener("scroll", o, {
                capture: !0,
                passive: !0
            }), ()=>void window.removeEventListener("scroll", o, !0);
        }
    }, [
        n,
        t
    ]);
}
function E(n) {
    const t = [];
    if (!n || n === document.body) return t;
    const { overflow: o, overflowX: i, overflowY: a } = window.getComputedStyle(n);
    return [
        o,
        i,
        a
    ].some((c)=>c === "auto" || c === "scroll") && t.push(n), [
        ...t,
        ...E(n.parentElement)
    ];
}
const k = [
    "x",
    "y",
    "top",
    "bottom",
    "left",
    "right",
    "width",
    "height"
], D = (n, t)=>k.every((o)=>n[o] === t[o]);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/@react-three/drei/core/Fbo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fbo",
    ()=>Fbo,
    "useFBO",
    ()=>useFBO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
;
;
;
;
// 👇 uncomment when TS version supports function overloads
// export function useFBO(settings?: FBOSettings)
function useFBO(/** Width in pixels, or settings (will render fullscreen by default) */ width, /** Height in pixels */ height, /**Settings */ settings) {
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "useFBO.useThree[size]": (state)=>state.size
    }["useFBO.useThree[size]"]);
    const viewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "useFBO.useThree[viewport]": (state)=>state.viewport
    }["useFBO.useThree[viewport]"]);
    const _width = typeof width === 'number' ? width : size.width * viewport.dpr;
    const _height = typeof height === 'number' ? height : size.height * viewport.dpr;
    const _settings = (typeof width === 'number' ? settings : width) || {};
    const { samples = 0, depth, ...targetSettings } = _settings;
    const depthBuffer = depth !== null && depth !== void 0 ? depth : _settings.depthBuffer; // backwards compatibility for deprecated `depth` prop
    const target = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFBO.useMemo[target]": ()=>{
            const target = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](_width, _height, {
                minFilter: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
                magFilter: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
                type: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"],
                ...targetSettings
            });
            if (depthBuffer) {
                target.depthTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthTexture"](_width, _height, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"]);
            }
            target.samples = samples;
            return target;
        }
    }["useFBO.useMemo[target]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "useFBO.useLayoutEffect": ()=>{
            target.setSize(_width, _height);
            if (samples) target.samples = samples;
        }
    }["useFBO.useLayoutEffect"], [
        samples,
        target,
        _width,
        _height
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFBO.useEffect": ()=>{
            return ({
                "useFBO.useEffect": ()=>target.dispose()
            })["useFBO.useEffect"];
        }
    }["useFBO.useEffect"], []);
    return target;
}
//
// Fbo component
//
const Fbo = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, width, height, ...settings }, fref)=>{
    const target = useFBO(width, height, settings);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(fref, {
        "Fbo.useImperativeHandle": ()=>target
    }["Fbo.useImperativeHandle"], [
        target
    ]); // expose target through ref
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, children == null ? void 0 : children(target));
});
;
}),
"[project]/frontend/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PerspectiveCamera",
    ()=>PerspectiveCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@react-three/drei/core/Fbo.js [app-client] (ecmascript)");
;
;
;
;
const isFunction = (node)=>typeof node === 'function';
const PerspectiveCamera = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ envMap, resolution = 256, frames = Infinity, makeDefault, children, ...props }, ref)=>{
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "PerspectiveCamera.useThree[set]": ({ set })=>set
    }["PerspectiveCamera.useThree[set]"]);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "PerspectiveCamera.useThree[camera]": ({ camera })=>camera
    }["PerspectiveCamera.useThree[camera]"]);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "PerspectiveCamera.useThree[size]": ({ size })=>size
    }["PerspectiveCamera.useThree[size]"]);
    const cameraRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "PerspectiveCamera.useImperativeHandle": ()=>cameraRef.current
    }["PerspectiveCamera.useImperativeHandle"], []);
    const groupRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const fbo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFBO"])(resolution);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "PerspectiveCamera.useLayoutEffect": ()=>{
            if (!props.manual) {
                cameraRef.current.aspect = size.width / size.height;
            }
        }
    }["PerspectiveCamera.useLayoutEffect"], [
        size,
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "PerspectiveCamera.useLayoutEffect": ()=>{
            cameraRef.current.updateProjectionMatrix();
        }
    }["PerspectiveCamera.useLayoutEffect"]);
    let count = 0;
    let oldEnvMap = null;
    const functional = isFunction(children);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "PerspectiveCamera.useFrame": (state)=>{
            if (functional && (frames === Infinity || count < frames)) {
                groupRef.current.visible = false;
                state.gl.setRenderTarget(fbo);
                oldEnvMap = state.scene.background;
                if (envMap) state.scene.background = envMap;
                state.gl.render(state.scene, cameraRef.current);
                state.scene.background = oldEnvMap;
                state.gl.setRenderTarget(null);
                groupRef.current.visible = true;
                count++;
            }
        }
    }["PerspectiveCamera.useFrame"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "PerspectiveCamera.useLayoutEffect": ()=>{
            if (makeDefault) {
                const oldCam = camera;
                set({
                    "PerspectiveCamera.useLayoutEffect": ()=>({
                            camera: cameraRef.current
                        })
                }["PerspectiveCamera.useLayoutEffect"]);
                return ({
                    "PerspectiveCamera.useLayoutEffect": ()=>set({
                            "PerspectiveCamera.useLayoutEffect": ()=>({
                                    camera: oldCam
                                })
                        }["PerspectiveCamera.useLayoutEffect"])
                })["PerspectiveCamera.useLayoutEffect"];
            }
        // The camera should not be part of the dependency list because this components camera is a stable reference
        // that must exchange the default, and clean up after itself on unmount.
        }
    }["PerspectiveCamera.useLayoutEffect"], [
        cameraRef,
        makeDefault,
        set
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("perspectiveCamera", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: cameraRef
    }, props), !functional && children), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: groupRef
    }, functional && children(fbo.texture)));
});
;
}),
]);

//# sourceMappingURL=9e883_1cc93042._.js.map