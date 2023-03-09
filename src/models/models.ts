
export interface IToken {
    access_token: string;
    expires_in: number;
    token_type: string;
}

export interface TokenObject<T> {
    data: T;
}

