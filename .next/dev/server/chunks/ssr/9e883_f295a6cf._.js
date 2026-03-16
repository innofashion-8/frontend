module.exports = [
"[project]/frontend/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryObserver",
    ()=>QueryObserver
]);
// src/queryObserver.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/query.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/thenable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var QueryObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(client, options){
        super();
        this.options = options;
        this.#client = client;
        this.#selectError = null;
        this.#currentThenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pendingThenable"])();
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
        if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== "boolean") {
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        }
        this.#updateQuery();
        this.#currentQuery.setOptions(this.options);
        if (prevOptions._defaulted && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
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
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(prevOptions.staleTime, this.#currentQuery))) {
            this.#updateStaleTimeout();
        }
        const nextRefetchInterval = this.#computeRefetchInterval();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
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
            promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
        }
        return promise;
    }
    #updateStaleTimeout() {
        this.#clearStaleTimeout();
        const staleTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] || this.#currentResult.isStale || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidTimeout"])(staleTime)) {
            return;
        }
        const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.#currentResult.dataUpdatedAt, staleTime);
        const timeout = time + 1;
        this.#staleTimeoutId = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
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
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) === false || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
            return;
        }
        this.#refetchIntervalId = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setInterval(()=>{
            if (this.options.refetchIntervalInBackground || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusManager"].isFocused()) {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#staleTimeoutId);
            this.#staleTimeoutId = void 0;
        }
    }
    #clearRefetchInterval() {
        if (this.#refetchIntervalId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].clearInterval(this.#refetchIntervalId);
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
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchState"])(state.data, query.options)
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
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, placeholderData, options);
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
                    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, data, options);
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
            isEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false
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
                const pending = this.#currentThenable = nextResult.promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pendingThenable"])();
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(nextResult, prevResult)) {
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
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query) !== "static") {
        const value = typeof field === "function" ? field(query) : field;
        return value === "always" || value !== false && isStale(query, options);
    }
    return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(observer.getCurrentResult(), optimisticResult)) {
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=queryObserver.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
// src/QueryErrorResetBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
var QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](createValue());
var useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({ children })=>{
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>createValue());
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
 //# sourceMappingURL=QueryErrorResetBoundary.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query)=>{
    const throwOnError = query?.state.error && typeof options.throwOnError === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldThrowError"])(options.throwOnError, [
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
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        errorResetBoundary.clearReset();
    }, [
        errorResetBoundary
    ]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
 //# sourceMappingURL=errorBoundaryUtils.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
// src/IsRestoringProvider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](false);
var useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
;
 //# sourceMappingURL=IsRestoringProvider.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
// src/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)");
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
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    const query = client.getQueryCache().get(defaultedOptions.queryHash);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) {
            console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
        }
    }
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary, query);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new Observer(client, defaultedOptions));
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && options.subscribed !== false;
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((onStoreChange)=>{
        const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
        observer.updateResult();
        return unsubscribe;
    }, [
        observer,
        shouldSubscribe
    ]), ()=>observer.getCurrentResult(), ()=>observer.getCurrentResult());
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        observer.setOptions(defaultedOptions);
    }, [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHasError"])({
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
    if (defaultedOptions.experimental_prefetchInRender && !__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["willFetch"])(result, isRestoring)) {
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary) : // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        query?.promise;
        promise?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
 //# sourceMappingURL=useBaseQuery.js.map
}),
"[project]/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
// src/useQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)");
"use client";
;
;
function useQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useQuery.js.map
}),
"[project]/frontend/node_modules/oidc-token-hash/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { strict: assert } = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const { createHash } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const { format } = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let encode;
if (Buffer.isEncoding('base64url')) {
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
"[project]/frontend/node_modules/openid-client/node_modules/yallist/iterator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function(Yallist) {
    Yallist.prototype[Symbol.iterator] = function*() {
        for(let walker = this.head; walker; walker = walker.next){
            yield walker.value;
        }
    };
};
}),
"[project]/frontend/node_modules/openid-client/node_modules/yallist/yallist.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
    __turbopack_context__.r("[project]/frontend/node_modules/openid-client/node_modules/yallist/iterator.js [app-ssr] (ecmascript)")(Yallist);
} catch (er) {}
}),
"[project]/frontend/node_modules/openid-client/node_modules/lru-cache/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// A linked list to keep track of recently-used-ness
const Yallist = __turbopack_context__.r("[project]/frontend/node_modules/openid-client/node_modules/yallist/yallist.js [app-ssr] (ecmascript)");
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
"[project]/frontend/node_modules/object-hash/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
/**
 * Exported function
 *
 * Options:
 *
 *  - `algorithm` hash algo to be used by this instance: *'sha1', 'md5'
 *  - `excludeValues` {true|*false} hash object keys, values ignored
 *  - `encoding` hash encoding, supports 'buffer', '*hex', 'binary', 'base64'
 *  - `ignoreUnknown` {true|*false} ignore unknown object types
 *  - `replacer` optional function that replaces values before hashing
 *  - `respectFunctionProperties` {*true|false} consider function properties when hashing
 *  - `respectFunctionNames` {*true|false} consider 'name' property of functions for hashing
 *  - `respectType` {*true|false} Respect special properties (prototype, constructor)
 *    when hashing to distinguish between types
 *  - `unorderedArrays` {true|*false} Sort all arrays before hashing
 *  - `unorderedSets` {*true|false} Sort `Set` and `Map` instances before hashing
 *  * = default
 *
 * @param {object} object value to hash
 * @param {object} options hashing options
 * @return {string} hash value
 * @api public
 */ exports = module.exports = objectHash;
function objectHash(object, options) {
    options = applyDefaults(object, options);
    return hash(object, options);
}
/**
 * Exported sugar methods
 *
 * @param {object} object value to hash
 * @return {string} hash value
 * @api public
 */ exports.sha1 = function(object) {
    return objectHash(object);
};
exports.keys = function(object) {
    return objectHash(object, {
        excludeValues: true,
        algorithm: 'sha1',
        encoding: 'hex'
    });
};
exports.MD5 = function(object) {
    return objectHash(object, {
        algorithm: 'md5',
        encoding: 'hex'
    });
};
exports.keysMD5 = function(object) {
    return objectHash(object, {
        algorithm: 'md5',
        encoding: 'hex',
        excludeValues: true
    });
};
// Internals
var hashes = crypto.getHashes ? crypto.getHashes().slice() : [
    'sha1',
    'md5'
];
hashes.push('passthrough');
var encodings = [
    'buffer',
    'hex',
    'binary',
    'base64'
];
function applyDefaults(object, sourceOptions) {
    sourceOptions = sourceOptions || {};
    // create a copy rather than mutating
    var options = {};
    options.algorithm = sourceOptions.algorithm || 'sha1';
    options.encoding = sourceOptions.encoding || 'hex';
    options.excludeValues = sourceOptions.excludeValues ? true : false;
    options.algorithm = options.algorithm.toLowerCase();
    options.encoding = options.encoding.toLowerCase();
    options.ignoreUnknown = sourceOptions.ignoreUnknown !== true ? false : true; // default to false
    options.respectType = sourceOptions.respectType === false ? false : true; // default to true
    options.respectFunctionNames = sourceOptions.respectFunctionNames === false ? false : true;
    options.respectFunctionProperties = sourceOptions.respectFunctionProperties === false ? false : true;
    options.unorderedArrays = sourceOptions.unorderedArrays !== true ? false : true; // default to false
    options.unorderedSets = sourceOptions.unorderedSets === false ? false : true; // default to false
    options.unorderedObjects = sourceOptions.unorderedObjects === false ? false : true; // default to true
    options.replacer = sourceOptions.replacer || undefined;
    options.excludeKeys = sourceOptions.excludeKeys || undefined;
    if (typeof object === 'undefined') {
        throw new Error('Object argument required.');
    }
    // if there is a case-insensitive match in the hashes list, accept it
    // (i.e. SHA256 for sha256)
    for(var i = 0; i < hashes.length; ++i){
        if (hashes[i].toLowerCase() === options.algorithm.toLowerCase()) {
            options.algorithm = hashes[i];
        }
    }
    if (hashes.indexOf(options.algorithm) === -1) {
        throw new Error('Algorithm "' + options.algorithm + '"  not supported. ' + 'supported values: ' + hashes.join(', '));
    }
    if (encodings.indexOf(options.encoding) === -1 && options.algorithm !== 'passthrough') {
        throw new Error('Encoding "' + options.encoding + '"  not supported. ' + 'supported values: ' + encodings.join(', '));
    }
    return options;
}
/** Check if the given function is a native function */ function isNativeFunction(f) {
    if (typeof f !== 'function') {
        return false;
    }
    var exp = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;
    return exp.exec(Function.prototype.toString.call(f)) != null;
}
function hash(object, options) {
    var hashingStream;
    if (options.algorithm !== 'passthrough') {
        hashingStream = crypto.createHash(options.algorithm);
    } else {
        hashingStream = new PassThrough();
    }
    if (typeof hashingStream.write === 'undefined') {
        hashingStream.write = hashingStream.update;
        hashingStream.end = hashingStream.update;
    }
    var hasher = typeHasher(options, hashingStream);
    hasher.dispatch(object);
    if (!hashingStream.update) {
        hashingStream.end('');
    }
    if (hashingStream.digest) {
        return hashingStream.digest(options.encoding === 'buffer' ? undefined : options.encoding);
    }
    var buf = hashingStream.read();
    if (options.encoding === 'buffer') {
        return buf;
    }
    return buf.toString(options.encoding);
}
/**
 * Expose streaming API
 *
 * @param {object} object  Value to serialize
 * @param {object} options  Options, as for hash()
 * @param {object} stream  A stream to write the serializiation to
 * @api public
 */ exports.writeToStream = function(object, options, stream) {
    if (typeof stream === 'undefined') {
        stream = options;
        options = {};
    }
    options = applyDefaults(object, options);
    return typeHasher(options, stream).dispatch(object);
};
function typeHasher(options, writeTo, context) {
    context = context || [];
    var write = function(str) {
        if (writeTo.update) {
            return writeTo.update(str, 'utf8');
        } else {
            return writeTo.write(str, 'utf8');
        }
    };
    return {
        dispatch: function(value) {
            if (options.replacer) {
                value = options.replacer(value);
            }
            var type = typeof value;
            if (value === null) {
                type = 'null';
            }
            //console.log("[DEBUG] Dispatch: ", value, "->", type, " -> ", "_" + type);
            return this['_' + type](value);
        },
        _object: function(object) {
            var pattern = /\[object (.*)\]/i;
            var objString = Object.prototype.toString.call(object);
            var objType = pattern.exec(objString);
            if (!objType) {
                objType = 'unknown:[' + objString + ']';
            } else {
                objType = objType[1]; // take only the class name
            }
            objType = objType.toLowerCase();
            var objectNumber = null;
            if ((objectNumber = context.indexOf(object)) >= 0) {
                return this.dispatch('[CIRCULAR:' + objectNumber + ']');
            } else {
                context.push(object);
            }
            if (typeof Buffer !== 'undefined' && Buffer.isBuffer && Buffer.isBuffer(object)) {
                write('buffer:');
                return write(object);
            }
            if (objType !== 'object' && objType !== 'function' && objType !== 'asyncfunction') {
                if (this['_' + objType]) {
                    this['_' + objType](object);
                } else if (options.ignoreUnknown) {
                    return write('[' + objType + ']');
                } else {
                    throw new Error('Unknown object type "' + objType + '"');
                }
            } else {
                var keys = Object.keys(object);
                if (options.unorderedObjects) {
                    keys = keys.sort();
                }
                // Make sure to incorporate special properties, so
                // Types with different prototypes will produce
                // a different hash and objects derived from
                // different functions (`new Foo`, `new Bar`) will
                // produce different hashes.
                // We never do this for native functions since some
                // seem to break because of that.
                if (options.respectType !== false && !isNativeFunction(object)) {
                    keys.splice(0, 0, 'prototype', '__proto__', 'constructor');
                }
                if (options.excludeKeys) {
                    keys = keys.filter(function(key) {
                        return !options.excludeKeys(key);
                    });
                }
                write('object:' + keys.length + ':');
                var self = this;
                return keys.forEach(function(key) {
                    self.dispatch(key);
                    write(':');
                    if (!options.excludeValues) {
                        self.dispatch(object[key]);
                    }
                    write(',');
                });
            }
        },
        _array: function(arr, unordered) {
            unordered = typeof unordered !== 'undefined' ? unordered : options.unorderedArrays !== false; // default to options.unorderedArrays
            var self = this;
            write('array:' + arr.length + ':');
            if (!unordered || arr.length <= 1) {
                return arr.forEach(function(entry) {
                    return self.dispatch(entry);
                });
            }
            // the unordered case is a little more complicated:
            // since there is no canonical ordering on objects,
            // i.e. {a:1} < {a:2} and {a:1} > {a:2} are both false,
            // we first serialize each entry using a PassThrough stream
            // before sorting.
            // also: we can’t use the same context array for all entries
            // since the order of hashing should *not* matter. instead,
            // we keep track of the additions to a copy of the context array
            // and add all of them to the global context array when we’re done
            var contextAdditions = [];
            var entries = arr.map(function(entry) {
                var strm = new PassThrough();
                var localContext = context.slice(); // make copy
                var hasher = typeHasher(options, strm, localContext);
                hasher.dispatch(entry);
                // take only what was added to localContext and append it to contextAdditions
                contextAdditions = contextAdditions.concat(localContext.slice(context.length));
                return strm.read().toString();
            });
            context = context.concat(contextAdditions);
            entries.sort();
            return this._array(entries, false);
        },
        _date: function(date) {
            return write('date:' + date.toJSON());
        },
        _symbol: function(sym) {
            return write('symbol:' + sym.toString());
        },
        _error: function(err) {
            return write('error:' + err.toString());
        },
        _boolean: function(bool) {
            return write('bool:' + bool.toString());
        },
        _string: function(string) {
            write('string:' + string.length + ':');
            write(string.toString());
        },
        _function: function(fn) {
            write('fn:');
            if (isNativeFunction(fn)) {
                this.dispatch('[native]');
            } else {
                this.dispatch(fn.toString());
            }
            if (options.respectFunctionNames !== false) {
                // Make sure we can still distinguish native functions
                // by their name, otherwise String and Function will
                // have the same hash
                this.dispatch("function-name:" + String(fn.name));
            }
            if (options.respectFunctionProperties) {
                this._object(fn);
            }
        },
        _number: function(number) {
            return write('number:' + number.toString());
        },
        _xml: function(xml) {
            return write('xml:' + xml.toString());
        },
        _null: function() {
            return write('Null');
        },
        _undefined: function() {
            return write('Undefined');
        },
        _regexp: function(regex) {
            return write('regex:' + regex.toString());
        },
        _uint8array: function(arr) {
            write('uint8array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _uint8clampedarray: function(arr) {
            write('uint8clampedarray:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _int8array: function(arr) {
            write('uint8array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _uint16array: function(arr) {
            write('uint16array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _int16array: function(arr) {
            write('uint16array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _uint32array: function(arr) {
            write('uint32array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _int32array: function(arr) {
            write('uint32array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _float32array: function(arr) {
            write('float32array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _float64array: function(arr) {
            write('float64array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _arraybuffer: function(arr) {
            write('arraybuffer:');
            return this.dispatch(new Uint8Array(arr));
        },
        _url: function(url) {
            return write('url:' + url.toString(), 'utf8');
        },
        _map: function(map) {
            write('map:');
            var arr = Array.from(map);
            return this._array(arr, options.unorderedSets !== false);
        },
        _set: function(set) {
            write('set:');
            var arr = Array.from(set);
            return this._array(arr, options.unorderedSets !== false);
        },
        _file: function(file) {
            write('file:');
            return this.dispatch([
                file.name,
                file.size,
                file.type,
                file.lastModfied
            ]);
        },
        _blob: function() {
            if (options.ignoreUnknown) {
                return write('[blob]');
            }
            throw Error('Hashing Blob objects is currently not supported\n' + '(see https://github.com/puleos/object-hash/issues/26)\n' + 'Use "options.replacer" or "options.ignoreUnknown"\n');
        },
        _domwindow: function() {
            return write('domwindow');
        },
        _bigint: function(number) {
            return write('bigint:' + number.toString());
        },
        /* Node.js standard native objects */ _process: function() {
            return write('process');
        },
        _timer: function() {
            return write('timer');
        },
        _pipe: function() {
            return write('pipe');
        },
        _tcp: function() {
            return write('tcp');
        },
        _udp: function() {
            return write('udp');
        },
        _tty: function() {
            return write('tty');
        },
        _statwatcher: function() {
            return write('statwatcher');
        },
        _securecontext: function() {
            return write('securecontext');
        },
        _connection: function() {
            return write('connection');
        },
        _zlib: function() {
            return write('zlib');
        },
        _context: function() {
            return write('context');
        },
        _nodescript: function() {
            return write('nodescript');
        },
        _httpparser: function() {
            return write('httpparser');
        },
        _dataview: function() {
            return write('dataview');
        },
        _signal: function() {
            return write('signal');
        },
        _fsevent: function() {
            return write('fsevent');
        },
        _tlswrap: function() {
            return write('tlswrap');
        }
    };
}
// Mini-implementation of stream.PassThrough
// We are far from having need for the full implementation, and we can
// make assumptions like "many writes, then only one final read"
// and we can ignore encoding specifics
function PassThrough() {
    return {
        buf: '',
        write: function(b) {
            this.buf += b;
        },
        end: function(b) {
            this.buf += b;
        },
        read: function() {
            return this.buf;
        }
    };
}
}),
"[project]/frontend/node_modules/oauth/lib/sha1.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/frontend/node_modules/oauth/lib/_utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Returns true if this is a host that closes *before* it ends?!?!
module.exports.isAnEarlyCloseHost = function(hostName) {
    return hostName && hostName.match(".*google(apis)?.com$");
};
}),
"[project]/frontend/node_modules/oauth/lib/oauth.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)"), sha1 = __turbopack_context__.r("[project]/frontend/node_modules/oauth/lib/sha1.js [app-ssr] (ecmascript)"), http = __turbopack_context__.r("[externals]/http [external] (http, cjs)"), https = __turbopack_context__.r("[externals]/https [external] (https, cjs)"), URL = __turbopack_context__.r("[externals]/url [external] (url, cjs)"), querystring = __turbopack_context__.r("[externals]/querystring [external] (querystring, cjs)"), OAuthUtils = __turbopack_context__.r("[project]/frontend/node_modules/oauth/lib/_utils.js [app-ssr] (ecmascript)");
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
        if (Buffer.isBuffer(post_body)) {
            headers["Content-length"] = post_body.length;
        } else {
            headers["Content-length"] = Buffer.byteLength(post_body);
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
    if (typeof post_body != "string" && !Buffer.isBuffer(post_body)) {
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
"[project]/frontend/node_modules/oauth/lib/oauth2.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var querystring = __turbopack_context__.r("[externals]/querystring [external] (querystring, cjs)"), crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)"), https = __turbopack_context__.r("[externals]/https [external] (https, cjs)"), http = __turbopack_context__.r("[externals]/http [external] (http, cjs)"), URL = __turbopack_context__.r("[externals]/url [external] (url, cjs)"), OAuthUtils = __turbopack_context__.r("[project]/frontend/node_modules/oauth/lib/_utils.js [app-ssr] (ecmascript)");
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
        if (Buffer.isBuffer(post_body)) {
            realHeaders["Content-Length"] = post_body.length;
        } else {
            realHeaders["Content-Length"] = Buffer.byteLength(post_body);
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
"[project]/frontend/node_modules/oauth/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports.OAuth = __turbopack_context__.r("[project]/frontend/node_modules/oauth/lib/oauth.js [app-ssr] (ecmascript)").OAuth;
exports.OAuthEcho = __turbopack_context__.r("[project]/frontend/node_modules/oauth/lib/oauth.js [app-ssr] (ecmascript)").OAuthEcho;
exports.OAuth2 = __turbopack_context__.r("[project]/frontend/node_modules/oauth/lib/oauth2.js [app-ssr] (ecmascript)").OAuth2;
}),
"[project]/frontend/node_modules/@panva/hkdf/dist/node/cjs/runtime/fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
exports.default = (digest, ikm, salt, info, keylen)=>{
    const hashlen = parseInt(digest.substr(3), 10) >> 3 || 20;
    const prk = (0, crypto_1.createHmac)(digest, salt.byteLength ? salt : new Uint8Array(hashlen)).update(ikm).digest();
    const N = Math.ceil(keylen / hashlen);
    const T = new Uint8Array(hashlen * N + info.byteLength + 1);
    let prev = 0;
    let start = 0;
    for(let c = 1; c <= N; c++){
        T.set(info, start);
        T[start + info.byteLength] = c;
        T.set((0, crypto_1.createHmac)(digest, prk).update(T.subarray(prev, start + info.byteLength + 1)).digest(), start);
        prev = start;
        start += hashlen;
    }
    return T.slice(0, keylen);
};
}),
"[project]/frontend/node_modules/@panva/hkdf/dist/node/cjs/runtime/hkdf.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const fallback_js_1 = __turbopack_context__.r("[project]/frontend/node_modules/@panva/hkdf/dist/node/cjs/runtime/fallback.js [app-ssr] (ecmascript)");
let hkdf;
if (typeof crypto.hkdf === 'function' && !process.versions.electron) {
    hkdf = async (...args)=>new Promise((resolve, reject)=>{
            crypto.hkdf(...args, (err, arrayBuffer)=>{
                if (err) reject(err);
                else resolve(new Uint8Array(arrayBuffer));
            });
        });
}
exports.default = async (digest, ikm, salt, info, keylen)=>(hkdf || fallback_js_1.default)(digest, ikm, salt, info, keylen);
}),
"[project]/frontend/node_modules/@panva/hkdf/dist/node/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.hkdf = void 0;
const hkdf_js_1 = __turbopack_context__.r("[project]/frontend/node_modules/@panva/hkdf/dist/node/cjs/runtime/hkdf.js [app-ssr] (ecmascript)");
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
    return (0, hkdf_js_1.default)(normalizeDigest(digest), normalizeIkm(ikm), normalizeUint8Array(salt, 'salt'), normalizeInfo(info), normalizeKeylen(keylen, digest));
}
exports.hkdf = hkdf;
exports.default = hkdf;
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
"[project]/frontend/node_modules/uuid/dist/esm-node/rng.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/regex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/regex.js [app-ssr] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).substr(1));
}
function stringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/v1.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/rng.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)"); // **`v1()` - Generate time-based UUID**
;
;
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq; // Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
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
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
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
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(let n = 0; n < 6; ++n){
        b[i + n] = node[n];
    }
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(b);
}
const __TURBOPACK__default__export__ = v1;
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)");
;
function parse(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
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
"[project]/frontend/node_modules/uuid/dist/esm-node/v35.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DNS",
    ()=>DNS,
    "URL",
    ()=>URL,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/parse.js [app-ssr] (ecmascript)");
;
;
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i){
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function __TURBOPACK__default__export__(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        if (typeof value === 'string') {
            value = stringToBytes(value);
        }
        if (typeof namespace === 'string') {
            namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(namespace);
        }
        if (namespace.length !== 16) {
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
        } // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i){
                buf[offset + i] = bytes[i];
            }
            return buf;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/md5.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function md5(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('md5').update(bytes).digest();
}
const __TURBOPACK__default__export__ = md5;
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/v3.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/v35.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/md5.js [app-ssr] (ecmascript)");
;
;
const v3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('v3', 0x30, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v3;
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/v4.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/rng.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
;
;
function v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/sha1.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function sha1(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha1').update(bytes).digest();
}
const __TURBOPACK__default__export__ = sha1;
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/v5.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/v35.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/sha1.js [app-ssr] (ecmascript)");
;
;
const v5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('v5', 0x50, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v5;
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/nil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = '00000000-0000-0000-0000-000000000000';
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)");
;
function version(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    return parseInt(uuid.substr(14, 1), 16);
}
const __TURBOPACK__default__export__ = version;
}),
"[project]/frontend/node_modules/uuid/dist/esm-node/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NIL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "stringify",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "validate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/v1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/v3.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/v4.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/v5.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/nil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/version.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/uuid/dist/esm-node/parse.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/preact/dist/preact.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var n, l, t, u, r, i, o, e, f, c, s, p, h, a = {}, v = [], y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, d = Array.isArray;
function w(n, l) {
    for(var t in l)n[t] = l[t];
    return n;
}
function g(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
}
function _(l, t, u) {
    var r, i, o, e = {};
    for(o in t)"key" == o ? r = t[o] : "ref" == o ? i = t[o] : e[o] = t[o];
    if (arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : u), "function" == typeof l && null != l.defaultProps) for(o in l.defaultProps)void 0 === e[o] && (e[o] = l.defaultProps[o]);
    return x(l, e, r, i, null);
}
function x(n, u, r, i, o) {
    var e = {
        type: n,
        props: u,
        key: r,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: null == o ? ++t : o,
        __i: -1,
        __u: 0
    };
    return null == o && null != l.vnode && l.vnode(e), e;
}
function m(n) {
    return n.children;
}
function b(n, l) {
    this.props = n, this.context = l;
}
function k(n, l) {
    if (null == l) return n.__ ? k(n.__, n.__i + 1) : null;
    for(var t; l < n.__k.length; l++)if (null != (t = n.__k[l]) && null != t.__e) return t.__e;
    return "function" == typeof n.type ? k(n) : null;
}
function S(n) {
    if (n.__P && n.__d) {
        var t = n.__v, u = t.__e, r = [], i = [], o = w({}, t);
        o.__v = t.__v + 1, l.vnode && l.vnode(o), F(n.__P, o, t, n.__n, n.__P.namespaceURI, 32 & t.__u ? [
            u
        ] : null, r, null == u ? k(t) : u, !!(32 & t.__u), i), o.__v = t.__v, o.__.__k[o.__i] = o, z(r, o, i), t.__e = t.__ = null, o.__e != u && M(o);
    }
}
function M(n) {
    if (null != (n = n.__) && null != n.__c) return n.__e = n.__c.base = null, n.__k.some(function(l) {
        if (null != l && null != l.__e) return n.__e = n.__c.base = l.__e;
    }), M(n);
}
function $(n) {
    (!n.__d && (n.__d = !0) && r.push(n) && !C.__r++ || i != l.debounceRendering) && ((i = l.debounceRendering) || o)(C);
}
function C() {
    for(var n, l = 1; r.length;)r.length > l && r.sort(e), n = r.shift(), l = r.length, S(n);
    C.__r = 0;
}
function I(n, l, t, u, r, i, o, e, f, c, s) {
    var p, h, y, d, w, g, _, x = u && u.__k || v, m = l.length;
    for(f = P(t, l, x, f, m), p = 0; p < m; p++)null != (y = t.__k[p]) && (h = -1 != y.__i && x[y.__i] || a, y.__i = p, g = F(n, y, h, r, i, o, e, f, c, s), d = y.__e, y.ref && h.ref != y.ref && (h.ref && q(h.ref, null, y), s.push(y.ref, y.__c || d, y)), null == w && null != d && (w = d), (_ = !!(4 & y.__u)) || h.__k === y.__k ? f = A(y, f, n, _) : "function" == typeof y.type && void 0 !== g ? f = g : d && (f = d.nextSibling), y.__u &= -7);
    return t.__e = w, f;
}
function P(n, l, t, u, r) {
    var i, o, e, f, c, s = t.length, p = s, h = 0;
    for(n.__k = new Array(r), i = 0; i < r; i++)null != (o = l[i]) && "boolean" != typeof o && "function" != typeof o ? ("string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? o = n.__k[i] = x(null, o, null, null, null) : d(o) ? o = n.__k[i] = x(m, {
        children: o
    }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? o = n.__k[i] = x(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : n.__k[i] = o, f = i + h, o.__ = n, o.__b = n.__b + 1, e = null, -1 != (c = o.__i = H(o, t, f, p)) && (p--, (e = t[c]) && (e.__u |= 2)), null == e || null == e.__v ? (-1 == c && (r > s ? h-- : r < s && h++), "function" != typeof o.type && (o.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, o.__u |= 4))) : n.__k[i] = null;
    if (p) for(i = 0; i < s; i++)null != (e = t[i]) && 0 == (2 & e.__u) && (e.__e == u && (u = k(e)), B(e, e));
    return u;
}
function A(n, l, t, u) {
    var r, i;
    if ("function" == typeof n.type) {
        for(r = n.__k, i = 0; r && i < r.length; i++)r[i] && (r[i].__ = n, l = A(r[i], l, t, u));
        return l;
    }
    n.__e != l && (u && (l && n.type && !l.parentNode && (l = k(n)), t.insertBefore(n.__e, l || null)), l = n.__e);
    do {
        l = l && l.nextSibling;
    }while (null != l && 8 == l.nodeType)
    return l;
}
function H(n, l, t, u) {
    var r, i, o, e = n.key, f = n.type, c = l[t], s = null != c && 0 == (2 & c.__u);
    if (null === c && null == e || s && e == c.key && f == c.type) return t;
    if (u > (s ? 1 : 0)) {
        for(r = t - 1, i = t + 1; r >= 0 || i < l.length;)if (null != (c = l[o = r >= 0 ? r-- : i++]) && 0 == (2 & c.__u) && e == c.key && f == c.type) return o;
    }
    return -1;
}
function L(n, l, t) {
    "-" == l[0] ? n.setProperty(l, null == t ? "" : t) : n[l] = null == t ? "" : "number" != typeof t || y.test(l) ? t : t + "px";
}
function T(n, l, t, u, r) {
    var i, o;
    n: if ("style" == l) if ("string" == typeof t) n.style.cssText = t;
    else {
        if ("string" == typeof u && (n.style.cssText = u = ""), u) for(l in u)t && l in t || L(n.style, l, "");
        if (t) for(l in t)u && t[l] == u[l] || L(n.style, l, t[l]);
    }
    else if ("o" == l[0] && "n" == l[1]) i = l != (l = l.replace(f, "$1")), o = l.toLowerCase(), l = o in n || "onFocusOut" == l || "onFocusIn" == l ? o.slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + i] = t, t ? u ? t.t = u.t : (t.t = c, n.addEventListener(l, i ? p : s, i)) : n.removeEventListener(l, i ? p : s, i);
    else {
        if ("http://www.w3.org/2000/svg" == r) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
            n[l] = null == t ? "" : t;
            break n;
        } catch (n) {}
        "function" == typeof t || (null == t || !1 === t && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == t ? "" : t));
    }
}
function j(n) {
    return function(t) {
        if (this.l) {
            var u = this.l[t.type + n];
            if (null == t.u) t.u = c++;
            else if (t.u < u.t) return;
            return u(l.event ? l.event(t) : t);
        }
    };
}
function F(n, t, u, r, i, o, e, f, c, s) {
    var p, h, a, y, _, x, k, S, M, $, C, P, A, H, L, T = t.type;
    if (void 0 !== t.constructor) return null;
    128 & u.__u && (c = !!(32 & u.__u), o = [
        f = t.__e = u.__e
    ]), (p = l.__b) && p(t);
    n: if ("function" == typeof T) try {
        if (S = t.props, M = "prototype" in T && T.prototype.render, $ = (p = T.contextType) && r[p.__c], C = p ? $ ? $.props.value : p.__ : r, u.__c ? k = (h = t.__c = u.__c).__ = h.__E : (M ? t.__c = h = new T(S, C) : (t.__c = h = new b(S, C), h.constructor = T, h.render = D), $ && $.sub(h), h.state || (h.state = {}), h.__n = r, a = h.__d = !0, h.__h = [], h._sb = []), M && null == h.__s && (h.__s = h.state), M && null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = w({}, h.__s)), w(h.__s, T.getDerivedStateFromProps(S, h.__s))), y = h.props, _ = h.state, h.__v = t, a) M && null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), M && null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
            if (M && null == T.getDerivedStateFromProps && S !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(S, C), t.__v == u.__v || !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(S, h.__s, C)) {
                t.__v != u.__v && (h.props = S, h.state = h.__s, h.__d = !1), t.__e = u.__e, t.__k = u.__k, t.__k.some(function(n) {
                    n && (n.__ = t);
                }), v.push.apply(h.__h, h._sb), h._sb = [], h.__h.length && e.push(h);
                break n;
            }
            null != h.componentWillUpdate && h.componentWillUpdate(S, h.__s, C), M && null != h.componentDidUpdate && h.__h.push(function() {
                h.componentDidUpdate(y, _, x);
            });
        }
        if (h.context = C, h.props = S, h.__P = n, h.__e = !1, P = l.__r, A = 0, M) h.state = h.__s, h.__d = !1, P && P(t), p = h.render(h.props, h.state, h.context), v.push.apply(h.__h, h._sb), h._sb = [];
        else do {
            h.__d = !1, P && P(t), p = h.render(h.props, h.state, h.context), h.state = h.__s;
        }while (h.__d && ++A < 25)
        h.state = h.__s, null != h.getChildContext && (r = w(w({}, r), h.getChildContext())), M && !a && null != h.getSnapshotBeforeUpdate && (x = h.getSnapshotBeforeUpdate(y, _)), H = null != p && p.type === m && null == p.key ? N(p.props.children) : p, f = I(n, d(H) ? H : [
            H
        ], t, u, r, i, o, e, f, c, s), h.base = t.__e, t.__u &= -161, h.__h.length && e.push(h), k && (h.__E = h.__ = null);
    } catch (n) {
        if (t.__v = null, c || null != o) if (n.then) {
            for(t.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;)f = f.nextSibling;
            o[o.indexOf(f)] = null, t.__e = f;
        } else {
            for(L = o.length; L--;)g(o[L]);
            O(t);
        }
        else t.__e = u.__e, t.__k = u.__k, n.then || O(t);
        l.__e(n, t, u);
    }
    else null == o && t.__v == u.__v ? (t.__k = u.__k, t.__e = u.__e) : f = t.__e = V(u.__e, t, u, r, i, o, e, c, s);
    return (p = l.diffed) && p(t), 128 & t.__u ? void 0 : f;
}
function O(n) {
    n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(O));
}
function z(n, t, u) {
    for(var r = 0; r < u.length; r++)q(u[r], u[++r], u[++r]);
    l.__c && l.__c(t, n), n.some(function(t) {
        try {
            n = t.__h, t.__h = [], n.some(function(n) {
                n.call(t);
            });
        } catch (n) {
            l.__e(n, t.__v);
        }
    });
}
function N(n) {
    return "object" != typeof n || null == n || n.__b > 0 ? n : d(n) ? n.map(N) : w({}, n);
}
function V(t, u, r, i, o, e, f, c, s) {
    var p, h, v, y, w, _, x, m = r.props || a, b = u.props, S = u.type;
    if ("svg" == S ? o = "http://www.w3.org/2000/svg" : "math" == S ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != e) {
        for(p = 0; p < e.length; p++)if ((w = e[p]) && "setAttribute" in w == !!S && (S ? w.localName == S : 3 == w.nodeType)) {
            t = w, e[p] = null;
            break;
        }
    }
    if (null == t) {
        if (null == S) return document.createTextNode(b);
        t = document.createElementNS(o, S, b.is && b), c && (l.__m && l.__m(u, e), c = !1), e = null;
    }
    if (null == S) m === b || c && t.data == b || (t.data = b);
    else {
        if (e = e && n.call(t.childNodes), !c && null != e) for(m = {}, p = 0; p < t.attributes.length; p++)m[(w = t.attributes[p]).name] = w.value;
        for(p in m)w = m[p], "dangerouslySetInnerHTML" == p ? v = w : "children" == p || p in b || "value" == p && "defaultValue" in b || "checked" == p && "defaultChecked" in b || T(t, p, null, w, o);
        for(p in b)w = b[p], "children" == p ? y = w : "dangerouslySetInnerHTML" == p ? h = w : "value" == p ? _ = w : "checked" == p ? x = w : c && "function" != typeof w || m[p] === w || T(t, p, w, m[p], o);
        if (h) c || v && (h.__html == v.__html || h.__html == t.innerHTML) || (t.innerHTML = h.__html), u.__k = [];
        else if (v && (t.innerHTML = ""), I("template" == u.type ? t.content : t, d(y) ? y : [
            y
        ], u, r, i, "foreignObject" == S ? "http://www.w3.org/1999/xhtml" : o, e, f, e ? e[0] : r.__k && k(r, 0), c, s), null != e) for(p = e.length; p--;)g(e[p]);
        c || (p = "value", "progress" == S && null == _ ? t.removeAttribute("value") : null != _ && (_ !== t[p] || "progress" == S && !_ || "option" == S && _ != m[p]) && T(t, p, _, m[p], o), p = "checked", null != x && x != t[p] && T(t, p, x, m[p], o));
    }
    return t;
}
function q(n, t, u) {
    try {
        if ("function" == typeof n) {
            var r = "function" == typeof n.__u;
            r && n.__u(), r && null == t || (n.__u = n(t));
        } else n.current = t;
    } catch (n) {
        l.__e(n, u);
    }
}
function B(n, t, u) {
    var r, i;
    if (l.unmount && l.unmount(n), (r = n.ref) && (r.current && r.current != n.__e || q(r, null, t)), null != (r = n.__c)) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount();
        } catch (n) {
            l.__e(n, t);
        }
        r.base = r.__P = null;
    }
    if (r = n.__k) for(i = 0; i < r.length; i++)r[i] && B(r[i], t, u || "function" != typeof n.type);
    u || g(n.__e), n.__c = n.__ = n.__e = void 0;
}
function D(n, l, t) {
    return this.constructor(n, t);
}
function E(t, u, r) {
    var i, o, e, f;
    u == document && (u = document.documentElement), l.__ && l.__(t, u), o = (i = "function" == typeof r) ? null : r && r.__k || u.__k, e = [], f = [], F(u, t = (!i && r || u).__k = _(m, null, [
        t
    ]), o || a, a, u.namespaceURI, !i && r ? [
        r
    ] : o ? null : u.firstChild ? n.call(u.childNodes) : null, e, !i && r ? r : o ? o.__e : u.firstChild, i, f), z(e, t, f);
}
n = v.slice, l = {
    __e: function(n, l, t, u) {
        for(var r, i, o; l = l.__;)if ((r = l.__c) && !r.__) try {
            if ((i = r.constructor) && null != i.getDerivedStateFromError && (r.setState(i.getDerivedStateFromError(n)), o = r.__d), null != r.componentDidCatch && (r.componentDidCatch(n, u || {}), o = r.__d), o) return r.__E = r;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, t = 0, u = function(n) {
    return null != n && void 0 === n.constructor;
}, b.prototype.setState = function(n, l) {
    var t;
    t = null != this.__s && this.__s != this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n && (n = n(w({}, t), this.props)), n && w(t, n), null != n && this.__v && (l && this._sb.push(l), $(this));
}, b.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), $(this));
}, b.prototype.render = m, r = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, C.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = j(!1), p = j(!0), h = 0, exports.Component = b, exports.Fragment = m, exports.cloneElement = function(l, t, u) {
    var r, i, o, e, f = w({}, l.props);
    for(o in l.type && l.type.defaultProps && (e = l.type.defaultProps), t)"key" == o ? r = t[o] : "ref" == o ? i = t[o] : f[o] = void 0 === t[o] && null != e ? e[o] : t[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : u), x(l.type, f, r || l.key, i || l.ref, null);
}, exports.createContext = function(n) {
    function l(n) {
        var t, u;
        return this.getChildContext || (t = new Set, (u = {})[l.__c] = this, this.getChildContext = function() {
            return u;
        }, this.componentWillUnmount = function() {
            t = null;
        }, this.shouldComponentUpdate = function(n) {
            this.props.value != n.value && t.forEach(function(n) {
                n.__e = !0, $(n);
            });
        }, this.sub = function(n) {
            t.add(n);
            var l = n.componentWillUnmount;
            n.componentWillUnmount = function() {
                t && t.delete(n), l && l.call(n);
            };
        }), n.children;
    }
    return l.__c = "__cC" + h++, l.__ = n, l.Provider = l.__l = (l.Consumer = function(n, l) {
        return n.children(l);
    }).contextType = l, l;
}, exports.createElement = _, exports.createRef = function() {
    return {
        current: null
    };
}, exports.h = _, exports.hydrate = function n(l, t) {
    E(l, t, n);
}, exports.isValidElement = u, exports.options = l, exports.render = E, exports.toChildArray = function n(l, t) {
    return t = t || [], null == l || "boolean" == typeof l || (d(l) ? l.some(function(l) {
        n(l, t);
    }) : t.push(l)), t;
}; //# sourceMappingURL=preact.js.map
}),
"[project]/frontend/node_modules/preact-render-to-string/dist/commonjs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? t(exports, __turbopack_context__.r("[project]/frontend/node_modules/preact/dist/preact.js [app-ssr] (ecmascript)")) : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(e, t) {
    var n = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, r = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, o = /[\s\n\\/='"\0<>]/, i = /^xlink:?./, s = /["&<]/;
    function a(e) {
        if (!1 === s.test(e += "")) return e;
        for(var t = 0, n = 0, r = "", o = ""; n < e.length; n++){
            switch(e.charCodeAt(n)){
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
            n !== t && (r += e.slice(t, n)), r += o, t = n + 1;
        }
        return n !== t && (r += e.slice(t, n)), r;
    }
    var l = function(e, t) {
        return String(e).replace(/(\n+)/g, "$1" + (t || "\t"));
    }, f = function(e, t, n) {
        return String(e).length > (t || 40) || !n && -1 !== String(e).indexOf("\n") || -1 !== String(e).indexOf("<");
    }, u = {}, p = /([A-Z])/g;
    function c(e) {
        var t = "";
        for(var r in e){
            var o = e[r];
            null != o && "" !== o && (t && (t += " "), t += "-" == r[0] ? r : u[r] || (u[r] = r.replace(p, "-$1").toLowerCase()), t = "number" == typeof o && !1 === n.test(r) ? t + ": " + o + "px;" : t + ": " + o + ";");
        }
        return t || void 0;
    }
    function _(e, t) {
        return Array.isArray(t) ? t.reduce(_, e) : null != t && !1 !== t && e.push(t), e;
    }
    function d() {
        this.__d = !0;
    }
    function v(e, t) {
        return {
            __v: e,
            context: t,
            props: e.props,
            setState: d,
            forceUpdate: d,
            __d: !0,
            __h: []
        };
    }
    function g(e, t) {
        var n = e.contextType, r = n && t[n.__c];
        return null != n ? r ? r.props.value : n.__ : t;
    }
    var h = [];
    function y(e, n, s, u, p, d) {
        if (null == e || "boolean" == typeof e) return "";
        if ("object" != typeof e) return "function" == typeof e ? "" : a(e);
        var m = s.pretty, b = m && "string" == typeof m ? m : "\t";
        if (Array.isArray(e)) {
            for(var x = "", k = 0; k < e.length; k++)m && k > 0 && (x += "\n"), x += y(e[k], n, s, u, p, d);
            return x;
        }
        if (void 0 !== e.constructor) return "";
        var S, w = e.type, C = e.props, O = !1;
        if ("function" == typeof w) {
            if (O = !0, !s.shallow || !u && !1 !== s.renderRootComponent) {
                if (w === t.Fragment) {
                    var j = [];
                    return _(j, e.props.children), y(j, n, s, !1 !== s.shallowHighOrder, p, d);
                }
                var F, A = e.__c = v(e, n);
                t.options.__b && t.options.__b(e);
                var T = t.options.__r;
                if (w.prototype && "function" == typeof w.prototype.render) {
                    var H = g(w, n);
                    (A = e.__c = new w(C, H)).__v = e, A._dirty = A.__d = !0, A.props = C, null == A.state && (A.state = {}), null == A._nextState && null == A.__s && (A._nextState = A.__s = A.state), A.context = H, w.getDerivedStateFromProps ? A.state = Object.assign({}, A.state, w.getDerivedStateFromProps(A.props, A.state)) : A.componentWillMount && (A.componentWillMount(), A.state = A._nextState !== A.state ? A._nextState : A.__s !== A.state ? A.__s : A.state), T && T(e), F = A.render(A.props, A.state, A.context);
                } else for(var M = g(w, n), L = 0; A.__d && L++ < 25;)A.__d = !1, T && T(e), F = w.call(e.__c, C, M);
                return A.getChildContext && (n = Object.assign({}, n, A.getChildContext())), t.options.diffed && t.options.diffed(e), y(F, n, s, !1 !== s.shallowHighOrder, p, d);
            }
            w = (S = w).displayName || S !== Function && S.name || function(e) {
                var t = (Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/) || "")[1];
                if (!t) {
                    for(var n = -1, r = h.length; r--;)if (h[r] === e) {
                        n = r;
                        break;
                    }
                    n < 0 && (n = h.push(e) - 1), t = "UnnamedComponent" + n;
                }
                return t;
            }(S);
        }
        var E, $, D = "<" + w;
        if (C) {
            var N = Object.keys(C);
            s && !0 === s.sortAttributes && N.sort();
            for(var P = 0; P < N.length; P++){
                var R = N[P], W = C[R];
                if ("children" !== R) {
                    if (!o.test(R) && (s && s.allAttributes || "key" !== R && "ref" !== R && "__self" !== R && "__source" !== R)) {
                        if ("defaultValue" === R) R = "value";
                        else if ("defaultChecked" === R) R = "checked";
                        else if ("defaultSelected" === R) R = "selected";
                        else if ("className" === R) {
                            if (void 0 !== C.class) continue;
                            R = "class";
                        } else p && i.test(R) && (R = R.toLowerCase().replace(/^xlink:?/, "xlink:"));
                        if ("htmlFor" === R) {
                            if (C.for) continue;
                            R = "for";
                        }
                        "style" === R && W && "object" == typeof W && (W = c(W)), "a" === R[0] && "r" === R[1] && "boolean" == typeof W && (W = String(W));
                        var q = s.attributeHook && s.attributeHook(R, W, n, s, O);
                        if (q || "" === q) D += q;
                        else if ("dangerouslySetInnerHTML" === R) $ = W && W.__html;
                        else if ("textarea" === w && "value" === R) E = W;
                        else if ((W || 0 === W || "" === W) && "function" != typeof W) {
                            if (!(!0 !== W && "" !== W || (W = R, s && s.xml))) {
                                D = D + " " + R;
                                continue;
                            }
                            if ("value" === R) {
                                if ("select" === w) {
                                    d = W;
                                    continue;
                                }
                                "option" === w && d == W && void 0 === C.selected && (D += " selected");
                            }
                            D = D + " " + R + '="' + a(W) + '"';
                        }
                    }
                } else E = W;
            }
        }
        if (m) {
            var I = D.replace(/\n\s*/, " ");
            I === D || ~I.indexOf("\n") ? m && ~D.indexOf("\n") && (D += "\n") : D = I;
        }
        if (D += ">", o.test(w)) throw new Error(w + " is not a valid HTML tag name in " + D);
        var U, V = r.test(w) || s.voidElements && s.voidElements.test(w), z = [];
        if ($) m && f($) && ($ = "\n" + b + l($, b)), D += $;
        else if (null != E && _(U = [], E).length) {
            for(var Z = m && ~D.indexOf("\n"), B = !1, G = 0; G < U.length; G++){
                var J = U[G];
                if (null != J && !1 !== J) {
                    var K = y(J, n, s, !0, "svg" === w || "foreignObject" !== w && p, d);
                    if (m && !Z && f(K) && (Z = !0), K) if (m) {
                        var Q = K.length > 0 && "<" != K[0];
                        B && Q ? z[z.length - 1] += K : z.push(K), B = Q;
                    } else z.push(K);
                }
            }
            if (m && Z) for(var X = z.length; X--;)z[X] = "\n" + b + l(z[X], b);
        }
        if (z.length || $) D += z.join("");
        else if (s && s.xml) return D.substring(0, D.length - 1) + " />";
        return !V || U || $ ? (m && ~D.indexOf("\n") && (D += "\n"), D = D + "</" + w + ">") : D = D.replace(/>$/, " />"), D;
    }
    var m = {
        shallow: !0
    };
    k.render = k;
    var b = function(e, t) {
        return k(e, t, m);
    }, x = [];
    function k(e, n, r) {
        n = n || {};
        var o = t.options.__s;
        t.options.__s = !0;
        var i, s = t.h(t.Fragment, null);
        return s.__k = [
            e
        ], i = r && (r.pretty || r.voidElements || r.sortAttributes || r.shallow || r.allAttributes || r.xml || r.attributeHook) ? y(e, n, r) : F(e, n, !1, void 0, s), t.options.__c && t.options.__c(e, x), t.options.__s = o, x.length = 0, i;
    }
    function S(e) {
        return null == e || "boolean" == typeof e ? null : "string" == typeof e || "number" == typeof e || "bigint" == typeof e ? t.h(null, null, e) : e;
    }
    function w(e, t) {
        return "className" === e ? "class" : "htmlFor" === e ? "for" : "defaultValue" === e ? "value" : "defaultChecked" === e ? "checked" : "defaultSelected" === e ? "selected" : t && i.test(e) ? e.toLowerCase().replace(/^xlink:?/, "xlink:") : e;
    }
    function C(e, t) {
        return "style" === e && null != t && "object" == typeof t ? c(t) : "a" === e[0] && "r" === e[1] && "boolean" == typeof t ? String(t) : t;
    }
    var O = Array.isArray, j = Object.assign;
    function F(e, n, i, s, l) {
        if (null == e || !0 === e || !1 === e || "" === e) return "";
        if ("object" != typeof e) return "function" == typeof e ? "" : a(e);
        if (O(e)) {
            var f = "";
            l.__k = e;
            for(var u = 0; u < e.length; u++)f += F(e[u], n, i, s, l), e[u] = S(e[u]);
            return f;
        }
        if (void 0 !== e.constructor) return "";
        e.__ = l, t.options.__b && t.options.__b(e);
        var p = e.type, c = e.props;
        if ("function" == typeof p) {
            var _;
            if (p === t.Fragment) _ = c.children;
            else {
                _ = p.prototype && "function" == typeof p.prototype.render ? function(e, n) {
                    var r = e.type, o = g(r, n), i = new r(e.props, o);
                    e.__c = i, i.__v = e, i.__d = !0, i.props = e.props, null == i.state && (i.state = {}), null == i.__s && (i.__s = i.state), i.context = o, r.getDerivedStateFromProps ? i.state = j({}, i.state, r.getDerivedStateFromProps(i.props, i.state)) : i.componentWillMount && (i.componentWillMount(), i.state = i.__s !== i.state ? i.__s : i.state);
                    var s = t.options.__r;
                    return s && s(e), i.render(i.props, i.state, i.context);
                }(e, n) : function(e, n) {
                    var r, o = v(e, n), i = g(e.type, n);
                    e.__c = o;
                    for(var s = t.options.__r, a = 0; o.__d && a++ < 25;)o.__d = !1, s && s(e), r = e.type.call(o, e.props, i);
                    return r;
                }(e, n);
                var d = e.__c;
                d.getChildContext && (n = j({}, n, d.getChildContext()));
            }
            var h = F(_ = null != _ && _.type === t.Fragment && null == _.key ? _.props.children : _, n, i, s, e);
            return t.options.diffed && t.options.diffed(e), e.__ = void 0, t.options.unmount && t.options.unmount(e), h;
        }
        var y, m, b = "<";
        if (b += p, c) for(var x in y = c.children, c){
            var k = c[x];
            if (!("key" === x || "ref" === x || "__self" === x || "__source" === x || "children" === x || "className" === x && "class" in c || "htmlFor" === x && "for" in c || o.test(x))) {
                if (k = C(x = w(x, i), k), "dangerouslySetInnerHTML" === x) m = k && k.__html;
                else if ("textarea" === p && "value" === x) y = k;
                else if ((k || 0 === k || "" === k) && "function" != typeof k) {
                    if (!0 === k || "" === k) {
                        k = x, b = b + " " + x;
                        continue;
                    }
                    if ("value" === x) {
                        if ("select" === p) {
                            s = k;
                            continue;
                        }
                        "option" !== p || s != k || "selected" in c || (b += " selected");
                    }
                    b = b + " " + x + '="' + a(k) + '"';
                }
            }
        }
        var A = b;
        if (b += ">", o.test(p)) throw new Error(p + " is not a valid HTML tag name in " + b);
        var T = "", H = !1;
        if (m) T += m, H = !0;
        else if ("string" == typeof y) T += a(y), H = !0;
        else if (O(y)) {
            e.__k = y;
            for(var M = 0; M < y.length; M++){
                var L = y[M];
                if (y[M] = S(L), null != L && !1 !== L) {
                    var E = F(L, n, "svg" === p || "foreignObject" !== p && i, s, e);
                    E && (T += E, H = !0);
                }
            }
        } else if (null != y && !1 !== y && !0 !== y) {
            e.__k = [
                S(y)
            ];
            var $ = F(y, n, "svg" === p || "foreignObject" !== p && i, s, e);
            $ && (T += $, H = !0);
        }
        if (t.options.diffed && t.options.diffed(e), e.__ = void 0, t.options.unmount && t.options.unmount(e), H) b += T;
        else if (r.test(p)) return A + " />";
        return b + "</" + p + ">";
    }
    k.shallowRender = b, e.default = k, e.render = k, e.renderToStaticMarkup = k, e.renderToString = k, e.shallowRender = b;
}); //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/preact-render-to-string/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/frontend/node_modules/preact-render-to-string/dist/commonjs.js [app-ssr] (ecmascript)").default;
}),
"[project]/frontend/node_modules/@babel/runtime/helpers/extends.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function _extends() {
    return module.exports = _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
}),
"[project]/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/frontend/node_modules/next-auth/node_modules/cookie/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/frontend/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
    return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, partitioned, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase().replace(/-/g, ""),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        },
        ...partitioned && {
            partitioned: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, options] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0]
        ];
        return this.set({
            ...options,
            name,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies,
    ResponseCookies,
    parseCookie,
    parseSetCookie,
    stringifyCookie
});
}),
"[project]/frontend/node_modules/next/dist/server/web/spec-extension/cookies.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RequestCookies: null,
    ResponseCookies: null,
    stringifyCookie: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RequestCookies: function() {
        return _cookies.RequestCookies;
    },
    ResponseCookies: function() {
        return _cookies.ResponseCookies;
    },
    stringifyCookie: function() {
        return _cookies.stringifyCookie;
    }
});
const _cookies = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-ssr] (ecmascript)"); //# sourceMappingURL=cookies.js.map
}),
"[project]/frontend/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/action-revalidation-kind.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ActionDidNotRevalidate: null,
    ActionDidRevalidateDynamicOnly: null,
    ActionDidRevalidateStaticAndDynamic: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ActionDidNotRevalidate: function() {
        return ActionDidNotRevalidate;
    },
    ActionDidRevalidateDynamicOnly: function() {
        return ActionDidRevalidateDynamicOnly;
    },
    ActionDidRevalidateStaticAndDynamic: function() {
        return ActionDidRevalidateStaticAndDynamic;
    }
});
const ActionDidNotRevalidate = 0;
const ActionDidRevalidateStaticAndDynamic = 1;
const ActionDidRevalidateDynamicOnly = 2; //# sourceMappingURL=action-revalidation-kind.js.map
}),
"[project]/frontend/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MutableRequestCookiesAdapter: null,
    ReadonlyRequestCookiesError: null,
    RequestCookiesAdapter: null,
    appendMutableCookies: null,
    areCookiesMutableInCurrentPhase: null,
    createCookiesWithMutableAccessCheck: null,
    getModifiedCookieValues: null,
    responseCookiesToRequestCookies: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MutableRequestCookiesAdapter: function() {
        return MutableRequestCookiesAdapter;
    },
    ReadonlyRequestCookiesError: function() {
        return ReadonlyRequestCookiesError;
    },
    RequestCookiesAdapter: function() {
        return RequestCookiesAdapter;
    },
    appendMutableCookies: function() {
        return appendMutableCookies;
    },
    areCookiesMutableInCurrentPhase: function() {
        return areCookiesMutableInCurrentPhase;
    },
    createCookiesWithMutableAccessCheck: function() {
        return createCookiesWithMutableAccessCheck;
    },
    getModifiedCookieValues: function() {
        return getModifiedCookieValues;
    },
    responseCookiesToRequestCookies: function() {
        return responseCookiesToRequestCookies;
    }
});
const _cookies = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/web/spec-extension/cookies.js [app-ssr] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _actionrevalidationkind = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/action-revalidation-kind.js [app-ssr] (ecmascript)");
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super('Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options');
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'clear':
                    case 'delete':
                    case 'set':
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new _cookies.ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookies = new _cookies.ResponseCookies(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            // TODO-APP: change method of getting workStore
            const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
            if (workStore) {
                workStore.pathWasRevalidated = _actionrevalidationkind.ActionDidRevalidateStaticAndDynamic;
            }
            const allCookies = responseCookies.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new _cookies.ResponseCookies(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        const wrappedCookies = new Proxy(responseCookies, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case 'delete':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case 'set':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.set(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
        return wrappedCookies;
    }
}
function createCookiesWithMutableAccessCheck(requestStore) {
    const wrappedCookies = new Proxy(requestStore.mutableCookies, {
        get (target, prop, receiver) {
            switch(prop){
                case 'delete':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().delete');
                        target.delete(...args);
                        return wrappedCookies;
                    };
                case 'set':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().set');
                        target.set(...args);
                        return wrappedCookies;
                    };
                default:
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
        }
    });
    return wrappedCookies;
}
function areCookiesMutableInCurrentPhase(requestStore) {
    return requestStore.phase === 'action';
}
/** Ensure that cookies() starts throwing on mutation
 * if we changed phases and can no longer mutate.
 *
 * This can happen when going:
 *   'render' -> 'after'
 *   'action' -> 'render'
 * */ function ensureCookiesAreStillMutable(requestStore, _callingExpression) {
    if (!areCookiesMutableInCurrentPhase(requestStore)) {
        // TODO: maybe we can give a more precise error message based on callingExpression?
        throw new ReadonlyRequestCookiesError();
    }
}
function responseCookiesToRequestCookies(responseCookies) {
    const requestCookies = new _cookies.RequestCookies(new Headers());
    for (const cookie of responseCookies.getAll()){
        requestCookies.set(cookie);
    }
    return requestCookies;
} //# sourceMappingURL=request-cookies.js.map
}),
"[project]/frontend/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
    enumerable: true,
    get: function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof _react.cache === 'function' ? _react.cache : (fn)=>fn;
// When Cache Components is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache((key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
        const message = getMessage(...args);
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else //TURBOPACK unreachable
        ;
    };
} //# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map
}),
"[project]/frontend/node_modules/next/dist/server/request/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRequestAPICallableInsideAfter: null,
    throwForSearchParamsAccessInUseCache: null,
    throwWithStaticGenerationBailoutErrorWithDynamicError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRequestAPICallableInsideAfter: function() {
        return isRequestAPICallableInsideAfter;
    },
    throwForSearchParamsAccessInUseCache: function() {
        return throwForSearchParamsAccessInUseCache;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    }
});
const _staticgenerationbailout = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _aftertaskasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)");
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
    const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
        value: "E842",
        enumerable: false,
        configurable: true
    });
    Error.captureStackTrace(error, constructorOpt);
    workStore.invalidDynamicUsageError ??= error;
    throw error;
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
} //# sourceMappingURL=utils.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createPromiseWithResolvers", {
    enumerable: true,
    get: function() {
        return createPromiseWithResolvers;
    }
});
function createPromiseWithResolvers() {
    // Shim of Stage 4 Promise.withResolvers proposal
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise
    };
} //# sourceMappingURL=promise-with-resolvers.js.map
}),
"[project]/frontend/node_modules/next/dist/server/app-render/staged-rendering.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RenderStage: null,
    StagedRenderingController: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RenderStage: function() {
        return RenderStage;
    },
    StagedRenderingController: function() {
        return StagedRenderingController;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-ssr] (ecmascript)");
var RenderStage = /*#__PURE__*/ function(RenderStage) {
    RenderStage[RenderStage["Before"] = 1] = "Before";
    RenderStage[RenderStage["Static"] = 2] = "Static";
    RenderStage[RenderStage["Runtime"] = 3] = "Runtime";
    RenderStage[RenderStage["Dynamic"] = 4] = "Dynamic";
    RenderStage[RenderStage["Abandoned"] = 5] = "Abandoned";
    return RenderStage;
}({});
class StagedRenderingController {
    constructor(abortSignal = null, hasRuntimePrefetch){
        this.abortSignal = abortSignal;
        this.hasRuntimePrefetch = hasRuntimePrefetch;
        this.currentStage = 1;
        this.staticInterruptReason = null;
        this.runtimeInterruptReason = null;
        this.staticStageEndTime = Infinity;
        this.runtimeStageEndTime = Infinity;
        this.runtimeStageListeners = [];
        this.dynamicStageListeners = [];
        this.runtimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.dynamicStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.mayAbandon = false;
        if (abortSignal) {
            abortSignal.addEventListener('abort', ()=>{
                const { reason } = abortSignal;
                if (this.currentStage < 3) {
                    this.runtimeStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.runtimeStagePromise.reject(reason);
                }
                if (this.currentStage < 4 || this.currentStage === 5) {
                    this.dynamicStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.dynamicStagePromise.reject(reason);
                }
            }, {
                once: true
            });
            this.mayAbandon = true;
        }
    }
    onStage(stage, callback) {
        if (this.currentStage >= stage) {
            callback();
        } else if (stage === 3) {
            this.runtimeStageListeners.push(callback);
        } else if (stage === 4) {
            this.dynamicStageListeners.push(callback);
        } else {
            // This should never happen
            throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                value: "E881",
                enumerable: false,
                configurable: true
            });
        }
    }
    canSyncInterrupt() {
        // If we haven't started the render yet, it can't be interrupted.
        if (this.currentStage === 1) {
            return false;
        }
        const boundaryStage = this.hasRuntimePrefetch ? 4 : 3;
        return this.currentStage < boundaryStage;
    }
    syncInterruptCurrentStageWithReason(reason) {
        if (this.currentStage === 1) {
            return;
        }
        // If Sync IO occurs during the initial (abandonable) render, we'll retry it,
        // so we want a slightly different flow.
        // See the implementation of `abandonRenderImpl` for more explanation.
        if (this.mayAbandon) {
            return this.abandonRenderImpl();
        }
        // If we're in the final render, we cannot abandon it. We need to advance to the Dynamic stage
        // and capture the interruption reason.
        switch(this.currentStage){
            case 2:
                {
                    this.staticInterruptReason = reason;
                    this.advanceStage(4);
                    return;
                }
            case 3:
                {
                    // We only error for Sync IO in the runtime stage if the route
                    // is configured to use runtime prefetching.
                    // We do this to reflect the fact that during a runtime prefetch,
                    // Sync IO aborts aborts the render.
                    // Note that `canSyncInterrupt` should prevent us from getting here at all
                    // if runtime prefetching isn't enabled.
                    if (this.hasRuntimePrefetch) {
                        this.runtimeInterruptReason = reason;
                        this.advanceStage(4);
                    }
                    return;
                }
            case 4:
            case 5:
            default:
        }
    }
    getStaticInterruptReason() {
        return this.staticInterruptReason;
    }
    getRuntimeInterruptReason() {
        return this.runtimeInterruptReason;
    }
    getStaticStageEndTime() {
        return this.staticStageEndTime;
    }
    getRuntimeStageEndTime() {
        return this.runtimeStageEndTime;
    }
    abandonRender() {
        if (!this.mayAbandon) {
            throw Object.defineProperty(new _invarianterror.InvariantError('`abandonRender` called on a stage controller that cannot be abandoned.'), "__NEXT_ERROR_CODE", {
                value: "E938",
                enumerable: false,
                configurable: true
            });
        }
        this.abandonRenderImpl();
    }
    abandonRenderImpl() {
        // In staged rendering, only the initial render is abandonable.
        // We can abandon the initial render if
        //   1. We notice a cache miss, and need to wait for caches to fill
        //   2. A sync IO error occurs, and the render should be interrupted
        //      (this might be a lazy intitialization of a module,
        //       so we still want to restart in this case and see if it still occurs)
        // In either case, we'll be doing another render after this one,
        // so we only want to unblock the Runtime stage, not Dynamic, because
        // unblocking the dynamic stage would likely lead to wasted (uncached) IO.
        const { currentStage } = this;
        switch(currentStage){
            case 2:
                {
                    this.currentStage = 5;
                    this.resolveRuntimeStage();
                    return;
                }
            case 3:
                {
                    this.currentStage = 5;
                    return;
                }
            case 4:
            case 1:
            case 5:
                break;
            default:
                {
                    currentStage;
                }
        }
    }
    advanceStage(stage) {
        // If we're already at the target stage or beyond, do nothing.
        // (this can happen e.g. if sync IO advanced us to the dynamic stage)
        if (stage <= this.currentStage) {
            return;
        }
        let currentStage = this.currentStage;
        this.currentStage = stage;
        if (currentStage < 3 && stage >= 3) {
            this.staticStageEndTime = performance.now() + performance.timeOrigin;
            this.resolveRuntimeStage();
        }
        if (currentStage < 4 && stage >= 4) {
            this.runtimeStageEndTime = performance.now() + performance.timeOrigin;
            this.resolveDynamicStage();
            return;
        }
    }
    /** Fire the `onStage` listeners for the runtime stage and unblock any promises waiting for it. */ resolveRuntimeStage() {
        const runtimeListeners = this.runtimeStageListeners;
        for(let i = 0; i < runtimeListeners.length; i++){
            runtimeListeners[i]();
        }
        runtimeListeners.length = 0;
        this.runtimeStagePromise.resolve();
    }
    /** Fire the `onStage` listeners for the dynamic stage and unblock any promises waiting for it. */ resolveDynamicStage() {
        const dynamicListeners = this.dynamicStageListeners;
        for(let i = 0; i < dynamicListeners.length; i++){
            dynamicListeners[i]();
        }
        dynamicListeners.length = 0;
        this.dynamicStagePromise.resolve();
    }
    getStagePromise(stage) {
        switch(stage){
            case 3:
                {
                    return this.runtimeStagePromise.promise;
                }
            case 4:
                {
                    return this.dynamicStagePromise.promise;
                }
            default:
                {
                    stage;
                    throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                        value: "E881",
                        enumerable: false,
                        configurable: true
                    });
                }
        }
    }
    waitForStage(stage) {
        return this.getStagePromise(stage);
    }
    delayUntilStage(stage, displayName, resolvedValue) {
        const ioTriggerPromise = this.getStagePromise(stage);
        const promise = makeDevtoolsIOPromiseFromIOTrigger(ioTriggerPromise, displayName, resolvedValue);
        // Analogously to `makeHangingPromise`, we might reject this promise if the signal is invoked.
        // (e.g. in the case where we don't want want the render to proceed to the dynamic stage and abort it).
        // We shouldn't consider this an unhandled rejection, so we attach a noop catch handler here to suppress this warning.
        if (this.abortSignal) {
            promise.catch(ignoreReject);
        }
        return promise;
    }
}
function ignoreReject() {}
// TODO(restart-on-cache-miss): the layering of `delayUntilStage`,
// `makeDevtoolsIOPromiseFromIOTrigger` and and `makeDevtoolsIOAwarePromise`
// is confusing, we should clean it up.
function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
    // If we create a `new Promise` and give it a displayName
    // (with no userspace code above us in the stack)
    // React Devtools will use it as the IO cause when determining "suspended by".
    // In particular, it should shadow any inner IO that resolved/rejected the promise
    // (in case of staged rendering, this will be the `setTimeout` that triggers the relevant stage)
    const promise = new Promise((resolve, reject)=>{
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
    });
    if (displayName !== undefined) {
        // @ts-expect-error
        promise.displayName = displayName;
    }
    return promise;
} //# sourceMappingURL=staged-rendering.js.map
}),
"[project]/frontend/node_modules/next/dist/server/request/cookies.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cookies", {
    enumerable: true,
    get: function() {
        return cookies;
    }
});
const _requestcookies = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-ssr] (ecmascript)");
const _cookies = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/web/spec-extension/cookies.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-ssr] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/request/utils.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/staged-rendering.js [app-ssr] (ecmascript)");
function cookies() {
    const callingExpression = 'cookies';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`cookies()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E843",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // cookies object without tracking
            const underlyingCookies = createEmptyCookies();
            return makeUntrackedCookies(underlyingCookies);
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E849",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                    const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                        value: "E831",
                        enumerable: false,
                        configurable: true
                    });
                    Error.captureStackTrace(error, cookies);
                    workStore.invalidDynamicUsageError ??= error;
                    throw error;
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E846",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                    return makeHangingCookies(workStore, workUnitStore);
                case 'prerender-client':
                    const exportName = '`cookies`';
                    throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a Client Component. Next.js should be preventing ${exportName} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E832",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    // We need track dynamic access here eagerly to keep continuity with
                    // how cookies has worked in PPR without cacheComponents.
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    // We track dynamic access here so we don't need to wrap the cookies
                    // in individual property access tracking.
                    return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
                case 'prerender-runtime':
                    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedCookies(workUnitStore.cookies));
                case 'private-cache':
                    // Private caches are delayed until the runtime stage in use-cache-wrapper,
                    // so we don't need an additional delay here.
                    return makeUntrackedCookies(workUnitStore.cookies);
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    let underlyingCookies;
                    if ((0, _requestcookies.areCookiesMutableInCurrentPhase)(workUnitStore)) {
                        // We can't conditionally return different types here based on the context.
                        // To avoid confusion, we always return the readonly type here.
                        underlyingCookies = workUnitStore.userspaceMutableCookies;
                    } else {
                        underlyingCookies = workUnitStore.cookies;
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Semantically we only need the dev tracking when running in `next dev`
                        // but since you would never use next dev with production NODE_ENV we use this
                        // as a proxy so we can statically exclude this code from production builds.
                        return makeUntrackedCookiesWithDevWarnings(workUnitStore, underlyingCookies, workStore == null ? void 0 : workStore.route);
                    } else //TURBOPACK unreachable
                    ;
                default:
                    workUnitStore;
            }
        }
    }
    // If we end up here, there was no work store or work unit store present.
    (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
}
function createEmptyCookies() {
    return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
}
const CachedCookies = new WeakMap();
function makeHangingCookies(workStore, prerenderStore) {
    const cachedPromise = CachedCookies.get(prerenderStore);
    if (cachedPromise) {
        return cachedPromise;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`cookies()`');
    CachedCookies.set(prerenderStore, promise);
    return promise;
}
function makeUntrackedCookies(underlyingCookies) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = Promise.resolve(underlyingCookies);
    CachedCookies.set(underlyingCookies, promise);
    return promise;
}
function makeUntrackedCookiesWithDevWarnings(requestStore, underlyingCookies, route) {
    if (requestStore.asyncApiPromises) {
        let promise;
        if (underlyingCookies === requestStore.mutableCookies) {
            promise = requestStore.asyncApiPromises.mutableCookies;
        } else if (underlyingCookies === requestStore.cookies) {
            promise = requestStore.asyncApiPromises.cookies;
        } else {
            throw Object.defineProperty(new _invarianterror.InvariantError('Received an underlying cookies object that does not match either `cookies` or `mutableCookies`'), "__NEXT_ERROR_CODE", {
                value: "E890",
                enumerable: false,
                configurable: true
            });
        }
        return instrumentCookiesPromiseWithDevWarnings(promise, route);
    }
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingCookies, requestStore, _stagedrendering.RenderStage.Runtime);
    const proxiedPromise = instrumentCookiesPromiseWithDevWarnings(promise, route);
    CachedCookies.set(underlyingCookies, proxiedPromise);
    return proxiedPromise;
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createCookiesAccessError);
function instrumentCookiesPromiseWithDevWarnings(promise, route) {
    Object.defineProperties(promise, {
        [Symbol.iterator]: replaceableWarningDescriptorForSymbolIterator(promise, route),
        size: replaceableWarningDescriptor(promise, 'size', route),
        get: replaceableWarningDescriptor(promise, 'get', route),
        getAll: replaceableWarningDescriptor(promise, 'getAll', route),
        has: replaceableWarningDescriptor(promise, 'has', route),
        set: replaceableWarningDescriptor(promise, 'set', route),
        delete: replaceableWarningDescriptor(promise, 'delete', route),
        clear: replaceableWarningDescriptor(promise, 'clear', route),
        toString: replaceableWarningDescriptor(promise, 'toString', route)
    });
    return promise;
}
function replaceableWarningDescriptor(target, prop, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, `\`cookies().${prop}\``);
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, prop, {
                value,
                writable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function replaceableWarningDescriptorForSymbolIterator(target, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, '`...cookies()` or similar iteration');
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, Symbol.iterator, {
                value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function createCookiesAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`cookies()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E830",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=cookies.js.map
}),
"[project]/frontend/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HeadersAdapter: null,
    ReadonlyHeadersError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HeadersAdapter: function() {
        return HeadersAdapter;
    },
    ReadonlyHeadersError: function() {
        return ReadonlyHeadersError;
    }
});
const _reflect = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-ssr] (ecmascript)");
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return _reflect.ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return _reflect.ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return _reflect.ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return _reflect.ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}),
"[project]/frontend/node_modules/next/dist/server/request/headers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "headers", {
    enumerable: true,
    get: function() {
        return headers;
    }
});
const _headers = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-ssr] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/request/utils.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/staged-rendering.js [app-ssr] (ecmascript)");
function headers() {
    const callingExpression = 'headers';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`headers()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E839",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // headers object without tracking
            const underlyingHeaders = _headers.HeadersAdapter.seal(new Headers({}));
            return makeUntrackedHeaders(underlyingHeaders);
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                            value: "E833",
                            enumerable: false,
                            configurable: true
                        });
                        Error.captureStackTrace(error, headers);
                        workStore.invalidDynamicUsageError ??= error;
                        throw error;
                    }
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E838",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                case 'prerender-client':
                case 'private-cache':
                case 'prerender-runtime':
                case 'prerender-ppr':
                case 'prerender-legacy':
                case 'request':
                    break;
                default:
                    workUnitStore;
            }
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E828",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'prerender':
                    return makeHangingHeaders(workStore, workUnitStore);
                case 'prerender-client':
                    const exportName = '`headers`';
                    throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a client component. Next.js should be preventing ${exportName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E693",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    // PPR Prerender (no cacheComponents)
                    // We are prerendering with PPR. We need track dynamic access here eagerly
                    // to keep continuity with how headers has worked in PPR without cacheComponents.
                    // TODO consider switching the semantic to throw on property access instead
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    // Legacy Prerender
                    // We are in a legacy static generation mode while prerendering
                    // We track dynamic access here so we don't need to wrap the headers in
                    // individual property access tracking.
                    return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
                case 'prerender-runtime':
                    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedHeaders(workUnitStore.headers));
                case 'private-cache':
                    // Private caches are delayed until the runtime stage in use-cache-wrapper,
                    // so we don't need an additional delay here.
                    return makeUntrackedHeaders(workUnitStore.headers);
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Semantically we only need the dev tracking when running in `next dev`
                        // but since you would never use next dev with production NODE_ENV we use this
                        // as a proxy so we can statically exclude this code from production builds.
                        return makeUntrackedHeadersWithDevWarnings(workUnitStore.headers, workStore == null ? void 0 : workStore.route, workUnitStore);
                    } else //TURBOPACK unreachable
                    ;
                    //TURBOPACK unreachable
                    ;
                default:
                    workUnitStore;
            }
        }
    }
    // If we end up here, there was no work store or work unit store present.
    (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
}
const CachedHeaders = new WeakMap();
function makeHangingHeaders(workStore, prerenderStore) {
    const cachedHeaders = CachedHeaders.get(prerenderStore);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`headers()`');
    CachedHeaders.set(prerenderStore, promise);
    return promise;
}
function makeUntrackedHeaders(underlyingHeaders) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = Promise.resolve(underlyingHeaders);
    CachedHeaders.set(underlyingHeaders, promise);
    return promise;
}
function makeUntrackedHeadersWithDevWarnings(underlyingHeaders, route, requestStore) {
    if (requestStore.asyncApiPromises) {
        const promise = requestStore.asyncApiPromises.headers;
        return instrumentHeadersPromiseWithDevWarnings(promise, route);
    }
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingHeaders, requestStore, _stagedrendering.RenderStage.Runtime);
    const proxiedPromise = instrumentHeadersPromiseWithDevWarnings(promise, route);
    CachedHeaders.set(underlyingHeaders, proxiedPromise);
    return proxiedPromise;
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createHeadersAccessError);
function instrumentHeadersPromiseWithDevWarnings(promise, route) {
    Object.defineProperties(promise, {
        [Symbol.iterator]: replaceableWarningDescriptorForSymbolIterator(promise, route),
        append: replaceableWarningDescriptor(promise, 'append', route),
        delete: replaceableWarningDescriptor(promise, 'delete', route),
        get: replaceableWarningDescriptor(promise, 'get', route),
        has: replaceableWarningDescriptor(promise, 'has', route),
        set: replaceableWarningDescriptor(promise, 'set', route),
        getSetCookie: replaceableWarningDescriptor(promise, 'getSetCookie', route),
        forEach: replaceableWarningDescriptor(promise, 'forEach', route),
        keys: replaceableWarningDescriptor(promise, 'keys', route),
        values: replaceableWarningDescriptor(promise, 'values', route),
        entries: replaceableWarningDescriptor(promise, 'entries', route)
    });
    return promise;
}
function replaceableWarningDescriptor(target, prop, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, `\`headers().${prop}\``);
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, prop, {
                value,
                writable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function replaceableWarningDescriptorForSymbolIterator(target, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, '`...headers()` or similar iteration');
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, Symbol.iterator, {
                value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function createHeadersAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`headers()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E836",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=headers.js.map
}),
"[project]/frontend/node_modules/next/dist/server/request/draft-mode.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "draftMode", {
    enumerable: true,
    get: function() {
        return draftMode;
    }
});
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-ssr] (ecmascript)");
function draftMode() {
    const callingExpression = 'draftMode';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore || !workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
    }
    switch(workUnitStore.type){
        case 'prerender-runtime':
            // TODO(runtime-ppr): does it make sense to delay this? normally it's always microtasky
            return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, createOrGetCachedDraftMode(workUnitStore.draftMode, workStore));
        case 'request':
            return createOrGetCachedDraftMode(workUnitStore.draftMode, workStore);
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            // Inside of `"use cache"` or `unstable_cache`, draft mode is available if
            // the outmost work unit store is a request store (or a runtime prerender),
            // and if draft mode is enabled.
            const draftModeProvider = (0, _workunitasyncstorageexternal.getDraftModeProviderForCacheScope)(workStore, workUnitStore);
            if (draftModeProvider) {
                return createOrGetCachedDraftMode(draftModeProvider, workStore);
            }
        // Otherwise, we fall through to providing an empty draft mode.
        // eslint-disable-next-line no-fallthrough
        case 'prerender':
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
            // Return empty draft mode
            return createOrGetCachedDraftMode(null, workStore);
        default:
            return workUnitStore;
    }
}
function createOrGetCachedDraftMode(draftModeProvider, workStore) {
    const cacheKey = draftModeProvider ?? NullDraftMode;
    const cachedDraftMode = CachedDraftModes.get(cacheKey);
    if (cachedDraftMode) {
        return cachedDraftMode;
    }
    if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        const route = workStore == null ? void 0 : workStore.route;
        return createDraftModeWithDevWarnings(draftModeProvider, route);
    } else {
        return Promise.resolve(new DraftMode(draftModeProvider));
    }
}
const NullDraftMode = {};
const CachedDraftModes = new WeakMap();
function createDraftModeWithDevWarnings(underlyingProvider, route) {
    const instance = new DraftMode(underlyingProvider);
    const promise = Promise.resolve(instance);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            switch(prop){
                case 'isEnabled':
                    warnForSyncAccess(route, `\`draftMode().${prop}\``);
                    break;
                case 'enable':
                case 'disable':
                    {
                        warnForSyncAccess(route, `\`draftMode().${prop}()\``);
                        break;
                    }
                default:
                    {
                    // We only warn for well-defined properties of the draftMode object.
                    }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    return proxiedPromise;
}
class DraftMode {
    constructor(provider){
        this._provider = provider;
    }
    get isEnabled() {
        if (this._provider !== null) {
            return this._provider.isEnabled;
        }
        return false;
    }
    enable() {
        // We have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        trackDynamicDraftMode('draftMode().enable()', this.enable);
        if (this._provider !== null) {
            this._provider.enable();
        }
    }
    disable() {
        trackDynamicDraftMode('draftMode().disable()', this.disable);
        if (this._provider !== null) {
            this._provider.disable();
        }
    }
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createDraftModeAccessError);
function createDraftModeAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`draftMode()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E835",
        enumerable: false,
        configurable: true
    });
}
function trackDynamicDraftMode(expression, constructorOpt) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        // We have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        if ((workUnitStore == null ? void 0 : workUnitStore.phase) === 'after') {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside \`after()\`. The enabled status of \`draftMode()\` can be read inside \`after()\` but you cannot enable or disable \`draftMode()\`. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E845",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E553",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                case 'private-cache':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside "use cache". The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                            value: "E829",
                            enumerable: false,
                            configurable: true
                        });
                        Error.captureStackTrace(error, constructorOpt);
                        workStore.invalidDynamicUsageError ??= error;
                        throw error;
                    }
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside a function cached with \`unstable_cache()\`. The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E844",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                case 'prerender-runtime':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used ${expression} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`), "__NEXT_ERROR_CODE", {
                            value: "E126",
                            enumerable: false,
                            configurable: true
                        });
                        return (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(workStore.route, expression, error, workUnitStore);
                    }
                case 'prerender-client':
                    const exportName = '`draftMode`';
                    throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a Client Component. Next.js should be preventing ${exportName} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E832",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    workUnitStore.revalidate = 0;
                    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${workStore.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                        value: "E558",
                        enumerable: false,
                        configurable: true
                    });
                    workStore.dynamicUsageDescription = expression;
                    workStore.dynamicUsageStack = err.stack;
                    throw err;
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    break;
                default:
                    workUnitStore;
            }
        }
    }
} //# sourceMappingURL=draft-mode.js.map
}),
"[project]/frontend/node_modules/next/headers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports.cookies = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/request/cookies.js [app-ssr] (ecmascript)").cookies;
module.exports.headers = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/request/headers.js [app-ssr] (ecmascript)").headers;
module.exports.draftMode = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/request/draft-mode.js [app-ssr] (ecmascript)").draftMode;
}),
"[project]/frontend/node_modules/browser-image-compression/dist/browser-image-compression.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const a = "undefined" != ("TURBOPACK compile-time value", "undefined"), s = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope, f = a && window.cordova && window.cordova.require && window.cordova.require("cordova/modulemapper"), CustomFile = (a || s) && (f && f.getOriginalSymbol(window, "File") || "undefined" != typeof File && File), CustomFileReader = (a || s) && (f && f.getOriginalSymbol(window, "FileReader") || "undefined" != typeof FileReader && FileReader);
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
"[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
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
        useLayoutEffect(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
        }, [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
            return subscribe(function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            });
        }, [
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
    var React = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = ("TURBOPACK compile-time truthy", 1) ? useSyncExternalStore$1 : "TURBOPACK unreachable";
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/frontend/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), shim = __turbopack_context__.r("[project]/frontend/node_modules/use-sync-external-store/shim/index.js [app-ssr] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
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
"[project]/frontend/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/frontend/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/frontend/node_modules/zustand/esm/traditional.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWithEqualityFn",
    ()=>createWithEqualityFn,
    "useStoreWithEqualityFn",
    ()=>useStoreWithEqualityFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/use-sync-external-store/shim/with-selector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
;
;
;
const { useSyncExternalStoreWithSelector } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
const identity = (arg)=>arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getInitialState, selector, equalityFn);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createWithEqualityFnImpl = (createState, defaultEqualityFn)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn)=>useStoreWithEqualityFn(api, selector, equalityFn);
    Object.assign(useBoundStoreWithEqualityFn, api);
    return useBoundStoreWithEqualityFn;
};
const createWithEqualityFn = (createState, defaultEqualityFn)=>createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;
;
}),
"[project]/frontend/node_modules/suspend-react/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/frontend/node_modules/scheduler/cjs/scheduler.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "production" !== ("TURBOPACK compile-time value", "development") && function() {
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
"[project]/frontend/node_modules/scheduler/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/scheduler/cjs/scheduler.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/frontend/node_modules/its-fine/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const f = /* @__PURE__ */ (()=>{
    var e, t;
    return ("TURBOPACK compile-time value", "undefined") != "undefined" && (((e = window.document) == null ? void 0 : e.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative");
})() ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
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
const a = /* @__PURE__ */ l(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null));
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    render() {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](a.Provider, {
            value: this._reactInternals
        }, this.props.children);
    }
}
function c() {
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](a);
    if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        for (const n of [
            e,
            e == null ? void 0 : e.alternate
        ]){
            if (!n) continue;
            const u = i(n, !1, (d)=>{
                let s = d.memoizedState;
                for(; s;){
                    if (s.memoizedState === t) return !0;
                    s = s.next;
                }
            });
            if (u) return u;
        }
    }, [
        e,
        t
    ]);
}
function w() {
    const e = c(), t = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>i(e, !0, (r)=>{
            var n;
            return ((n = r.stateNode) == null ? void 0 : n.containerInfo) != null;
        }), [
        e
    ]);
    return t == null ? void 0 : t.stateNode.containerInfo;
}
function v(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !1, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
function y(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !0, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
const p = Symbol.for("react.context"), b = (e)=>e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p;
function h() {
    const e = c(), [t] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>/* @__PURE__ */ new Map());
    t.clear();
    let r = e;
    for(; r;){
        const n = r.type;
        b(n) && n !== a && !t.has(n) && t.set(n, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"](l(n))), r = r.return;
    }
    return t;
}
function x() {
    const e = h();
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>Array.from(e.keys()).reduce((t, r)=>(n)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](t, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](r.Provider, {
                    ...n,
                    value: e.get(r)
                })), (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](m, {
                ...t
            })), [
        e
    ]);
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/react-use-measure/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>j
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    const a = o || (("TURBOPACK compile-time truthy", 1) ? class {
    } : "TURBOPACK unreachable");
    if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
    const [c, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0
    }), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        element: null,
        scrollContainers: null,
        resizeObserver: null,
        lastBounds: c,
        orientationHandler: null
    }), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>(w.current = !0, ()=>void (w.current = !1)));
    const [z, m, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
    return X(s, !!t), W(m), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        v(), b();
    }, [
        t,
        s,
        m
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>v, []), [
        L,
        c,
        z
    ];
}
function W(n) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = n;
        return window.addEventListener("resize", t), ()=>void window.removeEventListener("resize", t);
    }, [
        n
    ]);
}
function X(n, t) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
"[project]/frontend/node_modules/@react-three/drei/core/Fbo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fbo",
    ()=>Fbo,
    "useFBO",
    ()=>useFBO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export C as useThree>");
;
;
;
;
// 👇 uncomment when TS version supports function overloads
// export function useFBO(settings?: FBOSettings)
function useFBO(/** Width in pixels, or settings (will render fullscreen by default) */ width, /** Height in pixels */ height, /**Settings */ settings) {
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((state)=>state.size);
    const viewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])((state)=>state.viewport);
    const _width = typeof width === 'number' ? width : size.width * viewport.dpr;
    const _height = typeof height === 'number' ? height : size.height * viewport.dpr;
    const _settings = (typeof width === 'number' ? settings : width) || {};
    const { samples = 0, depth, ...targetSettings } = _settings;
    const depthBuffer = depth !== null && depth !== void 0 ? depth : _settings.depthBuffer; // backwards compatibility for deprecated `depth` prop
    const target = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const target = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](_width, _height, {
            minFilter: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"],
            magFilter: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"],
            type: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HalfFloatType"],
            ...targetSettings
        });
        if (depthBuffer) {
            target.depthTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DepthTexture"](_width, _height, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatType"]);
        }
        target.samples = samples;
        return target;
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"](()=>{
        target.setSize(_width, _height);
        if (samples) target.samples = samples;
    }, [
        samples,
        target,
        _width,
        _height
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>target.dispose();
    }, []);
    return target;
}
//
// Fbo component
//
const Fbo = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, width, height, ...settings }, fref)=>{
    const target = useFBO(width, height, settings);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(fref, ()=>target, [
        target
    ]); // expose target through ref
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, children == null ? void 0 : children(target));
});
;
}),
"[project]/frontend/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PerspectiveCamera",
    ()=>PerspectiveCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@react-three/drei/core/Fbo.js [app-ssr] (ecmascript)");
;
;
;
;
const isFunction = (node)=>typeof node === 'function';
const PerspectiveCamera = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ envMap, resolution = 256, frames = Infinity, makeDefault, children, ...props }, ref)=>{
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ set })=>set);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ camera })=>camera);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])(({ size })=>size);
    const cameraRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, ()=>cameraRef.current, []);
    const groupRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const fbo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFBO"])(resolution);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"](()=>{
        if (!props.manual) {
            cameraRef.current.aspect = size.width / size.height;
        }
    }, [
        size,
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"](()=>{
        cameraRef.current.updateProjectionMatrix();
    });
    let count = 0;
    let oldEnvMap = null;
    const functional = isFunction(children);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>{
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
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"](()=>{
        if (makeDefault) {
            const oldCam = camera;
            set(()=>({
                    camera: cameraRef.current
                }));
            return ()=>set(()=>({
                        camera: oldCam
                    }));
        }
    // The camera should not be part of the dependency list because this components camera is a stable reference
    // that must exchange the default, and clean up after itself on unmount.
    }, [
        cameraRef,
        makeDefault,
        set
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("perspectiveCamera", (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ref: cameraRef
    }, props), !functional && children), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: groupRef
    }, functional && children(fbo.texture)));
});
;
}),
];

//# sourceMappingURL=9e883_f295a6cf._.js.map