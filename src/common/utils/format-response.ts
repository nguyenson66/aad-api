export const FResponse = (
  success: boolean,
  data?: any,
  message?: string | string[],
) => {
  return { success, data, message };
};

export type IResponse = ReturnType<typeof FResponse>;
