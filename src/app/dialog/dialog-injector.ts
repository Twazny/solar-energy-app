import { InjectFlags, InjectionToken, Injector, Type } from '@angular/core'

export class DialogInjector implements Injector {

    constructor(
        private parentInjector: Injector,
        private additionalTokens: WeakMap<any, any>
    ) {

    }

    get<T>(
        token: Type<T> | InjectionToken<T>,
        notFoundValue?: T,
        flags?: InjectFlags
    ): T {
        const value = this.additionalTokens.get(token)
        if (value) return value
        return this.parentInjector.get<any>(token, notFoundValue)
    }

}