
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Layout
 * 
 */
export type Layout = $Result.DefaultSelection<Prisma.$LayoutPayload>
/**
 * Model MoodBoard
 * 
 */
export type MoodBoard = $Result.DefaultSelection<Prisma.$MoodBoardPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model WorkingDrawing
 * 
 */
export type WorkingDrawing = $Result.DefaultSelection<Prisma.$WorkingDrawingPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model ExecutionTracker
 * 
 */
export type ExecutionTracker = $Result.DefaultSelection<Prisma.$ExecutionTrackerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProjectStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const DrawingType: {
  ELECTRICAL: 'ELECTRICAL',
  PLUMBING: 'PLUMBING',
  CEILING: 'CEILING',
  WALL: 'WALL',
  TILES: 'TILES',
  FURNITURE: 'FURNITURE'
};

export type DrawingType = (typeof DrawingType)[keyof typeof DrawingType]


export const MaterialCategory: {
  FLOORING: 'FLOORING',
  WALL: 'WALL',
  FURNITURE: 'FURNITURE',
  LIGHTING: 'LIGHTING',
  ACCESSORIES: 'ACCESSORIES',
  OTHER: 'OTHER'
};

export type MaterialCategory = (typeof MaterialCategory)[keyof typeof MaterialCategory]


export const MaterialStatus: {
  SELECTED: 'SELECTED',
  ORDERED: 'ORDERED',
  DELIVERED: 'DELIVERED',
  INSTALLED: 'INSTALLED'
};

export type MaterialStatus = (typeof MaterialStatus)[keyof typeof MaterialStatus]

}

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type DrawingType = $Enums.DrawingType

export const DrawingType: typeof $Enums.DrawingType

export type MaterialCategory = $Enums.MaterialCategory

export const MaterialCategory: typeof $Enums.MaterialCategory

export type MaterialStatus = $Enums.MaterialStatus

export const MaterialStatus: typeof $Enums.MaterialStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.layout`: Exposes CRUD operations for the **Layout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Layouts
    * const layouts = await prisma.layout.findMany()
    * ```
    */
  get layout(): Prisma.LayoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moodBoard`: Exposes CRUD operations for the **MoodBoard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoodBoards
    * const moodBoards = await prisma.moodBoard.findMany()
    * ```
    */
  get moodBoard(): Prisma.MoodBoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workingDrawing`: Exposes CRUD operations for the **WorkingDrawing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkingDrawings
    * const workingDrawings = await prisma.workingDrawing.findMany()
    * ```
    */
  get workingDrawing(): Prisma.WorkingDrawingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executionTracker`: Exposes CRUD operations for the **ExecutionTracker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionTrackers
    * const executionTrackers = await prisma.executionTracker.findMany()
    * ```
    */
  get executionTracker(): Prisma.ExecutionTrackerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Project: 'Project',
    Layout: 'Layout',
    MoodBoard: 'MoodBoard',
    Image: 'Image',
    WorkingDrawing: 'WorkingDrawing',
    Material: 'Material',
    Vendor: 'Vendor',
    ExecutionTracker: 'ExecutionTracker'
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
      modelProps: "user" | "project" | "layout" | "moodBoard" | "image" | "workingDrawing" | "material" | "vendor" | "executionTracker"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Layout: {
        payload: Prisma.$LayoutPayload<ExtArgs>
        fields: Prisma.LayoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          findFirst: {
            args: Prisma.LayoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          findMany: {
            args: Prisma.LayoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>[]
          }
          create: {
            args: Prisma.LayoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          createMany: {
            args: Prisma.LayoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LayoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>[]
          }
          delete: {
            args: Prisma.LayoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          update: {
            args: Prisma.LayoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          deleteMany: {
            args: Prisma.LayoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LayoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>[]
          }
          upsert: {
            args: Prisma.LayoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          aggregate: {
            args: Prisma.LayoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayout>
          }
          groupBy: {
            args: Prisma.LayoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.LayoutCountArgs<ExtArgs>
            result: $Utils.Optional<LayoutCountAggregateOutputType> | number
          }
        }
      }
      MoodBoard: {
        payload: Prisma.$MoodBoardPayload<ExtArgs>
        fields: Prisma.MoodBoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodBoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodBoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardPayload>
          }
          findFirst: {
            args: Prisma.MoodBoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodBoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardPayload>
          }
          findMany: {
            args: Prisma.MoodBoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardPayload>[]
          }
          create: {
            args: Prisma.MoodBoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardPayload>
          }
          createMany: {
            args: Prisma.MoodBoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoodBoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardPayload>[]
          }
          delete: {
            args: Prisma.MoodBoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardPayload>
          }
          update: {
            args: Prisma.MoodBoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardPayload>
          }
          deleteMany: {
            args: Prisma.MoodBoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodBoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoodBoardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardPayload>[]
          }
          upsert: {
            args: Prisma.MoodBoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodBoardPayload>
          }
          aggregate: {
            args: Prisma.MoodBoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoodBoard>
          }
          groupBy: {
            args: Prisma.MoodBoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodBoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodBoardCountArgs<ExtArgs>
            result: $Utils.Optional<MoodBoardCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      WorkingDrawing: {
        payload: Prisma.$WorkingDrawingPayload<ExtArgs>
        fields: Prisma.WorkingDrawingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkingDrawingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingDrawingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkingDrawingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingDrawingPayload>
          }
          findFirst: {
            args: Prisma.WorkingDrawingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingDrawingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkingDrawingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingDrawingPayload>
          }
          findMany: {
            args: Prisma.WorkingDrawingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingDrawingPayload>[]
          }
          create: {
            args: Prisma.WorkingDrawingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingDrawingPayload>
          }
          createMany: {
            args: Prisma.WorkingDrawingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkingDrawingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingDrawingPayload>[]
          }
          delete: {
            args: Prisma.WorkingDrawingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingDrawingPayload>
          }
          update: {
            args: Prisma.WorkingDrawingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingDrawingPayload>
          }
          deleteMany: {
            args: Prisma.WorkingDrawingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkingDrawingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkingDrawingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingDrawingPayload>[]
          }
          upsert: {
            args: Prisma.WorkingDrawingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingDrawingPayload>
          }
          aggregate: {
            args: Prisma.WorkingDrawingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkingDrawing>
          }
          groupBy: {
            args: Prisma.WorkingDrawingGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkingDrawingGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkingDrawingCountArgs<ExtArgs>
            result: $Utils.Optional<WorkingDrawingCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      ExecutionTracker: {
        payload: Prisma.$ExecutionTrackerPayload<ExtArgs>
        fields: Prisma.ExecutionTrackerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionTrackerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionTrackerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionTrackerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionTrackerPayload>
          }
          findFirst: {
            args: Prisma.ExecutionTrackerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionTrackerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionTrackerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionTrackerPayload>
          }
          findMany: {
            args: Prisma.ExecutionTrackerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionTrackerPayload>[]
          }
          create: {
            args: Prisma.ExecutionTrackerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionTrackerPayload>
          }
          createMany: {
            args: Prisma.ExecutionTrackerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionTrackerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionTrackerPayload>[]
          }
          delete: {
            args: Prisma.ExecutionTrackerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionTrackerPayload>
          }
          update: {
            args: Prisma.ExecutionTrackerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionTrackerPayload>
          }
          deleteMany: {
            args: Prisma.ExecutionTrackerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionTrackerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExecutionTrackerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionTrackerPayload>[]
          }
          upsert: {
            args: Prisma.ExecutionTrackerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionTrackerPayload>
          }
          aggregate: {
            args: Prisma.ExecutionTrackerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionTracker>
          }
          groupBy: {
            args: Prisma.ExecutionTrackerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionTrackerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionTrackerCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionTrackerCountAggregateOutputType> | number
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
    user?: UserOmit
    project?: ProjectOmit
    layout?: LayoutOmit
    moodBoard?: MoodBoardOmit
    image?: ImageOmit
    workingDrawing?: WorkingDrawingOmit
    material?: MaterialOmit
    vendor?: VendorOmit
    executionTracker?: ExecutionTrackerOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    layouts: number
    moodBoards: number
    workingDrawings: number
    materials: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layouts?: boolean | ProjectCountOutputTypeCountLayoutsArgs
    moodBoards?: boolean | ProjectCountOutputTypeCountMoodBoardsArgs
    workingDrawings?: boolean | ProjectCountOutputTypeCountWorkingDrawingsArgs
    materials?: boolean | ProjectCountOutputTypeCountMaterialsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLayoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayoutWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMoodBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodBoardWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountWorkingDrawingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingDrawingWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }


  /**
   * Count Type MoodBoardCountOutputType
   */

  export type MoodBoardCountOutputType = {
    images: number
  }

  export type MoodBoardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | MoodBoardCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * MoodBoardCountOutputType without action
   */
  export type MoodBoardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoardCountOutputType
     */
    select?: MoodBoardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MoodBoardCountOutputType without action
   */
  export type MoodBoardCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    materials: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | VendorCountOutputTypeCountMaterialsArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    size: number | null
    budget: number | null
  }

  export type ProjectSumAggregateOutputType = {
    size: number | null
    budget: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    spaceType: string | null
    size: number | null
    budget: number | null
    userId: string | null
    status: $Enums.ProjectStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    spaceType: string | null
    size: number | null
    budget: number | null
    userId: string | null
    status: $Enums.ProjectStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    spaceType: number
    size: number
    budget: number
    userId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    size?: true
    budget?: true
  }

  export type ProjectSumAggregateInputType = {
    size?: true
    budget?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    spaceType?: true
    size?: true
    budget?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    spaceType?: true
    size?: true
    budget?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    spaceType?: true
    size?: true
    budget?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    description: string | null
    spaceType: string
    size: number
    budget: number
    userId: string
    status: $Enums.ProjectStatus
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    spaceType?: boolean
    size?: boolean
    budget?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    layouts?: boolean | Project$layoutsArgs<ExtArgs>
    moodBoards?: boolean | Project$moodBoardsArgs<ExtArgs>
    workingDrawings?: boolean | Project$workingDrawingsArgs<ExtArgs>
    materials?: boolean | Project$materialsArgs<ExtArgs>
    executionTracker?: boolean | Project$executionTrackerArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    spaceType?: boolean
    size?: boolean
    budget?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    spaceType?: boolean
    size?: boolean
    budget?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    spaceType?: boolean
    size?: boolean
    budget?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "spaceType" | "size" | "budget" | "userId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    layouts?: boolean | Project$layoutsArgs<ExtArgs>
    moodBoards?: boolean | Project$moodBoardsArgs<ExtArgs>
    workingDrawings?: boolean | Project$workingDrawingsArgs<ExtArgs>
    materials?: boolean | Project$materialsArgs<ExtArgs>
    executionTracker?: boolean | Project$executionTrackerArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      layouts: Prisma.$LayoutPayload<ExtArgs>[]
      moodBoards: Prisma.$MoodBoardPayload<ExtArgs>[]
      workingDrawings: Prisma.$WorkingDrawingPayload<ExtArgs>[]
      materials: Prisma.$MaterialPayload<ExtArgs>[]
      executionTracker: Prisma.$ExecutionTrackerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      spaceType: string
      size: number
      budget: number
      userId: string
      status: $Enums.ProjectStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    layouts<T extends Project$layoutsArgs<ExtArgs> = {}>(args?: Subset<T, Project$layoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moodBoards<T extends Project$moodBoardsArgs<ExtArgs> = {}>(args?: Subset<T, Project$moodBoardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workingDrawings<T extends Project$workingDrawingsArgs<ExtArgs> = {}>(args?: Subset<T, Project$workingDrawingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingDrawingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materials<T extends Project$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Project$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    executionTracker<T extends Project$executionTrackerArgs<ExtArgs> = {}>(args?: Subset<T, Project$executionTrackerArgs<ExtArgs>>): Prisma__ExecutionTrackerClient<$Result.GetResult<Prisma.$ExecutionTrackerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly spaceType: FieldRef<"Project", 'String'>
    readonly size: FieldRef<"Project", 'Float'>
    readonly budget: FieldRef<"Project", 'Float'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.layouts
   */
  export type Project$layoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    where?: LayoutWhereInput
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    cursor?: LayoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LayoutScalarFieldEnum | LayoutScalarFieldEnum[]
  }

  /**
   * Project.moodBoards
   */
  export type Project$moodBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoard
     */
    select?: MoodBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoard
     */
    omit?: MoodBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardInclude<ExtArgs> | null
    where?: MoodBoardWhereInput
    orderBy?: MoodBoardOrderByWithRelationInput | MoodBoardOrderByWithRelationInput[]
    cursor?: MoodBoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodBoardScalarFieldEnum | MoodBoardScalarFieldEnum[]
  }

  /**
   * Project.workingDrawings
   */
  export type Project$workingDrawingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingDrawing
     */
    select?: WorkingDrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingDrawing
     */
    omit?: WorkingDrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingDrawingInclude<ExtArgs> | null
    where?: WorkingDrawingWhereInput
    orderBy?: WorkingDrawingOrderByWithRelationInput | WorkingDrawingOrderByWithRelationInput[]
    cursor?: WorkingDrawingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkingDrawingScalarFieldEnum | WorkingDrawingScalarFieldEnum[]
  }

  /**
   * Project.materials
   */
  export type Project$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Project.executionTracker
   */
  export type Project$executionTrackerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionTracker
     */
    select?: ExecutionTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionTracker
     */
    omit?: ExecutionTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionTrackerInclude<ExtArgs> | null
    where?: ExecutionTrackerWhereInput
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Layout
   */

  export type AggregateLayout = {
    _count: LayoutCountAggregateOutputType | null
    _avg: LayoutAvgAggregateOutputType | null
    _sum: LayoutSumAggregateOutputType | null
    _min: LayoutMinAggregateOutputType | null
    _max: LayoutMaxAggregateOutputType | null
  }

  export type LayoutAvgAggregateOutputType = {
    version: number | null
  }

  export type LayoutSumAggregateOutputType = {
    version: number | null
  }

  export type LayoutMinAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    layoutData: string | null
    isApproved: boolean | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LayoutMaxAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    layoutData: string | null
    isApproved: boolean | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LayoutCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    layoutData: number
    isApproved: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LayoutAvgAggregateInputType = {
    version?: true
  }

  export type LayoutSumAggregateInputType = {
    version?: true
  }

  export type LayoutMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    layoutData?: true
    isApproved?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LayoutMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    layoutData?: true
    isApproved?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LayoutCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    layoutData?: true
    isApproved?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LayoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layout to aggregate.
     */
    where?: LayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layouts to fetch.
     */
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Layouts
    **/
    _count?: true | LayoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayoutMaxAggregateInputType
  }

  export type GetLayoutAggregateType<T extends LayoutAggregateArgs> = {
        [P in keyof T & keyof AggregateLayout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayout[P]>
      : GetScalarType<T[P], AggregateLayout[P]>
  }




  export type LayoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayoutWhereInput
    orderBy?: LayoutOrderByWithAggregationInput | LayoutOrderByWithAggregationInput[]
    by: LayoutScalarFieldEnum[] | LayoutScalarFieldEnum
    having?: LayoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayoutCountAggregateInputType | true
    _avg?: LayoutAvgAggregateInputType
    _sum?: LayoutSumAggregateInputType
    _min?: LayoutMinAggregateInputType
    _max?: LayoutMaxAggregateInputType
  }

  export type LayoutGroupByOutputType = {
    id: string
    name: string
    projectId: string
    layoutData: string
    isApproved: boolean
    version: number
    createdAt: Date
    updatedAt: Date
    _count: LayoutCountAggregateOutputType | null
    _avg: LayoutAvgAggregateOutputType | null
    _sum: LayoutSumAggregateOutputType | null
    _min: LayoutMinAggregateOutputType | null
    _max: LayoutMaxAggregateOutputType | null
  }

  type GetLayoutGroupByPayload<T extends LayoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayoutGroupByOutputType[P]>
            : GetScalarType<T[P], LayoutGroupByOutputType[P]>
        }
      >
    >


  export type LayoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    layoutData?: boolean
    isApproved?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layout"]>

  export type LayoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    layoutData?: boolean
    isApproved?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layout"]>

  export type LayoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    layoutData?: boolean
    isApproved?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layout"]>

  export type LayoutSelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
    layoutData?: boolean
    isApproved?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LayoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "projectId" | "layoutData" | "isApproved" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["layout"]>
  export type LayoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type LayoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type LayoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $LayoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Layout"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      projectId: string
      layoutData: string
      isApproved: boolean
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["layout"]>
    composites: {}
  }

  type LayoutGetPayload<S extends boolean | null | undefined | LayoutDefaultArgs> = $Result.GetResult<Prisma.$LayoutPayload, S>

  type LayoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LayoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LayoutCountAggregateInputType | true
    }

  export interface LayoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Layout'], meta: { name: 'Layout' } }
    /**
     * Find zero or one Layout that matches the filter.
     * @param {LayoutFindUniqueArgs} args - Arguments to find a Layout
     * @example
     * // Get one Layout
     * const layout = await prisma.layout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayoutFindUniqueArgs>(args: SelectSubset<T, LayoutFindUniqueArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Layout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LayoutFindUniqueOrThrowArgs} args - Arguments to find a Layout
     * @example
     * // Get one Layout
     * const layout = await prisma.layout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayoutFindUniqueOrThrowArgs>(args: SelectSubset<T, LayoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutFindFirstArgs} args - Arguments to find a Layout
     * @example
     * // Get one Layout
     * const layout = await prisma.layout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayoutFindFirstArgs>(args?: SelectSubset<T, LayoutFindFirstArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutFindFirstOrThrowArgs} args - Arguments to find a Layout
     * @example
     * // Get one Layout
     * const layout = await prisma.layout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayoutFindFirstOrThrowArgs>(args?: SelectSubset<T, LayoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Layouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Layouts
     * const layouts = await prisma.layout.findMany()
     * 
     * // Get first 10 Layouts
     * const layouts = await prisma.layout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layoutWithIdOnly = await prisma.layout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayoutFindManyArgs>(args?: SelectSubset<T, LayoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Layout.
     * @param {LayoutCreateArgs} args - Arguments to create a Layout.
     * @example
     * // Create one Layout
     * const Layout = await prisma.layout.create({
     *   data: {
     *     // ... data to create a Layout
     *   }
     * })
     * 
     */
    create<T extends LayoutCreateArgs>(args: SelectSubset<T, LayoutCreateArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Layouts.
     * @param {LayoutCreateManyArgs} args - Arguments to create many Layouts.
     * @example
     * // Create many Layouts
     * const layout = await prisma.layout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayoutCreateManyArgs>(args?: SelectSubset<T, LayoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Layouts and returns the data saved in the database.
     * @param {LayoutCreateManyAndReturnArgs} args - Arguments to create many Layouts.
     * @example
     * // Create many Layouts
     * const layout = await prisma.layout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Layouts and only return the `id`
     * const layoutWithIdOnly = await prisma.layout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LayoutCreateManyAndReturnArgs>(args?: SelectSubset<T, LayoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Layout.
     * @param {LayoutDeleteArgs} args - Arguments to delete one Layout.
     * @example
     * // Delete one Layout
     * const Layout = await prisma.layout.delete({
     *   where: {
     *     // ... filter to delete one Layout
     *   }
     * })
     * 
     */
    delete<T extends LayoutDeleteArgs>(args: SelectSubset<T, LayoutDeleteArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Layout.
     * @param {LayoutUpdateArgs} args - Arguments to update one Layout.
     * @example
     * // Update one Layout
     * const layout = await prisma.layout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayoutUpdateArgs>(args: SelectSubset<T, LayoutUpdateArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Layouts.
     * @param {LayoutDeleteManyArgs} args - Arguments to filter Layouts to delete.
     * @example
     * // Delete a few Layouts
     * const { count } = await prisma.layout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayoutDeleteManyArgs>(args?: SelectSubset<T, LayoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Layouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Layouts
     * const layout = await prisma.layout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayoutUpdateManyArgs>(args: SelectSubset<T, LayoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Layouts and returns the data updated in the database.
     * @param {LayoutUpdateManyAndReturnArgs} args - Arguments to update many Layouts.
     * @example
     * // Update many Layouts
     * const layout = await prisma.layout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Layouts and only return the `id`
     * const layoutWithIdOnly = await prisma.layout.updateManyAndReturn({
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
    updateManyAndReturn<T extends LayoutUpdateManyAndReturnArgs>(args: SelectSubset<T, LayoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Layout.
     * @param {LayoutUpsertArgs} args - Arguments to update or create a Layout.
     * @example
     * // Update or create a Layout
     * const layout = await prisma.layout.upsert({
     *   create: {
     *     // ... data to create a Layout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Layout we want to update
     *   }
     * })
     */
    upsert<T extends LayoutUpsertArgs>(args: SelectSubset<T, LayoutUpsertArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Layouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutCountArgs} args - Arguments to filter Layouts to count.
     * @example
     * // Count the number of Layouts
     * const count = await prisma.layout.count({
     *   where: {
     *     // ... the filter for the Layouts we want to count
     *   }
     * })
    **/
    count<T extends LayoutCountArgs>(
      args?: Subset<T, LayoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Layout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LayoutAggregateArgs>(args: Subset<T, LayoutAggregateArgs>): Prisma.PrismaPromise<GetLayoutAggregateType<T>>

    /**
     * Group by Layout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutGroupByArgs} args - Group by arguments.
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
      T extends LayoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayoutGroupByArgs['orderBy'] }
        : { orderBy?: LayoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LayoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Layout model
   */
  readonly fields: LayoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Layout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Layout model
   */
  interface LayoutFieldRefs {
    readonly id: FieldRef<"Layout", 'String'>
    readonly name: FieldRef<"Layout", 'String'>
    readonly projectId: FieldRef<"Layout", 'String'>
    readonly layoutData: FieldRef<"Layout", 'String'>
    readonly isApproved: FieldRef<"Layout", 'Boolean'>
    readonly version: FieldRef<"Layout", 'Int'>
    readonly createdAt: FieldRef<"Layout", 'DateTime'>
    readonly updatedAt: FieldRef<"Layout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Layout findUnique
   */
  export type LayoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layout to fetch.
     */
    where: LayoutWhereUniqueInput
  }

  /**
   * Layout findUniqueOrThrow
   */
  export type LayoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layout to fetch.
     */
    where: LayoutWhereUniqueInput
  }

  /**
   * Layout findFirst
   */
  export type LayoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layout to fetch.
     */
    where?: LayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layouts to fetch.
     */
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layouts.
     */
    cursor?: LayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layouts.
     */
    distinct?: LayoutScalarFieldEnum | LayoutScalarFieldEnum[]
  }

  /**
   * Layout findFirstOrThrow
   */
  export type LayoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layout to fetch.
     */
    where?: LayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layouts to fetch.
     */
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layouts.
     */
    cursor?: LayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layouts.
     */
    distinct?: LayoutScalarFieldEnum | LayoutScalarFieldEnum[]
  }

  /**
   * Layout findMany
   */
  export type LayoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layouts to fetch.
     */
    where?: LayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layouts to fetch.
     */
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Layouts.
     */
    cursor?: LayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layouts.
     */
    skip?: number
    distinct?: LayoutScalarFieldEnum | LayoutScalarFieldEnum[]
  }

  /**
   * Layout create
   */
  export type LayoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Layout.
     */
    data: XOR<LayoutCreateInput, LayoutUncheckedCreateInput>
  }

  /**
   * Layout createMany
   */
  export type LayoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Layouts.
     */
    data: LayoutCreateManyInput | LayoutCreateManyInput[]
  }

  /**
   * Layout createManyAndReturn
   */
  export type LayoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * The data used to create many Layouts.
     */
    data: LayoutCreateManyInput | LayoutCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Layout update
   */
  export type LayoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Layout.
     */
    data: XOR<LayoutUpdateInput, LayoutUncheckedUpdateInput>
    /**
     * Choose, which Layout to update.
     */
    where: LayoutWhereUniqueInput
  }

  /**
   * Layout updateMany
   */
  export type LayoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Layouts.
     */
    data: XOR<LayoutUpdateManyMutationInput, LayoutUncheckedUpdateManyInput>
    /**
     * Filter which Layouts to update
     */
    where?: LayoutWhereInput
    /**
     * Limit how many Layouts to update.
     */
    limit?: number
  }

  /**
   * Layout updateManyAndReturn
   */
  export type LayoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * The data used to update Layouts.
     */
    data: XOR<LayoutUpdateManyMutationInput, LayoutUncheckedUpdateManyInput>
    /**
     * Filter which Layouts to update
     */
    where?: LayoutWhereInput
    /**
     * Limit how many Layouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Layout upsert
   */
  export type LayoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Layout to update in case it exists.
     */
    where: LayoutWhereUniqueInput
    /**
     * In case the Layout found by the `where` argument doesn't exist, create a new Layout with this data.
     */
    create: XOR<LayoutCreateInput, LayoutUncheckedCreateInput>
    /**
     * In case the Layout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayoutUpdateInput, LayoutUncheckedUpdateInput>
  }

  /**
   * Layout delete
   */
  export type LayoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter which Layout to delete.
     */
    where: LayoutWhereUniqueInput
  }

  /**
   * Layout deleteMany
   */
  export type LayoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layouts to delete
     */
    where?: LayoutWhereInput
    /**
     * Limit how many Layouts to delete.
     */
    limit?: number
  }

  /**
   * Layout without action
   */
  export type LayoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layout
     */
    omit?: LayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
  }


  /**
   * Model MoodBoard
   */

  export type AggregateMoodBoard = {
    _count: MoodBoardCountAggregateOutputType | null
    _min: MoodBoardMinAggregateOutputType | null
    _max: MoodBoardMaxAggregateOutputType | null
  }

  export type MoodBoardMinAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    styleType: string | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MoodBoardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    styleType: string | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MoodBoardCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    styleType: number
    isApproved: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MoodBoardMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    styleType?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MoodBoardMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    styleType?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MoodBoardCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    styleType?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MoodBoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodBoard to aggregate.
     */
    where?: MoodBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodBoards to fetch.
     */
    orderBy?: MoodBoardOrderByWithRelationInput | MoodBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoodBoards
    **/
    _count?: true | MoodBoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodBoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodBoardMaxAggregateInputType
  }

  export type GetMoodBoardAggregateType<T extends MoodBoardAggregateArgs> = {
        [P in keyof T & keyof AggregateMoodBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoodBoard[P]>
      : GetScalarType<T[P], AggregateMoodBoard[P]>
  }




  export type MoodBoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodBoardWhereInput
    orderBy?: MoodBoardOrderByWithAggregationInput | MoodBoardOrderByWithAggregationInput[]
    by: MoodBoardScalarFieldEnum[] | MoodBoardScalarFieldEnum
    having?: MoodBoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodBoardCountAggregateInputType | true
    _min?: MoodBoardMinAggregateInputType
    _max?: MoodBoardMaxAggregateInputType
  }

  export type MoodBoardGroupByOutputType = {
    id: string
    name: string
    projectId: string
    styleType: string
    isApproved: boolean
    createdAt: Date
    updatedAt: Date
    _count: MoodBoardCountAggregateOutputType | null
    _min: MoodBoardMinAggregateOutputType | null
    _max: MoodBoardMaxAggregateOutputType | null
  }

  type GetMoodBoardGroupByPayload<T extends MoodBoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodBoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodBoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodBoardGroupByOutputType[P]>
            : GetScalarType<T[P], MoodBoardGroupByOutputType[P]>
        }
      >
    >


  export type MoodBoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    styleType?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    images?: boolean | MoodBoard$imagesArgs<ExtArgs>
    _count?: boolean | MoodBoardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodBoard"]>

  export type MoodBoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    styleType?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodBoard"]>

  export type MoodBoardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    styleType?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodBoard"]>

  export type MoodBoardSelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
    styleType?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MoodBoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "projectId" | "styleType" | "isApproved" | "createdAt" | "updatedAt", ExtArgs["result"]["moodBoard"]>
  export type MoodBoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    images?: boolean | MoodBoard$imagesArgs<ExtArgs>
    _count?: boolean | MoodBoardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MoodBoardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type MoodBoardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $MoodBoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoodBoard"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      projectId: string
      styleType: string
      isApproved: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["moodBoard"]>
    composites: {}
  }

  type MoodBoardGetPayload<S extends boolean | null | undefined | MoodBoardDefaultArgs> = $Result.GetResult<Prisma.$MoodBoardPayload, S>

  type MoodBoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodBoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodBoardCountAggregateInputType | true
    }

  export interface MoodBoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoodBoard'], meta: { name: 'MoodBoard' } }
    /**
     * Find zero or one MoodBoard that matches the filter.
     * @param {MoodBoardFindUniqueArgs} args - Arguments to find a MoodBoard
     * @example
     * // Get one MoodBoard
     * const moodBoard = await prisma.moodBoard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodBoardFindUniqueArgs>(args: SelectSubset<T, MoodBoardFindUniqueArgs<ExtArgs>>): Prisma__MoodBoardClient<$Result.GetResult<Prisma.$MoodBoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoodBoard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodBoardFindUniqueOrThrowArgs} args - Arguments to find a MoodBoard
     * @example
     * // Get one MoodBoard
     * const moodBoard = await prisma.moodBoard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodBoardFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodBoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodBoardClient<$Result.GetResult<Prisma.$MoodBoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodBoard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardFindFirstArgs} args - Arguments to find a MoodBoard
     * @example
     * // Get one MoodBoard
     * const moodBoard = await prisma.moodBoard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodBoardFindFirstArgs>(args?: SelectSubset<T, MoodBoardFindFirstArgs<ExtArgs>>): Prisma__MoodBoardClient<$Result.GetResult<Prisma.$MoodBoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodBoard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardFindFirstOrThrowArgs} args - Arguments to find a MoodBoard
     * @example
     * // Get one MoodBoard
     * const moodBoard = await prisma.moodBoard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodBoardFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodBoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodBoardClient<$Result.GetResult<Prisma.$MoodBoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoodBoards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoodBoards
     * const moodBoards = await prisma.moodBoard.findMany()
     * 
     * // Get first 10 MoodBoards
     * const moodBoards = await prisma.moodBoard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodBoardWithIdOnly = await prisma.moodBoard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodBoardFindManyArgs>(args?: SelectSubset<T, MoodBoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoodBoard.
     * @param {MoodBoardCreateArgs} args - Arguments to create a MoodBoard.
     * @example
     * // Create one MoodBoard
     * const MoodBoard = await prisma.moodBoard.create({
     *   data: {
     *     // ... data to create a MoodBoard
     *   }
     * })
     * 
     */
    create<T extends MoodBoardCreateArgs>(args: SelectSubset<T, MoodBoardCreateArgs<ExtArgs>>): Prisma__MoodBoardClient<$Result.GetResult<Prisma.$MoodBoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoodBoards.
     * @param {MoodBoardCreateManyArgs} args - Arguments to create many MoodBoards.
     * @example
     * // Create many MoodBoards
     * const moodBoard = await prisma.moodBoard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodBoardCreateManyArgs>(args?: SelectSubset<T, MoodBoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MoodBoards and returns the data saved in the database.
     * @param {MoodBoardCreateManyAndReturnArgs} args - Arguments to create many MoodBoards.
     * @example
     * // Create many MoodBoards
     * const moodBoard = await prisma.moodBoard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MoodBoards and only return the `id`
     * const moodBoardWithIdOnly = await prisma.moodBoard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoodBoardCreateManyAndReturnArgs>(args?: SelectSubset<T, MoodBoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodBoardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MoodBoard.
     * @param {MoodBoardDeleteArgs} args - Arguments to delete one MoodBoard.
     * @example
     * // Delete one MoodBoard
     * const MoodBoard = await prisma.moodBoard.delete({
     *   where: {
     *     // ... filter to delete one MoodBoard
     *   }
     * })
     * 
     */
    delete<T extends MoodBoardDeleteArgs>(args: SelectSubset<T, MoodBoardDeleteArgs<ExtArgs>>): Prisma__MoodBoardClient<$Result.GetResult<Prisma.$MoodBoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoodBoard.
     * @param {MoodBoardUpdateArgs} args - Arguments to update one MoodBoard.
     * @example
     * // Update one MoodBoard
     * const moodBoard = await prisma.moodBoard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodBoardUpdateArgs>(args: SelectSubset<T, MoodBoardUpdateArgs<ExtArgs>>): Prisma__MoodBoardClient<$Result.GetResult<Prisma.$MoodBoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoodBoards.
     * @param {MoodBoardDeleteManyArgs} args - Arguments to filter MoodBoards to delete.
     * @example
     * // Delete a few MoodBoards
     * const { count } = await prisma.moodBoard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodBoardDeleteManyArgs>(args?: SelectSubset<T, MoodBoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoodBoards
     * const moodBoard = await prisma.moodBoard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodBoardUpdateManyArgs>(args: SelectSubset<T, MoodBoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodBoards and returns the data updated in the database.
     * @param {MoodBoardUpdateManyAndReturnArgs} args - Arguments to update many MoodBoards.
     * @example
     * // Update many MoodBoards
     * const moodBoard = await prisma.moodBoard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MoodBoards and only return the `id`
     * const moodBoardWithIdOnly = await prisma.moodBoard.updateManyAndReturn({
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
    updateManyAndReturn<T extends MoodBoardUpdateManyAndReturnArgs>(args: SelectSubset<T, MoodBoardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodBoardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MoodBoard.
     * @param {MoodBoardUpsertArgs} args - Arguments to update or create a MoodBoard.
     * @example
     * // Update or create a MoodBoard
     * const moodBoard = await prisma.moodBoard.upsert({
     *   create: {
     *     // ... data to create a MoodBoard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoodBoard we want to update
     *   }
     * })
     */
    upsert<T extends MoodBoardUpsertArgs>(args: SelectSubset<T, MoodBoardUpsertArgs<ExtArgs>>): Prisma__MoodBoardClient<$Result.GetResult<Prisma.$MoodBoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MoodBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardCountArgs} args - Arguments to filter MoodBoards to count.
     * @example
     * // Count the number of MoodBoards
     * const count = await prisma.moodBoard.count({
     *   where: {
     *     // ... the filter for the MoodBoards we want to count
     *   }
     * })
    **/
    count<T extends MoodBoardCountArgs>(
      args?: Subset<T, MoodBoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodBoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoodBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoodBoardAggregateArgs>(args: Subset<T, MoodBoardAggregateArgs>): Prisma.PrismaPromise<GetMoodBoardAggregateType<T>>

    /**
     * Group by MoodBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodBoardGroupByArgs} args - Group by arguments.
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
      T extends MoodBoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodBoardGroupByArgs['orderBy'] }
        : { orderBy?: MoodBoardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoodBoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoodBoard model
   */
  readonly fields: MoodBoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoodBoard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodBoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends MoodBoard$imagesArgs<ExtArgs> = {}>(args?: Subset<T, MoodBoard$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MoodBoard model
   */
  interface MoodBoardFieldRefs {
    readonly id: FieldRef<"MoodBoard", 'String'>
    readonly name: FieldRef<"MoodBoard", 'String'>
    readonly projectId: FieldRef<"MoodBoard", 'String'>
    readonly styleType: FieldRef<"MoodBoard", 'String'>
    readonly isApproved: FieldRef<"MoodBoard", 'Boolean'>
    readonly createdAt: FieldRef<"MoodBoard", 'DateTime'>
    readonly updatedAt: FieldRef<"MoodBoard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MoodBoard findUnique
   */
  export type MoodBoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoard
     */
    select?: MoodBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoard
     */
    omit?: MoodBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardInclude<ExtArgs> | null
    /**
     * Filter, which MoodBoard to fetch.
     */
    where: MoodBoardWhereUniqueInput
  }

  /**
   * MoodBoard findUniqueOrThrow
   */
  export type MoodBoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoard
     */
    select?: MoodBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoard
     */
    omit?: MoodBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardInclude<ExtArgs> | null
    /**
     * Filter, which MoodBoard to fetch.
     */
    where: MoodBoardWhereUniqueInput
  }

  /**
   * MoodBoard findFirst
   */
  export type MoodBoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoard
     */
    select?: MoodBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoard
     */
    omit?: MoodBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardInclude<ExtArgs> | null
    /**
     * Filter, which MoodBoard to fetch.
     */
    where?: MoodBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodBoards to fetch.
     */
    orderBy?: MoodBoardOrderByWithRelationInput | MoodBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodBoards.
     */
    cursor?: MoodBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodBoards.
     */
    distinct?: MoodBoardScalarFieldEnum | MoodBoardScalarFieldEnum[]
  }

  /**
   * MoodBoard findFirstOrThrow
   */
  export type MoodBoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoard
     */
    select?: MoodBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoard
     */
    omit?: MoodBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardInclude<ExtArgs> | null
    /**
     * Filter, which MoodBoard to fetch.
     */
    where?: MoodBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodBoards to fetch.
     */
    orderBy?: MoodBoardOrderByWithRelationInput | MoodBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodBoards.
     */
    cursor?: MoodBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodBoards.
     */
    distinct?: MoodBoardScalarFieldEnum | MoodBoardScalarFieldEnum[]
  }

  /**
   * MoodBoard findMany
   */
  export type MoodBoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoard
     */
    select?: MoodBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoard
     */
    omit?: MoodBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardInclude<ExtArgs> | null
    /**
     * Filter, which MoodBoards to fetch.
     */
    where?: MoodBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodBoards to fetch.
     */
    orderBy?: MoodBoardOrderByWithRelationInput | MoodBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoodBoards.
     */
    cursor?: MoodBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodBoards.
     */
    skip?: number
    distinct?: MoodBoardScalarFieldEnum | MoodBoardScalarFieldEnum[]
  }

  /**
   * MoodBoard create
   */
  export type MoodBoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoard
     */
    select?: MoodBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoard
     */
    omit?: MoodBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardInclude<ExtArgs> | null
    /**
     * The data needed to create a MoodBoard.
     */
    data: XOR<MoodBoardCreateInput, MoodBoardUncheckedCreateInput>
  }

  /**
   * MoodBoard createMany
   */
  export type MoodBoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoodBoards.
     */
    data: MoodBoardCreateManyInput | MoodBoardCreateManyInput[]
  }

  /**
   * MoodBoard createManyAndReturn
   */
  export type MoodBoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoard
     */
    select?: MoodBoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoard
     */
    omit?: MoodBoardOmit<ExtArgs> | null
    /**
     * The data used to create many MoodBoards.
     */
    data: MoodBoardCreateManyInput | MoodBoardCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodBoard update
   */
  export type MoodBoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoard
     */
    select?: MoodBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoard
     */
    omit?: MoodBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardInclude<ExtArgs> | null
    /**
     * The data needed to update a MoodBoard.
     */
    data: XOR<MoodBoardUpdateInput, MoodBoardUncheckedUpdateInput>
    /**
     * Choose, which MoodBoard to update.
     */
    where: MoodBoardWhereUniqueInput
  }

  /**
   * MoodBoard updateMany
   */
  export type MoodBoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoodBoards.
     */
    data: XOR<MoodBoardUpdateManyMutationInput, MoodBoardUncheckedUpdateManyInput>
    /**
     * Filter which MoodBoards to update
     */
    where?: MoodBoardWhereInput
    /**
     * Limit how many MoodBoards to update.
     */
    limit?: number
  }

  /**
   * MoodBoard updateManyAndReturn
   */
  export type MoodBoardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoard
     */
    select?: MoodBoardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoard
     */
    omit?: MoodBoardOmit<ExtArgs> | null
    /**
     * The data used to update MoodBoards.
     */
    data: XOR<MoodBoardUpdateManyMutationInput, MoodBoardUncheckedUpdateManyInput>
    /**
     * Filter which MoodBoards to update
     */
    where?: MoodBoardWhereInput
    /**
     * Limit how many MoodBoards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodBoard upsert
   */
  export type MoodBoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoard
     */
    select?: MoodBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoard
     */
    omit?: MoodBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardInclude<ExtArgs> | null
    /**
     * The filter to search for the MoodBoard to update in case it exists.
     */
    where: MoodBoardWhereUniqueInput
    /**
     * In case the MoodBoard found by the `where` argument doesn't exist, create a new MoodBoard with this data.
     */
    create: XOR<MoodBoardCreateInput, MoodBoardUncheckedCreateInput>
    /**
     * In case the MoodBoard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodBoardUpdateInput, MoodBoardUncheckedUpdateInput>
  }

  /**
   * MoodBoard delete
   */
  export type MoodBoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoard
     */
    select?: MoodBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoard
     */
    omit?: MoodBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardInclude<ExtArgs> | null
    /**
     * Filter which MoodBoard to delete.
     */
    where: MoodBoardWhereUniqueInput
  }

  /**
   * MoodBoard deleteMany
   */
  export type MoodBoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodBoards to delete
     */
    where?: MoodBoardWhereInput
    /**
     * Limit how many MoodBoards to delete.
     */
    limit?: number
  }

  /**
   * MoodBoard.images
   */
  export type MoodBoard$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * MoodBoard without action
   */
  export type MoodBoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodBoard
     */
    select?: MoodBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodBoard
     */
    omit?: MoodBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodBoardInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    caption: string | null
    moodBoardId: string | null
    createdAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    caption: string | null
    moodBoardId: string | null
    createdAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    caption: number
    moodBoardId: number
    createdAt: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    moodBoardId?: true
    createdAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    moodBoardId?: true
    createdAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    moodBoardId?: true
    createdAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    url: string
    caption: string | null
    moodBoardId: string
    createdAt: Date
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    caption?: boolean
    moodBoardId?: boolean
    createdAt?: boolean
    moodBoard?: boolean | MoodBoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    caption?: boolean
    moodBoardId?: boolean
    createdAt?: boolean
    moodBoard?: boolean | MoodBoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    caption?: boolean
    moodBoardId?: boolean
    createdAt?: boolean
    moodBoard?: boolean | MoodBoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    caption?: boolean
    moodBoardId?: boolean
    createdAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "caption" | "moodBoardId" | "createdAt", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moodBoard?: boolean | MoodBoardDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moodBoard?: boolean | MoodBoardDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moodBoard?: boolean | MoodBoardDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      moodBoard: Prisma.$MoodBoardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      caption: string | null
      moodBoardId: string
      createdAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    moodBoard<T extends MoodBoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoodBoardDefaultArgs<ExtArgs>>): Prisma__MoodBoardClient<$Result.GetResult<Prisma.$MoodBoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly caption: FieldRef<"Image", 'String'>
    readonly moodBoardId: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model WorkingDrawing
   */

  export type AggregateWorkingDrawing = {
    _count: WorkingDrawingCountAggregateOutputType | null
    _min: WorkingDrawingMinAggregateOutputType | null
    _max: WorkingDrawingMaxAggregateOutputType | null
  }

  export type WorkingDrawingMinAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    type: $Enums.DrawingType | null
    fileUrl: string | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkingDrawingMaxAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    type: $Enums.DrawingType | null
    fileUrl: string | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkingDrawingCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    type: number
    fileUrl: number
    isApproved: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkingDrawingMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    type?: true
    fileUrl?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkingDrawingMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    type?: true
    fileUrl?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkingDrawingCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    type?: true
    fileUrl?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkingDrawingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingDrawing to aggregate.
     */
    where?: WorkingDrawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingDrawings to fetch.
     */
    orderBy?: WorkingDrawingOrderByWithRelationInput | WorkingDrawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkingDrawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingDrawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingDrawings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkingDrawings
    **/
    _count?: true | WorkingDrawingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkingDrawingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkingDrawingMaxAggregateInputType
  }

  export type GetWorkingDrawingAggregateType<T extends WorkingDrawingAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkingDrawing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkingDrawing[P]>
      : GetScalarType<T[P], AggregateWorkingDrawing[P]>
  }




  export type WorkingDrawingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingDrawingWhereInput
    orderBy?: WorkingDrawingOrderByWithAggregationInput | WorkingDrawingOrderByWithAggregationInput[]
    by: WorkingDrawingScalarFieldEnum[] | WorkingDrawingScalarFieldEnum
    having?: WorkingDrawingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkingDrawingCountAggregateInputType | true
    _min?: WorkingDrawingMinAggregateInputType
    _max?: WorkingDrawingMaxAggregateInputType
  }

  export type WorkingDrawingGroupByOutputType = {
    id: string
    name: string
    projectId: string
    type: $Enums.DrawingType
    fileUrl: string
    isApproved: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkingDrawingCountAggregateOutputType | null
    _min: WorkingDrawingMinAggregateOutputType | null
    _max: WorkingDrawingMaxAggregateOutputType | null
  }

  type GetWorkingDrawingGroupByPayload<T extends WorkingDrawingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkingDrawingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkingDrawingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkingDrawingGroupByOutputType[P]>
            : GetScalarType<T[P], WorkingDrawingGroupByOutputType[P]>
        }
      >
    >


  export type WorkingDrawingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    type?: boolean
    fileUrl?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingDrawing"]>

  export type WorkingDrawingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    type?: boolean
    fileUrl?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingDrawing"]>

  export type WorkingDrawingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    type?: boolean
    fileUrl?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingDrawing"]>

  export type WorkingDrawingSelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
    type?: boolean
    fileUrl?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkingDrawingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "projectId" | "type" | "fileUrl" | "isApproved" | "createdAt" | "updatedAt", ExtArgs["result"]["workingDrawing"]>
  export type WorkingDrawingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type WorkingDrawingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type WorkingDrawingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $WorkingDrawingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkingDrawing"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      projectId: string
      type: $Enums.DrawingType
      fileUrl: string
      isApproved: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workingDrawing"]>
    composites: {}
  }

  type WorkingDrawingGetPayload<S extends boolean | null | undefined | WorkingDrawingDefaultArgs> = $Result.GetResult<Prisma.$WorkingDrawingPayload, S>

  type WorkingDrawingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkingDrawingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkingDrawingCountAggregateInputType | true
    }

  export interface WorkingDrawingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkingDrawing'], meta: { name: 'WorkingDrawing' } }
    /**
     * Find zero or one WorkingDrawing that matches the filter.
     * @param {WorkingDrawingFindUniqueArgs} args - Arguments to find a WorkingDrawing
     * @example
     * // Get one WorkingDrawing
     * const workingDrawing = await prisma.workingDrawing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkingDrawingFindUniqueArgs>(args: SelectSubset<T, WorkingDrawingFindUniqueArgs<ExtArgs>>): Prisma__WorkingDrawingClient<$Result.GetResult<Prisma.$WorkingDrawingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkingDrawing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkingDrawingFindUniqueOrThrowArgs} args - Arguments to find a WorkingDrawing
     * @example
     * // Get one WorkingDrawing
     * const workingDrawing = await prisma.workingDrawing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkingDrawingFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkingDrawingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkingDrawingClient<$Result.GetResult<Prisma.$WorkingDrawingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingDrawing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingDrawingFindFirstArgs} args - Arguments to find a WorkingDrawing
     * @example
     * // Get one WorkingDrawing
     * const workingDrawing = await prisma.workingDrawing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkingDrawingFindFirstArgs>(args?: SelectSubset<T, WorkingDrawingFindFirstArgs<ExtArgs>>): Prisma__WorkingDrawingClient<$Result.GetResult<Prisma.$WorkingDrawingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingDrawing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingDrawingFindFirstOrThrowArgs} args - Arguments to find a WorkingDrawing
     * @example
     * // Get one WorkingDrawing
     * const workingDrawing = await prisma.workingDrawing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkingDrawingFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkingDrawingFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkingDrawingClient<$Result.GetResult<Prisma.$WorkingDrawingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkingDrawings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingDrawingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkingDrawings
     * const workingDrawings = await prisma.workingDrawing.findMany()
     * 
     * // Get first 10 WorkingDrawings
     * const workingDrawings = await prisma.workingDrawing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workingDrawingWithIdOnly = await prisma.workingDrawing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkingDrawingFindManyArgs>(args?: SelectSubset<T, WorkingDrawingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingDrawingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkingDrawing.
     * @param {WorkingDrawingCreateArgs} args - Arguments to create a WorkingDrawing.
     * @example
     * // Create one WorkingDrawing
     * const WorkingDrawing = await prisma.workingDrawing.create({
     *   data: {
     *     // ... data to create a WorkingDrawing
     *   }
     * })
     * 
     */
    create<T extends WorkingDrawingCreateArgs>(args: SelectSubset<T, WorkingDrawingCreateArgs<ExtArgs>>): Prisma__WorkingDrawingClient<$Result.GetResult<Prisma.$WorkingDrawingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkingDrawings.
     * @param {WorkingDrawingCreateManyArgs} args - Arguments to create many WorkingDrawings.
     * @example
     * // Create many WorkingDrawings
     * const workingDrawing = await prisma.workingDrawing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkingDrawingCreateManyArgs>(args?: SelectSubset<T, WorkingDrawingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkingDrawings and returns the data saved in the database.
     * @param {WorkingDrawingCreateManyAndReturnArgs} args - Arguments to create many WorkingDrawings.
     * @example
     * // Create many WorkingDrawings
     * const workingDrawing = await prisma.workingDrawing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkingDrawings and only return the `id`
     * const workingDrawingWithIdOnly = await prisma.workingDrawing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkingDrawingCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkingDrawingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingDrawingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkingDrawing.
     * @param {WorkingDrawingDeleteArgs} args - Arguments to delete one WorkingDrawing.
     * @example
     * // Delete one WorkingDrawing
     * const WorkingDrawing = await prisma.workingDrawing.delete({
     *   where: {
     *     // ... filter to delete one WorkingDrawing
     *   }
     * })
     * 
     */
    delete<T extends WorkingDrawingDeleteArgs>(args: SelectSubset<T, WorkingDrawingDeleteArgs<ExtArgs>>): Prisma__WorkingDrawingClient<$Result.GetResult<Prisma.$WorkingDrawingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkingDrawing.
     * @param {WorkingDrawingUpdateArgs} args - Arguments to update one WorkingDrawing.
     * @example
     * // Update one WorkingDrawing
     * const workingDrawing = await prisma.workingDrawing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkingDrawingUpdateArgs>(args: SelectSubset<T, WorkingDrawingUpdateArgs<ExtArgs>>): Prisma__WorkingDrawingClient<$Result.GetResult<Prisma.$WorkingDrawingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkingDrawings.
     * @param {WorkingDrawingDeleteManyArgs} args - Arguments to filter WorkingDrawings to delete.
     * @example
     * // Delete a few WorkingDrawings
     * const { count } = await prisma.workingDrawing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkingDrawingDeleteManyArgs>(args?: SelectSubset<T, WorkingDrawingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingDrawings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingDrawingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkingDrawings
     * const workingDrawing = await prisma.workingDrawing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkingDrawingUpdateManyArgs>(args: SelectSubset<T, WorkingDrawingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingDrawings and returns the data updated in the database.
     * @param {WorkingDrawingUpdateManyAndReturnArgs} args - Arguments to update many WorkingDrawings.
     * @example
     * // Update many WorkingDrawings
     * const workingDrawing = await prisma.workingDrawing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkingDrawings and only return the `id`
     * const workingDrawingWithIdOnly = await prisma.workingDrawing.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkingDrawingUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkingDrawingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingDrawingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkingDrawing.
     * @param {WorkingDrawingUpsertArgs} args - Arguments to update or create a WorkingDrawing.
     * @example
     * // Update or create a WorkingDrawing
     * const workingDrawing = await prisma.workingDrawing.upsert({
     *   create: {
     *     // ... data to create a WorkingDrawing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkingDrawing we want to update
     *   }
     * })
     */
    upsert<T extends WorkingDrawingUpsertArgs>(args: SelectSubset<T, WorkingDrawingUpsertArgs<ExtArgs>>): Prisma__WorkingDrawingClient<$Result.GetResult<Prisma.$WorkingDrawingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkingDrawings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingDrawingCountArgs} args - Arguments to filter WorkingDrawings to count.
     * @example
     * // Count the number of WorkingDrawings
     * const count = await prisma.workingDrawing.count({
     *   where: {
     *     // ... the filter for the WorkingDrawings we want to count
     *   }
     * })
    **/
    count<T extends WorkingDrawingCountArgs>(
      args?: Subset<T, WorkingDrawingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkingDrawingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkingDrawing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingDrawingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkingDrawingAggregateArgs>(args: Subset<T, WorkingDrawingAggregateArgs>): Prisma.PrismaPromise<GetWorkingDrawingAggregateType<T>>

    /**
     * Group by WorkingDrawing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingDrawingGroupByArgs} args - Group by arguments.
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
      T extends WorkingDrawingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkingDrawingGroupByArgs['orderBy'] }
        : { orderBy?: WorkingDrawingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkingDrawingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkingDrawingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkingDrawing model
   */
  readonly fields: WorkingDrawingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkingDrawing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkingDrawingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkingDrawing model
   */
  interface WorkingDrawingFieldRefs {
    readonly id: FieldRef<"WorkingDrawing", 'String'>
    readonly name: FieldRef<"WorkingDrawing", 'String'>
    readonly projectId: FieldRef<"WorkingDrawing", 'String'>
    readonly type: FieldRef<"WorkingDrawing", 'DrawingType'>
    readonly fileUrl: FieldRef<"WorkingDrawing", 'String'>
    readonly isApproved: FieldRef<"WorkingDrawing", 'Boolean'>
    readonly createdAt: FieldRef<"WorkingDrawing", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkingDrawing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkingDrawing findUnique
   */
  export type WorkingDrawingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingDrawing
     */
    select?: WorkingDrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingDrawing
     */
    omit?: WorkingDrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingDrawingInclude<ExtArgs> | null
    /**
     * Filter, which WorkingDrawing to fetch.
     */
    where: WorkingDrawingWhereUniqueInput
  }

  /**
   * WorkingDrawing findUniqueOrThrow
   */
  export type WorkingDrawingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingDrawing
     */
    select?: WorkingDrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingDrawing
     */
    omit?: WorkingDrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingDrawingInclude<ExtArgs> | null
    /**
     * Filter, which WorkingDrawing to fetch.
     */
    where: WorkingDrawingWhereUniqueInput
  }

  /**
   * WorkingDrawing findFirst
   */
  export type WorkingDrawingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingDrawing
     */
    select?: WorkingDrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingDrawing
     */
    omit?: WorkingDrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingDrawingInclude<ExtArgs> | null
    /**
     * Filter, which WorkingDrawing to fetch.
     */
    where?: WorkingDrawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingDrawings to fetch.
     */
    orderBy?: WorkingDrawingOrderByWithRelationInput | WorkingDrawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingDrawings.
     */
    cursor?: WorkingDrawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingDrawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingDrawings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingDrawings.
     */
    distinct?: WorkingDrawingScalarFieldEnum | WorkingDrawingScalarFieldEnum[]
  }

  /**
   * WorkingDrawing findFirstOrThrow
   */
  export type WorkingDrawingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingDrawing
     */
    select?: WorkingDrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingDrawing
     */
    omit?: WorkingDrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingDrawingInclude<ExtArgs> | null
    /**
     * Filter, which WorkingDrawing to fetch.
     */
    where?: WorkingDrawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingDrawings to fetch.
     */
    orderBy?: WorkingDrawingOrderByWithRelationInput | WorkingDrawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingDrawings.
     */
    cursor?: WorkingDrawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingDrawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingDrawings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingDrawings.
     */
    distinct?: WorkingDrawingScalarFieldEnum | WorkingDrawingScalarFieldEnum[]
  }

  /**
   * WorkingDrawing findMany
   */
  export type WorkingDrawingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingDrawing
     */
    select?: WorkingDrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingDrawing
     */
    omit?: WorkingDrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingDrawingInclude<ExtArgs> | null
    /**
     * Filter, which WorkingDrawings to fetch.
     */
    where?: WorkingDrawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingDrawings to fetch.
     */
    orderBy?: WorkingDrawingOrderByWithRelationInput | WorkingDrawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkingDrawings.
     */
    cursor?: WorkingDrawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingDrawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingDrawings.
     */
    skip?: number
    distinct?: WorkingDrawingScalarFieldEnum | WorkingDrawingScalarFieldEnum[]
  }

  /**
   * WorkingDrawing create
   */
  export type WorkingDrawingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingDrawing
     */
    select?: WorkingDrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingDrawing
     */
    omit?: WorkingDrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingDrawingInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkingDrawing.
     */
    data: XOR<WorkingDrawingCreateInput, WorkingDrawingUncheckedCreateInput>
  }

  /**
   * WorkingDrawing createMany
   */
  export type WorkingDrawingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkingDrawings.
     */
    data: WorkingDrawingCreateManyInput | WorkingDrawingCreateManyInput[]
  }

  /**
   * WorkingDrawing createManyAndReturn
   */
  export type WorkingDrawingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingDrawing
     */
    select?: WorkingDrawingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingDrawing
     */
    omit?: WorkingDrawingOmit<ExtArgs> | null
    /**
     * The data used to create many WorkingDrawings.
     */
    data: WorkingDrawingCreateManyInput | WorkingDrawingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingDrawingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingDrawing update
   */
  export type WorkingDrawingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingDrawing
     */
    select?: WorkingDrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingDrawing
     */
    omit?: WorkingDrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingDrawingInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkingDrawing.
     */
    data: XOR<WorkingDrawingUpdateInput, WorkingDrawingUncheckedUpdateInput>
    /**
     * Choose, which WorkingDrawing to update.
     */
    where: WorkingDrawingWhereUniqueInput
  }

  /**
   * WorkingDrawing updateMany
   */
  export type WorkingDrawingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkingDrawings.
     */
    data: XOR<WorkingDrawingUpdateManyMutationInput, WorkingDrawingUncheckedUpdateManyInput>
    /**
     * Filter which WorkingDrawings to update
     */
    where?: WorkingDrawingWhereInput
    /**
     * Limit how many WorkingDrawings to update.
     */
    limit?: number
  }

  /**
   * WorkingDrawing updateManyAndReturn
   */
  export type WorkingDrawingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingDrawing
     */
    select?: WorkingDrawingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingDrawing
     */
    omit?: WorkingDrawingOmit<ExtArgs> | null
    /**
     * The data used to update WorkingDrawings.
     */
    data: XOR<WorkingDrawingUpdateManyMutationInput, WorkingDrawingUncheckedUpdateManyInput>
    /**
     * Filter which WorkingDrawings to update
     */
    where?: WorkingDrawingWhereInput
    /**
     * Limit how many WorkingDrawings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingDrawingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingDrawing upsert
   */
  export type WorkingDrawingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingDrawing
     */
    select?: WorkingDrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingDrawing
     */
    omit?: WorkingDrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingDrawingInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkingDrawing to update in case it exists.
     */
    where: WorkingDrawingWhereUniqueInput
    /**
     * In case the WorkingDrawing found by the `where` argument doesn't exist, create a new WorkingDrawing with this data.
     */
    create: XOR<WorkingDrawingCreateInput, WorkingDrawingUncheckedCreateInput>
    /**
     * In case the WorkingDrawing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkingDrawingUpdateInput, WorkingDrawingUncheckedUpdateInput>
  }

  /**
   * WorkingDrawing delete
   */
  export type WorkingDrawingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingDrawing
     */
    select?: WorkingDrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingDrawing
     */
    omit?: WorkingDrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingDrawingInclude<ExtArgs> | null
    /**
     * Filter which WorkingDrawing to delete.
     */
    where: WorkingDrawingWhereUniqueInput
  }

  /**
   * WorkingDrawing deleteMany
   */
  export type WorkingDrawingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingDrawings to delete
     */
    where?: WorkingDrawingWhereInput
    /**
     * Limit how many WorkingDrawings to delete.
     */
    limit?: number
  }

  /**
   * WorkingDrawing without action
   */
  export type WorkingDrawingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingDrawing
     */
    select?: WorkingDrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingDrawing
     */
    omit?: WorkingDrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingDrawingInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type MaterialSumAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    category: $Enums.MaterialCategory | null
    brand: string | null
    price: number | null
    quantity: number | null
    vendorId: string | null
    status: $Enums.MaterialStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    category: $Enums.MaterialCategory | null
    brand: string | null
    price: number | null
    quantity: number | null
    vendorId: string | null
    status: $Enums.MaterialStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    category: number
    brand: number
    price: number
    quantity: number
    vendorId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type MaterialSumAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    category?: true
    brand?: true
    price?: true
    quantity?: true
    vendorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    category?: true
    brand?: true
    price?: true
    quantity?: true
    vendorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    category?: true
    brand?: true
    price?: true
    quantity?: true
    vendorId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: string
    name: string
    projectId: string
    category: $Enums.MaterialCategory
    brand: string | null
    price: number | null
    quantity: number | null
    vendorId: string | null
    status: $Enums.MaterialStatus
    createdAt: Date
    updatedAt: Date
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    category?: boolean
    brand?: boolean
    price?: boolean
    quantity?: boolean
    vendorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    vendor?: boolean | Material$vendorArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    category?: boolean
    brand?: boolean
    price?: boolean
    quantity?: boolean
    vendorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    vendor?: boolean | Material$vendorArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    category?: boolean
    brand?: boolean
    price?: boolean
    quantity?: boolean
    vendorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    vendor?: boolean | Material$vendorArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
    category?: boolean
    brand?: boolean
    price?: boolean
    quantity?: boolean
    vendorId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "projectId" | "category" | "brand" | "price" | "quantity" | "vendorId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    vendor?: boolean | Material$vendorArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    vendor?: boolean | Material$vendorArgs<ExtArgs>
  }
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    vendor?: boolean | Material$vendorArgs<ExtArgs>
  }

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      vendor: Prisma.$VendorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      projectId: string
      category: $Enums.MaterialCategory
      brand: string | null
      price: number | null
      quantity: number | null
      vendorId: string | null
      status: $Enums.MaterialStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends Material$vendorArgs<ExtArgs> = {}>(args?: Subset<T, Material$vendorArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'String'>
    readonly name: FieldRef<"Material", 'String'>
    readonly projectId: FieldRef<"Material", 'String'>
    readonly category: FieldRef<"Material", 'MaterialCategory'>
    readonly brand: FieldRef<"Material", 'String'>
    readonly price: FieldRef<"Material", 'Float'>
    readonly quantity: FieldRef<"Material", 'Float'>
    readonly vendorId: FieldRef<"Material", 'String'>
    readonly status: FieldRef<"Material", 'MaterialStatus'>
    readonly createdAt: FieldRef<"Material", 'DateTime'>
    readonly updatedAt: FieldRef<"Material", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material.vendor
   */
  export type Material$vendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    name: string | null
    contact: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    contact: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    name: number
    contact: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VendorMinAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: string
    name: string
    contact: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: VendorCountAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    materials?: boolean | Vendor$materialsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectScalar = {
    id?: boolean
    name?: boolean
    contact?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "contact" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["vendor"]>
  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | Vendor$materialsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VendorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      materials: Prisma.$MaterialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      contact: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {VendorCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors and returns the data updated in the database.
     * @param {VendorUpdateManyAndReturnArgs} args - Arguments to update many Vendors.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.updateManyAndReturn({
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
    updateManyAndReturn<T extends VendorUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
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
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materials<T extends Vendor$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vendor model
   */
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'String'>
    readonly name: FieldRef<"Vendor", 'String'>
    readonly contact: FieldRef<"Vendor", 'String'>
    readonly address: FieldRef<"Vendor", 'String'>
    readonly createdAt: FieldRef<"Vendor", 'DateTime'>
    readonly updatedAt: FieldRef<"Vendor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
  }

  /**
   * Vendor createManyAndReturn
   */
  export type VendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor updateManyAndReturn
   */
  export type VendorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor.materials
   */
  export type Vendor$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model ExecutionTracker
   */

  export type AggregateExecutionTracker = {
    _count: ExecutionTrackerCountAggregateOutputType | null
    _avg: ExecutionTrackerAvgAggregateOutputType | null
    _sum: ExecutionTrackerSumAggregateOutputType | null
    _min: ExecutionTrackerMinAggregateOutputType | null
    _max: ExecutionTrackerMaxAggregateOutputType | null
  }

  export type ExecutionTrackerAvgAggregateOutputType = {
    progress: number | null
  }

  export type ExecutionTrackerSumAggregateOutputType = {
    progress: number | null
  }

  export type ExecutionTrackerMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    sitePreparation: boolean | null
    electrical: boolean | null
    ceiling: boolean | null
    wallConcepts: boolean | null
    progress: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExecutionTrackerMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    sitePreparation: boolean | null
    electrical: boolean | null
    ceiling: boolean | null
    wallConcepts: boolean | null
    progress: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExecutionTrackerCountAggregateOutputType = {
    id: number
    projectId: number
    sitePreparation: number
    electrical: number
    ceiling: number
    wallConcepts: number
    progress: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExecutionTrackerAvgAggregateInputType = {
    progress?: true
  }

  export type ExecutionTrackerSumAggregateInputType = {
    progress?: true
  }

  export type ExecutionTrackerMinAggregateInputType = {
    id?: true
    projectId?: true
    sitePreparation?: true
    electrical?: true
    ceiling?: true
    wallConcepts?: true
    progress?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExecutionTrackerMaxAggregateInputType = {
    id?: true
    projectId?: true
    sitePreparation?: true
    electrical?: true
    ceiling?: true
    wallConcepts?: true
    progress?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExecutionTrackerCountAggregateInputType = {
    id?: true
    projectId?: true
    sitePreparation?: true
    electrical?: true
    ceiling?: true
    wallConcepts?: true
    progress?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExecutionTrackerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionTracker to aggregate.
     */
    where?: ExecutionTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionTrackers to fetch.
     */
    orderBy?: ExecutionTrackerOrderByWithRelationInput | ExecutionTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionTrackers
    **/
    _count?: true | ExecutionTrackerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExecutionTrackerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExecutionTrackerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionTrackerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionTrackerMaxAggregateInputType
  }

  export type GetExecutionTrackerAggregateType<T extends ExecutionTrackerAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionTracker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionTracker[P]>
      : GetScalarType<T[P], AggregateExecutionTracker[P]>
  }




  export type ExecutionTrackerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionTrackerWhereInput
    orderBy?: ExecutionTrackerOrderByWithAggregationInput | ExecutionTrackerOrderByWithAggregationInput[]
    by: ExecutionTrackerScalarFieldEnum[] | ExecutionTrackerScalarFieldEnum
    having?: ExecutionTrackerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionTrackerCountAggregateInputType | true
    _avg?: ExecutionTrackerAvgAggregateInputType
    _sum?: ExecutionTrackerSumAggregateInputType
    _min?: ExecutionTrackerMinAggregateInputType
    _max?: ExecutionTrackerMaxAggregateInputType
  }

  export type ExecutionTrackerGroupByOutputType = {
    id: string
    projectId: string
    sitePreparation: boolean
    electrical: boolean
    ceiling: boolean
    wallConcepts: boolean
    progress: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExecutionTrackerCountAggregateOutputType | null
    _avg: ExecutionTrackerAvgAggregateOutputType | null
    _sum: ExecutionTrackerSumAggregateOutputType | null
    _min: ExecutionTrackerMinAggregateOutputType | null
    _max: ExecutionTrackerMaxAggregateOutputType | null
  }

  type GetExecutionTrackerGroupByPayload<T extends ExecutionTrackerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionTrackerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionTrackerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionTrackerGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionTrackerGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionTrackerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    sitePreparation?: boolean
    electrical?: boolean
    ceiling?: boolean
    wallConcepts?: boolean
    progress?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionTracker"]>

  export type ExecutionTrackerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    sitePreparation?: boolean
    electrical?: boolean
    ceiling?: boolean
    wallConcepts?: boolean
    progress?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionTracker"]>

  export type ExecutionTrackerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    sitePreparation?: boolean
    electrical?: boolean
    ceiling?: boolean
    wallConcepts?: boolean
    progress?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionTracker"]>

  export type ExecutionTrackerSelectScalar = {
    id?: boolean
    projectId?: boolean
    sitePreparation?: boolean
    electrical?: boolean
    ceiling?: boolean
    wallConcepts?: boolean
    progress?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExecutionTrackerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "sitePreparation" | "electrical" | "ceiling" | "wallConcepts" | "progress" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["executionTracker"]>
  export type ExecutionTrackerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ExecutionTrackerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ExecutionTrackerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ExecutionTrackerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionTracker"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      sitePreparation: boolean
      electrical: boolean
      ceiling: boolean
      wallConcepts: boolean
      progress: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["executionTracker"]>
    composites: {}
  }

  type ExecutionTrackerGetPayload<S extends boolean | null | undefined | ExecutionTrackerDefaultArgs> = $Result.GetResult<Prisma.$ExecutionTrackerPayload, S>

  type ExecutionTrackerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutionTrackerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionTrackerCountAggregateInputType | true
    }

  export interface ExecutionTrackerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionTracker'], meta: { name: 'ExecutionTracker' } }
    /**
     * Find zero or one ExecutionTracker that matches the filter.
     * @param {ExecutionTrackerFindUniqueArgs} args - Arguments to find a ExecutionTracker
     * @example
     * // Get one ExecutionTracker
     * const executionTracker = await prisma.executionTracker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionTrackerFindUniqueArgs>(args: SelectSubset<T, ExecutionTrackerFindUniqueArgs<ExtArgs>>): Prisma__ExecutionTrackerClient<$Result.GetResult<Prisma.$ExecutionTrackerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExecutionTracker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutionTrackerFindUniqueOrThrowArgs} args - Arguments to find a ExecutionTracker
     * @example
     * // Get one ExecutionTracker
     * const executionTracker = await prisma.executionTracker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionTrackerFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionTrackerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionTrackerClient<$Result.GetResult<Prisma.$ExecutionTrackerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionTracker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionTrackerFindFirstArgs} args - Arguments to find a ExecutionTracker
     * @example
     * // Get one ExecutionTracker
     * const executionTracker = await prisma.executionTracker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionTrackerFindFirstArgs>(args?: SelectSubset<T, ExecutionTrackerFindFirstArgs<ExtArgs>>): Prisma__ExecutionTrackerClient<$Result.GetResult<Prisma.$ExecutionTrackerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionTracker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionTrackerFindFirstOrThrowArgs} args - Arguments to find a ExecutionTracker
     * @example
     * // Get one ExecutionTracker
     * const executionTracker = await prisma.executionTracker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionTrackerFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionTrackerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionTrackerClient<$Result.GetResult<Prisma.$ExecutionTrackerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExecutionTrackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionTrackerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionTrackers
     * const executionTrackers = await prisma.executionTracker.findMany()
     * 
     * // Get first 10 ExecutionTrackers
     * const executionTrackers = await prisma.executionTracker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionTrackerWithIdOnly = await prisma.executionTracker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionTrackerFindManyArgs>(args?: SelectSubset<T, ExecutionTrackerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionTrackerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExecutionTracker.
     * @param {ExecutionTrackerCreateArgs} args - Arguments to create a ExecutionTracker.
     * @example
     * // Create one ExecutionTracker
     * const ExecutionTracker = await prisma.executionTracker.create({
     *   data: {
     *     // ... data to create a ExecutionTracker
     *   }
     * })
     * 
     */
    create<T extends ExecutionTrackerCreateArgs>(args: SelectSubset<T, ExecutionTrackerCreateArgs<ExtArgs>>): Prisma__ExecutionTrackerClient<$Result.GetResult<Prisma.$ExecutionTrackerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExecutionTrackers.
     * @param {ExecutionTrackerCreateManyArgs} args - Arguments to create many ExecutionTrackers.
     * @example
     * // Create many ExecutionTrackers
     * const executionTracker = await prisma.executionTracker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionTrackerCreateManyArgs>(args?: SelectSubset<T, ExecutionTrackerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionTrackers and returns the data saved in the database.
     * @param {ExecutionTrackerCreateManyAndReturnArgs} args - Arguments to create many ExecutionTrackers.
     * @example
     * // Create many ExecutionTrackers
     * const executionTracker = await prisma.executionTracker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionTrackers and only return the `id`
     * const executionTrackerWithIdOnly = await prisma.executionTracker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionTrackerCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionTrackerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionTrackerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExecutionTracker.
     * @param {ExecutionTrackerDeleteArgs} args - Arguments to delete one ExecutionTracker.
     * @example
     * // Delete one ExecutionTracker
     * const ExecutionTracker = await prisma.executionTracker.delete({
     *   where: {
     *     // ... filter to delete one ExecutionTracker
     *   }
     * })
     * 
     */
    delete<T extends ExecutionTrackerDeleteArgs>(args: SelectSubset<T, ExecutionTrackerDeleteArgs<ExtArgs>>): Prisma__ExecutionTrackerClient<$Result.GetResult<Prisma.$ExecutionTrackerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExecutionTracker.
     * @param {ExecutionTrackerUpdateArgs} args - Arguments to update one ExecutionTracker.
     * @example
     * // Update one ExecutionTracker
     * const executionTracker = await prisma.executionTracker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionTrackerUpdateArgs>(args: SelectSubset<T, ExecutionTrackerUpdateArgs<ExtArgs>>): Prisma__ExecutionTrackerClient<$Result.GetResult<Prisma.$ExecutionTrackerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExecutionTrackers.
     * @param {ExecutionTrackerDeleteManyArgs} args - Arguments to filter ExecutionTrackers to delete.
     * @example
     * // Delete a few ExecutionTrackers
     * const { count } = await prisma.executionTracker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionTrackerDeleteManyArgs>(args?: SelectSubset<T, ExecutionTrackerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionTrackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionTrackerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionTrackers
     * const executionTracker = await prisma.executionTracker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionTrackerUpdateManyArgs>(args: SelectSubset<T, ExecutionTrackerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionTrackers and returns the data updated in the database.
     * @param {ExecutionTrackerUpdateManyAndReturnArgs} args - Arguments to update many ExecutionTrackers.
     * @example
     * // Update many ExecutionTrackers
     * const executionTracker = await prisma.executionTracker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExecutionTrackers and only return the `id`
     * const executionTrackerWithIdOnly = await prisma.executionTracker.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExecutionTrackerUpdateManyAndReturnArgs>(args: SelectSubset<T, ExecutionTrackerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionTrackerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExecutionTracker.
     * @param {ExecutionTrackerUpsertArgs} args - Arguments to update or create a ExecutionTracker.
     * @example
     * // Update or create a ExecutionTracker
     * const executionTracker = await prisma.executionTracker.upsert({
     *   create: {
     *     // ... data to create a ExecutionTracker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionTracker we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionTrackerUpsertArgs>(args: SelectSubset<T, ExecutionTrackerUpsertArgs<ExtArgs>>): Prisma__ExecutionTrackerClient<$Result.GetResult<Prisma.$ExecutionTrackerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExecutionTrackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionTrackerCountArgs} args - Arguments to filter ExecutionTrackers to count.
     * @example
     * // Count the number of ExecutionTrackers
     * const count = await prisma.executionTracker.count({
     *   where: {
     *     // ... the filter for the ExecutionTrackers we want to count
     *   }
     * })
    **/
    count<T extends ExecutionTrackerCountArgs>(
      args?: Subset<T, ExecutionTrackerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionTrackerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionTracker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionTrackerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExecutionTrackerAggregateArgs>(args: Subset<T, ExecutionTrackerAggregateArgs>): Prisma.PrismaPromise<GetExecutionTrackerAggregateType<T>>

    /**
     * Group by ExecutionTracker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionTrackerGroupByArgs} args - Group by arguments.
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
      T extends ExecutionTrackerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionTrackerGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionTrackerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExecutionTrackerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionTrackerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionTracker model
   */
  readonly fields: ExecutionTrackerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionTracker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionTrackerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExecutionTracker model
   */
  interface ExecutionTrackerFieldRefs {
    readonly id: FieldRef<"ExecutionTracker", 'String'>
    readonly projectId: FieldRef<"ExecutionTracker", 'String'>
    readonly sitePreparation: FieldRef<"ExecutionTracker", 'Boolean'>
    readonly electrical: FieldRef<"ExecutionTracker", 'Boolean'>
    readonly ceiling: FieldRef<"ExecutionTracker", 'Boolean'>
    readonly wallConcepts: FieldRef<"ExecutionTracker", 'Boolean'>
    readonly progress: FieldRef<"ExecutionTracker", 'Int'>
    readonly notes: FieldRef<"ExecutionTracker", 'String'>
    readonly createdAt: FieldRef<"ExecutionTracker", 'DateTime'>
    readonly updatedAt: FieldRef<"ExecutionTracker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionTracker findUnique
   */
  export type ExecutionTrackerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionTracker
     */
    select?: ExecutionTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionTracker
     */
    omit?: ExecutionTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionTracker to fetch.
     */
    where: ExecutionTrackerWhereUniqueInput
  }

  /**
   * ExecutionTracker findUniqueOrThrow
   */
  export type ExecutionTrackerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionTracker
     */
    select?: ExecutionTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionTracker
     */
    omit?: ExecutionTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionTracker to fetch.
     */
    where: ExecutionTrackerWhereUniqueInput
  }

  /**
   * ExecutionTracker findFirst
   */
  export type ExecutionTrackerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionTracker
     */
    select?: ExecutionTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionTracker
     */
    omit?: ExecutionTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionTracker to fetch.
     */
    where?: ExecutionTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionTrackers to fetch.
     */
    orderBy?: ExecutionTrackerOrderByWithRelationInput | ExecutionTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionTrackers.
     */
    cursor?: ExecutionTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionTrackers.
     */
    distinct?: ExecutionTrackerScalarFieldEnum | ExecutionTrackerScalarFieldEnum[]
  }

  /**
   * ExecutionTracker findFirstOrThrow
   */
  export type ExecutionTrackerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionTracker
     */
    select?: ExecutionTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionTracker
     */
    omit?: ExecutionTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionTracker to fetch.
     */
    where?: ExecutionTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionTrackers to fetch.
     */
    orderBy?: ExecutionTrackerOrderByWithRelationInput | ExecutionTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionTrackers.
     */
    cursor?: ExecutionTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionTrackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionTrackers.
     */
    distinct?: ExecutionTrackerScalarFieldEnum | ExecutionTrackerScalarFieldEnum[]
  }

  /**
   * ExecutionTracker findMany
   */
  export type ExecutionTrackerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionTracker
     */
    select?: ExecutionTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionTracker
     */
    omit?: ExecutionTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionTrackerInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionTrackers to fetch.
     */
    where?: ExecutionTrackerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionTrackers to fetch.
     */
    orderBy?: ExecutionTrackerOrderByWithRelationInput | ExecutionTrackerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionTrackers.
     */
    cursor?: ExecutionTrackerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionTrackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionTrackers.
     */
    skip?: number
    distinct?: ExecutionTrackerScalarFieldEnum | ExecutionTrackerScalarFieldEnum[]
  }

  /**
   * ExecutionTracker create
   */
  export type ExecutionTrackerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionTracker
     */
    select?: ExecutionTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionTracker
     */
    omit?: ExecutionTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionTrackerInclude<ExtArgs> | null
    /**
     * The data needed to create a ExecutionTracker.
     */
    data: XOR<ExecutionTrackerCreateInput, ExecutionTrackerUncheckedCreateInput>
  }

  /**
   * ExecutionTracker createMany
   */
  export type ExecutionTrackerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionTrackers.
     */
    data: ExecutionTrackerCreateManyInput | ExecutionTrackerCreateManyInput[]
  }

  /**
   * ExecutionTracker createManyAndReturn
   */
  export type ExecutionTrackerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionTracker
     */
    select?: ExecutionTrackerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionTracker
     */
    omit?: ExecutionTrackerOmit<ExtArgs> | null
    /**
     * The data used to create many ExecutionTrackers.
     */
    data: ExecutionTrackerCreateManyInput | ExecutionTrackerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionTrackerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionTracker update
   */
  export type ExecutionTrackerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionTracker
     */
    select?: ExecutionTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionTracker
     */
    omit?: ExecutionTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionTrackerInclude<ExtArgs> | null
    /**
     * The data needed to update a ExecutionTracker.
     */
    data: XOR<ExecutionTrackerUpdateInput, ExecutionTrackerUncheckedUpdateInput>
    /**
     * Choose, which ExecutionTracker to update.
     */
    where: ExecutionTrackerWhereUniqueInput
  }

  /**
   * ExecutionTracker updateMany
   */
  export type ExecutionTrackerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionTrackers.
     */
    data: XOR<ExecutionTrackerUpdateManyMutationInput, ExecutionTrackerUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionTrackers to update
     */
    where?: ExecutionTrackerWhereInput
    /**
     * Limit how many ExecutionTrackers to update.
     */
    limit?: number
  }

  /**
   * ExecutionTracker updateManyAndReturn
   */
  export type ExecutionTrackerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionTracker
     */
    select?: ExecutionTrackerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionTracker
     */
    omit?: ExecutionTrackerOmit<ExtArgs> | null
    /**
     * The data used to update ExecutionTrackers.
     */
    data: XOR<ExecutionTrackerUpdateManyMutationInput, ExecutionTrackerUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionTrackers to update
     */
    where?: ExecutionTrackerWhereInput
    /**
     * Limit how many ExecutionTrackers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionTrackerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionTracker upsert
   */
  export type ExecutionTrackerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionTracker
     */
    select?: ExecutionTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionTracker
     */
    omit?: ExecutionTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionTrackerInclude<ExtArgs> | null
    /**
     * The filter to search for the ExecutionTracker to update in case it exists.
     */
    where: ExecutionTrackerWhereUniqueInput
    /**
     * In case the ExecutionTracker found by the `where` argument doesn't exist, create a new ExecutionTracker with this data.
     */
    create: XOR<ExecutionTrackerCreateInput, ExecutionTrackerUncheckedCreateInput>
    /**
     * In case the ExecutionTracker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionTrackerUpdateInput, ExecutionTrackerUncheckedUpdateInput>
  }

  /**
   * ExecutionTracker delete
   */
  export type ExecutionTrackerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionTracker
     */
    select?: ExecutionTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionTracker
     */
    omit?: ExecutionTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionTrackerInclude<ExtArgs> | null
    /**
     * Filter which ExecutionTracker to delete.
     */
    where: ExecutionTrackerWhereUniqueInput
  }

  /**
   * ExecutionTracker deleteMany
   */
  export type ExecutionTrackerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionTrackers to delete
     */
    where?: ExecutionTrackerWhereInput
    /**
     * Limit how many ExecutionTrackers to delete.
     */
    limit?: number
  }

  /**
   * ExecutionTracker without action
   */
  export type ExecutionTrackerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionTracker
     */
    select?: ExecutionTrackerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionTracker
     */
    omit?: ExecutionTrackerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionTrackerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    spaceType: 'spaceType',
    size: 'size',
    budget: 'budget',
    userId: 'userId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const LayoutScalarFieldEnum: {
    id: 'id',
    name: 'name',
    projectId: 'projectId',
    layoutData: 'layoutData',
    isApproved: 'isApproved',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LayoutScalarFieldEnum = (typeof LayoutScalarFieldEnum)[keyof typeof LayoutScalarFieldEnum]


  export const MoodBoardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    projectId: 'projectId',
    styleType: 'styleType',
    isApproved: 'isApproved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MoodBoardScalarFieldEnum = (typeof MoodBoardScalarFieldEnum)[keyof typeof MoodBoardScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    caption: 'caption',
    moodBoardId: 'moodBoardId',
    createdAt: 'createdAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const WorkingDrawingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    projectId: 'projectId',
    type: 'type',
    fileUrl: 'fileUrl',
    isApproved: 'isApproved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkingDrawingScalarFieldEnum = (typeof WorkingDrawingScalarFieldEnum)[keyof typeof WorkingDrawingScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    projectId: 'projectId',
    category: 'category',
    brand: 'brand',
    price: 'price',
    quantity: 'quantity',
    vendorId: 'vendorId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contact: 'contact',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const ExecutionTrackerScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    sitePreparation: 'sitePreparation',
    electrical: 'electrical',
    ceiling: 'ceiling',
    wallConcepts: 'wallConcepts',
    progress: 'progress',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExecutionTrackerScalarFieldEnum = (typeof ExecutionTrackerScalarFieldEnum)[keyof typeof ExecutionTrackerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DrawingType'
   */
  export type EnumDrawingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DrawingType'>
    


  /**
   * Reference to a field of type 'MaterialCategory'
   */
  export type EnumMaterialCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaterialCategory'>
    


  /**
   * Reference to a field of type 'MaterialStatus'
   */
  export type EnumMaterialStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaterialStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    spaceType?: StringFilter<"Project"> | string
    size?: FloatFilter<"Project"> | number
    budget?: FloatFilter<"Project"> | number
    userId?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    layouts?: LayoutListRelationFilter
    moodBoards?: MoodBoardListRelationFilter
    workingDrawings?: WorkingDrawingListRelationFilter
    materials?: MaterialListRelationFilter
    executionTracker?: XOR<ExecutionTrackerNullableScalarRelationFilter, ExecutionTrackerWhereInput> | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    spaceType?: SortOrder
    size?: SortOrder
    budget?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    layouts?: LayoutOrderByRelationAggregateInput
    moodBoards?: MoodBoardOrderByRelationAggregateInput
    workingDrawings?: WorkingDrawingOrderByRelationAggregateInput
    materials?: MaterialOrderByRelationAggregateInput
    executionTracker?: ExecutionTrackerOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    spaceType?: StringFilter<"Project"> | string
    size?: FloatFilter<"Project"> | number
    budget?: FloatFilter<"Project"> | number
    userId?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    layouts?: LayoutListRelationFilter
    moodBoards?: MoodBoardListRelationFilter
    workingDrawings?: WorkingDrawingListRelationFilter
    materials?: MaterialListRelationFilter
    executionTracker?: XOR<ExecutionTrackerNullableScalarRelationFilter, ExecutionTrackerWhereInput> | null
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    spaceType?: SortOrder
    size?: SortOrder
    budget?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    spaceType?: StringWithAggregatesFilter<"Project"> | string
    size?: FloatWithAggregatesFilter<"Project"> | number
    budget?: FloatWithAggregatesFilter<"Project"> | number
    userId?: StringWithAggregatesFilter<"Project"> | string
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type LayoutWhereInput = {
    AND?: LayoutWhereInput | LayoutWhereInput[]
    OR?: LayoutWhereInput[]
    NOT?: LayoutWhereInput | LayoutWhereInput[]
    id?: StringFilter<"Layout"> | string
    name?: StringFilter<"Layout"> | string
    projectId?: StringFilter<"Layout"> | string
    layoutData?: StringFilter<"Layout"> | string
    isApproved?: BoolFilter<"Layout"> | boolean
    version?: IntFilter<"Layout"> | number
    createdAt?: DateTimeFilter<"Layout"> | Date | string
    updatedAt?: DateTimeFilter<"Layout"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type LayoutOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    layoutData?: SortOrder
    isApproved?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type LayoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LayoutWhereInput | LayoutWhereInput[]
    OR?: LayoutWhereInput[]
    NOT?: LayoutWhereInput | LayoutWhereInput[]
    name?: StringFilter<"Layout"> | string
    projectId?: StringFilter<"Layout"> | string
    layoutData?: StringFilter<"Layout"> | string
    isApproved?: BoolFilter<"Layout"> | boolean
    version?: IntFilter<"Layout"> | number
    createdAt?: DateTimeFilter<"Layout"> | Date | string
    updatedAt?: DateTimeFilter<"Layout"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type LayoutOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    layoutData?: SortOrder
    isApproved?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LayoutCountOrderByAggregateInput
    _avg?: LayoutAvgOrderByAggregateInput
    _max?: LayoutMaxOrderByAggregateInput
    _min?: LayoutMinOrderByAggregateInput
    _sum?: LayoutSumOrderByAggregateInput
  }

  export type LayoutScalarWhereWithAggregatesInput = {
    AND?: LayoutScalarWhereWithAggregatesInput | LayoutScalarWhereWithAggregatesInput[]
    OR?: LayoutScalarWhereWithAggregatesInput[]
    NOT?: LayoutScalarWhereWithAggregatesInput | LayoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Layout"> | string
    name?: StringWithAggregatesFilter<"Layout"> | string
    projectId?: StringWithAggregatesFilter<"Layout"> | string
    layoutData?: StringWithAggregatesFilter<"Layout"> | string
    isApproved?: BoolWithAggregatesFilter<"Layout"> | boolean
    version?: IntWithAggregatesFilter<"Layout"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Layout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Layout"> | Date | string
  }

  export type MoodBoardWhereInput = {
    AND?: MoodBoardWhereInput | MoodBoardWhereInput[]
    OR?: MoodBoardWhereInput[]
    NOT?: MoodBoardWhereInput | MoodBoardWhereInput[]
    id?: StringFilter<"MoodBoard"> | string
    name?: StringFilter<"MoodBoard"> | string
    projectId?: StringFilter<"MoodBoard"> | string
    styleType?: StringFilter<"MoodBoard"> | string
    isApproved?: BoolFilter<"MoodBoard"> | boolean
    createdAt?: DateTimeFilter<"MoodBoard"> | Date | string
    updatedAt?: DateTimeFilter<"MoodBoard"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    images?: ImageListRelationFilter
  }

  export type MoodBoardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    styleType?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
  }

  export type MoodBoardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoodBoardWhereInput | MoodBoardWhereInput[]
    OR?: MoodBoardWhereInput[]
    NOT?: MoodBoardWhereInput | MoodBoardWhereInput[]
    name?: StringFilter<"MoodBoard"> | string
    projectId?: StringFilter<"MoodBoard"> | string
    styleType?: StringFilter<"MoodBoard"> | string
    isApproved?: BoolFilter<"MoodBoard"> | boolean
    createdAt?: DateTimeFilter<"MoodBoard"> | Date | string
    updatedAt?: DateTimeFilter<"MoodBoard"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    images?: ImageListRelationFilter
  }, "id">

  export type MoodBoardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    styleType?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MoodBoardCountOrderByAggregateInput
    _max?: MoodBoardMaxOrderByAggregateInput
    _min?: MoodBoardMinOrderByAggregateInput
  }

  export type MoodBoardScalarWhereWithAggregatesInput = {
    AND?: MoodBoardScalarWhereWithAggregatesInput | MoodBoardScalarWhereWithAggregatesInput[]
    OR?: MoodBoardScalarWhereWithAggregatesInput[]
    NOT?: MoodBoardScalarWhereWithAggregatesInput | MoodBoardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MoodBoard"> | string
    name?: StringWithAggregatesFilter<"MoodBoard"> | string
    projectId?: StringWithAggregatesFilter<"MoodBoard"> | string
    styleType?: StringWithAggregatesFilter<"MoodBoard"> | string
    isApproved?: BoolWithAggregatesFilter<"MoodBoard"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MoodBoard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MoodBoard"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    caption?: StringNullableFilter<"Image"> | string | null
    moodBoardId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    moodBoard?: XOR<MoodBoardScalarRelationFilter, MoodBoardWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    moodBoardId?: SortOrder
    createdAt?: SortOrder
    moodBoard?: MoodBoardOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    caption?: StringNullableFilter<"Image"> | string | null
    moodBoardId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    moodBoard?: XOR<MoodBoardScalarRelationFilter, MoodBoardWhereInput>
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    moodBoardId?: SortOrder
    createdAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    caption?: StringNullableWithAggregatesFilter<"Image"> | string | null
    moodBoardId?: StringWithAggregatesFilter<"Image"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type WorkingDrawingWhereInput = {
    AND?: WorkingDrawingWhereInput | WorkingDrawingWhereInput[]
    OR?: WorkingDrawingWhereInput[]
    NOT?: WorkingDrawingWhereInput | WorkingDrawingWhereInput[]
    id?: StringFilter<"WorkingDrawing"> | string
    name?: StringFilter<"WorkingDrawing"> | string
    projectId?: StringFilter<"WorkingDrawing"> | string
    type?: EnumDrawingTypeFilter<"WorkingDrawing"> | $Enums.DrawingType
    fileUrl?: StringFilter<"WorkingDrawing"> | string
    isApproved?: BoolFilter<"WorkingDrawing"> | boolean
    createdAt?: DateTimeFilter<"WorkingDrawing"> | Date | string
    updatedAt?: DateTimeFilter<"WorkingDrawing"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type WorkingDrawingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type WorkingDrawingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkingDrawingWhereInput | WorkingDrawingWhereInput[]
    OR?: WorkingDrawingWhereInput[]
    NOT?: WorkingDrawingWhereInput | WorkingDrawingWhereInput[]
    name?: StringFilter<"WorkingDrawing"> | string
    projectId?: StringFilter<"WorkingDrawing"> | string
    type?: EnumDrawingTypeFilter<"WorkingDrawing"> | $Enums.DrawingType
    fileUrl?: StringFilter<"WorkingDrawing"> | string
    isApproved?: BoolFilter<"WorkingDrawing"> | boolean
    createdAt?: DateTimeFilter<"WorkingDrawing"> | Date | string
    updatedAt?: DateTimeFilter<"WorkingDrawing"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type WorkingDrawingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkingDrawingCountOrderByAggregateInput
    _max?: WorkingDrawingMaxOrderByAggregateInput
    _min?: WorkingDrawingMinOrderByAggregateInput
  }

  export type WorkingDrawingScalarWhereWithAggregatesInput = {
    AND?: WorkingDrawingScalarWhereWithAggregatesInput | WorkingDrawingScalarWhereWithAggregatesInput[]
    OR?: WorkingDrawingScalarWhereWithAggregatesInput[]
    NOT?: WorkingDrawingScalarWhereWithAggregatesInput | WorkingDrawingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkingDrawing"> | string
    name?: StringWithAggregatesFilter<"WorkingDrawing"> | string
    projectId?: StringWithAggregatesFilter<"WorkingDrawing"> | string
    type?: EnumDrawingTypeWithAggregatesFilter<"WorkingDrawing"> | $Enums.DrawingType
    fileUrl?: StringWithAggregatesFilter<"WorkingDrawing"> | string
    isApproved?: BoolWithAggregatesFilter<"WorkingDrawing"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WorkingDrawing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkingDrawing"> | Date | string
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: StringFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    projectId?: StringFilter<"Material"> | string
    category?: EnumMaterialCategoryFilter<"Material"> | $Enums.MaterialCategory
    brand?: StringNullableFilter<"Material"> | string | null
    price?: FloatNullableFilter<"Material"> | number | null
    quantity?: FloatNullableFilter<"Material"> | number | null
    vendorId?: StringNullableFilter<"Material"> | string | null
    status?: EnumMaterialStatusFilter<"Material"> | $Enums.MaterialStatus
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    category?: SortOrder
    brand?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    vendorId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    name?: StringFilter<"Material"> | string
    projectId?: StringFilter<"Material"> | string
    category?: EnumMaterialCategoryFilter<"Material"> | $Enums.MaterialCategory
    brand?: StringNullableFilter<"Material"> | string | null
    price?: FloatNullableFilter<"Material"> | number | null
    quantity?: FloatNullableFilter<"Material"> | number | null
    vendorId?: StringNullableFilter<"Material"> | string | null
    status?: EnumMaterialStatusFilter<"Material"> | $Enums.MaterialStatus
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    category?: SortOrder
    brand?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    vendorId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Material"> | string
    name?: StringWithAggregatesFilter<"Material"> | string
    projectId?: StringWithAggregatesFilter<"Material"> | string
    category?: EnumMaterialCategoryWithAggregatesFilter<"Material"> | $Enums.MaterialCategory
    brand?: StringNullableWithAggregatesFilter<"Material"> | string | null
    price?: FloatNullableWithAggregatesFilter<"Material"> | number | null
    quantity?: FloatNullableWithAggregatesFilter<"Material"> | number | null
    vendorId?: StringNullableWithAggregatesFilter<"Material"> | string | null
    status?: EnumMaterialStatusWithAggregatesFilter<"Material"> | $Enums.MaterialStatus
    createdAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
  }

  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: StringFilter<"Vendor"> | string
    name?: StringFilter<"Vendor"> | string
    contact?: StringNullableFilter<"Vendor"> | string | null
    address?: StringNullableFilter<"Vendor"> | string | null
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    materials?: MaterialListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    materials?: MaterialOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    name?: StringFilter<"Vendor"> | string
    contact?: StringNullableFilter<"Vendor"> | string | null
    address?: StringNullableFilter<"Vendor"> | string | null
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    materials?: MaterialListRelationFilter
  }, "id">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vendor"> | string
    name?: StringWithAggregatesFilter<"Vendor"> | string
    contact?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    address?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
  }

  export type ExecutionTrackerWhereInput = {
    AND?: ExecutionTrackerWhereInput | ExecutionTrackerWhereInput[]
    OR?: ExecutionTrackerWhereInput[]
    NOT?: ExecutionTrackerWhereInput | ExecutionTrackerWhereInput[]
    id?: StringFilter<"ExecutionTracker"> | string
    projectId?: StringFilter<"ExecutionTracker"> | string
    sitePreparation?: BoolFilter<"ExecutionTracker"> | boolean
    electrical?: BoolFilter<"ExecutionTracker"> | boolean
    ceiling?: BoolFilter<"ExecutionTracker"> | boolean
    wallConcepts?: BoolFilter<"ExecutionTracker"> | boolean
    progress?: IntFilter<"ExecutionTracker"> | number
    notes?: StringNullableFilter<"ExecutionTracker"> | string | null
    createdAt?: DateTimeFilter<"ExecutionTracker"> | Date | string
    updatedAt?: DateTimeFilter<"ExecutionTracker"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ExecutionTrackerOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    sitePreparation?: SortOrder
    electrical?: SortOrder
    ceiling?: SortOrder
    wallConcepts?: SortOrder
    progress?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ExecutionTrackerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: ExecutionTrackerWhereInput | ExecutionTrackerWhereInput[]
    OR?: ExecutionTrackerWhereInput[]
    NOT?: ExecutionTrackerWhereInput | ExecutionTrackerWhereInput[]
    sitePreparation?: BoolFilter<"ExecutionTracker"> | boolean
    electrical?: BoolFilter<"ExecutionTracker"> | boolean
    ceiling?: BoolFilter<"ExecutionTracker"> | boolean
    wallConcepts?: BoolFilter<"ExecutionTracker"> | boolean
    progress?: IntFilter<"ExecutionTracker"> | number
    notes?: StringNullableFilter<"ExecutionTracker"> | string | null
    createdAt?: DateTimeFilter<"ExecutionTracker"> | Date | string
    updatedAt?: DateTimeFilter<"ExecutionTracker"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type ExecutionTrackerOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    sitePreparation?: SortOrder
    electrical?: SortOrder
    ceiling?: SortOrder
    wallConcepts?: SortOrder
    progress?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExecutionTrackerCountOrderByAggregateInput
    _avg?: ExecutionTrackerAvgOrderByAggregateInput
    _max?: ExecutionTrackerMaxOrderByAggregateInput
    _min?: ExecutionTrackerMinOrderByAggregateInput
    _sum?: ExecutionTrackerSumOrderByAggregateInput
  }

  export type ExecutionTrackerScalarWhereWithAggregatesInput = {
    AND?: ExecutionTrackerScalarWhereWithAggregatesInput | ExecutionTrackerScalarWhereWithAggregatesInput[]
    OR?: ExecutionTrackerScalarWhereWithAggregatesInput[]
    NOT?: ExecutionTrackerScalarWhereWithAggregatesInput | ExecutionTrackerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecutionTracker"> | string
    projectId?: StringWithAggregatesFilter<"ExecutionTracker"> | string
    sitePreparation?: BoolWithAggregatesFilter<"ExecutionTracker"> | boolean
    electrical?: BoolWithAggregatesFilter<"ExecutionTracker"> | boolean
    ceiling?: BoolWithAggregatesFilter<"ExecutionTracker"> | boolean
    wallConcepts?: BoolWithAggregatesFilter<"ExecutionTracker"> | boolean
    progress?: IntWithAggregatesFilter<"ExecutionTracker"> | number
    notes?: StringNullableWithAggregatesFilter<"ExecutionTracker"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ExecutionTracker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExecutionTracker"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    layouts?: LayoutCreateNestedManyWithoutProjectInput
    moodBoards?: MoodBoardCreateNestedManyWithoutProjectInput
    workingDrawings?: WorkingDrawingCreateNestedManyWithoutProjectInput
    materials?: MaterialCreateNestedManyWithoutProjectInput
    executionTracker?: ExecutionTrackerCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    userId: string
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    layouts?: LayoutUncheckedCreateNestedManyWithoutProjectInput
    moodBoards?: MoodBoardUncheckedCreateNestedManyWithoutProjectInput
    workingDrawings?: WorkingDrawingUncheckedCreateNestedManyWithoutProjectInput
    materials?: MaterialUncheckedCreateNestedManyWithoutProjectInput
    executionTracker?: ExecutionTrackerUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    layouts?: LayoutUpdateManyWithoutProjectNestedInput
    moodBoards?: MoodBoardUpdateManyWithoutProjectNestedInput
    workingDrawings?: WorkingDrawingUpdateManyWithoutProjectNestedInput
    materials?: MaterialUpdateManyWithoutProjectNestedInput
    executionTracker?: ExecutionTrackerUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layouts?: LayoutUncheckedUpdateManyWithoutProjectNestedInput
    moodBoards?: MoodBoardUncheckedUpdateManyWithoutProjectNestedInput
    workingDrawings?: WorkingDrawingUncheckedUpdateManyWithoutProjectNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutProjectNestedInput
    executionTracker?: ExecutionTrackerUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    userId: string
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayoutCreateInput = {
    id?: string
    name: string
    layoutData: string
    isApproved?: boolean
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutLayoutsInput
  }

  export type LayoutUncheckedCreateInput = {
    id?: string
    name: string
    projectId: string
    layoutData: string
    isApproved?: boolean
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LayoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    layoutData?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutLayoutsNestedInput
  }

  export type LayoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    layoutData?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayoutCreateManyInput = {
    id?: string
    name: string
    projectId: string
    layoutData: string
    isApproved?: boolean
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LayoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    layoutData?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    layoutData?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodBoardCreateInput = {
    id?: string
    name: string
    styleType: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMoodBoardsInput
    images?: ImageCreateNestedManyWithoutMoodBoardInput
  }

  export type MoodBoardUncheckedCreateInput = {
    id?: string
    name: string
    projectId: string
    styleType: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutMoodBoardInput
  }

  export type MoodBoardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    styleType?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMoodBoardsNestedInput
    images?: ImageUpdateManyWithoutMoodBoardNestedInput
  }

  export type MoodBoardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    styleType?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutMoodBoardNestedInput
  }

  export type MoodBoardCreateManyInput = {
    id?: string
    name: string
    projectId: string
    styleType: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoodBoardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    styleType?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodBoardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    styleType?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    caption?: string | null
    createdAt?: Date | string
    moodBoard: MoodBoardCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    url: string
    caption?: string | null
    moodBoardId: string
    createdAt?: Date | string
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moodBoard?: MoodBoardUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    moodBoardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    id?: string
    url: string
    caption?: string | null
    moodBoardId: string
    createdAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    moodBoardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingDrawingCreateInput = {
    id?: string
    name: string
    type: $Enums.DrawingType
    fileUrl: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutWorkingDrawingsInput
  }

  export type WorkingDrawingUncheckedCreateInput = {
    id?: string
    name: string
    projectId: string
    type: $Enums.DrawingType
    fileUrl: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingDrawingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDrawingTypeFieldUpdateOperationsInput | $Enums.DrawingType
    fileUrl?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutWorkingDrawingsNestedInput
  }

  export type WorkingDrawingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumDrawingTypeFieldUpdateOperationsInput | $Enums.DrawingType
    fileUrl?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingDrawingCreateManyInput = {
    id?: string
    name: string
    projectId: string
    type: $Enums.DrawingType
    fileUrl: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingDrawingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDrawingTypeFieldUpdateOperationsInput | $Enums.DrawingType
    fileUrl?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingDrawingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumDrawingTypeFieldUpdateOperationsInput | $Enums.DrawingType
    fileUrl?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateInput = {
    id?: string
    name: string
    category: $Enums.MaterialCategory
    brand?: string | null
    price?: number | null
    quantity?: number | null
    status?: $Enums.MaterialStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMaterialsInput
    vendor?: VendorCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: string
    name: string
    projectId: string
    category: $Enums.MaterialCategory
    brand?: string | null
    price?: number | null
    quantity?: number | null
    vendorId?: string | null
    status?: $Enums.MaterialStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMaterialCategoryFieldUpdateOperationsInput | $Enums.MaterialCategory
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMaterialsNestedInput
    vendor?: VendorUpdateOneWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    category?: EnumMaterialCategoryFieldUpdateOperationsInput | $Enums.MaterialCategory
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateManyInput = {
    id?: string
    name: string
    projectId: string
    category: $Enums.MaterialCategory
    brand?: string | null
    price?: number | null
    quantity?: number | null
    vendorId?: string | null
    status?: $Enums.MaterialStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMaterialCategoryFieldUpdateOperationsInput | $Enums.MaterialCategory
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    category?: EnumMaterialCategoryFieldUpdateOperationsInput | $Enums.MaterialCategory
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorCreateInput = {
    id?: string
    name: string
    contact?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    name: string
    contact?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    materials?: MaterialUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: string
    name: string
    contact?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionTrackerCreateInput = {
    id?: string
    sitePreparation?: boolean
    electrical?: boolean
    ceiling?: boolean
    wallConcepts?: boolean
    progress?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutExecutionTrackerInput
  }

  export type ExecutionTrackerUncheckedCreateInput = {
    id?: string
    projectId: string
    sitePreparation?: boolean
    electrical?: boolean
    ceiling?: boolean
    wallConcepts?: boolean
    progress?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutionTrackerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sitePreparation?: BoolFieldUpdateOperationsInput | boolean
    electrical?: BoolFieldUpdateOperationsInput | boolean
    ceiling?: BoolFieldUpdateOperationsInput | boolean
    wallConcepts?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutExecutionTrackerNestedInput
  }

  export type ExecutionTrackerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    sitePreparation?: BoolFieldUpdateOperationsInput | boolean
    electrical?: BoolFieldUpdateOperationsInput | boolean
    ceiling?: BoolFieldUpdateOperationsInput | boolean
    wallConcepts?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionTrackerCreateManyInput = {
    id?: string
    projectId: string
    sitePreparation?: boolean
    electrical?: boolean
    ceiling?: boolean
    wallConcepts?: boolean
    progress?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutionTrackerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sitePreparation?: BoolFieldUpdateOperationsInput | boolean
    electrical?: BoolFieldUpdateOperationsInput | boolean
    ceiling?: BoolFieldUpdateOperationsInput | boolean
    wallConcepts?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionTrackerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    sitePreparation?: BoolFieldUpdateOperationsInput | boolean
    electrical?: BoolFieldUpdateOperationsInput | boolean
    ceiling?: BoolFieldUpdateOperationsInput | boolean
    wallConcepts?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LayoutListRelationFilter = {
    every?: LayoutWhereInput
    some?: LayoutWhereInput
    none?: LayoutWhereInput
  }

  export type MoodBoardListRelationFilter = {
    every?: MoodBoardWhereInput
    some?: MoodBoardWhereInput
    none?: MoodBoardWhereInput
  }

  export type WorkingDrawingListRelationFilter = {
    every?: WorkingDrawingWhereInput
    some?: WorkingDrawingWhereInput
    none?: WorkingDrawingWhereInput
  }

  export type MaterialListRelationFilter = {
    every?: MaterialWhereInput
    some?: MaterialWhereInput
    none?: MaterialWhereInput
  }

  export type ExecutionTrackerNullableScalarRelationFilter = {
    is?: ExecutionTrackerWhereInput | null
    isNot?: ExecutionTrackerWhereInput | null
  }

  export type LayoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoodBoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkingDrawingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    spaceType?: SortOrder
    size?: SortOrder
    budget?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    size?: SortOrder
    budget?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    spaceType?: SortOrder
    size?: SortOrder
    budget?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    spaceType?: SortOrder
    size?: SortOrder
    budget?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    size?: SortOrder
    budget?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type LayoutCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    layoutData?: SortOrder
    isApproved?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayoutAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type LayoutMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    layoutData?: SortOrder
    isApproved?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayoutMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    layoutData?: SortOrder
    isApproved?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayoutSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoodBoardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    styleType?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MoodBoardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    styleType?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MoodBoardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    styleType?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MoodBoardScalarRelationFilter = {
    is?: MoodBoardWhereInput
    isNot?: MoodBoardWhereInput
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    moodBoardId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    moodBoardId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    moodBoardId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumDrawingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawingType | EnumDrawingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DrawingType[]
    notIn?: $Enums.DrawingType[]
    not?: NestedEnumDrawingTypeFilter<$PrismaModel> | $Enums.DrawingType
  }

  export type WorkingDrawingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkingDrawingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkingDrawingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDrawingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawingType | EnumDrawingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DrawingType[]
    notIn?: $Enums.DrawingType[]
    not?: NestedEnumDrawingTypeWithAggregatesFilter<$PrismaModel> | $Enums.DrawingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDrawingTypeFilter<$PrismaModel>
    _max?: NestedEnumDrawingTypeFilter<$PrismaModel>
  }

  export type EnumMaterialCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialCategory | EnumMaterialCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialCategory[]
    notIn?: $Enums.MaterialCategory[]
    not?: NestedEnumMaterialCategoryFilter<$PrismaModel> | $Enums.MaterialCategory
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumMaterialStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialStatus | EnumMaterialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialStatus[]
    notIn?: $Enums.MaterialStatus[]
    not?: NestedEnumMaterialStatusFilter<$PrismaModel> | $Enums.MaterialStatus
  }

  export type VendorNullableScalarRelationFilter = {
    is?: VendorWhereInput | null
    isNot?: VendorWhereInput | null
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type EnumMaterialCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialCategory | EnumMaterialCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialCategory[]
    notIn?: $Enums.MaterialCategory[]
    not?: NestedEnumMaterialCategoryWithAggregatesFilter<$PrismaModel> | $Enums.MaterialCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaterialCategoryFilter<$PrismaModel>
    _max?: NestedEnumMaterialCategoryFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumMaterialStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialStatus | EnumMaterialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialStatus[]
    notIn?: $Enums.MaterialStatus[]
    not?: NestedEnumMaterialStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaterialStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaterialStatusFilter<$PrismaModel>
    _max?: NestedEnumMaterialStatusFilter<$PrismaModel>
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExecutionTrackerCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    sitePreparation?: SortOrder
    electrical?: SortOrder
    ceiling?: SortOrder
    wallConcepts?: SortOrder
    progress?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExecutionTrackerAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type ExecutionTrackerMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    sitePreparation?: SortOrder
    electrical?: SortOrder
    ceiling?: SortOrder
    wallConcepts?: SortOrder
    progress?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExecutionTrackerMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    sitePreparation?: SortOrder
    electrical?: SortOrder
    ceiling?: SortOrder
    wallConcepts?: SortOrder
    progress?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExecutionTrackerSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type LayoutCreateNestedManyWithoutProjectInput = {
    create?: XOR<LayoutCreateWithoutProjectInput, LayoutUncheckedCreateWithoutProjectInput> | LayoutCreateWithoutProjectInput[] | LayoutUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LayoutCreateOrConnectWithoutProjectInput | LayoutCreateOrConnectWithoutProjectInput[]
    createMany?: LayoutCreateManyProjectInputEnvelope
    connect?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
  }

  export type MoodBoardCreateNestedManyWithoutProjectInput = {
    create?: XOR<MoodBoardCreateWithoutProjectInput, MoodBoardUncheckedCreateWithoutProjectInput> | MoodBoardCreateWithoutProjectInput[] | MoodBoardUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MoodBoardCreateOrConnectWithoutProjectInput | MoodBoardCreateOrConnectWithoutProjectInput[]
    createMany?: MoodBoardCreateManyProjectInputEnvelope
    connect?: MoodBoardWhereUniqueInput | MoodBoardWhereUniqueInput[]
  }

  export type WorkingDrawingCreateNestedManyWithoutProjectInput = {
    create?: XOR<WorkingDrawingCreateWithoutProjectInput, WorkingDrawingUncheckedCreateWithoutProjectInput> | WorkingDrawingCreateWithoutProjectInput[] | WorkingDrawingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: WorkingDrawingCreateOrConnectWithoutProjectInput | WorkingDrawingCreateOrConnectWithoutProjectInput[]
    createMany?: WorkingDrawingCreateManyProjectInputEnvelope
    connect?: WorkingDrawingWhereUniqueInput | WorkingDrawingWhereUniqueInput[]
  }

  export type MaterialCreateNestedManyWithoutProjectInput = {
    create?: XOR<MaterialCreateWithoutProjectInput, MaterialUncheckedCreateWithoutProjectInput> | MaterialCreateWithoutProjectInput[] | MaterialUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectInput | MaterialCreateOrConnectWithoutProjectInput[]
    createMany?: MaterialCreateManyProjectInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type ExecutionTrackerCreateNestedOneWithoutProjectInput = {
    create?: XOR<ExecutionTrackerCreateWithoutProjectInput, ExecutionTrackerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ExecutionTrackerCreateOrConnectWithoutProjectInput
    connect?: ExecutionTrackerWhereUniqueInput
  }

  export type LayoutUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<LayoutCreateWithoutProjectInput, LayoutUncheckedCreateWithoutProjectInput> | LayoutCreateWithoutProjectInput[] | LayoutUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LayoutCreateOrConnectWithoutProjectInput | LayoutCreateOrConnectWithoutProjectInput[]
    createMany?: LayoutCreateManyProjectInputEnvelope
    connect?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
  }

  export type MoodBoardUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<MoodBoardCreateWithoutProjectInput, MoodBoardUncheckedCreateWithoutProjectInput> | MoodBoardCreateWithoutProjectInput[] | MoodBoardUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MoodBoardCreateOrConnectWithoutProjectInput | MoodBoardCreateOrConnectWithoutProjectInput[]
    createMany?: MoodBoardCreateManyProjectInputEnvelope
    connect?: MoodBoardWhereUniqueInput | MoodBoardWhereUniqueInput[]
  }

  export type WorkingDrawingUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<WorkingDrawingCreateWithoutProjectInput, WorkingDrawingUncheckedCreateWithoutProjectInput> | WorkingDrawingCreateWithoutProjectInput[] | WorkingDrawingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: WorkingDrawingCreateOrConnectWithoutProjectInput | WorkingDrawingCreateOrConnectWithoutProjectInput[]
    createMany?: WorkingDrawingCreateManyProjectInputEnvelope
    connect?: WorkingDrawingWhereUniqueInput | WorkingDrawingWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<MaterialCreateWithoutProjectInput, MaterialUncheckedCreateWithoutProjectInput> | MaterialCreateWithoutProjectInput[] | MaterialUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectInput | MaterialCreateOrConnectWithoutProjectInput[]
    createMany?: MaterialCreateManyProjectInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type ExecutionTrackerUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<ExecutionTrackerCreateWithoutProjectInput, ExecutionTrackerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ExecutionTrackerCreateOrConnectWithoutProjectInput
    connect?: ExecutionTrackerWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type LayoutUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LayoutCreateWithoutProjectInput, LayoutUncheckedCreateWithoutProjectInput> | LayoutCreateWithoutProjectInput[] | LayoutUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LayoutCreateOrConnectWithoutProjectInput | LayoutCreateOrConnectWithoutProjectInput[]
    upsert?: LayoutUpsertWithWhereUniqueWithoutProjectInput | LayoutUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LayoutCreateManyProjectInputEnvelope
    set?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    disconnect?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    delete?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    connect?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    update?: LayoutUpdateWithWhereUniqueWithoutProjectInput | LayoutUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LayoutUpdateManyWithWhereWithoutProjectInput | LayoutUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LayoutScalarWhereInput | LayoutScalarWhereInput[]
  }

  export type MoodBoardUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MoodBoardCreateWithoutProjectInput, MoodBoardUncheckedCreateWithoutProjectInput> | MoodBoardCreateWithoutProjectInput[] | MoodBoardUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MoodBoardCreateOrConnectWithoutProjectInput | MoodBoardCreateOrConnectWithoutProjectInput[]
    upsert?: MoodBoardUpsertWithWhereUniqueWithoutProjectInput | MoodBoardUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MoodBoardCreateManyProjectInputEnvelope
    set?: MoodBoardWhereUniqueInput | MoodBoardWhereUniqueInput[]
    disconnect?: MoodBoardWhereUniqueInput | MoodBoardWhereUniqueInput[]
    delete?: MoodBoardWhereUniqueInput | MoodBoardWhereUniqueInput[]
    connect?: MoodBoardWhereUniqueInput | MoodBoardWhereUniqueInput[]
    update?: MoodBoardUpdateWithWhereUniqueWithoutProjectInput | MoodBoardUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MoodBoardUpdateManyWithWhereWithoutProjectInput | MoodBoardUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MoodBoardScalarWhereInput | MoodBoardScalarWhereInput[]
  }

  export type WorkingDrawingUpdateManyWithoutProjectNestedInput = {
    create?: XOR<WorkingDrawingCreateWithoutProjectInput, WorkingDrawingUncheckedCreateWithoutProjectInput> | WorkingDrawingCreateWithoutProjectInput[] | WorkingDrawingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: WorkingDrawingCreateOrConnectWithoutProjectInput | WorkingDrawingCreateOrConnectWithoutProjectInput[]
    upsert?: WorkingDrawingUpsertWithWhereUniqueWithoutProjectInput | WorkingDrawingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: WorkingDrawingCreateManyProjectInputEnvelope
    set?: WorkingDrawingWhereUniqueInput | WorkingDrawingWhereUniqueInput[]
    disconnect?: WorkingDrawingWhereUniqueInput | WorkingDrawingWhereUniqueInput[]
    delete?: WorkingDrawingWhereUniqueInput | WorkingDrawingWhereUniqueInput[]
    connect?: WorkingDrawingWhereUniqueInput | WorkingDrawingWhereUniqueInput[]
    update?: WorkingDrawingUpdateWithWhereUniqueWithoutProjectInput | WorkingDrawingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: WorkingDrawingUpdateManyWithWhereWithoutProjectInput | WorkingDrawingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: WorkingDrawingScalarWhereInput | WorkingDrawingScalarWhereInput[]
  }

  export type MaterialUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MaterialCreateWithoutProjectInput, MaterialUncheckedCreateWithoutProjectInput> | MaterialCreateWithoutProjectInput[] | MaterialUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectInput | MaterialCreateOrConnectWithoutProjectInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutProjectInput | MaterialUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MaterialCreateManyProjectInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutProjectInput | MaterialUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutProjectInput | MaterialUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type ExecutionTrackerUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ExecutionTrackerCreateWithoutProjectInput, ExecutionTrackerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ExecutionTrackerCreateOrConnectWithoutProjectInput
    upsert?: ExecutionTrackerUpsertWithoutProjectInput
    disconnect?: ExecutionTrackerWhereInput | boolean
    delete?: ExecutionTrackerWhereInput | boolean
    connect?: ExecutionTrackerWhereUniqueInput
    update?: XOR<XOR<ExecutionTrackerUpdateToOneWithWhereWithoutProjectInput, ExecutionTrackerUpdateWithoutProjectInput>, ExecutionTrackerUncheckedUpdateWithoutProjectInput>
  }

  export type LayoutUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LayoutCreateWithoutProjectInput, LayoutUncheckedCreateWithoutProjectInput> | LayoutCreateWithoutProjectInput[] | LayoutUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LayoutCreateOrConnectWithoutProjectInput | LayoutCreateOrConnectWithoutProjectInput[]
    upsert?: LayoutUpsertWithWhereUniqueWithoutProjectInput | LayoutUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LayoutCreateManyProjectInputEnvelope
    set?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    disconnect?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    delete?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    connect?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    update?: LayoutUpdateWithWhereUniqueWithoutProjectInput | LayoutUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LayoutUpdateManyWithWhereWithoutProjectInput | LayoutUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LayoutScalarWhereInput | LayoutScalarWhereInput[]
  }

  export type MoodBoardUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MoodBoardCreateWithoutProjectInput, MoodBoardUncheckedCreateWithoutProjectInput> | MoodBoardCreateWithoutProjectInput[] | MoodBoardUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MoodBoardCreateOrConnectWithoutProjectInput | MoodBoardCreateOrConnectWithoutProjectInput[]
    upsert?: MoodBoardUpsertWithWhereUniqueWithoutProjectInput | MoodBoardUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MoodBoardCreateManyProjectInputEnvelope
    set?: MoodBoardWhereUniqueInput | MoodBoardWhereUniqueInput[]
    disconnect?: MoodBoardWhereUniqueInput | MoodBoardWhereUniqueInput[]
    delete?: MoodBoardWhereUniqueInput | MoodBoardWhereUniqueInput[]
    connect?: MoodBoardWhereUniqueInput | MoodBoardWhereUniqueInput[]
    update?: MoodBoardUpdateWithWhereUniqueWithoutProjectInput | MoodBoardUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MoodBoardUpdateManyWithWhereWithoutProjectInput | MoodBoardUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MoodBoardScalarWhereInput | MoodBoardScalarWhereInput[]
  }

  export type WorkingDrawingUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<WorkingDrawingCreateWithoutProjectInput, WorkingDrawingUncheckedCreateWithoutProjectInput> | WorkingDrawingCreateWithoutProjectInput[] | WorkingDrawingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: WorkingDrawingCreateOrConnectWithoutProjectInput | WorkingDrawingCreateOrConnectWithoutProjectInput[]
    upsert?: WorkingDrawingUpsertWithWhereUniqueWithoutProjectInput | WorkingDrawingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: WorkingDrawingCreateManyProjectInputEnvelope
    set?: WorkingDrawingWhereUniqueInput | WorkingDrawingWhereUniqueInput[]
    disconnect?: WorkingDrawingWhereUniqueInput | WorkingDrawingWhereUniqueInput[]
    delete?: WorkingDrawingWhereUniqueInput | WorkingDrawingWhereUniqueInput[]
    connect?: WorkingDrawingWhereUniqueInput | WorkingDrawingWhereUniqueInput[]
    update?: WorkingDrawingUpdateWithWhereUniqueWithoutProjectInput | WorkingDrawingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: WorkingDrawingUpdateManyWithWhereWithoutProjectInput | WorkingDrawingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: WorkingDrawingScalarWhereInput | WorkingDrawingScalarWhereInput[]
  }

  export type MaterialUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MaterialCreateWithoutProjectInput, MaterialUncheckedCreateWithoutProjectInput> | MaterialCreateWithoutProjectInput[] | MaterialUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProjectInput | MaterialCreateOrConnectWithoutProjectInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutProjectInput | MaterialUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MaterialCreateManyProjectInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutProjectInput | MaterialUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutProjectInput | MaterialUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type ExecutionTrackerUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ExecutionTrackerCreateWithoutProjectInput, ExecutionTrackerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ExecutionTrackerCreateOrConnectWithoutProjectInput
    upsert?: ExecutionTrackerUpsertWithoutProjectInput
    disconnect?: ExecutionTrackerWhereInput | boolean
    delete?: ExecutionTrackerWhereInput | boolean
    connect?: ExecutionTrackerWhereUniqueInput
    update?: XOR<XOR<ExecutionTrackerUpdateToOneWithWhereWithoutProjectInput, ExecutionTrackerUpdateWithoutProjectInput>, ExecutionTrackerUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCreateNestedOneWithoutLayoutsInput = {
    create?: XOR<ProjectCreateWithoutLayoutsInput, ProjectUncheckedCreateWithoutLayoutsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLayoutsInput
    connect?: ProjectWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutLayoutsNestedInput = {
    create?: XOR<ProjectCreateWithoutLayoutsInput, ProjectUncheckedCreateWithoutLayoutsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLayoutsInput
    upsert?: ProjectUpsertWithoutLayoutsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLayoutsInput, ProjectUpdateWithoutLayoutsInput>, ProjectUncheckedUpdateWithoutLayoutsInput>
  }

  export type ProjectCreateNestedOneWithoutMoodBoardsInput = {
    create?: XOR<ProjectCreateWithoutMoodBoardsInput, ProjectUncheckedCreateWithoutMoodBoardsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMoodBoardsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutMoodBoardInput = {
    create?: XOR<ImageCreateWithoutMoodBoardInput, ImageUncheckedCreateWithoutMoodBoardInput> | ImageCreateWithoutMoodBoardInput[] | ImageUncheckedCreateWithoutMoodBoardInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMoodBoardInput | ImageCreateOrConnectWithoutMoodBoardInput[]
    createMany?: ImageCreateManyMoodBoardInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutMoodBoardInput = {
    create?: XOR<ImageCreateWithoutMoodBoardInput, ImageUncheckedCreateWithoutMoodBoardInput> | ImageCreateWithoutMoodBoardInput[] | ImageUncheckedCreateWithoutMoodBoardInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMoodBoardInput | ImageCreateOrConnectWithoutMoodBoardInput[]
    createMany?: ImageCreateManyMoodBoardInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutMoodBoardsNestedInput = {
    create?: XOR<ProjectCreateWithoutMoodBoardsInput, ProjectUncheckedCreateWithoutMoodBoardsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMoodBoardsInput
    upsert?: ProjectUpsertWithoutMoodBoardsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMoodBoardsInput, ProjectUpdateWithoutMoodBoardsInput>, ProjectUncheckedUpdateWithoutMoodBoardsInput>
  }

  export type ImageUpdateManyWithoutMoodBoardNestedInput = {
    create?: XOR<ImageCreateWithoutMoodBoardInput, ImageUncheckedCreateWithoutMoodBoardInput> | ImageCreateWithoutMoodBoardInput[] | ImageUncheckedCreateWithoutMoodBoardInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMoodBoardInput | ImageCreateOrConnectWithoutMoodBoardInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutMoodBoardInput | ImageUpsertWithWhereUniqueWithoutMoodBoardInput[]
    createMany?: ImageCreateManyMoodBoardInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutMoodBoardInput | ImageUpdateWithWhereUniqueWithoutMoodBoardInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutMoodBoardInput | ImageUpdateManyWithWhereWithoutMoodBoardInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutMoodBoardNestedInput = {
    create?: XOR<ImageCreateWithoutMoodBoardInput, ImageUncheckedCreateWithoutMoodBoardInput> | ImageCreateWithoutMoodBoardInput[] | ImageUncheckedCreateWithoutMoodBoardInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMoodBoardInput | ImageCreateOrConnectWithoutMoodBoardInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutMoodBoardInput | ImageUpsertWithWhereUniqueWithoutMoodBoardInput[]
    createMany?: ImageCreateManyMoodBoardInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutMoodBoardInput | ImageUpdateWithWhereUniqueWithoutMoodBoardInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutMoodBoardInput | ImageUpdateManyWithWhereWithoutMoodBoardInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type MoodBoardCreateNestedOneWithoutImagesInput = {
    create?: XOR<MoodBoardCreateWithoutImagesInput, MoodBoardUncheckedCreateWithoutImagesInput>
    connectOrCreate?: MoodBoardCreateOrConnectWithoutImagesInput
    connect?: MoodBoardWhereUniqueInput
  }

  export type MoodBoardUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<MoodBoardCreateWithoutImagesInput, MoodBoardUncheckedCreateWithoutImagesInput>
    connectOrCreate?: MoodBoardCreateOrConnectWithoutImagesInput
    upsert?: MoodBoardUpsertWithoutImagesInput
    connect?: MoodBoardWhereUniqueInput
    update?: XOR<XOR<MoodBoardUpdateToOneWithWhereWithoutImagesInput, MoodBoardUpdateWithoutImagesInput>, MoodBoardUncheckedUpdateWithoutImagesInput>
  }

  export type ProjectCreateNestedOneWithoutWorkingDrawingsInput = {
    create?: XOR<ProjectCreateWithoutWorkingDrawingsInput, ProjectUncheckedCreateWithoutWorkingDrawingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutWorkingDrawingsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumDrawingTypeFieldUpdateOperationsInput = {
    set?: $Enums.DrawingType
  }

  export type ProjectUpdateOneRequiredWithoutWorkingDrawingsNestedInput = {
    create?: XOR<ProjectCreateWithoutWorkingDrawingsInput, ProjectUncheckedCreateWithoutWorkingDrawingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutWorkingDrawingsInput
    upsert?: ProjectUpsertWithoutWorkingDrawingsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutWorkingDrawingsInput, ProjectUpdateWithoutWorkingDrawingsInput>, ProjectUncheckedUpdateWithoutWorkingDrawingsInput>
  }

  export type ProjectCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMaterialsInput
    connect?: ProjectWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<VendorCreateWithoutMaterialsInput, VendorUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMaterialsInput
    connect?: VendorWhereUniqueInput
  }

  export type EnumMaterialCategoryFieldUpdateOperationsInput = {
    set?: $Enums.MaterialCategory
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMaterialStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaterialStatus
  }

  export type ProjectUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMaterialsInput
    upsert?: ProjectUpsertWithoutMaterialsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMaterialsInput, ProjectUpdateWithoutMaterialsInput>, ProjectUncheckedUpdateWithoutMaterialsInput>
  }

  export type VendorUpdateOneWithoutMaterialsNestedInput = {
    create?: XOR<VendorCreateWithoutMaterialsInput, VendorUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMaterialsInput
    upsert?: VendorUpsertWithoutMaterialsInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutMaterialsInput, VendorUpdateWithoutMaterialsInput>, VendorUncheckedUpdateWithoutMaterialsInput>
  }

  export type MaterialCreateNestedManyWithoutVendorInput = {
    create?: XOR<MaterialCreateWithoutVendorInput, MaterialUncheckedCreateWithoutVendorInput> | MaterialCreateWithoutVendorInput[] | MaterialUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutVendorInput | MaterialCreateOrConnectWithoutVendorInput[]
    createMany?: MaterialCreateManyVendorInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<MaterialCreateWithoutVendorInput, MaterialUncheckedCreateWithoutVendorInput> | MaterialCreateWithoutVendorInput[] | MaterialUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutVendorInput | MaterialCreateOrConnectWithoutVendorInput[]
    createMany?: MaterialCreateManyVendorInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type MaterialUpdateManyWithoutVendorNestedInput = {
    create?: XOR<MaterialCreateWithoutVendorInput, MaterialUncheckedCreateWithoutVendorInput> | MaterialCreateWithoutVendorInput[] | MaterialUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutVendorInput | MaterialCreateOrConnectWithoutVendorInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutVendorInput | MaterialUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MaterialCreateManyVendorInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutVendorInput | MaterialUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutVendorInput | MaterialUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type MaterialUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<MaterialCreateWithoutVendorInput, MaterialUncheckedCreateWithoutVendorInput> | MaterialCreateWithoutVendorInput[] | MaterialUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutVendorInput | MaterialCreateOrConnectWithoutVendorInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutVendorInput | MaterialUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MaterialCreateManyVendorInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutVendorInput | MaterialUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutVendorInput | MaterialUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutExecutionTrackerInput = {
    create?: XOR<ProjectCreateWithoutExecutionTrackerInput, ProjectUncheckedCreateWithoutExecutionTrackerInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutExecutionTrackerInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutExecutionTrackerNestedInput = {
    create?: XOR<ProjectCreateWithoutExecutionTrackerInput, ProjectUncheckedCreateWithoutExecutionTrackerInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutExecutionTrackerInput
    upsert?: ProjectUpsertWithoutExecutionTrackerInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutExecutionTrackerInput, ProjectUpdateWithoutExecutionTrackerInput>, ProjectUncheckedUpdateWithoutExecutionTrackerInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumDrawingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawingType | EnumDrawingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DrawingType[]
    notIn?: $Enums.DrawingType[]
    not?: NestedEnumDrawingTypeFilter<$PrismaModel> | $Enums.DrawingType
  }

  export type NestedEnumDrawingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawingType | EnumDrawingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DrawingType[]
    notIn?: $Enums.DrawingType[]
    not?: NestedEnumDrawingTypeWithAggregatesFilter<$PrismaModel> | $Enums.DrawingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDrawingTypeFilter<$PrismaModel>
    _max?: NestedEnumDrawingTypeFilter<$PrismaModel>
  }

  export type NestedEnumMaterialCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialCategory | EnumMaterialCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialCategory[]
    notIn?: $Enums.MaterialCategory[]
    not?: NestedEnumMaterialCategoryFilter<$PrismaModel> | $Enums.MaterialCategory
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMaterialStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialStatus | EnumMaterialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialStatus[]
    notIn?: $Enums.MaterialStatus[]
    not?: NestedEnumMaterialStatusFilter<$PrismaModel> | $Enums.MaterialStatus
  }

  export type NestedEnumMaterialCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialCategory | EnumMaterialCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialCategory[]
    notIn?: $Enums.MaterialCategory[]
    not?: NestedEnumMaterialCategoryWithAggregatesFilter<$PrismaModel> | $Enums.MaterialCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaterialCategoryFilter<$PrismaModel>
    _max?: NestedEnumMaterialCategoryFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumMaterialStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialStatus | EnumMaterialStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialStatus[]
    notIn?: $Enums.MaterialStatus[]
    not?: NestedEnumMaterialStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaterialStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaterialStatusFilter<$PrismaModel>
    _max?: NestedEnumMaterialStatusFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    layouts?: LayoutCreateNestedManyWithoutProjectInput
    moodBoards?: MoodBoardCreateNestedManyWithoutProjectInput
    workingDrawings?: WorkingDrawingCreateNestedManyWithoutProjectInput
    materials?: MaterialCreateNestedManyWithoutProjectInput
    executionTracker?: ExecutionTrackerCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    layouts?: LayoutUncheckedCreateNestedManyWithoutProjectInput
    moodBoards?: MoodBoardUncheckedCreateNestedManyWithoutProjectInput
    workingDrawings?: WorkingDrawingUncheckedCreateNestedManyWithoutProjectInput
    materials?: MaterialUncheckedCreateNestedManyWithoutProjectInput
    executionTracker?: ExecutionTrackerUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    spaceType?: StringFilter<"Project"> | string
    size?: FloatFilter<"Project"> | number
    budget?: FloatFilter<"Project"> | number
    userId?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type LayoutCreateWithoutProjectInput = {
    id?: string
    name: string
    layoutData: string
    isApproved?: boolean
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LayoutUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    layoutData: string
    isApproved?: boolean
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LayoutCreateOrConnectWithoutProjectInput = {
    where: LayoutWhereUniqueInput
    create: XOR<LayoutCreateWithoutProjectInput, LayoutUncheckedCreateWithoutProjectInput>
  }

  export type LayoutCreateManyProjectInputEnvelope = {
    data: LayoutCreateManyProjectInput | LayoutCreateManyProjectInput[]
  }

  export type MoodBoardCreateWithoutProjectInput = {
    id?: string
    name: string
    styleType: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutMoodBoardInput
  }

  export type MoodBoardUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    styleType: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutMoodBoardInput
  }

  export type MoodBoardCreateOrConnectWithoutProjectInput = {
    where: MoodBoardWhereUniqueInput
    create: XOR<MoodBoardCreateWithoutProjectInput, MoodBoardUncheckedCreateWithoutProjectInput>
  }

  export type MoodBoardCreateManyProjectInputEnvelope = {
    data: MoodBoardCreateManyProjectInput | MoodBoardCreateManyProjectInput[]
  }

  export type WorkingDrawingCreateWithoutProjectInput = {
    id?: string
    name: string
    type: $Enums.DrawingType
    fileUrl: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingDrawingUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    type: $Enums.DrawingType
    fileUrl: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingDrawingCreateOrConnectWithoutProjectInput = {
    where: WorkingDrawingWhereUniqueInput
    create: XOR<WorkingDrawingCreateWithoutProjectInput, WorkingDrawingUncheckedCreateWithoutProjectInput>
  }

  export type WorkingDrawingCreateManyProjectInputEnvelope = {
    data: WorkingDrawingCreateManyProjectInput | WorkingDrawingCreateManyProjectInput[]
  }

  export type MaterialCreateWithoutProjectInput = {
    id?: string
    name: string
    category: $Enums.MaterialCategory
    brand?: string | null
    price?: number | null
    quantity?: number | null
    status?: $Enums.MaterialStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor?: VendorCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    category: $Enums.MaterialCategory
    brand?: string | null
    price?: number | null
    quantity?: number | null
    vendorId?: string | null
    status?: $Enums.MaterialStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialCreateOrConnectWithoutProjectInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutProjectInput, MaterialUncheckedCreateWithoutProjectInput>
  }

  export type MaterialCreateManyProjectInputEnvelope = {
    data: MaterialCreateManyProjectInput | MaterialCreateManyProjectInput[]
  }

  export type ExecutionTrackerCreateWithoutProjectInput = {
    id?: string
    sitePreparation?: boolean
    electrical?: boolean
    ceiling?: boolean
    wallConcepts?: boolean
    progress?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutionTrackerUncheckedCreateWithoutProjectInput = {
    id?: string
    sitePreparation?: boolean
    electrical?: boolean
    ceiling?: boolean
    wallConcepts?: boolean
    progress?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutionTrackerCreateOrConnectWithoutProjectInput = {
    where: ExecutionTrackerWhereUniqueInput
    create: XOR<ExecutionTrackerCreateWithoutProjectInput, ExecutionTrackerUncheckedCreateWithoutProjectInput>
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayoutUpsertWithWhereUniqueWithoutProjectInput = {
    where: LayoutWhereUniqueInput
    update: XOR<LayoutUpdateWithoutProjectInput, LayoutUncheckedUpdateWithoutProjectInput>
    create: XOR<LayoutCreateWithoutProjectInput, LayoutUncheckedCreateWithoutProjectInput>
  }

  export type LayoutUpdateWithWhereUniqueWithoutProjectInput = {
    where: LayoutWhereUniqueInput
    data: XOR<LayoutUpdateWithoutProjectInput, LayoutUncheckedUpdateWithoutProjectInput>
  }

  export type LayoutUpdateManyWithWhereWithoutProjectInput = {
    where: LayoutScalarWhereInput
    data: XOR<LayoutUpdateManyMutationInput, LayoutUncheckedUpdateManyWithoutProjectInput>
  }

  export type LayoutScalarWhereInput = {
    AND?: LayoutScalarWhereInput | LayoutScalarWhereInput[]
    OR?: LayoutScalarWhereInput[]
    NOT?: LayoutScalarWhereInput | LayoutScalarWhereInput[]
    id?: StringFilter<"Layout"> | string
    name?: StringFilter<"Layout"> | string
    projectId?: StringFilter<"Layout"> | string
    layoutData?: StringFilter<"Layout"> | string
    isApproved?: BoolFilter<"Layout"> | boolean
    version?: IntFilter<"Layout"> | number
    createdAt?: DateTimeFilter<"Layout"> | Date | string
    updatedAt?: DateTimeFilter<"Layout"> | Date | string
  }

  export type MoodBoardUpsertWithWhereUniqueWithoutProjectInput = {
    where: MoodBoardWhereUniqueInput
    update: XOR<MoodBoardUpdateWithoutProjectInput, MoodBoardUncheckedUpdateWithoutProjectInput>
    create: XOR<MoodBoardCreateWithoutProjectInput, MoodBoardUncheckedCreateWithoutProjectInput>
  }

  export type MoodBoardUpdateWithWhereUniqueWithoutProjectInput = {
    where: MoodBoardWhereUniqueInput
    data: XOR<MoodBoardUpdateWithoutProjectInput, MoodBoardUncheckedUpdateWithoutProjectInput>
  }

  export type MoodBoardUpdateManyWithWhereWithoutProjectInput = {
    where: MoodBoardScalarWhereInput
    data: XOR<MoodBoardUpdateManyMutationInput, MoodBoardUncheckedUpdateManyWithoutProjectInput>
  }

  export type MoodBoardScalarWhereInput = {
    AND?: MoodBoardScalarWhereInput | MoodBoardScalarWhereInput[]
    OR?: MoodBoardScalarWhereInput[]
    NOT?: MoodBoardScalarWhereInput | MoodBoardScalarWhereInput[]
    id?: StringFilter<"MoodBoard"> | string
    name?: StringFilter<"MoodBoard"> | string
    projectId?: StringFilter<"MoodBoard"> | string
    styleType?: StringFilter<"MoodBoard"> | string
    isApproved?: BoolFilter<"MoodBoard"> | boolean
    createdAt?: DateTimeFilter<"MoodBoard"> | Date | string
    updatedAt?: DateTimeFilter<"MoodBoard"> | Date | string
  }

  export type WorkingDrawingUpsertWithWhereUniqueWithoutProjectInput = {
    where: WorkingDrawingWhereUniqueInput
    update: XOR<WorkingDrawingUpdateWithoutProjectInput, WorkingDrawingUncheckedUpdateWithoutProjectInput>
    create: XOR<WorkingDrawingCreateWithoutProjectInput, WorkingDrawingUncheckedCreateWithoutProjectInput>
  }

  export type WorkingDrawingUpdateWithWhereUniqueWithoutProjectInput = {
    where: WorkingDrawingWhereUniqueInput
    data: XOR<WorkingDrawingUpdateWithoutProjectInput, WorkingDrawingUncheckedUpdateWithoutProjectInput>
  }

  export type WorkingDrawingUpdateManyWithWhereWithoutProjectInput = {
    where: WorkingDrawingScalarWhereInput
    data: XOR<WorkingDrawingUpdateManyMutationInput, WorkingDrawingUncheckedUpdateManyWithoutProjectInput>
  }

  export type WorkingDrawingScalarWhereInput = {
    AND?: WorkingDrawingScalarWhereInput | WorkingDrawingScalarWhereInput[]
    OR?: WorkingDrawingScalarWhereInput[]
    NOT?: WorkingDrawingScalarWhereInput | WorkingDrawingScalarWhereInput[]
    id?: StringFilter<"WorkingDrawing"> | string
    name?: StringFilter<"WorkingDrawing"> | string
    projectId?: StringFilter<"WorkingDrawing"> | string
    type?: EnumDrawingTypeFilter<"WorkingDrawing"> | $Enums.DrawingType
    fileUrl?: StringFilter<"WorkingDrawing"> | string
    isApproved?: BoolFilter<"WorkingDrawing"> | boolean
    createdAt?: DateTimeFilter<"WorkingDrawing"> | Date | string
    updatedAt?: DateTimeFilter<"WorkingDrawing"> | Date | string
  }

  export type MaterialUpsertWithWhereUniqueWithoutProjectInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutProjectInput, MaterialUncheckedUpdateWithoutProjectInput>
    create: XOR<MaterialCreateWithoutProjectInput, MaterialUncheckedCreateWithoutProjectInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutProjectInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutProjectInput, MaterialUncheckedUpdateWithoutProjectInput>
  }

  export type MaterialUpdateManyWithWhereWithoutProjectInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutProjectInput>
  }

  export type MaterialScalarWhereInput = {
    AND?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    OR?: MaterialScalarWhereInput[]
    NOT?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    id?: StringFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    projectId?: StringFilter<"Material"> | string
    category?: EnumMaterialCategoryFilter<"Material"> | $Enums.MaterialCategory
    brand?: StringNullableFilter<"Material"> | string | null
    price?: FloatNullableFilter<"Material"> | number | null
    quantity?: FloatNullableFilter<"Material"> | number | null
    vendorId?: StringNullableFilter<"Material"> | string | null
    status?: EnumMaterialStatusFilter<"Material"> | $Enums.MaterialStatus
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
  }

  export type ExecutionTrackerUpsertWithoutProjectInput = {
    update: XOR<ExecutionTrackerUpdateWithoutProjectInput, ExecutionTrackerUncheckedUpdateWithoutProjectInput>
    create: XOR<ExecutionTrackerCreateWithoutProjectInput, ExecutionTrackerUncheckedCreateWithoutProjectInput>
    where?: ExecutionTrackerWhereInput
  }

  export type ExecutionTrackerUpdateToOneWithWhereWithoutProjectInput = {
    where?: ExecutionTrackerWhereInput
    data: XOR<ExecutionTrackerUpdateWithoutProjectInput, ExecutionTrackerUncheckedUpdateWithoutProjectInput>
  }

  export type ExecutionTrackerUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sitePreparation?: BoolFieldUpdateOperationsInput | boolean
    electrical?: BoolFieldUpdateOperationsInput | boolean
    ceiling?: BoolFieldUpdateOperationsInput | boolean
    wallConcepts?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionTrackerUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sitePreparation?: BoolFieldUpdateOperationsInput | boolean
    electrical?: BoolFieldUpdateOperationsInput | boolean
    ceiling?: BoolFieldUpdateOperationsInput | boolean
    wallConcepts?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutLayoutsInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    moodBoards?: MoodBoardCreateNestedManyWithoutProjectInput
    workingDrawings?: WorkingDrawingCreateNestedManyWithoutProjectInput
    materials?: MaterialCreateNestedManyWithoutProjectInput
    executionTracker?: ExecutionTrackerCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLayoutsInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    userId: string
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    moodBoards?: MoodBoardUncheckedCreateNestedManyWithoutProjectInput
    workingDrawings?: WorkingDrawingUncheckedCreateNestedManyWithoutProjectInput
    materials?: MaterialUncheckedCreateNestedManyWithoutProjectInput
    executionTracker?: ExecutionTrackerUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLayoutsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLayoutsInput, ProjectUncheckedCreateWithoutLayoutsInput>
  }

  export type ProjectUpsertWithoutLayoutsInput = {
    update: XOR<ProjectUpdateWithoutLayoutsInput, ProjectUncheckedUpdateWithoutLayoutsInput>
    create: XOR<ProjectCreateWithoutLayoutsInput, ProjectUncheckedCreateWithoutLayoutsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLayoutsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLayoutsInput, ProjectUncheckedUpdateWithoutLayoutsInput>
  }

  export type ProjectUpdateWithoutLayoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    moodBoards?: MoodBoardUpdateManyWithoutProjectNestedInput
    workingDrawings?: WorkingDrawingUpdateManyWithoutProjectNestedInput
    materials?: MaterialUpdateManyWithoutProjectNestedInput
    executionTracker?: ExecutionTrackerUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLayoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moodBoards?: MoodBoardUncheckedUpdateManyWithoutProjectNestedInput
    workingDrawings?: WorkingDrawingUncheckedUpdateManyWithoutProjectNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutProjectNestedInput
    executionTracker?: ExecutionTrackerUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutMoodBoardsInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    layouts?: LayoutCreateNestedManyWithoutProjectInput
    workingDrawings?: WorkingDrawingCreateNestedManyWithoutProjectInput
    materials?: MaterialCreateNestedManyWithoutProjectInput
    executionTracker?: ExecutionTrackerCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMoodBoardsInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    userId: string
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    layouts?: LayoutUncheckedCreateNestedManyWithoutProjectInput
    workingDrawings?: WorkingDrawingUncheckedCreateNestedManyWithoutProjectInput
    materials?: MaterialUncheckedCreateNestedManyWithoutProjectInput
    executionTracker?: ExecutionTrackerUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMoodBoardsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMoodBoardsInput, ProjectUncheckedCreateWithoutMoodBoardsInput>
  }

  export type ImageCreateWithoutMoodBoardInput = {
    id?: string
    url: string
    caption?: string | null
    createdAt?: Date | string
  }

  export type ImageUncheckedCreateWithoutMoodBoardInput = {
    id?: string
    url: string
    caption?: string | null
    createdAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutMoodBoardInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutMoodBoardInput, ImageUncheckedCreateWithoutMoodBoardInput>
  }

  export type ImageCreateManyMoodBoardInputEnvelope = {
    data: ImageCreateManyMoodBoardInput | ImageCreateManyMoodBoardInput[]
  }

  export type ProjectUpsertWithoutMoodBoardsInput = {
    update: XOR<ProjectUpdateWithoutMoodBoardsInput, ProjectUncheckedUpdateWithoutMoodBoardsInput>
    create: XOR<ProjectCreateWithoutMoodBoardsInput, ProjectUncheckedCreateWithoutMoodBoardsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMoodBoardsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMoodBoardsInput, ProjectUncheckedUpdateWithoutMoodBoardsInput>
  }

  export type ProjectUpdateWithoutMoodBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    layouts?: LayoutUpdateManyWithoutProjectNestedInput
    workingDrawings?: WorkingDrawingUpdateManyWithoutProjectNestedInput
    materials?: MaterialUpdateManyWithoutProjectNestedInput
    executionTracker?: ExecutionTrackerUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMoodBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layouts?: LayoutUncheckedUpdateManyWithoutProjectNestedInput
    workingDrawings?: WorkingDrawingUncheckedUpdateManyWithoutProjectNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutProjectNestedInput
    executionTracker?: ExecutionTrackerUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutMoodBoardInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutMoodBoardInput, ImageUncheckedUpdateWithoutMoodBoardInput>
    create: XOR<ImageCreateWithoutMoodBoardInput, ImageUncheckedCreateWithoutMoodBoardInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutMoodBoardInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutMoodBoardInput, ImageUncheckedUpdateWithoutMoodBoardInput>
  }

  export type ImageUpdateManyWithWhereWithoutMoodBoardInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutMoodBoardInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    caption?: StringNullableFilter<"Image"> | string | null
    moodBoardId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type MoodBoardCreateWithoutImagesInput = {
    id?: string
    name: string
    styleType: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMoodBoardsInput
  }

  export type MoodBoardUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    projectId: string
    styleType: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoodBoardCreateOrConnectWithoutImagesInput = {
    where: MoodBoardWhereUniqueInput
    create: XOR<MoodBoardCreateWithoutImagesInput, MoodBoardUncheckedCreateWithoutImagesInput>
  }

  export type MoodBoardUpsertWithoutImagesInput = {
    update: XOR<MoodBoardUpdateWithoutImagesInput, MoodBoardUncheckedUpdateWithoutImagesInput>
    create: XOR<MoodBoardCreateWithoutImagesInput, MoodBoardUncheckedCreateWithoutImagesInput>
    where?: MoodBoardWhereInput
  }

  export type MoodBoardUpdateToOneWithWhereWithoutImagesInput = {
    where?: MoodBoardWhereInput
    data: XOR<MoodBoardUpdateWithoutImagesInput, MoodBoardUncheckedUpdateWithoutImagesInput>
  }

  export type MoodBoardUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    styleType?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMoodBoardsNestedInput
  }

  export type MoodBoardUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    styleType?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutWorkingDrawingsInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    layouts?: LayoutCreateNestedManyWithoutProjectInput
    moodBoards?: MoodBoardCreateNestedManyWithoutProjectInput
    materials?: MaterialCreateNestedManyWithoutProjectInput
    executionTracker?: ExecutionTrackerCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutWorkingDrawingsInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    userId: string
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    layouts?: LayoutUncheckedCreateNestedManyWithoutProjectInput
    moodBoards?: MoodBoardUncheckedCreateNestedManyWithoutProjectInput
    materials?: MaterialUncheckedCreateNestedManyWithoutProjectInput
    executionTracker?: ExecutionTrackerUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutWorkingDrawingsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutWorkingDrawingsInput, ProjectUncheckedCreateWithoutWorkingDrawingsInput>
  }

  export type ProjectUpsertWithoutWorkingDrawingsInput = {
    update: XOR<ProjectUpdateWithoutWorkingDrawingsInput, ProjectUncheckedUpdateWithoutWorkingDrawingsInput>
    create: XOR<ProjectCreateWithoutWorkingDrawingsInput, ProjectUncheckedCreateWithoutWorkingDrawingsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutWorkingDrawingsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutWorkingDrawingsInput, ProjectUncheckedUpdateWithoutWorkingDrawingsInput>
  }

  export type ProjectUpdateWithoutWorkingDrawingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    layouts?: LayoutUpdateManyWithoutProjectNestedInput
    moodBoards?: MoodBoardUpdateManyWithoutProjectNestedInput
    materials?: MaterialUpdateManyWithoutProjectNestedInput
    executionTracker?: ExecutionTrackerUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutWorkingDrawingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layouts?: LayoutUncheckedUpdateManyWithoutProjectNestedInput
    moodBoards?: MoodBoardUncheckedUpdateManyWithoutProjectNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutProjectNestedInput
    executionTracker?: ExecutionTrackerUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutMaterialsInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    layouts?: LayoutCreateNestedManyWithoutProjectInput
    moodBoards?: MoodBoardCreateNestedManyWithoutProjectInput
    workingDrawings?: WorkingDrawingCreateNestedManyWithoutProjectInput
    executionTracker?: ExecutionTrackerCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMaterialsInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    userId: string
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    layouts?: LayoutUncheckedCreateNestedManyWithoutProjectInput
    moodBoards?: MoodBoardUncheckedCreateNestedManyWithoutProjectInput
    workingDrawings?: WorkingDrawingUncheckedCreateNestedManyWithoutProjectInput
    executionTracker?: ExecutionTrackerUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMaterialsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput>
  }

  export type VendorCreateWithoutMaterialsInput = {
    id?: string
    name: string
    contact?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorUncheckedCreateWithoutMaterialsInput = {
    id?: string
    name: string
    contact?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorCreateOrConnectWithoutMaterialsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutMaterialsInput, VendorUncheckedCreateWithoutMaterialsInput>
  }

  export type ProjectUpsertWithoutMaterialsInput = {
    update: XOR<ProjectUpdateWithoutMaterialsInput, ProjectUncheckedUpdateWithoutMaterialsInput>
    create: XOR<ProjectCreateWithoutMaterialsInput, ProjectUncheckedCreateWithoutMaterialsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMaterialsInput, ProjectUncheckedUpdateWithoutMaterialsInput>
  }

  export type ProjectUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    layouts?: LayoutUpdateManyWithoutProjectNestedInput
    moodBoards?: MoodBoardUpdateManyWithoutProjectNestedInput
    workingDrawings?: WorkingDrawingUpdateManyWithoutProjectNestedInput
    executionTracker?: ExecutionTrackerUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layouts?: LayoutUncheckedUpdateManyWithoutProjectNestedInput
    moodBoards?: MoodBoardUncheckedUpdateManyWithoutProjectNestedInput
    workingDrawings?: WorkingDrawingUncheckedUpdateManyWithoutProjectNestedInput
    executionTracker?: ExecutionTrackerUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type VendorUpsertWithoutMaterialsInput = {
    update: XOR<VendorUpdateWithoutMaterialsInput, VendorUncheckedUpdateWithoutMaterialsInput>
    create: XOR<VendorCreateWithoutMaterialsInput, VendorUncheckedCreateWithoutMaterialsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutMaterialsInput, VendorUncheckedUpdateWithoutMaterialsInput>
  }

  export type VendorUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUncheckedUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateWithoutVendorInput = {
    id?: string
    name: string
    category: $Enums.MaterialCategory
    brand?: string | null
    price?: number | null
    quantity?: number | null
    status?: $Enums.MaterialStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateWithoutVendorInput = {
    id?: string
    name: string
    projectId: string
    category: $Enums.MaterialCategory
    brand?: string | null
    price?: number | null
    quantity?: number | null
    status?: $Enums.MaterialStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialCreateOrConnectWithoutVendorInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutVendorInput, MaterialUncheckedCreateWithoutVendorInput>
  }

  export type MaterialCreateManyVendorInputEnvelope = {
    data: MaterialCreateManyVendorInput | MaterialCreateManyVendorInput[]
  }

  export type MaterialUpsertWithWhereUniqueWithoutVendorInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutVendorInput, MaterialUncheckedUpdateWithoutVendorInput>
    create: XOR<MaterialCreateWithoutVendorInput, MaterialUncheckedCreateWithoutVendorInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutVendorInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutVendorInput, MaterialUncheckedUpdateWithoutVendorInput>
  }

  export type MaterialUpdateManyWithWhereWithoutVendorInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutVendorInput>
  }

  export type ProjectCreateWithoutExecutionTrackerInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    layouts?: LayoutCreateNestedManyWithoutProjectInput
    moodBoards?: MoodBoardCreateNestedManyWithoutProjectInput
    workingDrawings?: WorkingDrawingCreateNestedManyWithoutProjectInput
    materials?: MaterialCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutExecutionTrackerInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    userId: string
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    layouts?: LayoutUncheckedCreateNestedManyWithoutProjectInput
    moodBoards?: MoodBoardUncheckedCreateNestedManyWithoutProjectInput
    workingDrawings?: WorkingDrawingUncheckedCreateNestedManyWithoutProjectInput
    materials?: MaterialUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutExecutionTrackerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutExecutionTrackerInput, ProjectUncheckedCreateWithoutExecutionTrackerInput>
  }

  export type ProjectUpsertWithoutExecutionTrackerInput = {
    update: XOR<ProjectUpdateWithoutExecutionTrackerInput, ProjectUncheckedUpdateWithoutExecutionTrackerInput>
    create: XOR<ProjectCreateWithoutExecutionTrackerInput, ProjectUncheckedCreateWithoutExecutionTrackerInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutExecutionTrackerInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutExecutionTrackerInput, ProjectUncheckedUpdateWithoutExecutionTrackerInput>
  }

  export type ProjectUpdateWithoutExecutionTrackerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    layouts?: LayoutUpdateManyWithoutProjectNestedInput
    moodBoards?: MoodBoardUpdateManyWithoutProjectNestedInput
    workingDrawings?: WorkingDrawingUpdateManyWithoutProjectNestedInput
    materials?: MaterialUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutExecutionTrackerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layouts?: LayoutUncheckedUpdateManyWithoutProjectNestedInput
    moodBoards?: MoodBoardUncheckedUpdateManyWithoutProjectNestedInput
    workingDrawings?: WorkingDrawingUncheckedUpdateManyWithoutProjectNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    spaceType: string
    size: number
    budget: number
    status?: $Enums.ProjectStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layouts?: LayoutUpdateManyWithoutProjectNestedInput
    moodBoards?: MoodBoardUpdateManyWithoutProjectNestedInput
    workingDrawings?: WorkingDrawingUpdateManyWithoutProjectNestedInput
    materials?: MaterialUpdateManyWithoutProjectNestedInput
    executionTracker?: ExecutionTrackerUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layouts?: LayoutUncheckedUpdateManyWithoutProjectNestedInput
    moodBoards?: MoodBoardUncheckedUpdateManyWithoutProjectNestedInput
    workingDrawings?: WorkingDrawingUncheckedUpdateManyWithoutProjectNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutProjectNestedInput
    executionTracker?: ExecutionTrackerUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    spaceType?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    budget?: FloatFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayoutCreateManyProjectInput = {
    id?: string
    name: string
    layoutData: string
    isApproved?: boolean
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoodBoardCreateManyProjectInput = {
    id?: string
    name: string
    styleType: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingDrawingCreateManyProjectInput = {
    id?: string
    name: string
    type: $Enums.DrawingType
    fileUrl: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialCreateManyProjectInput = {
    id?: string
    name: string
    category: $Enums.MaterialCategory
    brand?: string | null
    price?: number | null
    quantity?: number | null
    vendorId?: string | null
    status?: $Enums.MaterialStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LayoutUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    layoutData?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayoutUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    layoutData?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayoutUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    layoutData?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodBoardUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    styleType?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutMoodBoardNestedInput
  }

  export type MoodBoardUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    styleType?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutMoodBoardNestedInput
  }

  export type MoodBoardUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    styleType?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingDrawingUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDrawingTypeFieldUpdateOperationsInput | $Enums.DrawingType
    fileUrl?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingDrawingUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDrawingTypeFieldUpdateOperationsInput | $Enums.DrawingType
    fileUrl?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingDrawingUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDrawingTypeFieldUpdateOperationsInput | $Enums.DrawingType
    fileUrl?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMaterialCategoryFieldUpdateOperationsInput | $Enums.MaterialCategory
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMaterialCategoryFieldUpdateOperationsInput | $Enums.MaterialCategory
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMaterialCategoryFieldUpdateOperationsInput | $Enums.MaterialCategory
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyMoodBoardInput = {
    id?: string
    url: string
    caption?: string | null
    createdAt?: Date | string
  }

  export type ImageUpdateWithoutMoodBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutMoodBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutMoodBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateManyVendorInput = {
    id?: string
    name: string
    projectId: string
    category: $Enums.MaterialCategory
    brand?: string | null
    price?: number | null
    quantity?: number | null
    status?: $Enums.MaterialStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumMaterialCategoryFieldUpdateOperationsInput | $Enums.MaterialCategory
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    category?: EnumMaterialCategoryFieldUpdateOperationsInput | $Enums.MaterialCategory
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    category?: EnumMaterialCategoryFieldUpdateOperationsInput | $Enums.MaterialCategory
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumMaterialStatusFieldUpdateOperationsInput | $Enums.MaterialStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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