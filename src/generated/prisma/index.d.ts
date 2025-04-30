
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model agenda
 * 
 */
export type agenda = $Result.DefaultSelection<Prisma.$agendaPayload>
/**
 * Model agenda_contatos
 * 
 */
export type agenda_contatos = $Result.DefaultSelection<Prisma.$agenda_contatosPayload>
/**
 * Model agenda_enderecos
 * 
 */
export type agenda_enderecos = $Result.DefaultSelection<Prisma.$agenda_enderecosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agenda
 * const agenda = await prisma.agenda.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Agenda
   * const agenda = await prisma.agenda.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.agenda`: Exposes CRUD operations for the **agenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agenda
    * const agenda = await prisma.agenda.findMany()
    * ```
    */
  get agenda(): Prisma.agendaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agenda_contatos`: Exposes CRUD operations for the **agenda_contatos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agenda_contatos
    * const agenda_contatos = await prisma.agenda_contatos.findMany()
    * ```
    */
  get agenda_contatos(): Prisma.agenda_contatosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agenda_enderecos`: Exposes CRUD operations for the **agenda_enderecos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agenda_enderecos
    * const agenda_enderecos = await prisma.agenda_enderecos.findMany()
    * ```
    */
  get agenda_enderecos(): Prisma.agenda_enderecosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    agenda: 'agenda',
    agenda_contatos: 'agenda_contatos',
    agenda_enderecos: 'agenda_enderecos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "agenda" | "agenda_contatos" | "agenda_enderecos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      agenda: {
        payload: Prisma.$agendaPayload<ExtArgs>
        fields: Prisma.agendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          findFirst: {
            args: Prisma.agendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          findMany: {
            args: Prisma.agendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>[]
          }
          create: {
            args: Prisma.agendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          createMany: {
            args: Prisma.agendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.agendaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>[]
          }
          delete: {
            args: Prisma.agendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          update: {
            args: Prisma.agendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          deleteMany: {
            args: Prisma.agendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.agendaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>[]
          }
          upsert: {
            args: Prisma.agendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendaPayload>
          }
          aggregate: {
            args: Prisma.AgendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgenda>
          }
          groupBy: {
            args: Prisma.agendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.agendaCountArgs<ExtArgs>
            result: $Utils.Optional<AgendaCountAggregateOutputType> | number
          }
        }
      }
      agenda_contatos: {
        payload: Prisma.$agenda_contatosPayload<ExtArgs>
        fields: Prisma.agenda_contatosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agenda_contatosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_contatosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agenda_contatosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_contatosPayload>
          }
          findFirst: {
            args: Prisma.agenda_contatosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_contatosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agenda_contatosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_contatosPayload>
          }
          findMany: {
            args: Prisma.agenda_contatosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_contatosPayload>[]
          }
          create: {
            args: Prisma.agenda_contatosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_contatosPayload>
          }
          createMany: {
            args: Prisma.agenda_contatosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.agenda_contatosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_contatosPayload>[]
          }
          delete: {
            args: Prisma.agenda_contatosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_contatosPayload>
          }
          update: {
            args: Prisma.agenda_contatosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_contatosPayload>
          }
          deleteMany: {
            args: Prisma.agenda_contatosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agenda_contatosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.agenda_contatosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_contatosPayload>[]
          }
          upsert: {
            args: Prisma.agenda_contatosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_contatosPayload>
          }
          aggregate: {
            args: Prisma.Agenda_contatosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgenda_contatos>
          }
          groupBy: {
            args: Prisma.agenda_contatosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Agenda_contatosGroupByOutputType>[]
          }
          count: {
            args: Prisma.agenda_contatosCountArgs<ExtArgs>
            result: $Utils.Optional<Agenda_contatosCountAggregateOutputType> | number
          }
        }
      }
      agenda_enderecos: {
        payload: Prisma.$agenda_enderecosPayload<ExtArgs>
        fields: Prisma.agenda_enderecosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agenda_enderecosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_enderecosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agenda_enderecosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_enderecosPayload>
          }
          findFirst: {
            args: Prisma.agenda_enderecosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_enderecosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agenda_enderecosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_enderecosPayload>
          }
          findMany: {
            args: Prisma.agenda_enderecosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_enderecosPayload>[]
          }
          create: {
            args: Prisma.agenda_enderecosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_enderecosPayload>
          }
          createMany: {
            args: Prisma.agenda_enderecosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.agenda_enderecosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_enderecosPayload>[]
          }
          delete: {
            args: Prisma.agenda_enderecosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_enderecosPayload>
          }
          update: {
            args: Prisma.agenda_enderecosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_enderecosPayload>
          }
          deleteMany: {
            args: Prisma.agenda_enderecosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agenda_enderecosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.agenda_enderecosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_enderecosPayload>[]
          }
          upsert: {
            args: Prisma.agenda_enderecosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agenda_enderecosPayload>
          }
          aggregate: {
            args: Prisma.Agenda_enderecosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgenda_enderecos>
          }
          groupBy: {
            args: Prisma.agenda_enderecosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Agenda_enderecosGroupByOutputType>[]
          }
          count: {
            args: Prisma.agenda_enderecosCountArgs<ExtArgs>
            result: $Utils.Optional<Agenda_enderecosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    agenda?: agendaOmit
    agenda_contatos?: agenda_contatosOmit
    agenda_enderecos?: agenda_enderecosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AgendaCountOutputType
   */

  export type AgendaCountOutputType = {
    agenda_contatos: number
    agenda_enderecos: number
  }

  export type AgendaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda_contatos?: boolean | AgendaCountOutputTypeCountAgenda_contatosArgs
    agenda_enderecos?: boolean | AgendaCountOutputTypeCountAgenda_enderecosArgs
  }

  // Custom InputTypes
  /**
   * AgendaCountOutputType without action
   */
  export type AgendaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaCountOutputType
     */
    select?: AgendaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgendaCountOutputType without action
   */
  export type AgendaCountOutputTypeCountAgenda_contatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agenda_contatosWhereInput
  }

  /**
   * AgendaCountOutputType without action
   */
  export type AgendaCountOutputTypeCountAgenda_enderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agenda_enderecosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model agenda
   */

  export type AggregateAgenda = {
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  export type AgendaAvgAggregateOutputType = {
    id: number | null
  }

  export type AgendaSumAggregateOutputType = {
    id: bigint | null
  }

  export type AgendaMinAggregateOutputType = {
    id: bigint | null
    documento: string | null
    nome: string | null
  }

  export type AgendaMaxAggregateOutputType = {
    id: bigint | null
    documento: string | null
    nome: string | null
  }

  export type AgendaCountAggregateOutputType = {
    id: number
    documento: number
    nome: number
    _all: number
  }


  export type AgendaAvgAggregateInputType = {
    id?: true
  }

  export type AgendaSumAggregateInputType = {
    id?: true
  }

  export type AgendaMinAggregateInputType = {
    id?: true
    documento?: true
    nome?: true
  }

  export type AgendaMaxAggregateInputType = {
    id?: true
    documento?: true
    nome?: true
  }

  export type AgendaCountAggregateInputType = {
    id?: true
    documento?: true
    nome?: true
    _all?: true
  }

  export type AgendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agenda to aggregate.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agenda
    **/
    _count?: true | AgendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendaMaxAggregateInputType
  }

  export type GetAgendaAggregateType<T extends AgendaAggregateArgs> = {
        [P in keyof T & keyof AggregateAgenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgenda[P]>
      : GetScalarType<T[P], AggregateAgenda[P]>
  }




  export type agendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendaWhereInput
    orderBy?: agendaOrderByWithAggregationInput | agendaOrderByWithAggregationInput[]
    by: AgendaScalarFieldEnum[] | AgendaScalarFieldEnum
    having?: agendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendaCountAggregateInputType | true
    _avg?: AgendaAvgAggregateInputType
    _sum?: AgendaSumAggregateInputType
    _min?: AgendaMinAggregateInputType
    _max?: AgendaMaxAggregateInputType
  }

  export type AgendaGroupByOutputType = {
    id: bigint
    documento: string | null
    nome: string | null
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  type GetAgendaGroupByPayload<T extends agendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendaGroupByOutputType[P]>
            : GetScalarType<T[P], AgendaGroupByOutputType[P]>
        }
      >
    >


  export type agendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documento?: boolean
    nome?: boolean
    agenda_contatos?: boolean | agenda$agenda_contatosArgs<ExtArgs>
    agenda_enderecos?: boolean | agenda$agenda_enderecosArgs<ExtArgs>
    _count?: boolean | AgendaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda"]>

  export type agendaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documento?: boolean
    nome?: boolean
  }, ExtArgs["result"]["agenda"]>

  export type agendaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documento?: boolean
    nome?: boolean
  }, ExtArgs["result"]["agenda"]>

  export type agendaSelectScalar = {
    id?: boolean
    documento?: boolean
    nome?: boolean
  }

  export type agendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documento" | "nome", ExtArgs["result"]["agenda"]>
  export type agendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda_contatos?: boolean | agenda$agenda_contatosArgs<ExtArgs>
    agenda_enderecos?: boolean | agenda$agenda_enderecosArgs<ExtArgs>
    _count?: boolean | AgendaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type agendaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type agendaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $agendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agenda"
    objects: {
      agenda_contatos: Prisma.$agenda_contatosPayload<ExtArgs>[]
      agenda_enderecos: Prisma.$agenda_enderecosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      documento: string | null
      nome: string | null
    }, ExtArgs["result"]["agenda"]>
    composites: {}
  }

  type agendaGetPayload<S extends boolean | null | undefined | agendaDefaultArgs> = $Result.GetResult<Prisma.$agendaPayload, S>

  type agendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<agendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendaCountAggregateInputType | true
    }

  export interface agendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agenda'], meta: { name: 'agenda' } }
    /**
     * Find zero or one Agenda that matches the filter.
     * @param {agendaFindUniqueArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agendaFindUniqueArgs>(args: SelectSubset<T, agendaFindUniqueArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agenda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agendaFindUniqueOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agendaFindUniqueOrThrowArgs>(args: SelectSubset<T, agendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaFindFirstArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agendaFindFirstArgs>(args?: SelectSubset<T, agendaFindFirstArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaFindFirstOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agendaFindFirstOrThrowArgs>(args?: SelectSubset<T, agendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agenda
     * const agenda = await prisma.agenda.findMany()
     * 
     * // Get first 10 Agenda
     * const agenda = await prisma.agenda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendaWithIdOnly = await prisma.agenda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends agendaFindManyArgs>(args?: SelectSubset<T, agendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agenda.
     * @param {agendaCreateArgs} args - Arguments to create a Agenda.
     * @example
     * // Create one Agenda
     * const Agenda = await prisma.agenda.create({
     *   data: {
     *     // ... data to create a Agenda
     *   }
     * })
     * 
     */
    create<T extends agendaCreateArgs>(args: SelectSubset<T, agendaCreateArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agenda.
     * @param {agendaCreateManyArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agendaCreateManyArgs>(args?: SelectSubset<T, agendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agenda and returns the data saved in the database.
     * @param {agendaCreateManyAndReturnArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agenda and only return the `id`
     * const agendaWithIdOnly = await prisma.agenda.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends agendaCreateManyAndReturnArgs>(args?: SelectSubset<T, agendaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agenda.
     * @param {agendaDeleteArgs} args - Arguments to delete one Agenda.
     * @example
     * // Delete one Agenda
     * const Agenda = await prisma.agenda.delete({
     *   where: {
     *     // ... filter to delete one Agenda
     *   }
     * })
     * 
     */
    delete<T extends agendaDeleteArgs>(args: SelectSubset<T, agendaDeleteArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agenda.
     * @param {agendaUpdateArgs} args - Arguments to update one Agenda.
     * @example
     * // Update one Agenda
     * const agenda = await prisma.agenda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agendaUpdateArgs>(args: SelectSubset<T, agendaUpdateArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agenda.
     * @param {agendaDeleteManyArgs} args - Arguments to filter Agenda to delete.
     * @example
     * // Delete a few Agenda
     * const { count } = await prisma.agenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agendaDeleteManyArgs>(args?: SelectSubset<T, agendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agendaUpdateManyArgs>(args: SelectSubset<T, agendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda and returns the data updated in the database.
     * @param {agendaUpdateManyAndReturnArgs} args - Arguments to update many Agenda.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agenda and only return the `id`
     * const agendaWithIdOnly = await prisma.agenda.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends agendaUpdateManyAndReturnArgs>(args: SelectSubset<T, agendaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agenda.
     * @param {agendaUpsertArgs} args - Arguments to update or create a Agenda.
     * @example
     * // Update or create a Agenda
     * const agenda = await prisma.agenda.upsert({
     *   create: {
     *     // ... data to create a Agenda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agenda we want to update
     *   }
     * })
     */
    upsert<T extends agendaUpsertArgs>(args: SelectSubset<T, agendaUpsertArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaCountArgs} args - Arguments to filter Agenda to count.
     * @example
     * // Count the number of Agenda
     * const count = await prisma.agenda.count({
     *   where: {
     *     // ... the filter for the Agenda we want to count
     *   }
     * })
    **/
    count<T extends agendaCountArgs>(
      args?: Subset<T, agendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgendaAggregateArgs>(args: Subset<T, AgendaAggregateArgs>): Prisma.PrismaPromise<GetAgendaAggregateType<T>>

    /**
     * Group by Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends agendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agendaGroupByArgs['orderBy'] }
        : { orderBy?: agendaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, agendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agenda model
   */
  readonly fields: agendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agenda_contatos<T extends agenda$agenda_contatosArgs<ExtArgs> = {}>(args?: Subset<T, agenda$agenda_contatosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agenda_contatosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agenda_enderecos<T extends agenda$agenda_enderecosArgs<ExtArgs> = {}>(args?: Subset<T, agenda$agenda_enderecosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agenda_enderecosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the agenda model
   */
  interface agendaFieldRefs {
    readonly id: FieldRef<"agenda", 'BigInt'>
    readonly documento: FieldRef<"agenda", 'String'>
    readonly nome: FieldRef<"agenda", 'String'>
  }
    

  // Custom InputTypes
  /**
   * agenda findUnique
   */
  export type agendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where: agendaWhereUniqueInput
  }

  /**
   * agenda findUniqueOrThrow
   */
  export type agendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where: agendaWhereUniqueInput
  }

  /**
   * agenda findFirst
   */
  export type agendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agenda.
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * agenda findFirstOrThrow
   */
  export type agendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agenda.
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * agenda findMany
   */
  export type agendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * Filter, which agenda to fetch.
     */
    where?: agendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda to fetch.
     */
    orderBy?: agendaOrderByWithRelationInput | agendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agenda.
     */
    cursor?: agendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda.
     */
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * agenda create
   */
  export type agendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * The data needed to create a agenda.
     */
    data?: XOR<agendaCreateInput, agendaUncheckedCreateInput>
  }

  /**
   * agenda createMany
   */
  export type agendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agenda.
     */
    data: agendaCreateManyInput | agendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agenda createManyAndReturn
   */
  export type agendaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * The data used to create many agenda.
     */
    data: agendaCreateManyInput | agendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agenda update
   */
  export type agendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * The data needed to update a agenda.
     */
    data: XOR<agendaUpdateInput, agendaUncheckedUpdateInput>
    /**
     * Choose, which agenda to update.
     */
    where: agendaWhereUniqueInput
  }

  /**
   * agenda updateMany
   */
  export type agendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agenda.
     */
    data: XOR<agendaUpdateManyMutationInput, agendaUncheckedUpdateManyInput>
    /**
     * Filter which agenda to update
     */
    where?: agendaWhereInput
    /**
     * Limit how many agenda to update.
     */
    limit?: number
  }

  /**
   * agenda updateManyAndReturn
   */
  export type agendaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * The data used to update agenda.
     */
    data: XOR<agendaUpdateManyMutationInput, agendaUncheckedUpdateManyInput>
    /**
     * Filter which agenda to update
     */
    where?: agendaWhereInput
    /**
     * Limit how many agenda to update.
     */
    limit?: number
  }

  /**
   * agenda upsert
   */
  export type agendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * The filter to search for the agenda to update in case it exists.
     */
    where: agendaWhereUniqueInput
    /**
     * In case the agenda found by the `where` argument doesn't exist, create a new agenda with this data.
     */
    create: XOR<agendaCreateInput, agendaUncheckedCreateInput>
    /**
     * In case the agenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agendaUpdateInput, agendaUncheckedUpdateInput>
  }

  /**
   * agenda delete
   */
  export type agendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
    /**
     * Filter which agenda to delete.
     */
    where: agendaWhereUniqueInput
  }

  /**
   * agenda deleteMany
   */
  export type agendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agenda to delete
     */
    where?: agendaWhereInput
    /**
     * Limit how many agenda to delete.
     */
    limit?: number
  }

  /**
   * agenda.agenda_contatos
   */
  export type agenda$agenda_contatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_contatos
     */
    select?: agenda_contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_contatos
     */
    omit?: agenda_contatosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_contatosInclude<ExtArgs> | null
    where?: agenda_contatosWhereInput
    orderBy?: agenda_contatosOrderByWithRelationInput | agenda_contatosOrderByWithRelationInput[]
    cursor?: agenda_contatosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Agenda_contatosScalarFieldEnum | Agenda_contatosScalarFieldEnum[]
  }

  /**
   * agenda.agenda_enderecos
   */
  export type agenda$agenda_enderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_enderecos
     */
    select?: agenda_enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_enderecos
     */
    omit?: agenda_enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_enderecosInclude<ExtArgs> | null
    where?: agenda_enderecosWhereInput
    orderBy?: agenda_enderecosOrderByWithRelationInput | agenda_enderecosOrderByWithRelationInput[]
    cursor?: agenda_enderecosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Agenda_enderecosScalarFieldEnum | Agenda_enderecosScalarFieldEnum[]
  }

  /**
   * agenda without action
   */
  export type agendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda
     */
    select?: agendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda
     */
    omit?: agendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendaInclude<ExtArgs> | null
  }


  /**
   * Model agenda_contatos
   */

  export type AggregateAgenda_contatos = {
    _count: Agenda_contatosCountAggregateOutputType | null
    _avg: Agenda_contatosAvgAggregateOutputType | null
    _sum: Agenda_contatosSumAggregateOutputType | null
    _min: Agenda_contatosMinAggregateOutputType | null
    _max: Agenda_contatosMaxAggregateOutputType | null
  }

  export type Agenda_contatosAvgAggregateOutputType = {
    id: number | null
    agenda_id: number | null
  }

  export type Agenda_contatosSumAggregateOutputType = {
    id: bigint | null
    agenda_id: bigint | null
  }

  export type Agenda_contatosMinAggregateOutputType = {
    id: bigint | null
    celular: string | null
    email: string | null
    telefone: string | null
    agenda_id: bigint | null
  }

  export type Agenda_contatosMaxAggregateOutputType = {
    id: bigint | null
    celular: string | null
    email: string | null
    telefone: string | null
    agenda_id: bigint | null
  }

  export type Agenda_contatosCountAggregateOutputType = {
    id: number
    celular: number
    email: number
    telefone: number
    agenda_id: number
    _all: number
  }


  export type Agenda_contatosAvgAggregateInputType = {
    id?: true
    agenda_id?: true
  }

  export type Agenda_contatosSumAggregateInputType = {
    id?: true
    agenda_id?: true
  }

  export type Agenda_contatosMinAggregateInputType = {
    id?: true
    celular?: true
    email?: true
    telefone?: true
    agenda_id?: true
  }

  export type Agenda_contatosMaxAggregateInputType = {
    id?: true
    celular?: true
    email?: true
    telefone?: true
    agenda_id?: true
  }

  export type Agenda_contatosCountAggregateInputType = {
    id?: true
    celular?: true
    email?: true
    telefone?: true
    agenda_id?: true
    _all?: true
  }

  export type Agenda_contatosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agenda_contatos to aggregate.
     */
    where?: agenda_contatosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda_contatos to fetch.
     */
    orderBy?: agenda_contatosOrderByWithRelationInput | agenda_contatosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agenda_contatosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda_contatos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda_contatos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agenda_contatos
    **/
    _count?: true | Agenda_contatosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Agenda_contatosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Agenda_contatosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Agenda_contatosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Agenda_contatosMaxAggregateInputType
  }

  export type GetAgenda_contatosAggregateType<T extends Agenda_contatosAggregateArgs> = {
        [P in keyof T & keyof AggregateAgenda_contatos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgenda_contatos[P]>
      : GetScalarType<T[P], AggregateAgenda_contatos[P]>
  }




  export type agenda_contatosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agenda_contatosWhereInput
    orderBy?: agenda_contatosOrderByWithAggregationInput | agenda_contatosOrderByWithAggregationInput[]
    by: Agenda_contatosScalarFieldEnum[] | Agenda_contatosScalarFieldEnum
    having?: agenda_contatosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Agenda_contatosCountAggregateInputType | true
    _avg?: Agenda_contatosAvgAggregateInputType
    _sum?: Agenda_contatosSumAggregateInputType
    _min?: Agenda_contatosMinAggregateInputType
    _max?: Agenda_contatosMaxAggregateInputType
  }

  export type Agenda_contatosGroupByOutputType = {
    id: bigint
    celular: string | null
    email: string | null
    telefone: string | null
    agenda_id: bigint
    _count: Agenda_contatosCountAggregateOutputType | null
    _avg: Agenda_contatosAvgAggregateOutputType | null
    _sum: Agenda_contatosSumAggregateOutputType | null
    _min: Agenda_contatosMinAggregateOutputType | null
    _max: Agenda_contatosMaxAggregateOutputType | null
  }

  type GetAgenda_contatosGroupByPayload<T extends agenda_contatosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Agenda_contatosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Agenda_contatosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Agenda_contatosGroupByOutputType[P]>
            : GetScalarType<T[P], Agenda_contatosGroupByOutputType[P]>
        }
      >
    >


  export type agenda_contatosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    celular?: boolean
    email?: boolean
    telefone?: boolean
    agenda_id?: boolean
    agenda?: boolean | agendaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda_contatos"]>

  export type agenda_contatosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    celular?: boolean
    email?: boolean
    telefone?: boolean
    agenda_id?: boolean
    agenda?: boolean | agendaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda_contatos"]>

  export type agenda_contatosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    celular?: boolean
    email?: boolean
    telefone?: boolean
    agenda_id?: boolean
    agenda?: boolean | agendaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda_contatos"]>

  export type agenda_contatosSelectScalar = {
    id?: boolean
    celular?: boolean
    email?: boolean
    telefone?: boolean
    agenda_id?: boolean
  }

  export type agenda_contatosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "celular" | "email" | "telefone" | "agenda_id", ExtArgs["result"]["agenda_contatos"]>
  export type agenda_contatosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | agendaDefaultArgs<ExtArgs>
  }
  export type agenda_contatosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | agendaDefaultArgs<ExtArgs>
  }
  export type agenda_contatosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | agendaDefaultArgs<ExtArgs>
  }

  export type $agenda_contatosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agenda_contatos"
    objects: {
      agenda: Prisma.$agendaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      celular: string | null
      email: string | null
      telefone: string | null
      agenda_id: bigint
    }, ExtArgs["result"]["agenda_contatos"]>
    composites: {}
  }

  type agenda_contatosGetPayload<S extends boolean | null | undefined | agenda_contatosDefaultArgs> = $Result.GetResult<Prisma.$agenda_contatosPayload, S>

  type agenda_contatosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<agenda_contatosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Agenda_contatosCountAggregateInputType | true
    }

  export interface agenda_contatosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agenda_contatos'], meta: { name: 'agenda_contatos' } }
    /**
     * Find zero or one Agenda_contatos that matches the filter.
     * @param {agenda_contatosFindUniqueArgs} args - Arguments to find a Agenda_contatos
     * @example
     * // Get one Agenda_contatos
     * const agenda_contatos = await prisma.agenda_contatos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agenda_contatosFindUniqueArgs>(args: SelectSubset<T, agenda_contatosFindUniqueArgs<ExtArgs>>): Prisma__agenda_contatosClient<$Result.GetResult<Prisma.$agenda_contatosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agenda_contatos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agenda_contatosFindUniqueOrThrowArgs} args - Arguments to find a Agenda_contatos
     * @example
     * // Get one Agenda_contatos
     * const agenda_contatos = await prisma.agenda_contatos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agenda_contatosFindUniqueOrThrowArgs>(args: SelectSubset<T, agenda_contatosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agenda_contatosClient<$Result.GetResult<Prisma.$agenda_contatosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda_contatos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agenda_contatosFindFirstArgs} args - Arguments to find a Agenda_contatos
     * @example
     * // Get one Agenda_contatos
     * const agenda_contatos = await prisma.agenda_contatos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agenda_contatosFindFirstArgs>(args?: SelectSubset<T, agenda_contatosFindFirstArgs<ExtArgs>>): Prisma__agenda_contatosClient<$Result.GetResult<Prisma.$agenda_contatosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda_contatos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agenda_contatosFindFirstOrThrowArgs} args - Arguments to find a Agenda_contatos
     * @example
     * // Get one Agenda_contatos
     * const agenda_contatos = await prisma.agenda_contatos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agenda_contatosFindFirstOrThrowArgs>(args?: SelectSubset<T, agenda_contatosFindFirstOrThrowArgs<ExtArgs>>): Prisma__agenda_contatosClient<$Result.GetResult<Prisma.$agenda_contatosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agenda_contatos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agenda_contatosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agenda_contatos
     * const agenda_contatos = await prisma.agenda_contatos.findMany()
     * 
     * // Get first 10 Agenda_contatos
     * const agenda_contatos = await prisma.agenda_contatos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agenda_contatosWithIdOnly = await prisma.agenda_contatos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends agenda_contatosFindManyArgs>(args?: SelectSubset<T, agenda_contatosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agenda_contatosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agenda_contatos.
     * @param {agenda_contatosCreateArgs} args - Arguments to create a Agenda_contatos.
     * @example
     * // Create one Agenda_contatos
     * const Agenda_contatos = await prisma.agenda_contatos.create({
     *   data: {
     *     // ... data to create a Agenda_contatos
     *   }
     * })
     * 
     */
    create<T extends agenda_contatosCreateArgs>(args: SelectSubset<T, agenda_contatosCreateArgs<ExtArgs>>): Prisma__agenda_contatosClient<$Result.GetResult<Prisma.$agenda_contatosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agenda_contatos.
     * @param {agenda_contatosCreateManyArgs} args - Arguments to create many Agenda_contatos.
     * @example
     * // Create many Agenda_contatos
     * const agenda_contatos = await prisma.agenda_contatos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agenda_contatosCreateManyArgs>(args?: SelectSubset<T, agenda_contatosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agenda_contatos and returns the data saved in the database.
     * @param {agenda_contatosCreateManyAndReturnArgs} args - Arguments to create many Agenda_contatos.
     * @example
     * // Create many Agenda_contatos
     * const agenda_contatos = await prisma.agenda_contatos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agenda_contatos and only return the `id`
     * const agenda_contatosWithIdOnly = await prisma.agenda_contatos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends agenda_contatosCreateManyAndReturnArgs>(args?: SelectSubset<T, agenda_contatosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agenda_contatosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agenda_contatos.
     * @param {agenda_contatosDeleteArgs} args - Arguments to delete one Agenda_contatos.
     * @example
     * // Delete one Agenda_contatos
     * const Agenda_contatos = await prisma.agenda_contatos.delete({
     *   where: {
     *     // ... filter to delete one Agenda_contatos
     *   }
     * })
     * 
     */
    delete<T extends agenda_contatosDeleteArgs>(args: SelectSubset<T, agenda_contatosDeleteArgs<ExtArgs>>): Prisma__agenda_contatosClient<$Result.GetResult<Prisma.$agenda_contatosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agenda_contatos.
     * @param {agenda_contatosUpdateArgs} args - Arguments to update one Agenda_contatos.
     * @example
     * // Update one Agenda_contatos
     * const agenda_contatos = await prisma.agenda_contatos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agenda_contatosUpdateArgs>(args: SelectSubset<T, agenda_contatosUpdateArgs<ExtArgs>>): Prisma__agenda_contatosClient<$Result.GetResult<Prisma.$agenda_contatosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agenda_contatos.
     * @param {agenda_contatosDeleteManyArgs} args - Arguments to filter Agenda_contatos to delete.
     * @example
     * // Delete a few Agenda_contatos
     * const { count } = await prisma.agenda_contatos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agenda_contatosDeleteManyArgs>(args?: SelectSubset<T, agenda_contatosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda_contatos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agenda_contatosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agenda_contatos
     * const agenda_contatos = await prisma.agenda_contatos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agenda_contatosUpdateManyArgs>(args: SelectSubset<T, agenda_contatosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda_contatos and returns the data updated in the database.
     * @param {agenda_contatosUpdateManyAndReturnArgs} args - Arguments to update many Agenda_contatos.
     * @example
     * // Update many Agenda_contatos
     * const agenda_contatos = await prisma.agenda_contatos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agenda_contatos and only return the `id`
     * const agenda_contatosWithIdOnly = await prisma.agenda_contatos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends agenda_contatosUpdateManyAndReturnArgs>(args: SelectSubset<T, agenda_contatosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agenda_contatosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agenda_contatos.
     * @param {agenda_contatosUpsertArgs} args - Arguments to update or create a Agenda_contatos.
     * @example
     * // Update or create a Agenda_contatos
     * const agenda_contatos = await prisma.agenda_contatos.upsert({
     *   create: {
     *     // ... data to create a Agenda_contatos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agenda_contatos we want to update
     *   }
     * })
     */
    upsert<T extends agenda_contatosUpsertArgs>(args: SelectSubset<T, agenda_contatosUpsertArgs<ExtArgs>>): Prisma__agenda_contatosClient<$Result.GetResult<Prisma.$agenda_contatosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agenda_contatos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agenda_contatosCountArgs} args - Arguments to filter Agenda_contatos to count.
     * @example
     * // Count the number of Agenda_contatos
     * const count = await prisma.agenda_contatos.count({
     *   where: {
     *     // ... the filter for the Agenda_contatos we want to count
     *   }
     * })
    **/
    count<T extends agenda_contatosCountArgs>(
      args?: Subset<T, agenda_contatosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Agenda_contatosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agenda_contatos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agenda_contatosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Agenda_contatosAggregateArgs>(args: Subset<T, Agenda_contatosAggregateArgs>): Prisma.PrismaPromise<GetAgenda_contatosAggregateType<T>>

    /**
     * Group by Agenda_contatos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agenda_contatosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends agenda_contatosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agenda_contatosGroupByArgs['orderBy'] }
        : { orderBy?: agenda_contatosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, agenda_contatosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgenda_contatosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agenda_contatos model
   */
  readonly fields: agenda_contatosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agenda_contatos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agenda_contatosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agenda<T extends agendaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, agendaDefaultArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the agenda_contatos model
   */
  interface agenda_contatosFieldRefs {
    readonly id: FieldRef<"agenda_contatos", 'BigInt'>
    readonly celular: FieldRef<"agenda_contatos", 'String'>
    readonly email: FieldRef<"agenda_contatos", 'String'>
    readonly telefone: FieldRef<"agenda_contatos", 'String'>
    readonly agenda_id: FieldRef<"agenda_contatos", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * agenda_contatos findUnique
   */
  export type agenda_contatosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_contatos
     */
    select?: agenda_contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_contatos
     */
    omit?: agenda_contatosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_contatosInclude<ExtArgs> | null
    /**
     * Filter, which agenda_contatos to fetch.
     */
    where: agenda_contatosWhereUniqueInput
  }

  /**
   * agenda_contatos findUniqueOrThrow
   */
  export type agenda_contatosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_contatos
     */
    select?: agenda_contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_contatos
     */
    omit?: agenda_contatosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_contatosInclude<ExtArgs> | null
    /**
     * Filter, which agenda_contatos to fetch.
     */
    where: agenda_contatosWhereUniqueInput
  }

  /**
   * agenda_contatos findFirst
   */
  export type agenda_contatosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_contatos
     */
    select?: agenda_contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_contatos
     */
    omit?: agenda_contatosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_contatosInclude<ExtArgs> | null
    /**
     * Filter, which agenda_contatos to fetch.
     */
    where?: agenda_contatosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda_contatos to fetch.
     */
    orderBy?: agenda_contatosOrderByWithRelationInput | agenda_contatosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agenda_contatos.
     */
    cursor?: agenda_contatosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda_contatos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda_contatos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agenda_contatos.
     */
    distinct?: Agenda_contatosScalarFieldEnum | Agenda_contatosScalarFieldEnum[]
  }

  /**
   * agenda_contatos findFirstOrThrow
   */
  export type agenda_contatosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_contatos
     */
    select?: agenda_contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_contatos
     */
    omit?: agenda_contatosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_contatosInclude<ExtArgs> | null
    /**
     * Filter, which agenda_contatos to fetch.
     */
    where?: agenda_contatosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda_contatos to fetch.
     */
    orderBy?: agenda_contatosOrderByWithRelationInput | agenda_contatosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agenda_contatos.
     */
    cursor?: agenda_contatosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda_contatos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda_contatos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agenda_contatos.
     */
    distinct?: Agenda_contatosScalarFieldEnum | Agenda_contatosScalarFieldEnum[]
  }

  /**
   * agenda_contatos findMany
   */
  export type agenda_contatosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_contatos
     */
    select?: agenda_contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_contatos
     */
    omit?: agenda_contatosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_contatosInclude<ExtArgs> | null
    /**
     * Filter, which agenda_contatos to fetch.
     */
    where?: agenda_contatosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda_contatos to fetch.
     */
    orderBy?: agenda_contatosOrderByWithRelationInput | agenda_contatosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agenda_contatos.
     */
    cursor?: agenda_contatosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda_contatos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda_contatos.
     */
    skip?: number
    distinct?: Agenda_contatosScalarFieldEnum | Agenda_contatosScalarFieldEnum[]
  }

  /**
   * agenda_contatos create
   */
  export type agenda_contatosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_contatos
     */
    select?: agenda_contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_contatos
     */
    omit?: agenda_contatosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_contatosInclude<ExtArgs> | null
    /**
     * The data needed to create a agenda_contatos.
     */
    data: XOR<agenda_contatosCreateInput, agenda_contatosUncheckedCreateInput>
  }

  /**
   * agenda_contatos createMany
   */
  export type agenda_contatosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agenda_contatos.
     */
    data: agenda_contatosCreateManyInput | agenda_contatosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agenda_contatos createManyAndReturn
   */
  export type agenda_contatosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_contatos
     */
    select?: agenda_contatosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_contatos
     */
    omit?: agenda_contatosOmit<ExtArgs> | null
    /**
     * The data used to create many agenda_contatos.
     */
    data: agenda_contatosCreateManyInput | agenda_contatosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_contatosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * agenda_contatos update
   */
  export type agenda_contatosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_contatos
     */
    select?: agenda_contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_contatos
     */
    omit?: agenda_contatosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_contatosInclude<ExtArgs> | null
    /**
     * The data needed to update a agenda_contatos.
     */
    data: XOR<agenda_contatosUpdateInput, agenda_contatosUncheckedUpdateInput>
    /**
     * Choose, which agenda_contatos to update.
     */
    where: agenda_contatosWhereUniqueInput
  }

  /**
   * agenda_contatos updateMany
   */
  export type agenda_contatosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agenda_contatos.
     */
    data: XOR<agenda_contatosUpdateManyMutationInput, agenda_contatosUncheckedUpdateManyInput>
    /**
     * Filter which agenda_contatos to update
     */
    where?: agenda_contatosWhereInput
    /**
     * Limit how many agenda_contatos to update.
     */
    limit?: number
  }

  /**
   * agenda_contatos updateManyAndReturn
   */
  export type agenda_contatosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_contatos
     */
    select?: agenda_contatosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_contatos
     */
    omit?: agenda_contatosOmit<ExtArgs> | null
    /**
     * The data used to update agenda_contatos.
     */
    data: XOR<agenda_contatosUpdateManyMutationInput, agenda_contatosUncheckedUpdateManyInput>
    /**
     * Filter which agenda_contatos to update
     */
    where?: agenda_contatosWhereInput
    /**
     * Limit how many agenda_contatos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_contatosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * agenda_contatos upsert
   */
  export type agenda_contatosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_contatos
     */
    select?: agenda_contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_contatos
     */
    omit?: agenda_contatosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_contatosInclude<ExtArgs> | null
    /**
     * The filter to search for the agenda_contatos to update in case it exists.
     */
    where: agenda_contatosWhereUniqueInput
    /**
     * In case the agenda_contatos found by the `where` argument doesn't exist, create a new agenda_contatos with this data.
     */
    create: XOR<agenda_contatosCreateInput, agenda_contatosUncheckedCreateInput>
    /**
     * In case the agenda_contatos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agenda_contatosUpdateInput, agenda_contatosUncheckedUpdateInput>
  }

  /**
   * agenda_contatos delete
   */
  export type agenda_contatosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_contatos
     */
    select?: agenda_contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_contatos
     */
    omit?: agenda_contatosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_contatosInclude<ExtArgs> | null
    /**
     * Filter which agenda_contatos to delete.
     */
    where: agenda_contatosWhereUniqueInput
  }

  /**
   * agenda_contatos deleteMany
   */
  export type agenda_contatosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agenda_contatos to delete
     */
    where?: agenda_contatosWhereInput
    /**
     * Limit how many agenda_contatos to delete.
     */
    limit?: number
  }

  /**
   * agenda_contatos without action
   */
  export type agenda_contatosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_contatos
     */
    select?: agenda_contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_contatos
     */
    omit?: agenda_contatosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_contatosInclude<ExtArgs> | null
  }


  /**
   * Model agenda_enderecos
   */

  export type AggregateAgenda_enderecos = {
    _count: Agenda_enderecosCountAggregateOutputType | null
    _avg: Agenda_enderecosAvgAggregateOutputType | null
    _sum: Agenda_enderecosSumAggregateOutputType | null
    _min: Agenda_enderecosMinAggregateOutputType | null
    _max: Agenda_enderecosMaxAggregateOutputType | null
  }

  export type Agenda_enderecosAvgAggregateOutputType = {
    id: number | null
    agenda_id: number | null
  }

  export type Agenda_enderecosSumAggregateOutputType = {
    id: bigint | null
    agenda_id: bigint | null
  }

  export type Agenda_enderecosMinAggregateOutputType = {
    id: bigint | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    uf: string | null
    agenda_id: bigint | null
  }

  export type Agenda_enderecosMaxAggregateOutputType = {
    id: bigint | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    uf: string | null
    agenda_id: bigint | null
  }

  export type Agenda_enderecosCountAggregateOutputType = {
    id: number
    logradouro: number
    numero: number
    complemento: number
    bairro: number
    cidade: number
    uf: number
    agenda_id: number
    _all: number
  }


  export type Agenda_enderecosAvgAggregateInputType = {
    id?: true
    agenda_id?: true
  }

  export type Agenda_enderecosSumAggregateInputType = {
    id?: true
    agenda_id?: true
  }

  export type Agenda_enderecosMinAggregateInputType = {
    id?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    uf?: true
    agenda_id?: true
  }

  export type Agenda_enderecosMaxAggregateInputType = {
    id?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    uf?: true
    agenda_id?: true
  }

  export type Agenda_enderecosCountAggregateInputType = {
    id?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    uf?: true
    agenda_id?: true
    _all?: true
  }

  export type Agenda_enderecosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agenda_enderecos to aggregate.
     */
    where?: agenda_enderecosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda_enderecos to fetch.
     */
    orderBy?: agenda_enderecosOrderByWithRelationInput | agenda_enderecosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agenda_enderecosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda_enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda_enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agenda_enderecos
    **/
    _count?: true | Agenda_enderecosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Agenda_enderecosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Agenda_enderecosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Agenda_enderecosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Agenda_enderecosMaxAggregateInputType
  }

  export type GetAgenda_enderecosAggregateType<T extends Agenda_enderecosAggregateArgs> = {
        [P in keyof T & keyof AggregateAgenda_enderecos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgenda_enderecos[P]>
      : GetScalarType<T[P], AggregateAgenda_enderecos[P]>
  }




  export type agenda_enderecosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agenda_enderecosWhereInput
    orderBy?: agenda_enderecosOrderByWithAggregationInput | agenda_enderecosOrderByWithAggregationInput[]
    by: Agenda_enderecosScalarFieldEnum[] | Agenda_enderecosScalarFieldEnum
    having?: agenda_enderecosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Agenda_enderecosCountAggregateInputType | true
    _avg?: Agenda_enderecosAvgAggregateInputType
    _sum?: Agenda_enderecosSumAggregateInputType
    _min?: Agenda_enderecosMinAggregateInputType
    _max?: Agenda_enderecosMaxAggregateInputType
  }

  export type Agenda_enderecosGroupByOutputType = {
    id: bigint
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    uf: string | null
    agenda_id: bigint
    _count: Agenda_enderecosCountAggregateOutputType | null
    _avg: Agenda_enderecosAvgAggregateOutputType | null
    _sum: Agenda_enderecosSumAggregateOutputType | null
    _min: Agenda_enderecosMinAggregateOutputType | null
    _max: Agenda_enderecosMaxAggregateOutputType | null
  }

  type GetAgenda_enderecosGroupByPayload<T extends agenda_enderecosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Agenda_enderecosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Agenda_enderecosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Agenda_enderecosGroupByOutputType[P]>
            : GetScalarType<T[P], Agenda_enderecosGroupByOutputType[P]>
        }
      >
    >


  export type agenda_enderecosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    uf?: boolean
    agenda_id?: boolean
    agenda?: boolean | agendaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda_enderecos"]>

  export type agenda_enderecosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    uf?: boolean
    agenda_id?: boolean
    agenda?: boolean | agendaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda_enderecos"]>

  export type agenda_enderecosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    uf?: boolean
    agenda_id?: boolean
    agenda?: boolean | agendaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda_enderecos"]>

  export type agenda_enderecosSelectScalar = {
    id?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    uf?: boolean
    agenda_id?: boolean
  }

  export type agenda_enderecosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "logradouro" | "numero" | "complemento" | "bairro" | "cidade" | "uf" | "agenda_id", ExtArgs["result"]["agenda_enderecos"]>
  export type agenda_enderecosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | agendaDefaultArgs<ExtArgs>
  }
  export type agenda_enderecosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | agendaDefaultArgs<ExtArgs>
  }
  export type agenda_enderecosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agenda?: boolean | agendaDefaultArgs<ExtArgs>
  }

  export type $agenda_enderecosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agenda_enderecos"
    objects: {
      agenda: Prisma.$agendaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      logradouro: string | null
      numero: string | null
      complemento: string | null
      bairro: string | null
      cidade: string | null
      uf: string | null
      agenda_id: bigint
    }, ExtArgs["result"]["agenda_enderecos"]>
    composites: {}
  }

  type agenda_enderecosGetPayload<S extends boolean | null | undefined | agenda_enderecosDefaultArgs> = $Result.GetResult<Prisma.$agenda_enderecosPayload, S>

  type agenda_enderecosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<agenda_enderecosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Agenda_enderecosCountAggregateInputType | true
    }

  export interface agenda_enderecosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agenda_enderecos'], meta: { name: 'agenda_enderecos' } }
    /**
     * Find zero or one Agenda_enderecos that matches the filter.
     * @param {agenda_enderecosFindUniqueArgs} args - Arguments to find a Agenda_enderecos
     * @example
     * // Get one Agenda_enderecos
     * const agenda_enderecos = await prisma.agenda_enderecos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agenda_enderecosFindUniqueArgs>(args: SelectSubset<T, agenda_enderecosFindUniqueArgs<ExtArgs>>): Prisma__agenda_enderecosClient<$Result.GetResult<Prisma.$agenda_enderecosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agenda_enderecos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agenda_enderecosFindUniqueOrThrowArgs} args - Arguments to find a Agenda_enderecos
     * @example
     * // Get one Agenda_enderecos
     * const agenda_enderecos = await prisma.agenda_enderecos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agenda_enderecosFindUniqueOrThrowArgs>(args: SelectSubset<T, agenda_enderecosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agenda_enderecosClient<$Result.GetResult<Prisma.$agenda_enderecosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda_enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agenda_enderecosFindFirstArgs} args - Arguments to find a Agenda_enderecos
     * @example
     * // Get one Agenda_enderecos
     * const agenda_enderecos = await prisma.agenda_enderecos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agenda_enderecosFindFirstArgs>(args?: SelectSubset<T, agenda_enderecosFindFirstArgs<ExtArgs>>): Prisma__agenda_enderecosClient<$Result.GetResult<Prisma.$agenda_enderecosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda_enderecos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agenda_enderecosFindFirstOrThrowArgs} args - Arguments to find a Agenda_enderecos
     * @example
     * // Get one Agenda_enderecos
     * const agenda_enderecos = await prisma.agenda_enderecos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agenda_enderecosFindFirstOrThrowArgs>(args?: SelectSubset<T, agenda_enderecosFindFirstOrThrowArgs<ExtArgs>>): Prisma__agenda_enderecosClient<$Result.GetResult<Prisma.$agenda_enderecosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agenda_enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agenda_enderecosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agenda_enderecos
     * const agenda_enderecos = await prisma.agenda_enderecos.findMany()
     * 
     * // Get first 10 Agenda_enderecos
     * const agenda_enderecos = await prisma.agenda_enderecos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agenda_enderecosWithIdOnly = await prisma.agenda_enderecos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends agenda_enderecosFindManyArgs>(args?: SelectSubset<T, agenda_enderecosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agenda_enderecosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agenda_enderecos.
     * @param {agenda_enderecosCreateArgs} args - Arguments to create a Agenda_enderecos.
     * @example
     * // Create one Agenda_enderecos
     * const Agenda_enderecos = await prisma.agenda_enderecos.create({
     *   data: {
     *     // ... data to create a Agenda_enderecos
     *   }
     * })
     * 
     */
    create<T extends agenda_enderecosCreateArgs>(args: SelectSubset<T, agenda_enderecosCreateArgs<ExtArgs>>): Prisma__agenda_enderecosClient<$Result.GetResult<Prisma.$agenda_enderecosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agenda_enderecos.
     * @param {agenda_enderecosCreateManyArgs} args - Arguments to create many Agenda_enderecos.
     * @example
     * // Create many Agenda_enderecos
     * const agenda_enderecos = await prisma.agenda_enderecos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agenda_enderecosCreateManyArgs>(args?: SelectSubset<T, agenda_enderecosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agenda_enderecos and returns the data saved in the database.
     * @param {agenda_enderecosCreateManyAndReturnArgs} args - Arguments to create many Agenda_enderecos.
     * @example
     * // Create many Agenda_enderecos
     * const agenda_enderecos = await prisma.agenda_enderecos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agenda_enderecos and only return the `id`
     * const agenda_enderecosWithIdOnly = await prisma.agenda_enderecos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends agenda_enderecosCreateManyAndReturnArgs>(args?: SelectSubset<T, agenda_enderecosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agenda_enderecosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agenda_enderecos.
     * @param {agenda_enderecosDeleteArgs} args - Arguments to delete one Agenda_enderecos.
     * @example
     * // Delete one Agenda_enderecos
     * const Agenda_enderecos = await prisma.agenda_enderecos.delete({
     *   where: {
     *     // ... filter to delete one Agenda_enderecos
     *   }
     * })
     * 
     */
    delete<T extends agenda_enderecosDeleteArgs>(args: SelectSubset<T, agenda_enderecosDeleteArgs<ExtArgs>>): Prisma__agenda_enderecosClient<$Result.GetResult<Prisma.$agenda_enderecosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agenda_enderecos.
     * @param {agenda_enderecosUpdateArgs} args - Arguments to update one Agenda_enderecos.
     * @example
     * // Update one Agenda_enderecos
     * const agenda_enderecos = await prisma.agenda_enderecos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agenda_enderecosUpdateArgs>(args: SelectSubset<T, agenda_enderecosUpdateArgs<ExtArgs>>): Prisma__agenda_enderecosClient<$Result.GetResult<Prisma.$agenda_enderecosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agenda_enderecos.
     * @param {agenda_enderecosDeleteManyArgs} args - Arguments to filter Agenda_enderecos to delete.
     * @example
     * // Delete a few Agenda_enderecos
     * const { count } = await prisma.agenda_enderecos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agenda_enderecosDeleteManyArgs>(args?: SelectSubset<T, agenda_enderecosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda_enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agenda_enderecosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agenda_enderecos
     * const agenda_enderecos = await prisma.agenda_enderecos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agenda_enderecosUpdateManyArgs>(args: SelectSubset<T, agenda_enderecosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda_enderecos and returns the data updated in the database.
     * @param {agenda_enderecosUpdateManyAndReturnArgs} args - Arguments to update many Agenda_enderecos.
     * @example
     * // Update many Agenda_enderecos
     * const agenda_enderecos = await prisma.agenda_enderecos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agenda_enderecos and only return the `id`
     * const agenda_enderecosWithIdOnly = await prisma.agenda_enderecos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends agenda_enderecosUpdateManyAndReturnArgs>(args: SelectSubset<T, agenda_enderecosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agenda_enderecosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agenda_enderecos.
     * @param {agenda_enderecosUpsertArgs} args - Arguments to update or create a Agenda_enderecos.
     * @example
     * // Update or create a Agenda_enderecos
     * const agenda_enderecos = await prisma.agenda_enderecos.upsert({
     *   create: {
     *     // ... data to create a Agenda_enderecos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agenda_enderecos we want to update
     *   }
     * })
     */
    upsert<T extends agenda_enderecosUpsertArgs>(args: SelectSubset<T, agenda_enderecosUpsertArgs<ExtArgs>>): Prisma__agenda_enderecosClient<$Result.GetResult<Prisma.$agenda_enderecosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agenda_enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agenda_enderecosCountArgs} args - Arguments to filter Agenda_enderecos to count.
     * @example
     * // Count the number of Agenda_enderecos
     * const count = await prisma.agenda_enderecos.count({
     *   where: {
     *     // ... the filter for the Agenda_enderecos we want to count
     *   }
     * })
    **/
    count<T extends agenda_enderecosCountArgs>(
      args?: Subset<T, agenda_enderecosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Agenda_enderecosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agenda_enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agenda_enderecosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Agenda_enderecosAggregateArgs>(args: Subset<T, Agenda_enderecosAggregateArgs>): Prisma.PrismaPromise<GetAgenda_enderecosAggregateType<T>>

    /**
     * Group by Agenda_enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agenda_enderecosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends agenda_enderecosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agenda_enderecosGroupByArgs['orderBy'] }
        : { orderBy?: agenda_enderecosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, agenda_enderecosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgenda_enderecosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agenda_enderecos model
   */
  readonly fields: agenda_enderecosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agenda_enderecos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agenda_enderecosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agenda<T extends agendaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, agendaDefaultArgs<ExtArgs>>): Prisma__agendaClient<$Result.GetResult<Prisma.$agendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the agenda_enderecos model
   */
  interface agenda_enderecosFieldRefs {
    readonly id: FieldRef<"agenda_enderecos", 'BigInt'>
    readonly logradouro: FieldRef<"agenda_enderecos", 'String'>
    readonly numero: FieldRef<"agenda_enderecos", 'String'>
    readonly complemento: FieldRef<"agenda_enderecos", 'String'>
    readonly bairro: FieldRef<"agenda_enderecos", 'String'>
    readonly cidade: FieldRef<"agenda_enderecos", 'String'>
    readonly uf: FieldRef<"agenda_enderecos", 'String'>
    readonly agenda_id: FieldRef<"agenda_enderecos", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * agenda_enderecos findUnique
   */
  export type agenda_enderecosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_enderecos
     */
    select?: agenda_enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_enderecos
     */
    omit?: agenda_enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_enderecosInclude<ExtArgs> | null
    /**
     * Filter, which agenda_enderecos to fetch.
     */
    where: agenda_enderecosWhereUniqueInput
  }

  /**
   * agenda_enderecos findUniqueOrThrow
   */
  export type agenda_enderecosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_enderecos
     */
    select?: agenda_enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_enderecos
     */
    omit?: agenda_enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_enderecosInclude<ExtArgs> | null
    /**
     * Filter, which agenda_enderecos to fetch.
     */
    where: agenda_enderecosWhereUniqueInput
  }

  /**
   * agenda_enderecos findFirst
   */
  export type agenda_enderecosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_enderecos
     */
    select?: agenda_enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_enderecos
     */
    omit?: agenda_enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_enderecosInclude<ExtArgs> | null
    /**
     * Filter, which agenda_enderecos to fetch.
     */
    where?: agenda_enderecosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda_enderecos to fetch.
     */
    orderBy?: agenda_enderecosOrderByWithRelationInput | agenda_enderecosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agenda_enderecos.
     */
    cursor?: agenda_enderecosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda_enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda_enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agenda_enderecos.
     */
    distinct?: Agenda_enderecosScalarFieldEnum | Agenda_enderecosScalarFieldEnum[]
  }

  /**
   * agenda_enderecos findFirstOrThrow
   */
  export type agenda_enderecosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_enderecos
     */
    select?: agenda_enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_enderecos
     */
    omit?: agenda_enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_enderecosInclude<ExtArgs> | null
    /**
     * Filter, which agenda_enderecos to fetch.
     */
    where?: agenda_enderecosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda_enderecos to fetch.
     */
    orderBy?: agenda_enderecosOrderByWithRelationInput | agenda_enderecosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agenda_enderecos.
     */
    cursor?: agenda_enderecosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda_enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda_enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agenda_enderecos.
     */
    distinct?: Agenda_enderecosScalarFieldEnum | Agenda_enderecosScalarFieldEnum[]
  }

  /**
   * agenda_enderecos findMany
   */
  export type agenda_enderecosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_enderecos
     */
    select?: agenda_enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_enderecos
     */
    omit?: agenda_enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_enderecosInclude<ExtArgs> | null
    /**
     * Filter, which agenda_enderecos to fetch.
     */
    where?: agenda_enderecosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agenda_enderecos to fetch.
     */
    orderBy?: agenda_enderecosOrderByWithRelationInput | agenda_enderecosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agenda_enderecos.
     */
    cursor?: agenda_enderecosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agenda_enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agenda_enderecos.
     */
    skip?: number
    distinct?: Agenda_enderecosScalarFieldEnum | Agenda_enderecosScalarFieldEnum[]
  }

  /**
   * agenda_enderecos create
   */
  export type agenda_enderecosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_enderecos
     */
    select?: agenda_enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_enderecos
     */
    omit?: agenda_enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_enderecosInclude<ExtArgs> | null
    /**
     * The data needed to create a agenda_enderecos.
     */
    data: XOR<agenda_enderecosCreateInput, agenda_enderecosUncheckedCreateInput>
  }

  /**
   * agenda_enderecos createMany
   */
  export type agenda_enderecosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agenda_enderecos.
     */
    data: agenda_enderecosCreateManyInput | agenda_enderecosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agenda_enderecos createManyAndReturn
   */
  export type agenda_enderecosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_enderecos
     */
    select?: agenda_enderecosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_enderecos
     */
    omit?: agenda_enderecosOmit<ExtArgs> | null
    /**
     * The data used to create many agenda_enderecos.
     */
    data: agenda_enderecosCreateManyInput | agenda_enderecosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_enderecosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * agenda_enderecos update
   */
  export type agenda_enderecosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_enderecos
     */
    select?: agenda_enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_enderecos
     */
    omit?: agenda_enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_enderecosInclude<ExtArgs> | null
    /**
     * The data needed to update a agenda_enderecos.
     */
    data: XOR<agenda_enderecosUpdateInput, agenda_enderecosUncheckedUpdateInput>
    /**
     * Choose, which agenda_enderecos to update.
     */
    where: agenda_enderecosWhereUniqueInput
  }

  /**
   * agenda_enderecos updateMany
   */
  export type agenda_enderecosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agenda_enderecos.
     */
    data: XOR<agenda_enderecosUpdateManyMutationInput, agenda_enderecosUncheckedUpdateManyInput>
    /**
     * Filter which agenda_enderecos to update
     */
    where?: agenda_enderecosWhereInput
    /**
     * Limit how many agenda_enderecos to update.
     */
    limit?: number
  }

  /**
   * agenda_enderecos updateManyAndReturn
   */
  export type agenda_enderecosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_enderecos
     */
    select?: agenda_enderecosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_enderecos
     */
    omit?: agenda_enderecosOmit<ExtArgs> | null
    /**
     * The data used to update agenda_enderecos.
     */
    data: XOR<agenda_enderecosUpdateManyMutationInput, agenda_enderecosUncheckedUpdateManyInput>
    /**
     * Filter which agenda_enderecos to update
     */
    where?: agenda_enderecosWhereInput
    /**
     * Limit how many agenda_enderecos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_enderecosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * agenda_enderecos upsert
   */
  export type agenda_enderecosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_enderecos
     */
    select?: agenda_enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_enderecos
     */
    omit?: agenda_enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_enderecosInclude<ExtArgs> | null
    /**
     * The filter to search for the agenda_enderecos to update in case it exists.
     */
    where: agenda_enderecosWhereUniqueInput
    /**
     * In case the agenda_enderecos found by the `where` argument doesn't exist, create a new agenda_enderecos with this data.
     */
    create: XOR<agenda_enderecosCreateInput, agenda_enderecosUncheckedCreateInput>
    /**
     * In case the agenda_enderecos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agenda_enderecosUpdateInput, agenda_enderecosUncheckedUpdateInput>
  }

  /**
   * agenda_enderecos delete
   */
  export type agenda_enderecosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_enderecos
     */
    select?: agenda_enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_enderecos
     */
    omit?: agenda_enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_enderecosInclude<ExtArgs> | null
    /**
     * Filter which agenda_enderecos to delete.
     */
    where: agenda_enderecosWhereUniqueInput
  }

  /**
   * agenda_enderecos deleteMany
   */
  export type agenda_enderecosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agenda_enderecos to delete
     */
    where?: agenda_enderecosWhereInput
    /**
     * Limit how many agenda_enderecos to delete.
     */
    limit?: number
  }

  /**
   * agenda_enderecos without action
   */
  export type agenda_enderecosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agenda_enderecos
     */
    select?: agenda_enderecosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agenda_enderecos
     */
    omit?: agenda_enderecosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agenda_enderecosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AgendaScalarFieldEnum: {
    id: 'id',
    documento: 'documento',
    nome: 'nome'
  };

  export type AgendaScalarFieldEnum = (typeof AgendaScalarFieldEnum)[keyof typeof AgendaScalarFieldEnum]


  export const Agenda_contatosScalarFieldEnum: {
    id: 'id',
    celular: 'celular',
    email: 'email',
    telefone: 'telefone',
    agenda_id: 'agenda_id'
  };

  export type Agenda_contatosScalarFieldEnum = (typeof Agenda_contatosScalarFieldEnum)[keyof typeof Agenda_contatosScalarFieldEnum]


  export const Agenda_enderecosScalarFieldEnum: {
    id: 'id',
    logradouro: 'logradouro',
    numero: 'numero',
    complemento: 'complemento',
    bairro: 'bairro',
    cidade: 'cidade',
    uf: 'uf',
    agenda_id: 'agenda_id'
  };

  export type Agenda_enderecosScalarFieldEnum = (typeof Agenda_enderecosScalarFieldEnum)[keyof typeof Agenda_enderecosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type agendaWhereInput = {
    AND?: agendaWhereInput | agendaWhereInput[]
    OR?: agendaWhereInput[]
    NOT?: agendaWhereInput | agendaWhereInput[]
    id?: BigIntFilter<"agenda"> | bigint | number
    documento?: StringNullableFilter<"agenda"> | string | null
    nome?: StringNullableFilter<"agenda"> | string | null
    agenda_contatos?: Agenda_contatosListRelationFilter
    agenda_enderecos?: Agenda_enderecosListRelationFilter
  }

  export type agendaOrderByWithRelationInput = {
    id?: SortOrder
    documento?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    agenda_contatos?: agenda_contatosOrderByRelationAggregateInput
    agenda_enderecos?: agenda_enderecosOrderByRelationAggregateInput
  }

  export type agendaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: agendaWhereInput | agendaWhereInput[]
    OR?: agendaWhereInput[]
    NOT?: agendaWhereInput | agendaWhereInput[]
    documento?: StringNullableFilter<"agenda"> | string | null
    nome?: StringNullableFilter<"agenda"> | string | null
    agenda_contatos?: Agenda_contatosListRelationFilter
    agenda_enderecos?: Agenda_enderecosListRelationFilter
  }, "id">

  export type agendaOrderByWithAggregationInput = {
    id?: SortOrder
    documento?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    _count?: agendaCountOrderByAggregateInput
    _avg?: agendaAvgOrderByAggregateInput
    _max?: agendaMaxOrderByAggregateInput
    _min?: agendaMinOrderByAggregateInput
    _sum?: agendaSumOrderByAggregateInput
  }

  export type agendaScalarWhereWithAggregatesInput = {
    AND?: agendaScalarWhereWithAggregatesInput | agendaScalarWhereWithAggregatesInput[]
    OR?: agendaScalarWhereWithAggregatesInput[]
    NOT?: agendaScalarWhereWithAggregatesInput | agendaScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"agenda"> | bigint | number
    documento?: StringNullableWithAggregatesFilter<"agenda"> | string | null
    nome?: StringNullableWithAggregatesFilter<"agenda"> | string | null
  }

  export type agenda_contatosWhereInput = {
    AND?: agenda_contatosWhereInput | agenda_contatosWhereInput[]
    OR?: agenda_contatosWhereInput[]
    NOT?: agenda_contatosWhereInput | agenda_contatosWhereInput[]
    id?: BigIntFilter<"agenda_contatos"> | bigint | number
    celular?: StringNullableFilter<"agenda_contatos"> | string | null
    email?: StringNullableFilter<"agenda_contatos"> | string | null
    telefone?: StringNullableFilter<"agenda_contatos"> | string | null
    agenda_id?: BigIntFilter<"agenda_contatos"> | bigint | number
    agenda?: XOR<AgendaScalarRelationFilter, agendaWhereInput>
  }

  export type agenda_contatosOrderByWithRelationInput = {
    id?: SortOrder
    celular?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    agenda_id?: SortOrder
    agenda?: agendaOrderByWithRelationInput
  }

  export type agenda_contatosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: agenda_contatosWhereInput | agenda_contatosWhereInput[]
    OR?: agenda_contatosWhereInput[]
    NOT?: agenda_contatosWhereInput | agenda_contatosWhereInput[]
    celular?: StringNullableFilter<"agenda_contatos"> | string | null
    email?: StringNullableFilter<"agenda_contatos"> | string | null
    telefone?: StringNullableFilter<"agenda_contatos"> | string | null
    agenda_id?: BigIntFilter<"agenda_contatos"> | bigint | number
    agenda?: XOR<AgendaScalarRelationFilter, agendaWhereInput>
  }, "id">

  export type agenda_contatosOrderByWithAggregationInput = {
    id?: SortOrder
    celular?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    agenda_id?: SortOrder
    _count?: agenda_contatosCountOrderByAggregateInput
    _avg?: agenda_contatosAvgOrderByAggregateInput
    _max?: agenda_contatosMaxOrderByAggregateInput
    _min?: agenda_contatosMinOrderByAggregateInput
    _sum?: agenda_contatosSumOrderByAggregateInput
  }

  export type agenda_contatosScalarWhereWithAggregatesInput = {
    AND?: agenda_contatosScalarWhereWithAggregatesInput | agenda_contatosScalarWhereWithAggregatesInput[]
    OR?: agenda_contatosScalarWhereWithAggregatesInput[]
    NOT?: agenda_contatosScalarWhereWithAggregatesInput | agenda_contatosScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"agenda_contatos"> | bigint | number
    celular?: StringNullableWithAggregatesFilter<"agenda_contatos"> | string | null
    email?: StringNullableWithAggregatesFilter<"agenda_contatos"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"agenda_contatos"> | string | null
    agenda_id?: BigIntWithAggregatesFilter<"agenda_contatos"> | bigint | number
  }

  export type agenda_enderecosWhereInput = {
    AND?: agenda_enderecosWhereInput | agenda_enderecosWhereInput[]
    OR?: agenda_enderecosWhereInput[]
    NOT?: agenda_enderecosWhereInput | agenda_enderecosWhereInput[]
    id?: BigIntFilter<"agenda_enderecos"> | bigint | number
    logradouro?: StringNullableFilter<"agenda_enderecos"> | string | null
    numero?: StringNullableFilter<"agenda_enderecos"> | string | null
    complemento?: StringNullableFilter<"agenda_enderecos"> | string | null
    bairro?: StringNullableFilter<"agenda_enderecos"> | string | null
    cidade?: StringNullableFilter<"agenda_enderecos"> | string | null
    uf?: StringNullableFilter<"agenda_enderecos"> | string | null
    agenda_id?: BigIntFilter<"agenda_enderecos"> | bigint | number
    agenda?: XOR<AgendaScalarRelationFilter, agendaWhereInput>
  }

  export type agenda_enderecosOrderByWithRelationInput = {
    id?: SortOrder
    logradouro?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    uf?: SortOrderInput | SortOrder
    agenda_id?: SortOrder
    agenda?: agendaOrderByWithRelationInput
  }

  export type agenda_enderecosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: agenda_enderecosWhereInput | agenda_enderecosWhereInput[]
    OR?: agenda_enderecosWhereInput[]
    NOT?: agenda_enderecosWhereInput | agenda_enderecosWhereInput[]
    logradouro?: StringNullableFilter<"agenda_enderecos"> | string | null
    numero?: StringNullableFilter<"agenda_enderecos"> | string | null
    complemento?: StringNullableFilter<"agenda_enderecos"> | string | null
    bairro?: StringNullableFilter<"agenda_enderecos"> | string | null
    cidade?: StringNullableFilter<"agenda_enderecos"> | string | null
    uf?: StringNullableFilter<"agenda_enderecos"> | string | null
    agenda_id?: BigIntFilter<"agenda_enderecos"> | bigint | number
    agenda?: XOR<AgendaScalarRelationFilter, agendaWhereInput>
  }, "id">

  export type agenda_enderecosOrderByWithAggregationInput = {
    id?: SortOrder
    logradouro?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    uf?: SortOrderInput | SortOrder
    agenda_id?: SortOrder
    _count?: agenda_enderecosCountOrderByAggregateInput
    _avg?: agenda_enderecosAvgOrderByAggregateInput
    _max?: agenda_enderecosMaxOrderByAggregateInput
    _min?: agenda_enderecosMinOrderByAggregateInput
    _sum?: agenda_enderecosSumOrderByAggregateInput
  }

  export type agenda_enderecosScalarWhereWithAggregatesInput = {
    AND?: agenda_enderecosScalarWhereWithAggregatesInput | agenda_enderecosScalarWhereWithAggregatesInput[]
    OR?: agenda_enderecosScalarWhereWithAggregatesInput[]
    NOT?: agenda_enderecosScalarWhereWithAggregatesInput | agenda_enderecosScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"agenda_enderecos"> | bigint | number
    logradouro?: StringNullableWithAggregatesFilter<"agenda_enderecos"> | string | null
    numero?: StringNullableWithAggregatesFilter<"agenda_enderecos"> | string | null
    complemento?: StringNullableWithAggregatesFilter<"agenda_enderecos"> | string | null
    bairro?: StringNullableWithAggregatesFilter<"agenda_enderecos"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"agenda_enderecos"> | string | null
    uf?: StringNullableWithAggregatesFilter<"agenda_enderecos"> | string | null
    agenda_id?: BigIntWithAggregatesFilter<"agenda_enderecos"> | bigint | number
  }

  export type agendaCreateInput = {
    id?: bigint | number
    documento?: string | null
    nome?: string | null
    agenda_contatos?: agenda_contatosCreateNestedManyWithoutAgendaInput
    agenda_enderecos?: agenda_enderecosCreateNestedManyWithoutAgendaInput
  }

  export type agendaUncheckedCreateInput = {
    id?: bigint | number
    documento?: string | null
    nome?: string | null
    agenda_contatos?: agenda_contatosUncheckedCreateNestedManyWithoutAgendaInput
    agenda_enderecos?: agenda_enderecosUncheckedCreateNestedManyWithoutAgendaInput
  }

  export type agendaUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    agenda_contatos?: agenda_contatosUpdateManyWithoutAgendaNestedInput
    agenda_enderecos?: agenda_enderecosUpdateManyWithoutAgendaNestedInput
  }

  export type agendaUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    agenda_contatos?: agenda_contatosUncheckedUpdateManyWithoutAgendaNestedInput
    agenda_enderecos?: agenda_enderecosUncheckedUpdateManyWithoutAgendaNestedInput
  }

  export type agendaCreateManyInput = {
    id?: bigint | number
    documento?: string | null
    nome?: string | null
  }

  export type agendaUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agendaUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agenda_contatosCreateInput = {
    id?: bigint | number
    celular?: string | null
    email?: string | null
    telefone?: string | null
    agenda: agendaCreateNestedOneWithoutAgenda_contatosInput
  }

  export type agenda_contatosUncheckedCreateInput = {
    id?: bigint | number
    celular?: string | null
    email?: string | null
    telefone?: string | null
    agenda_id: bigint | number
  }

  export type agenda_contatosUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    agenda?: agendaUpdateOneRequiredWithoutAgenda_contatosNestedInput
  }

  export type agenda_contatosUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    agenda_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type agenda_contatosCreateManyInput = {
    id?: bigint | number
    celular?: string | null
    email?: string | null
    telefone?: string | null
    agenda_id: bigint | number
  }

  export type agenda_contatosUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agenda_contatosUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    agenda_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type agenda_enderecosCreateInput = {
    id?: bigint | number
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    agenda: agendaCreateNestedOneWithoutAgenda_enderecosInput
  }

  export type agenda_enderecosUncheckedCreateInput = {
    id?: bigint | number
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    agenda_id: bigint | number
  }

  export type agenda_enderecosUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    agenda?: agendaUpdateOneRequiredWithoutAgenda_enderecosNestedInput
  }

  export type agenda_enderecosUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    agenda_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type agenda_enderecosCreateManyInput = {
    id?: bigint | number
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    agenda_id: bigint | number
  }

  export type agenda_enderecosUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agenda_enderecosUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    agenda_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Agenda_contatosListRelationFilter = {
    every?: agenda_contatosWhereInput
    some?: agenda_contatosWhereInput
    none?: agenda_contatosWhereInput
  }

  export type Agenda_enderecosListRelationFilter = {
    every?: agenda_enderecosWhereInput
    some?: agenda_enderecosWhereInput
    none?: agenda_enderecosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type agenda_contatosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type agenda_enderecosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type agendaCountOrderByAggregateInput = {
    id?: SortOrder
    documento?: SortOrder
    nome?: SortOrder
  }

  export type agendaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type agendaMaxOrderByAggregateInput = {
    id?: SortOrder
    documento?: SortOrder
    nome?: SortOrder
  }

  export type agendaMinOrderByAggregateInput = {
    id?: SortOrder
    documento?: SortOrder
    nome?: SortOrder
  }

  export type agendaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AgendaScalarRelationFilter = {
    is?: agendaWhereInput
    isNot?: agendaWhereInput
  }

  export type agenda_contatosCountOrderByAggregateInput = {
    id?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    agenda_id?: SortOrder
  }

  export type agenda_contatosAvgOrderByAggregateInput = {
    id?: SortOrder
    agenda_id?: SortOrder
  }

  export type agenda_contatosMaxOrderByAggregateInput = {
    id?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    agenda_id?: SortOrder
  }

  export type agenda_contatosMinOrderByAggregateInput = {
    id?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    agenda_id?: SortOrder
  }

  export type agenda_contatosSumOrderByAggregateInput = {
    id?: SortOrder
    agenda_id?: SortOrder
  }

  export type agenda_enderecosCountOrderByAggregateInput = {
    id?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    agenda_id?: SortOrder
  }

  export type agenda_enderecosAvgOrderByAggregateInput = {
    id?: SortOrder
    agenda_id?: SortOrder
  }

  export type agenda_enderecosMaxOrderByAggregateInput = {
    id?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    agenda_id?: SortOrder
  }

  export type agenda_enderecosMinOrderByAggregateInput = {
    id?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    agenda_id?: SortOrder
  }

  export type agenda_enderecosSumOrderByAggregateInput = {
    id?: SortOrder
    agenda_id?: SortOrder
  }

  export type agenda_contatosCreateNestedManyWithoutAgendaInput = {
    create?: XOR<agenda_contatosCreateWithoutAgendaInput, agenda_contatosUncheckedCreateWithoutAgendaInput> | agenda_contatosCreateWithoutAgendaInput[] | agenda_contatosUncheckedCreateWithoutAgendaInput[]
    connectOrCreate?: agenda_contatosCreateOrConnectWithoutAgendaInput | agenda_contatosCreateOrConnectWithoutAgendaInput[]
    createMany?: agenda_contatosCreateManyAgendaInputEnvelope
    connect?: agenda_contatosWhereUniqueInput | agenda_contatosWhereUniqueInput[]
  }

  export type agenda_enderecosCreateNestedManyWithoutAgendaInput = {
    create?: XOR<agenda_enderecosCreateWithoutAgendaInput, agenda_enderecosUncheckedCreateWithoutAgendaInput> | agenda_enderecosCreateWithoutAgendaInput[] | agenda_enderecosUncheckedCreateWithoutAgendaInput[]
    connectOrCreate?: agenda_enderecosCreateOrConnectWithoutAgendaInput | agenda_enderecosCreateOrConnectWithoutAgendaInput[]
    createMany?: agenda_enderecosCreateManyAgendaInputEnvelope
    connect?: agenda_enderecosWhereUniqueInput | agenda_enderecosWhereUniqueInput[]
  }

  export type agenda_contatosUncheckedCreateNestedManyWithoutAgendaInput = {
    create?: XOR<agenda_contatosCreateWithoutAgendaInput, agenda_contatosUncheckedCreateWithoutAgendaInput> | agenda_contatosCreateWithoutAgendaInput[] | agenda_contatosUncheckedCreateWithoutAgendaInput[]
    connectOrCreate?: agenda_contatosCreateOrConnectWithoutAgendaInput | agenda_contatosCreateOrConnectWithoutAgendaInput[]
    createMany?: agenda_contatosCreateManyAgendaInputEnvelope
    connect?: agenda_contatosWhereUniqueInput | agenda_contatosWhereUniqueInput[]
  }

  export type agenda_enderecosUncheckedCreateNestedManyWithoutAgendaInput = {
    create?: XOR<agenda_enderecosCreateWithoutAgendaInput, agenda_enderecosUncheckedCreateWithoutAgendaInput> | agenda_enderecosCreateWithoutAgendaInput[] | agenda_enderecosUncheckedCreateWithoutAgendaInput[]
    connectOrCreate?: agenda_enderecosCreateOrConnectWithoutAgendaInput | agenda_enderecosCreateOrConnectWithoutAgendaInput[]
    createMany?: agenda_enderecosCreateManyAgendaInputEnvelope
    connect?: agenda_enderecosWhereUniqueInput | agenda_enderecosWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type agenda_contatosUpdateManyWithoutAgendaNestedInput = {
    create?: XOR<agenda_contatosCreateWithoutAgendaInput, agenda_contatosUncheckedCreateWithoutAgendaInput> | agenda_contatosCreateWithoutAgendaInput[] | agenda_contatosUncheckedCreateWithoutAgendaInput[]
    connectOrCreate?: agenda_contatosCreateOrConnectWithoutAgendaInput | agenda_contatosCreateOrConnectWithoutAgendaInput[]
    upsert?: agenda_contatosUpsertWithWhereUniqueWithoutAgendaInput | agenda_contatosUpsertWithWhereUniqueWithoutAgendaInput[]
    createMany?: agenda_contatosCreateManyAgendaInputEnvelope
    set?: agenda_contatosWhereUniqueInput | agenda_contatosWhereUniqueInput[]
    disconnect?: agenda_contatosWhereUniqueInput | agenda_contatosWhereUniqueInput[]
    delete?: agenda_contatosWhereUniqueInput | agenda_contatosWhereUniqueInput[]
    connect?: agenda_contatosWhereUniqueInput | agenda_contatosWhereUniqueInput[]
    update?: agenda_contatosUpdateWithWhereUniqueWithoutAgendaInput | agenda_contatosUpdateWithWhereUniqueWithoutAgendaInput[]
    updateMany?: agenda_contatosUpdateManyWithWhereWithoutAgendaInput | agenda_contatosUpdateManyWithWhereWithoutAgendaInput[]
    deleteMany?: agenda_contatosScalarWhereInput | agenda_contatosScalarWhereInput[]
  }

  export type agenda_enderecosUpdateManyWithoutAgendaNestedInput = {
    create?: XOR<agenda_enderecosCreateWithoutAgendaInput, agenda_enderecosUncheckedCreateWithoutAgendaInput> | agenda_enderecosCreateWithoutAgendaInput[] | agenda_enderecosUncheckedCreateWithoutAgendaInput[]
    connectOrCreate?: agenda_enderecosCreateOrConnectWithoutAgendaInput | agenda_enderecosCreateOrConnectWithoutAgendaInput[]
    upsert?: agenda_enderecosUpsertWithWhereUniqueWithoutAgendaInput | agenda_enderecosUpsertWithWhereUniqueWithoutAgendaInput[]
    createMany?: agenda_enderecosCreateManyAgendaInputEnvelope
    set?: agenda_enderecosWhereUniqueInput | agenda_enderecosWhereUniqueInput[]
    disconnect?: agenda_enderecosWhereUniqueInput | agenda_enderecosWhereUniqueInput[]
    delete?: agenda_enderecosWhereUniqueInput | agenda_enderecosWhereUniqueInput[]
    connect?: agenda_enderecosWhereUniqueInput | agenda_enderecosWhereUniqueInput[]
    update?: agenda_enderecosUpdateWithWhereUniqueWithoutAgendaInput | agenda_enderecosUpdateWithWhereUniqueWithoutAgendaInput[]
    updateMany?: agenda_enderecosUpdateManyWithWhereWithoutAgendaInput | agenda_enderecosUpdateManyWithWhereWithoutAgendaInput[]
    deleteMany?: agenda_enderecosScalarWhereInput | agenda_enderecosScalarWhereInput[]
  }

  export type agenda_contatosUncheckedUpdateManyWithoutAgendaNestedInput = {
    create?: XOR<agenda_contatosCreateWithoutAgendaInput, agenda_contatosUncheckedCreateWithoutAgendaInput> | agenda_contatosCreateWithoutAgendaInput[] | agenda_contatosUncheckedCreateWithoutAgendaInput[]
    connectOrCreate?: agenda_contatosCreateOrConnectWithoutAgendaInput | agenda_contatosCreateOrConnectWithoutAgendaInput[]
    upsert?: agenda_contatosUpsertWithWhereUniqueWithoutAgendaInput | agenda_contatosUpsertWithWhereUniqueWithoutAgendaInput[]
    createMany?: agenda_contatosCreateManyAgendaInputEnvelope
    set?: agenda_contatosWhereUniqueInput | agenda_contatosWhereUniqueInput[]
    disconnect?: agenda_contatosWhereUniqueInput | agenda_contatosWhereUniqueInput[]
    delete?: agenda_contatosWhereUniqueInput | agenda_contatosWhereUniqueInput[]
    connect?: agenda_contatosWhereUniqueInput | agenda_contatosWhereUniqueInput[]
    update?: agenda_contatosUpdateWithWhereUniqueWithoutAgendaInput | agenda_contatosUpdateWithWhereUniqueWithoutAgendaInput[]
    updateMany?: agenda_contatosUpdateManyWithWhereWithoutAgendaInput | agenda_contatosUpdateManyWithWhereWithoutAgendaInput[]
    deleteMany?: agenda_contatosScalarWhereInput | agenda_contatosScalarWhereInput[]
  }

  export type agenda_enderecosUncheckedUpdateManyWithoutAgendaNestedInput = {
    create?: XOR<agenda_enderecosCreateWithoutAgendaInput, agenda_enderecosUncheckedCreateWithoutAgendaInput> | agenda_enderecosCreateWithoutAgendaInput[] | agenda_enderecosUncheckedCreateWithoutAgendaInput[]
    connectOrCreate?: agenda_enderecosCreateOrConnectWithoutAgendaInput | agenda_enderecosCreateOrConnectWithoutAgendaInput[]
    upsert?: agenda_enderecosUpsertWithWhereUniqueWithoutAgendaInput | agenda_enderecosUpsertWithWhereUniqueWithoutAgendaInput[]
    createMany?: agenda_enderecosCreateManyAgendaInputEnvelope
    set?: agenda_enderecosWhereUniqueInput | agenda_enderecosWhereUniqueInput[]
    disconnect?: agenda_enderecosWhereUniqueInput | agenda_enderecosWhereUniqueInput[]
    delete?: agenda_enderecosWhereUniqueInput | agenda_enderecosWhereUniqueInput[]
    connect?: agenda_enderecosWhereUniqueInput | agenda_enderecosWhereUniqueInput[]
    update?: agenda_enderecosUpdateWithWhereUniqueWithoutAgendaInput | agenda_enderecosUpdateWithWhereUniqueWithoutAgendaInput[]
    updateMany?: agenda_enderecosUpdateManyWithWhereWithoutAgendaInput | agenda_enderecosUpdateManyWithWhereWithoutAgendaInput[]
    deleteMany?: agenda_enderecosScalarWhereInput | agenda_enderecosScalarWhereInput[]
  }

  export type agendaCreateNestedOneWithoutAgenda_contatosInput = {
    create?: XOR<agendaCreateWithoutAgenda_contatosInput, agendaUncheckedCreateWithoutAgenda_contatosInput>
    connectOrCreate?: agendaCreateOrConnectWithoutAgenda_contatosInput
    connect?: agendaWhereUniqueInput
  }

  export type agendaUpdateOneRequiredWithoutAgenda_contatosNestedInput = {
    create?: XOR<agendaCreateWithoutAgenda_contatosInput, agendaUncheckedCreateWithoutAgenda_contatosInput>
    connectOrCreate?: agendaCreateOrConnectWithoutAgenda_contatosInput
    upsert?: agendaUpsertWithoutAgenda_contatosInput
    connect?: agendaWhereUniqueInput
    update?: XOR<XOR<agendaUpdateToOneWithWhereWithoutAgenda_contatosInput, agendaUpdateWithoutAgenda_contatosInput>, agendaUncheckedUpdateWithoutAgenda_contatosInput>
  }

  export type agendaCreateNestedOneWithoutAgenda_enderecosInput = {
    create?: XOR<agendaCreateWithoutAgenda_enderecosInput, agendaUncheckedCreateWithoutAgenda_enderecosInput>
    connectOrCreate?: agendaCreateOrConnectWithoutAgenda_enderecosInput
    connect?: agendaWhereUniqueInput
  }

  export type agendaUpdateOneRequiredWithoutAgenda_enderecosNestedInput = {
    create?: XOR<agendaCreateWithoutAgenda_enderecosInput, agendaUncheckedCreateWithoutAgenda_enderecosInput>
    connectOrCreate?: agendaCreateOrConnectWithoutAgenda_enderecosInput
    upsert?: agendaUpsertWithoutAgenda_enderecosInput
    connect?: agendaWhereUniqueInput
    update?: XOR<XOR<agendaUpdateToOneWithWhereWithoutAgenda_enderecosInput, agendaUpdateWithoutAgenda_enderecosInput>, agendaUncheckedUpdateWithoutAgenda_enderecosInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type agenda_contatosCreateWithoutAgendaInput = {
    id?: bigint | number
    celular?: string | null
    email?: string | null
    telefone?: string | null
  }

  export type agenda_contatosUncheckedCreateWithoutAgendaInput = {
    id?: bigint | number
    celular?: string | null
    email?: string | null
    telefone?: string | null
  }

  export type agenda_contatosCreateOrConnectWithoutAgendaInput = {
    where: agenda_contatosWhereUniqueInput
    create: XOR<agenda_contatosCreateWithoutAgendaInput, agenda_contatosUncheckedCreateWithoutAgendaInput>
  }

  export type agenda_contatosCreateManyAgendaInputEnvelope = {
    data: agenda_contatosCreateManyAgendaInput | agenda_contatosCreateManyAgendaInput[]
    skipDuplicates?: boolean
  }

  export type agenda_enderecosCreateWithoutAgendaInput = {
    id?: bigint | number
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
  }

  export type agenda_enderecosUncheckedCreateWithoutAgendaInput = {
    id?: bigint | number
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
  }

  export type agenda_enderecosCreateOrConnectWithoutAgendaInput = {
    where: agenda_enderecosWhereUniqueInput
    create: XOR<agenda_enderecosCreateWithoutAgendaInput, agenda_enderecosUncheckedCreateWithoutAgendaInput>
  }

  export type agenda_enderecosCreateManyAgendaInputEnvelope = {
    data: agenda_enderecosCreateManyAgendaInput | agenda_enderecosCreateManyAgendaInput[]
    skipDuplicates?: boolean
  }

  export type agenda_contatosUpsertWithWhereUniqueWithoutAgendaInput = {
    where: agenda_contatosWhereUniqueInput
    update: XOR<agenda_contatosUpdateWithoutAgendaInput, agenda_contatosUncheckedUpdateWithoutAgendaInput>
    create: XOR<agenda_contatosCreateWithoutAgendaInput, agenda_contatosUncheckedCreateWithoutAgendaInput>
  }

  export type agenda_contatosUpdateWithWhereUniqueWithoutAgendaInput = {
    where: agenda_contatosWhereUniqueInput
    data: XOR<agenda_contatosUpdateWithoutAgendaInput, agenda_contatosUncheckedUpdateWithoutAgendaInput>
  }

  export type agenda_contatosUpdateManyWithWhereWithoutAgendaInput = {
    where: agenda_contatosScalarWhereInput
    data: XOR<agenda_contatosUpdateManyMutationInput, agenda_contatosUncheckedUpdateManyWithoutAgendaInput>
  }

  export type agenda_contatosScalarWhereInput = {
    AND?: agenda_contatosScalarWhereInput | agenda_contatosScalarWhereInput[]
    OR?: agenda_contatosScalarWhereInput[]
    NOT?: agenda_contatosScalarWhereInput | agenda_contatosScalarWhereInput[]
    id?: BigIntFilter<"agenda_contatos"> | bigint | number
    celular?: StringNullableFilter<"agenda_contatos"> | string | null
    email?: StringNullableFilter<"agenda_contatos"> | string | null
    telefone?: StringNullableFilter<"agenda_contatos"> | string | null
    agenda_id?: BigIntFilter<"agenda_contatos"> | bigint | number
  }

  export type agenda_enderecosUpsertWithWhereUniqueWithoutAgendaInput = {
    where: agenda_enderecosWhereUniqueInput
    update: XOR<agenda_enderecosUpdateWithoutAgendaInput, agenda_enderecosUncheckedUpdateWithoutAgendaInput>
    create: XOR<agenda_enderecosCreateWithoutAgendaInput, agenda_enderecosUncheckedCreateWithoutAgendaInput>
  }

  export type agenda_enderecosUpdateWithWhereUniqueWithoutAgendaInput = {
    where: agenda_enderecosWhereUniqueInput
    data: XOR<agenda_enderecosUpdateWithoutAgendaInput, agenda_enderecosUncheckedUpdateWithoutAgendaInput>
  }

  export type agenda_enderecosUpdateManyWithWhereWithoutAgendaInput = {
    where: agenda_enderecosScalarWhereInput
    data: XOR<agenda_enderecosUpdateManyMutationInput, agenda_enderecosUncheckedUpdateManyWithoutAgendaInput>
  }

  export type agenda_enderecosScalarWhereInput = {
    AND?: agenda_enderecosScalarWhereInput | agenda_enderecosScalarWhereInput[]
    OR?: agenda_enderecosScalarWhereInput[]
    NOT?: agenda_enderecosScalarWhereInput | agenda_enderecosScalarWhereInput[]
    id?: BigIntFilter<"agenda_enderecos"> | bigint | number
    logradouro?: StringNullableFilter<"agenda_enderecos"> | string | null
    numero?: StringNullableFilter<"agenda_enderecos"> | string | null
    complemento?: StringNullableFilter<"agenda_enderecos"> | string | null
    bairro?: StringNullableFilter<"agenda_enderecos"> | string | null
    cidade?: StringNullableFilter<"agenda_enderecos"> | string | null
    uf?: StringNullableFilter<"agenda_enderecos"> | string | null
    agenda_id?: BigIntFilter<"agenda_enderecos"> | bigint | number
  }

  export type agendaCreateWithoutAgenda_contatosInput = {
    id?: bigint | number
    documento?: string | null
    nome?: string | null
    agenda_enderecos?: agenda_enderecosCreateNestedManyWithoutAgendaInput
  }

  export type agendaUncheckedCreateWithoutAgenda_contatosInput = {
    id?: bigint | number
    documento?: string | null
    nome?: string | null
    agenda_enderecos?: agenda_enderecosUncheckedCreateNestedManyWithoutAgendaInput
  }

  export type agendaCreateOrConnectWithoutAgenda_contatosInput = {
    where: agendaWhereUniqueInput
    create: XOR<agendaCreateWithoutAgenda_contatosInput, agendaUncheckedCreateWithoutAgenda_contatosInput>
  }

  export type agendaUpsertWithoutAgenda_contatosInput = {
    update: XOR<agendaUpdateWithoutAgenda_contatosInput, agendaUncheckedUpdateWithoutAgenda_contatosInput>
    create: XOR<agendaCreateWithoutAgenda_contatosInput, agendaUncheckedCreateWithoutAgenda_contatosInput>
    where?: agendaWhereInput
  }

  export type agendaUpdateToOneWithWhereWithoutAgenda_contatosInput = {
    where?: agendaWhereInput
    data: XOR<agendaUpdateWithoutAgenda_contatosInput, agendaUncheckedUpdateWithoutAgenda_contatosInput>
  }

  export type agendaUpdateWithoutAgenda_contatosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    agenda_enderecos?: agenda_enderecosUpdateManyWithoutAgendaNestedInput
  }

  export type agendaUncheckedUpdateWithoutAgenda_contatosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    agenda_enderecos?: agenda_enderecosUncheckedUpdateManyWithoutAgendaNestedInput
  }

  export type agendaCreateWithoutAgenda_enderecosInput = {
    id?: bigint | number
    documento?: string | null
    nome?: string | null
    agenda_contatos?: agenda_contatosCreateNestedManyWithoutAgendaInput
  }

  export type agendaUncheckedCreateWithoutAgenda_enderecosInput = {
    id?: bigint | number
    documento?: string | null
    nome?: string | null
    agenda_contatos?: agenda_contatosUncheckedCreateNestedManyWithoutAgendaInput
  }

  export type agendaCreateOrConnectWithoutAgenda_enderecosInput = {
    where: agendaWhereUniqueInput
    create: XOR<agendaCreateWithoutAgenda_enderecosInput, agendaUncheckedCreateWithoutAgenda_enderecosInput>
  }

  export type agendaUpsertWithoutAgenda_enderecosInput = {
    update: XOR<agendaUpdateWithoutAgenda_enderecosInput, agendaUncheckedUpdateWithoutAgenda_enderecosInput>
    create: XOR<agendaCreateWithoutAgenda_enderecosInput, agendaUncheckedCreateWithoutAgenda_enderecosInput>
    where?: agendaWhereInput
  }

  export type agendaUpdateToOneWithWhereWithoutAgenda_enderecosInput = {
    where?: agendaWhereInput
    data: XOR<agendaUpdateWithoutAgenda_enderecosInput, agendaUncheckedUpdateWithoutAgenda_enderecosInput>
  }

  export type agendaUpdateWithoutAgenda_enderecosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    agenda_contatos?: agenda_contatosUpdateManyWithoutAgendaNestedInput
  }

  export type agendaUncheckedUpdateWithoutAgenda_enderecosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    agenda_contatos?: agenda_contatosUncheckedUpdateManyWithoutAgendaNestedInput
  }

  export type agenda_contatosCreateManyAgendaInput = {
    id?: bigint | number
    celular?: string | null
    email?: string | null
    telefone?: string | null
  }

  export type agenda_enderecosCreateManyAgendaInput = {
    id?: bigint | number
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
  }

  export type agenda_contatosUpdateWithoutAgendaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agenda_contatosUncheckedUpdateWithoutAgendaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agenda_contatosUncheckedUpdateManyWithoutAgendaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agenda_enderecosUpdateWithoutAgendaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agenda_enderecosUncheckedUpdateWithoutAgendaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agenda_enderecosUncheckedUpdateManyWithoutAgendaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}