export class CurrentUser {
    public id?: number;
    public username?: string;
    public email?: string;
    public token?: string;
}

export class TokenInfo {
    public iss?: string;
    public sub?: string;
    public aud?: string;
    public iat?: number;
    public exp?: number;
    public azp?: string;
    public gty?: string;
    public permissions?: string[];
}

