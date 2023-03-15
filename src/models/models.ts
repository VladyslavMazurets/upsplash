export type ICode = string | undefined | null;

export interface IToken {
    access_token: string;
    token_type: string;
    refresh_token: string;
    scope: string;
    created_at: number;
}

export interface TokenObject<T> {
    data: T;
}

