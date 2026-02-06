import { getCookie } from "./auth";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type RequestOptions = Omit<RequestInit, "method" | "body">;

async function request<TResponse, TBody = unknown>(
  url: string,
  method: HttpMethod,
  body?: TBody,
  options: RequestOptions = {}
): Promise<TResponse> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  // 환경 변수에 기본 API 베이스 URL이 설정되어 있으면 사용
  const baseUrl = process.env.NEXT_PUBLIC_API ?? "";
  const fullUrl = baseUrl + url;

  const res = await fetch(fullUrl, {
    ...options,
    method,
    headers,
    body: body != null ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    // JSON 에러 메시지를 시도해서 읽고, 아니면 기본 메시지로 대체
    let message = "요청이 실패했어요.";
    try {
      const errorData = (await res.json()) as { message?: string };
      if (errorData?.message) {
        message = errorData.message;
      }
    } catch {
      // ignore JSON parse error
    }
    throw new Error(message);
  }

  // 응답이 비어 있을 수도 있으니, 안전하게 처리
  try {
    return (await res.json()) as TResponse;
  } catch {
    return {} as TResponse;
  }
}

export const api = {
  get<TResponse>(url: string, options?: RequestOptions) {
    return request<TResponse>(url, "GET", undefined, options);
  },
  post<TResponse, TBody = unknown>(
    url: string,
    body?: TBody,
    options?: RequestOptions
  ) {
    return request<TResponse, TBody>(url, "POST", body, options);
  },
  put<TResponse, TBody = unknown>(
    url: string,
    body?: TBody,
    options?: RequestOptions
  ) {
    return request<TResponse, TBody>(url, "PUT", body, options);
  },
  patch<TResponse, TBody = unknown>(
    url: string,
    body?: TBody,
    options?: RequestOptions
  ) {
    return request<TResponse, TBody>(url, "PATCH", body, options);
  },
  delete<TResponse>(url: string, options?: RequestOptions) {
    return request<TResponse>(url, "DELETE", undefined, options);
  },
};

