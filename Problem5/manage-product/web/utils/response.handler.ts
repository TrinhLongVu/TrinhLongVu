export interface ApiResponse<T> {
  status: 'success';
  data: T;
}

export class ResponseHandler {
  static success<T>(data: T): ApiResponse<T> {
    return {
      status: 'success',
      data
    };
  }
} 