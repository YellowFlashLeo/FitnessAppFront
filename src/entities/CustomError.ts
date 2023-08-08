export interface CustomError {
    response: InnerError;
  }

  interface InnerError {
    data:string;
}