import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly helper;
    constructor(config: ConfigService);
    validate(payload: string): Promise<any>;
}
export {};
