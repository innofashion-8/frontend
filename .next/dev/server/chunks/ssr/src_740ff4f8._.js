module.exports = [
"[project]/src/services/evaluation-question-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evaluationQuestionService",
    ()=>evaluationQuestionService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-client.ts [app-ssr] (ecmascript)");
;
const evaluationQuestionService = {
    getQuestions: async (eventId)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${eventId}/evaluation-questions`, {
                method: 'GET'
            });
            return res.data || [];
        } catch (error) {
            throw new Error(error.message);
        }
    },
    createQuestion: async (eventId, payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${eventId}/evaluation-questions`, {
                method: 'POST',
                body: JSON.stringify(payload)
            });
            return {
                message: res.message || 'Question created successfully',
                data: res.data
            };
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    updateQuestion: async (eventId, questionId, payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${eventId}/evaluation-questions/${questionId}`, {
                method: 'PUT',
                body: JSON.stringify(payload)
            });
            return {
                message: res.message || 'Question updated successfully',
                data: res.data
            };
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    deleteQuestion: async (eventId, questionId)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${eventId}/evaluation-questions/${questionId}`, {
                method: 'DELETE'
            });
            return res.message || 'Question deleted successfully';
        } catch (error) {
            throw new Error(error.message);
        }
    },
    reorderQuestions: async (eventId, questionIds)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${eventId}/evaluation-questions/reorder`, {
                method: 'PATCH',
                body: JSON.stringify({
                    question_ids: questionIds
                })
            });
            return {
                message: res.message || 'Question order updated successfully',
                data: res.data || []
            };
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    importQuestions: async (targetEventId, sourceEventId)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${targetEventId}/evaluation-questions/import`, {
                method: 'POST',
                body: JSON.stringify({
                    source_event_id: sourceEventId
                })
            });
            return {
                message: res.message || 'Questions imported successfully',
                data: res.data || []
            };
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    getResponses: async (eventId)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${eventId}/evaluation-responses`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};
}),
"[project]/src/lib/admin-swal.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminConfirm",
    ()=>adminConfirm,
    "adminError",
    ()=>adminError,
    "adminInput",
    ()=>adminInput,
    "adminLoading",
    ()=>adminLoading,
    "adminSuccess",
    ()=>adminSuccess,
    "adminToast",
    ()=>adminToast,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.esm.all.js [app-ssr] (ecmascript)");
;
const baseCustomClass = {
    popup: 'rounded-none border-[3px] border-[#494947] shadow-[8px_8px_0px_#000000]',
    title: 'font-creato-title font-black uppercase tracking-wider text-[#E2E2DE]',
    htmlContainer: 'text-[#B7AC9B]',
    confirmButton: 'rounded-none font-black uppercase tracking-widest text-sm px-6 py-2.5',
    cancelButton: 'rounded-none font-black uppercase tracking-widest text-sm px-6 py-2.5',
    input: 'rounded-none border-2 border-[#494947] bg-[#1a1a1a] text-[#E2E2DE] font-bold'
};
const baseOptions = {
    background: '#1C1C1B',
    color: '#E2E2DE',
    confirmButtonColor: '#6A5D52',
    cancelButtonColor: '#494947',
    customClass: baseCustomClass
};
function mergeOptions(...optionsList) {
    const merged = {};
    for (const opts of optionsList){
        Object.assign(merged, opts);
    }
    // Merge customClass separately
    const mergedCustomClass = {};
    for (const opts of optionsList){
        if (opts.customClass && typeof opts.customClass === 'object') {
            Object.assign(mergedCustomClass, opts.customClass);
        }
    }
    merged.customClass = mergedCustomClass;
    return merged;
}
const adminConfirm = (options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        icon: 'warning',
        showCancelButton: true
    }, options));
const adminSuccess = (options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        icon: 'success'
    }, options));
const adminError = (options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        icon: 'error',
        confirmButtonColor: '#ef4444'
    }, options));
const adminLoading = (title = 'PROCESSING...')=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        title,
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].showLoading()
    }));
const adminToast = (title, icon = 'success')=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
        toast: true,
        position: 'top-end',
        icon,
        title,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: '#1C1C1B',
        color: '#E2E2DE',
        customClass: {
            popup: 'rounded-none border-2 border-[#494947] shadow-[4px_4px_0px_#000000]',
            title: 'font-black uppercase tracking-wider text-sm'
        }
    });
const adminInput = (options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        input: 'textarea'
    }, options));
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/src/components/admin/evaluation/QuestionFormModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionFormModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$evaluation$2d$question$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/evaluation-question-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-swal.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function QuestionFormModal({ eventId, question, onClose }) {
    const initialPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            question_text: '',
            type: 'text',
            options: null,
            is_required: true,
            // new fields
            sort_order: 0,
            page_number: 1,
            header_title: null,
            header_description: null
        }), []);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialPayload);
    const [optionInputs, setOptionInputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        '',
        ''
    ]);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!question) {
            setFormData(initialPayload);
            setOptionInputs([
                '',
                ''
            ]);
            setErrors({});
            return;
        }
        setFormData({
            question_text: question.question_text ?? '',
            type: question.type,
            options: question.options,
            is_required: question.is_required,
            sort_order: question.sort_order ?? 0,
            page_number: question.page_number ?? 1,
            header_title: question.header_title ?? null,
            header_description: question.header_description ?? null
        });
        if (question.type === 'multiple_choice') {
            setOptionInputs(question.options?.length ? question.options : [
                '',
                ''
            ]);
        } else {
            setOptionInputs([
                '',
                ''
            ]);
        }
    }, [
        question,
        initialPayload
    ]);
    const createMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$evaluation$2d$question$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluationQuestionService"].createQuestion(eventId, payload),
        onSuccess: (result)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminSuccess"])({
                title: 'Question Created',
                text: result.message
            });
            onClose(true);
        },
        onError: (error)=>{
            if (error.isValidationError) {
                setErrors(error.errors);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminError"])({
                    title: 'Create Failed',
                    text: error.message
                });
            }
        }
    });
    const updateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$evaluation$2d$question$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluationQuestionService"].updateQuestion(eventId, question.id, payload),
        onSuccess: (result)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminSuccess"])({
                title: 'Question Updated',
                text: result.message
            });
            onClose(true);
        },
        onError: (error)=>{
            if (error.isValidationError) {
                setErrors(error.errors);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminError"])({
                    title: 'Update Failed',
                    text: error.message
                });
            }
        }
    });
    const handleTypeChange = (type)=>{
        setFormData((current)=>({
                ...current,
                type,
                options: type === 'multiple_choice' ? current.options ?? [] : null,
                question_text: type === 'header' ? '' : current.question_text ?? '',
                header_title: type === 'header' ? current.header_title ?? '' : null,
                header_description: type === 'header' ? current.header_description ?? '' : null
            }));
        if (type === 'multiple_choice') {
            setOptionInputs((prev)=>prev.length >= 2 ? prev : [
                    '',
                    ''
                ]);
        } else {
            setOptionInputs([
                '',
                ''
            ]);
        }
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        setErrors({});
        const options = formData.type === 'multiple_choice' ? optionInputs.map((option)=>option.trim()).filter(Boolean) : null;
        if (formData.type === 'multiple_choice' && (!options || options.length < 2)) {
            setErrors({
                options: 'Add at least two options.'
            });
            return;
        }
        if (formData.type === 'header') {
            // headers act as section dividers; require header fields but ignore question_text/options
            const headerTitle = (formData.header_title ?? '').toString().trim() || '';
            const headerDescription = (formData.header_description ?? '').toString().trim() || '';
            if (!headerTitle) {
                setErrors({
                    header_title: 'Header title is required for header type.'
                });
                return;
            }
            const payload = {
                ...formData,
                question_text: '',
                options: null,
                header_title: headerTitle,
                header_description: headerDescription || null
            };
            if (question) updateMutation.mutate(payload);
            else createMutation.mutate(payload);
            return;
        }
        // non-header types
        const payload = {
            ...formData,
            options
        };
        const questionText = (payload.question_text ?? '').toString().trim();
        if (!questionText && formData.type !== 'rating') {
            // rating/text/multiple_choice expect question_text
            setErrors({
                question_text: 'Question text is required.'
            });
            return;
        }
        if (question) updateMutation.mutate(payload);
        else createMutation.mutate(payload);
    };
    const errorText = (key)=>{
        const error = errors[key];
        if (!error) return null;
        return Array.isArray(error) ? error[0] : error;
    };
    const isSubmitting = createMutation.isPending || updateMutation.isPending;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",
        onClick: ()=>onClose(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-[90vh] w-full max-w-2xl overflow-y-auto border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-6 shadow-[12px_12px_0px_#1C1C1B]",
            onClick: (event)=>event.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-creato-title text-2xl font-black uppercase tracking-wider text-[#1C1C1B]",
                                    children: question ? 'Edit Question' : 'Add Question'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm font-bold text-[#6A5D52]",
                                    children: "Configure how this question appears on the evaluation form."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onClose(false),
                            className: "border-2 border-[#1C1C1B] bg-white px-3 py-1 font-black text-[#1C1C1B] hover:bg-[#1C1C1B] hover:text-white",
                            "aria-label": "Close",
                            children: "X"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-2 block text-sm font-black uppercase tracking-wider text-[#1C1C1B]",
                                            children: "Page Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 1,
                                            step: 1,
                                            value: formData.page_number ?? 1,
                                            onChange: (event)=>setFormData({
                                                    ...formData,
                                                    page_number: Number(event.target.value || 1)
                                                }),
                                            className: "w-full border-2 border-[#1C1C1B] bg-white px-3 py-2 text-sm font-bold outline-none focus:ring-2 focus:ring-[#6A5D52]",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        errorText('page_number') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-600",
                                            children: errorText('page_number')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-2 block text-sm font-black uppercase tracking-wider text-[#1C1C1B]",
                                            children: "Sort Order"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 0,
                                            step: 1,
                                            value: formData.sort_order ?? 0,
                                            onChange: (event)=>setFormData({
                                                    ...formData,
                                                    sort_order: Number(event.target.value || 0)
                                                }),
                                            className: "w-full border-2 border-[#1C1C1B] bg-white px-3 py-2 text-sm font-bold outline-none focus:ring-2 focus:ring-[#6A5D52]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this),
                                        errorText('sort_order') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-600",
                                            children: errorText('sort_order')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        formData.type !== 'header' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-2 block text-sm font-black uppercase tracking-wider text-[#1C1C1B]",
                                    children: "Question Text"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 260,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.question_text,
                                    onChange: (event)=>setFormData({
                                            ...formData,
                                            question_text: event.target.value
                                        }),
                                    className: "w-full border-2 border-[#1C1C1B] bg-white p-3 text-sm font-bold text-[#1C1C1B] outline-none focus:ring-2 focus:ring-[#6A5D52]",
                                    rows: 3,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this),
                                errorText('question_text') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-red-600",
                                    children: errorText('question_text')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 273,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this),
                        formData.type === 'header' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-2 block text-sm font-black uppercase tracking-wider text-[#1C1C1B]",
                                            children: "Header Title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.header_title ?? '',
                                            onChange: (event)=>setFormData({
                                                    ...formData,
                                                    header_title: event.target.value
                                                }),
                                            className: "w-full border-2 border-[#1C1C1B] bg-white px-3 py-2 text-sm font-bold outline-none focus:ring-2 focus:ring-[#6A5D52]",
                                            placeholder: "e.g. Event Experience"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this),
                                        errorText('header_title') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-600",
                                            children: errorText('header_title')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 294,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-2 block text-sm font-black uppercase tracking-wider text-[#1C1C1B]",
                                            children: "Header Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: formData.header_description ?? '',
                                            onChange: (event)=>setFormData({
                                                    ...formData,
                                                    header_description: event.target.value
                                                }),
                                            className: "w-full border-2 border-[#1C1C1B] bg-white p-3 text-sm font-bold text-[#1C1C1B] outline-none focus:ring-2 focus:ring-[#6A5D52]",
                                            rows: 3,
                                            placeholder: "Optional description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 302,
                                            columnNumber: 17
                                        }, this),
                                        errorText('header_description') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-600",
                                            children: errorText('header_description')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 312,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-2 block text-sm font-black uppercase tracking-wider text-[#1C1C1B]",
                                    children: "Question Type"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-2 sm:grid-cols-4",
                                    children: [
                                        'text',
                                        'multiple_choice',
                                        'rating',
                                        'header'
                                    ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleTypeChange(type),
                                            className: `border-2 px-4 py-2.5 text-sm font-black uppercase tracking-wider transition ${formData.type === type ? 'border-[#1C1C1B] bg-[#1C1C1B] text-white' : 'border-[#1C1C1B] bg-white text-[#1C1C1B] hover:bg-[#B7AC9B]'}`,
                                            children: type.replace('_', ' ')
                                        }, type, false, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 326,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this),
                        formData.type === 'multiple_choice' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mb-2 block text-sm font-black uppercase tracking-wider text-[#1C1C1B]",
                                    children: "Options"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: optionInputs.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: option,
                                                    onChange: (event)=>{
                                                        const nextOptions = [
                                                            ...optionInputs
                                                        ];
                                                        nextOptions[index] = event.target.value;
                                                        setOptionInputs(nextOptions);
                                                    },
                                                    placeholder: `Option ${index + 1}`,
                                                    className: "flex-1 border-2 border-[#1C1C1B] bg-white px-3 py-2 text-sm font-bold outline-none focus:ring-2 focus:ring-[#6A5D52]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setOptionInputs((current)=>current.filter((_, i)=>i !== index)),
                                                    disabled: optionInputs.length <= 2,
                                                    className: "border-2 border-[#1C1C1B] bg-white px-3 py-2 text-sm font-black uppercase text-[#1C1C1B] hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50",
                                                    children: "Remove"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                            lineNumber: 349,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this),
                                errorText('options') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-red-600",
                                    children: errorText('options')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 375,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setOptionInputs((current)=>[
                                                ...current,
                                                ''
                                            ]),
                                    className: "mt-3 border-2 border-[#1C1C1B] bg-white px-3 py-2 text-sm font-black uppercase text-[#1C1C1B] hover:bg-[#B7AC9B]",
                                    children: "Add Option"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                            lineNumber: 343,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-3 text-sm font-black uppercase tracking-wider text-[#1C1C1B]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: formData.is_required,
                                    onChange: (event)=>setFormData({
                                            ...formData,
                                            is_required: event.target.checked
                                        }),
                                    className: "h-4 w-4 rounded border-slate-300",
                                    disabled: formData.type === 'header'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this),
                                "Required question"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 border-t-[3px] border-[#1C1C1B] pt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onClose(false),
                                    className: "border-[3px] border-[#1C1C1B] bg-white px-4 py-2 text-sm font-black uppercase tracking-wider text-[#1C1C1B] shadow-[3px_3px_0px_#1C1C1B] hover:bg-[#B7AC9B]",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 401,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isSubmitting,
                                    className: "border-[3px] border-[#1C1C1B] bg-[#6A5D52] px-4 py-2 text-sm font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#1C1C1B] hover:bg-[#1C1C1B] disabled:cursor-not-allowed disabled:opacity-60",
                                    children: isSubmitting ? 'Saving...' : question ? 'Update Question' : 'Create Question'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                            lineNumber: 400,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/admin/evaluation/QuestionFormModal.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/services/event-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eventService",
    ()=>eventService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-client.ts [app-ssr] (ecmascript)");
;
const eventService = {
    submitFinal: async (key, paymentProof)=>{
        try {
            const formData = new FormData();
            if (paymentProof) {
                formData.append('payment_proof', paymentProof);
            }
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/submit`, {
                method: 'POST',
                body: formData
            });
            return res.message || 'Pendaftaran berhasil';
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    getEvent: async (key)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getEvents: async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    storeEvent: async (payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events`, {
                method: 'POST',
                body: JSON.stringify(payload)
            });
            return {
                message: res.message || 'Event berhasil disimpan',
                data: res.data
            };
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    updateEvent: async (key, payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${key}`, {
                method: 'PUT',
                body: JSON.stringify(payload)
            });
            return {
                message: res.message || 'Event berhasil diperbarui',
                data: res.data
            };
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    deleteEvent: async (key)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${key}`, {
                method: 'DELETE'
            });
            return res.message || 'Event berhasil dihapus';
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    checkStatusRegistrations: async (key)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/status`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    saveDraft: async (key, paymentProof)=>{
        try {
            const formData = new FormData();
            if (paymentProof) {
                formData.append('draft_data[payment_proof]', paymentProof);
            }
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/draft`, {
                method: 'POST',
                body: formData
            });
            return res.message || 'Draft disimpan';
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    getRotatingQr: async (key)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${key}/rotating-qr`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    userScanCheckIn: async (token)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/scan-attendance`, {
                method: 'POST',
                body: JSON.stringify({
                    token
                })
            });
            return {
                message: res.message || 'Check-in berhasil',
                data: res.data
            };
        } catch (error) {
            if (error.isValidationError) {
                let msg = error.message;
                if (!msg && error.data) {
                    msg = typeof error.data === 'string' ? error.data : Object.values(error.data).flat()[0];
                }
                throw {
                    isValidationError: true,
                    errors: error.data,
                    message: msg || 'Verification failed. Invalid QR Code data.'
                };
            }
            throw new Error(error.message);
        }
    },
    getEvaluationQuestions: async (key)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/evaluation-questions`, {
                method: 'GET'
            });
            return res.data || [];
        } catch (error) {
            throw new Error(error.message);
        }
    },
    submitEvaluation: async (key, answers)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/evaluation`, {
                method: 'POST',
                body: JSON.stringify({
                    answers
                })
            });
            return {
                message: res.message || 'Evaluasi berhasil disubmit',
                data: res.data
            };
        } catch (error) {
            if (error.isValidationError) {
                let msg = error.message;
                if (!msg && error.data) {
                    msg = typeof error.data === 'string' ? error.data : Object.values(error.data).flat()[0];
                }
                throw {
                    isValidationError: true,
                    errors: error.data,
                    message: msg || 'Gagal mengirim evaluasi.'
                };
            }
            throw new Error(error.message);
        }
    }
};
}),
"[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImportQuestionsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$evaluation$2d$question$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/evaluation-question-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/event-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-swal.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ImportQuestionsModal({ targetEventId, onClose }) {
    const [selectedEventId, setSelectedEventId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const { data: events = [], isLoading: eventsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'events-list'
        ],
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventService"].getEvents()
    });
    const importMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (sourceEventId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$evaluation$2d$question$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluationQuestionService"].importQuestions(targetEventId, sourceEventId),
        onSuccess: (result)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminSuccess"])({
                title: 'Import Complete',
                text: `${result.data.length} questions imported successfully.`
            });
            onClose(true);
        },
        onError: (error)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminError"])({
                title: 'Import Failed',
                text: error.message
            });
        }
    });
    const availableEvents = events.filter((event)=>event.id !== targetEventId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",
        onClick: ()=>onClose(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-[90vh] w-full max-w-2xl overflow-y-auto border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-6 shadow-[12px_12px_0px_#1C1C1B]",
            onClick: (event)=>event.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-creato-title text-2xl font-black uppercase tracking-wider text-[#1C1C1B]",
                                    children: "Import from Previous Event"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm font-bold text-[#6A5D52]",
                                    children: "Clone every evaluation question from another event into this form."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onClose(false),
                            className: "border-2 border-[#1C1C1B] bg-white px-3 py-1 font-black text-[#1C1C1B] hover:bg-[#1C1C1B] hover:text-white",
                            "aria-label": "Close",
                            children: "X"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                eventsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-2 border-dashed border-[#979086] bg-white/70 p-8 text-center text-sm font-bold text-[#6A5D52]",
                    children: "Loading events..."
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this) : availableEvents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-2 border-dashed border-[#979086] bg-white/70 p-8 text-center text-sm font-bold text-[#6A5D52]",
                    children: "No other events are available."
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[420px] space-y-2 overflow-y-auto border-[3px] border-[#1C1C1B] bg-white p-2",
                    children: availableEvents.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: `flex cursor-pointer items-start gap-3 border-2 p-4 transition ${selectedEventId === event.id ? 'border-[#1C1C1B] bg-[#B7AC9B]/40' : 'border-[#1C1C1B] bg-white hover:bg-[#F5F3EF]'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "source_event",
                                    value: event.id,
                                    checked: selectedEventId === event.id,
                                    onChange: (changeEvent)=>setSelectedEventId(changeEvent.target.value),
                                    className: "mt-1 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-black text-[#1C1C1B]",
                                            children: event.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm font-bold text-[#6A5D52]",
                                            children: [
                                                event.category,
                                                " · ",
                                                event.start_time_human
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, event.id, true, {
                            fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex justify-end gap-3 border-t-[3px] border-[#1C1C1B] pt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onClose(false),
                            className: "border-[3px] border-[#1C1C1B] bg-white px-4 py-2 text-sm font-black uppercase tracking-wider text-[#1C1C1B] shadow-[3px_3px_0px_#1C1C1B] hover:bg-[#B7AC9B]",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                if (!selectedEventId) {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminError"])({
                                        title: 'Select an Event',
                                        text: 'Choose a source event first.'
                                    });
                                    return;
                                }
                                importMutation.mutate(selectedEventId);
                            },
                            disabled: !selectedEventId || importMutation.isPending,
                            className: "border-[3px] border-[#1C1C1B] bg-[#6A5D52] px-4 py-2 text-sm font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#1C1C1B] hover:bg-[#1C1C1B] disabled:cursor-not-allowed disabled:opacity-60",
                            children: importMutation.isPending ? 'Importing...' : 'Import Questions'
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/admin/evaluation/LivePreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LivePreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function LivePreview({ questions }) {
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const sorted = [
            ...questions
        ].sort((a, b)=>(a.page_number ?? 1) - (b.page_number ?? 1) || (a.sort_order ?? 0) - (b.sort_order ?? 0));
        const map = new Map();
        for (const q of sorted){
            const page = q.page_number ?? 1;
            const list = map.get(page) ?? [];
            list.push(q);
            map.set(page, list);
        }
        return Array.from(map.entries()).sort((a, b)=>a[0] - b[0]).map(([page_number, items])=>({
                page_number,
                items
            }));
    }, [
        questions
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-5 shadow-[6px_6px_0px_#1C1C1B]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 border-b-[3px] border-[#1C1C1B] pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-creato-title text-xl font-black uppercase tracking-wider text-[#1C1C1B]",
                        children: "Live Preview"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm font-bold text-[#6A5D52]",
                        children: "Read-only preview of the evaluation flow."
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            questions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-2 border-dashed border-[#979086] bg-white/70 p-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-black uppercase tracking-wider text-[#6A5D52]",
                    children: "No questions to preview"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    grouped.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "rounded-none border-[3px] border-[#1C1C1B] bg-[#F5F3EF] p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 flex items-center justify-between gap-3 border-b-[3px] border-[#1C1C1B] pb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-black uppercase tracking-wider text-[#6A5D52]",
                                                    children: [
                                                        "Page ",
                                                        group.page_number
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm font-black text-[#1C1C1B] truncate",
                                                    children: (()=>{
                                                        const firstHeader = group.items.find((q)=>q.type === 'header');
                                                        const title = firstHeader?.header_title?.trim();
                                                        return title ? title : `Evaluation Page ${group.page_number}`;
                                                    })()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "border border-[#1C1C1B] bg-white px-2.5 py-1 text-xs font-black uppercase text-[#1C1C1B]",
                                            children: "Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: group.items.map((question)=>{
                                        if (question.type === 'header') {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-4 shadow-[4px_4px_0px_#1C1C1B]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-black uppercase tracking-wider text-[#6A5D52]",
                                                        children: "Section"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-1 font-creato-title text-lg font-black uppercase tracking-wide text-[#1C1C1B]",
                                                        children: question.header_title || 'Header'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 25
                                                    }, this),
                                                    question.header_description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm font-bold text-[#6A5D52]",
                                                        children: question.header_description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, question.id, true, {
                                                fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                lineNumber: 76,
                                                columnNumber: 23
                                            }, this);
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-[3px] border-[#1C1C1B] bg-white p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mb-3 block",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mb-1 block text-xs font-black uppercase tracking-wider text-[#6A5D52]",
                                                            children: [
                                                                question.is_required ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-700",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 51
                                                                }, this) : null,
                                                                ' ',
                                                                question.type === 'multiple_choice' ? 'Multiple Choice' : question.type === 'rating' ? 'Rating' : 'Text',
                                                                " Question"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-[#1C1C1B]",
                                                            children: question.question_text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 23
                                                }, this),
                                                question.type === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "w-full border-2 border-[#1C1C1B] bg-[#F5F3EF] p-3 text-sm font-bold text-[#6A5D52]",
                                                    rows: 4,
                                                    placeholder: "Long answer text",
                                                    disabled: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 25
                                                }, this),
                                                question.type === 'multiple_choice' && question.options && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: question.options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-3 border-2 border-[#1C1C1B] bg-[#F5F3EF] p-3 text-sm font-bold text-[#1C1C1B]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "h-4 w-4 border-2 border-[#1C1C1B] bg-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 31
                                                                }, this),
                                                                option
                                                            ]
                                                        }, option, true, {
                                                            fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 25
                                                }, this),
                                                question.type === 'rating' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-5 gap-2",
                                                    children: [
                                                        1,
                                                        2,
                                                        3,
                                                        4,
                                                        5
                                                    ].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            disabled: true,
                                                            className: "h-10 border-2 border-[#1C1C1B] bg-[#F5F3EF] text-sm font-black text-[#6A5D52]",
                                                            children: value
                                                        }, value, false, {
                                                            fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, question.id, true, {
                                            fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                            lineNumber: 96,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, group.page_number, true, {
                            fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end border-t-[3px] border-[#1C1C1B] pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: true,
                            className: "border-[3px] border-[#1C1C1B] bg-[#1C1C1B] px-5 py-2.5 text-sm font-black uppercase tracking-wider text-white opacity-60",
                            children: "Submit Evaluation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/evaluation/LivePreview.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EvaluationFormBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hello-pangea/dnd/dist/dnd.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$evaluation$2d$question$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/evaluation-question-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-swal.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$evaluation$2f$QuestionFormModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/evaluation/QuestionFormModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$evaluation$2f$ImportQuestionsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/evaluation/ImportQuestionsModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$evaluation$2f$LivePreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/evaluation/LivePreview.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function EvaluationFormBuilder({ eventId, eventTitle }) {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [isFormModalOpen, setIsFormModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isImportModalOpen, setIsImportModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingQuestion, setEditingQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orderedQuestions, setOrderedQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { data: questions, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'evaluation-questions',
            eventId
        ],
        queryFn: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$evaluation$2d$question$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluationQuestionService"].getQuestions(eventId)
    });
    const sortedQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!questions) return []; // Mengembalikan array kosong dengan aman
        return [
            ...questions
        ].sort((a, b)=>(a.sort_order ?? 0) - (b.sort_order ?? 0));
    }, [
        questions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setOrderedQuestions(sortedQuestions);
    }, [
        sortedQuestions
    ]);
    const deleteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (questionId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$evaluation$2d$question$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluationQuestionService"].deleteQuestion(eventId, questionId),
        onSuccess: (message)=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'evaluation-questions',
                    eventId
                ]
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminSuccess"])({
                title: 'Question Deleted',
                text: message
            });
        },
        onError: (error)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminError"])({
                title: 'Delete Failed',
                text: error.message
            });
        }
    });
    const reorderMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (questionIds)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$evaluation$2d$question$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluationQuestionService"].reorderQuestions(eventId, questionIds),
        onSuccess: (result)=>{
            queryClient.setQueryData([
                'evaluation-questions',
                eventId
            ], result.data);
        },
        onError: (error)=>{
            setOrderedQuestions(sortedQuestions); // Revert jika gagal
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminError"])({
                title: 'Reorder Failed',
                text: error.message
            });
        }
    });
    const openCreate = ()=>{
        setEditingQuestion(null);
        setIsFormModalOpen(true);
    };
    const handleDelete = async (question)=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminConfirm"])({
            title: 'Delete Question?',
            text: `This will remove "${question.question_text}" from the evaluation form.`,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        });
        if (result.isConfirmed) {
            deleteMutation.mutate(question.id);
        }
    };
    const closeFormModal = (shouldRefresh)=>{
        setIsFormModalOpen(false);
        setEditingQuestion(null);
        if (shouldRefresh) {
            queryClient.invalidateQueries({
                queryKey: [
                    'evaluation-questions',
                    eventId
                ]
            });
        }
    };
    const closeImportModal = (shouldRefresh)=>{
        setIsImportModalOpen(false);
        if (shouldRefresh) {
            queryClient.invalidateQueries({
                queryKey: [
                    'evaluation-questions',
                    eventId
                ]
            });
        }
    };
    // --- FUNGSI BARU UNTUK HANDLE DRAG DROP ---
    const handleDragEnd = (result)=>{
        if (!result.destination) return; // Drop di luar area
        const fromIndex = result.source.index;
        const toIndex = result.destination.index;
        if (fromIndex === toIndex) return; // Nggak pindah posisi
        const nextQuestions = Array.from(orderedQuestions);
        const [movedQuestion] = nextQuestions.splice(fromIndex, 1);
        nextQuestions.splice(toIndex, 0, movedQuestion);
        // Immediately reflect the new order in local UI by reassigning sort_order
        // (backend reorder endpoint still gets the ids sequence)
        const nextWithSortOrder = nextQuestions.map((q, index)=>({
                ...q,
                sort_order: index
            }));
        setOrderedQuestions(nextWithSortOrder);
        reorderMutation.mutate(nextWithSortOrder.map((q)=>q.id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-6 text-[#1C1C1B]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-6 shadow-[6px_6px_0px_#1C1C1B]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-black uppercase tracking-[0.2em] text-[#6A5D52]",
                        children: "Evaluation Form"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-creato-title text-3xl font-black uppercase tracking-tight text-[#1C1C1B]",
                                        children: eventTitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm font-bold text-[#6A5D52]",
                                        children: "Build the checkout evaluation questions for this event."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 sm:flex-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/admin/event/${eventId}/evaluation/responses`,
                                        className: "border-[3px] border-[#1C1C1B] bg-white px-4 py-2 text-center text-sm font-black uppercase tracking-wider text-[#1C1C1B] shadow-[3px_3px_0px_#1C1C1B] transition hover:bg-[#1C1C1B] hover:text-white",
                                        children: "View Responses"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsImportModalOpen(true),
                                        className: "border-[3px] border-[#1C1C1B] bg-white px-4 py-2 text-sm font-black uppercase tracking-wider text-[#1C1C1B] shadow-[3px_3px_0px_#1C1C1B] transition hover:bg-[#B7AC9B]",
                                        children: "Import from Previous Event"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: openCreate,
                                        className: "border-[3px] border-[#1C1C1B] bg-[#6A5D52] px-4 py-2 text-sm font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#1C1C1B] transition hover:bg-[#1C1C1B]",
                                        children: "Add Question"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_460px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-5 shadow-[6px_6px_0px_#1C1C1B]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-creato-title text-xl font-black uppercase tracking-wider text-[#1C1C1B]",
                                        children: "Questions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "border-2 border-[#1C1C1B] bg-white px-3 py-1 text-xs font-black uppercase text-[#1C1C1B]",
                                        children: [
                                            questions?.length || 0,
                                            " total"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-dashed border-[#979086] bg-white/70 p-8 text-center text-sm font-bold uppercase tracking-wider text-[#6A5D52]",
                                children: "Loading questions..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this) : (questions?.length || 0) === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-dashed border-[#979086] bg-white/70 p-8 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-black uppercase tracking-wider text-[#1C1C1B]",
                                        children: "No questions yet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm font-bold text-[#6A5D52]",
                                        children: "Add a text, multiple choice, or rating question to begin."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: openCreate,
                                        className: "mt-4 border-[3px] border-[#1C1C1B] bg-[#6A5D52] px-4 py-2 text-sm font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#1C1C1B] hover:bg-[#1C1C1B]",
                                        children: "Create First Question"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this) : // --- IMPLEMENTASI DRAG & DROP YANG BARU ---
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DragDropContext"], {
                                onDragEnd: handleDragEnd,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Droppable"], {
                                    droppableId: "questions-list",
                                    children: (provided)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ...provided.droppableProps,
                                            ref: provided.innerRef,
                                            className: "space-y-3",
                                            children: [
                                                orderedQuestions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Draggable"], {
                                                        draggableId: question.id,
                                                        index: index,
                                                        children: (provided, snapshot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                                ref: provided.innerRef,
                                                                ...provided.draggableProps,
                                                                className: `border-[3px] bg-[#F5F3EF] p-4 transition-colors ${snapshot.isDragging ? 'border-[#6A5D52] shadow-[8px_8px_0px_#1C1C1B] opacity-95 z-50 rotate-1' // Efek miring dikit pas ditarik
                                                                 : 'border-[#1C1C1B] shadow-[4px_4px_0px_#1C1C1B] hover:-translate-x-0.5 hover:-translate-y-0.5'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col gap-4 md:flex-row md:items-start md:justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex min-w-0 flex-1 gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    ...provided.dragHandleProps,
                                                                                    className: "mt-1 grid h-8 w-8 shrink-0 cursor-grab place-items-center border-2 border-[#1C1C1B] bg-white text-[#6A5D52] hover:bg-[#1C1C1B] hover:text-white transition-colors",
                                                                                    "aria-label": "Drag question",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-lg leading-none",
                                                                                        children: "="
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                                        lineNumber: 219,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                                    lineNumber: 214,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "min-w-0 flex-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "mb-2 flex flex-wrap items-center gap-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-xs font-black uppercase tracking-wider text-[#6A5D52]",
                                                                                                    children: [
                                                                                                        "Q",
                                                                                                        index + 1
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                                                    lineNumber: 224,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "border border-[#1C1C1B] bg-white px-2.5 py-1 text-xs font-black uppercase text-[#1C1C1B]",
                                                                                                    children: question.type.replace('_', ' ')
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                                                    lineNumber: 227,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                question.is_required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "border border-red-700 bg-red-50 px-2.5 py-1 text-xs font-black uppercase text-red-700",
                                                                                                    children: "Required"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                                                    lineNumber: 231,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                                            lineNumber: 223,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "font-bold text-[#1C1C1B]",
                                                                                            children: question.question_text
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                                            lineNumber: 236,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        question.type === 'multiple_choice' && question.options && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "mt-2 text-sm font-bold text-[#6A5D52]",
                                                                                            children: question.options.join(', ')
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                                            lineNumber: 238,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                                    lineNumber: 222,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                            lineNumber: 212,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex shrink-0 gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>{
                                                                                        setEditingQuestion(question);
                                                                                        setIsFormModalOpen(true);
                                                                                    },
                                                                                    className: "px-3 py-1.5 border-[3px] border-[#1C1C1B] bg-white text-[#1C1C1B] text-xs font-black hover:bg-[#1C1C1B] hover:text-[#E2E2DE] transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider uppercase",
                                                                                    children: "EDIT"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                                    lineNumber: 245,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleDelete(question),
                                                                                    className: "px-3 py-1.5 border-[3px] border-[#ef4444] bg-white text-[#ef4444] text-xs font-black hover:bg-[#ef4444] hover:text-white transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider uppercase",
                                                                                    children: "DEL"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                                    lineNumber: 254,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                            lineNumber: 244,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 27
                                                            }, this)
                                                    }, question.id, false, {
                                                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 23
                                                    }, this)),
                                                provided.placeholder,
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                            lineNumber: 194,
                                            columnNumber: 19
                                        }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "xl:sticky xl:top-6 xl:self-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$evaluation$2f$LivePreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            questions: orderedQuestions
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            isFormModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$evaluation$2f$QuestionFormModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                eventId: eventId,
                question: editingQuestion,
                onClose: closeFormModal
            }, void 0, false, {
                fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                lineNumber: 280,
                columnNumber: 9
            }, this),
            isImportModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$evaluation$2f$ImportQuestionsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                targetEventId: eventId,
                onClose: closeImportModal
            }, void 0, false, {
                fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
                lineNumber: 288,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/evaluation/EvaluationFormBuilder.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_740ff4f8._.js.map