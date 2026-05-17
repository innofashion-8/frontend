import { fetchClient } from '@/lib/fetch-client';
import { ApiResponse } from '@/types/api';

export type EvaluationQuestionType = 'text' | 'multiple_choice' | 'rating' | 'header';

export interface EvaluationQuestion {
  id: string;
  event_id: string;
  question_text: string;
  type: EvaluationQuestionType;
  options: string[] | null;
  is_required: boolean;

  // new fields
  sort_order: number;
  page_number: number;
  header_title: string | null;
  header_description: string | null;

  created_at: string;
  updated_at: string;
}

export interface EvaluationQuestionPayload {
  question_text?: string;
  type: EvaluationQuestionType;
  options?: string[] | null;
  is_required: boolean;

  // new fields
  sort_order?: number;
  page_number?: number;
  header_title?: string | null;
  header_description?: string | null;
}

export interface EvaluationResponseAnswer {
  question_text: string;
  type: 'text' | 'multiple_choice' | 'rating' | 'header';
  value: string | null;
}

export interface EvaluationResponseRow {
  id: string;
  submitted_at: string;
  registration_id: string;
  user: {
    name: string | null;
    email: string | null;
    nrp: string | null;
  };
  answers: Record<string, EvaluationResponseAnswer>;
}

export interface EvaluationQuestionSummary {
  question_id: string;
  question_text: string;
  type: 'text' | 'multiple_choice' | 'rating' | 'header';
  stats: {
    count: number;
    average: number | null;
    distribution: Record<string, number>;
  };
}

export interface EvaluationResponsesPayload {
  event: {
    id: string;
    title: string;
  };
  questions: EvaluationQuestion[];
  summary: EvaluationQuestionSummary[];
  responses: EvaluationResponseRow[];
}

export const evaluationQuestionService = {
  getQuestions: async (eventId: string): Promise<EvaluationQuestion[]> => {
    try {
      const res = await fetchClient<ApiResponse<EvaluationQuestion[]>>(
        `/api/admin/events/${eventId}/evaluation-questions`,
        { method: 'GET' }
      );
      return res.data || [];
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  createQuestion: async (
    eventId: string,
    payload: EvaluationQuestionPayload
  ): Promise<{ message: string; data: EvaluationQuestion }> => {
    try {
      const res = await fetchClient<ApiResponse<EvaluationQuestion>>(
        `/api/admin/events/${eventId}/evaluation-questions`,
        {
          method: 'POST',
          body: JSON.stringify(payload),
        }
      );
      return {
        message: res.message || 'Question created successfully',
        data: res.data!,
      };
    } catch (error: any) {
      if (error.isValidationError) throw { isValidationError: true, errors: error.data };
      throw new Error(error.message);
    }
  },

  updateQuestion: async (
    eventId: string,
    questionId: string,
    payload: EvaluationQuestionPayload
  ): Promise<{ message: string; data: EvaluationQuestion }> => {
    try {
      const res = await fetchClient<ApiResponse<EvaluationQuestion>>(
        `/api/admin/events/${eventId}/evaluation-questions/${questionId}`,
        {
          method: 'PUT',
          body: JSON.stringify(payload),
        }
      );
      return {
        message: res.message || 'Question updated successfully',
        data: res.data!,
      };
    } catch (error: any) {
      if (error.isValidationError) throw { isValidationError: true, errors: error.data };
      throw new Error(error.message);
    }
  },

  deleteQuestion: async (eventId: string, questionId: string): Promise<string> => {
    try {
      const res = await fetchClient<ApiResponse>(
        `/api/admin/events/${eventId}/evaluation-questions/${questionId}`,
        { method: 'DELETE' }
      );
      return res.message || 'Question deleted successfully';
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  reorderQuestions: async (
    eventId: string,
    questionIds: string[]
  ): Promise<{ message: string; data: EvaluationQuestion[] }> => {
    try {
      const res = await fetchClient<ApiResponse<EvaluationQuestion[]>>(
        `/api/admin/events/${eventId}/evaluation-questions/reorder`,
        {
          method: 'PATCH',
          body: JSON.stringify({ question_ids: questionIds }),
        }
      );
      return {
        message: res.message || 'Question order updated successfully',
        data: res.data || [],
      };
    } catch (error: any) {
      if (error.isValidationError) throw { isValidationError: true, errors: error.data };
      throw new Error(error.message);
    }
  },

  importQuestions: async (
    targetEventId: string,
    sourceEventId: string
  ): Promise<{ message: string; data: EvaluationQuestion[] }> => {
    try {
      const res = await fetchClient<ApiResponse<EvaluationQuestion[]>>(
        `/api/admin/events/${targetEventId}/evaluation-questions/import`,
        {
          method: 'POST',
          body: JSON.stringify({ source_event_id: sourceEventId }),
        }
      );
      return {
        message: res.message || 'Questions imported successfully',
        data: res.data || [],
      };
    } catch (error: any) {
      if (error.isValidationError) throw { isValidationError: true, errors: error.data };
      throw new Error(error.message);
    }
  },

  getResponses: async (eventId: string): Promise<EvaluationResponsesPayload> => {
    try {
      const res = await fetchClient<ApiResponse<EvaluationResponsesPayload>>(
        `/api/admin/events/${eventId}/evaluation-responses`,
        { method: 'GET' }
      );
      return res.data as EvaluationResponsesPayload;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};
