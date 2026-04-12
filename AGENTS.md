# Project Rules for AI Agents

## Project Overview

Nx monorepo. TypeScript 5.4, Nx 22.6.
`@bitfiber/rx` is a powerful and flexible library built on top of RxJS library,
tailored for managing reactive state, asynchronous dataflow, and events in modern JavaScript
applications.

Peer dependencies: `rxjs ^7.4.0`, `@bitfiber/utils ^1.1.2`.

## Commands

- `nx test rx` — run tests
- `nx lint rx` — run linter
- `nx build rx` — build the library (runs lint → test → build-esm → build-cjs → build-types →
  copy-to-dist sequentially, so a separate lint/test before build is redundant)

## Dependencies & Aliases

- Path alias `@bitfiber/rx` → `package/src/index.ts` (defined in `tsconfig.base.json`). Tests
  import from this alias.
- Subpath exports: `@bitfiber/rx/operators`, `@bitfiber/rx/source`, `@bitfiber/rx/store`. Each
  maps to the corresponding `index.ts` barrel under `package/src/`.
- `@bitfiber/utils` provides `copy`, `isFunction`, `BfError`, `PickType` and other shared
  utilities.

## Language & Formatting

- All code, comments, commit messages, documentation — English only.
- ESLint with `@stylistic/eslint-plugin` handles formatting.
- Single quotes, semicolons, 120 column limit, 2-space indent.
- Always use `const`. Use `let` only when reassignment is truly needed. Never use `var`.
- No magic values. Extract to named constants (e.g. `const MAX_FILE_SIZE = 10 * 1024 * 1024`).
- LF line endings.

## Import Order

Imports are grouped, separated by blank lines, in this order:

1. Third-party libraries and project aliases (`rxjs`, `@bf/*`)
2. Relative imports (`./`, `../`)

## Naming Conventions

- Boolean variables and fields: prefix with `is`, `has`, or `can` (e.g. `isLoading`, `hasAccess`,
  `canEdit`).
- Global constants: `UPPER_SNAKE_CASE` (e.g. `MAX_FILE_SIZE`).
- Local constants inside functions/methods: `camelCase`.

## Class Member Order

All classes follow this order:

1. Public, protected, and private fields (group by purpose, not strictly by access modifier)
2. Getters and setters
3. Constructor
4. Lifecycle hooks
5. Public methods
6. Protected methods
7. Private methods

## Privacy & Access Modifiers

- Use ECMAScript private fields (`private field`, or `#field`) and private methods (
  `private method()`, or `#method()`) for all private members. Never use `private _field`,
  `private _method()`.
- Use `readonly` wherever possible.

## File Naming

- Barrel exports via `index.ts` in subfolders (`source/`, `operators/`, etc.).
- File and folder use matching kebab-case names: `complete-with/complete-with.ts`.
- Spec file co-located: `complete-with/complete-with.spec.ts`.
- Complex modules split specs into `tests/` subfolder:
  `emitter/tests/emitter.transmit.spec.ts`.

## Project Structure

### Rx Lib (`package/src/`)

| Folder             | Purpose                                                                  |
|--------------------|--------------------------------------------------------------------------|
| `operators/`       | Custom RxJS operators: `operator`, `completeWith`, `startWithDefined`    |
| `source/`          | Data persistence: `DataSource`, `KeyValueSource` interfaces and adapters |
|                    | (memory, cookie, localStorage, sessionStorage) with `*Part` facades      |
| `store/common/`    | `AbstractItem` — base class with init/complete lifecycle for all items   |
| `store/emitters/`  | `AbstractEmitter`, `Emitter` — reactive event streams                    |
| `store/states/`    | `AbstractState`, `State` — reactive state containers with comparison     |
| `store/groups/`    | `Group`, `NamedGroup`, `AbstractAsyncGroup`, `AsyncGroup` — item         |
|                    | containers and async action lifecycle management                         |
| `store/operators/` | `transmit` — RxJS operator bridging observables to emitters/async groups |
| `store/helpers/`   | `getStoreIndex` — filters object keys to only `StoreItem` members        |
| `store/store/`     | `Store` — top-level hub that owns a `Group` and provides lifecycle hooks |

## Architecture

### Class Hierarchy

```
AbstractItem
├── AbstractEmitter<T>
│   ├── Emitter<T>
│   └── AbstractState<T>
│       └── State<T>
├── AbstractGroup
│   ├── Group
│   ├── NamedGroup<I>
│   └── AbstractAsyncGroup<L,S,F>
│       └── AsyncGroup<L,S,F>
└── Store (owns a Group internally)
```

### Key Interfaces

- `DataSource<T>` — `$`, `get()`, `set(value)`, `remove()`. Single-value reactive source.
- `KeyValueSource<T>` — `get(key)`, `set(key, value)`, `remove(key)`, `observe(key)`,
  `destroy()`. Multi-key storage backend.
- `StoreHooks` — `beforeStoreInit`, `afterStoreInit`, `beforeStoreComplete`,
  `afterStoreComplete`. Implemented by `Store` subclasses.

### Lifecycle

All store items follow: **define** → `markAsReady()` → `initialize()` → `complete()`.

- `Store` subclass defines items as fields, calls `markAsReady()` after all definitions.
- `store.initialize()` triggers `beforeStoreInit` → inits all items → `afterStoreInit`.
- `store.complete()` triggers `beforeStoreComplete` → completes all items →
  `afterStoreComplete`.

## Code Patterns

### Factory Functions

Every public class has a companion factory: `emitter()`, `state(initialValue)`,
`group()`, `namedGroup(index, onInit?)`, `asyncGroup(onInit?, fallbackValue?)`.
Factories accept an optional `onInit` callback invoked just before initialization.

### Active Group Context

When a `Group`/`Store` is open (between construction and `markAsReady()`), newly created
emitters and states auto-register into it via a module-level `activeGroup` variable.
This is why items must be defined as class fields — construction order matters.

### State as Callable

`state()` factory returns `StateType<T> = State<T> & StateGetter<T>`. The instance is both
an object with methods and a callable function: `myState()` returns current value,
`myState.set(v)` updates it. Achieved via `Object.setPrototypeOf` in the constructor.

### Async State Batching

`State.setValue()` batches synchronous updates via `queueMicrotask`. Only the final value
after all sync changes is emitted to subscribers. The start value is compared with the end
value using the configured comparison function.

### Fluent API

Emitters and states support method chaining: `.receive()`, `.select()`, `.zip()`, `.wait()`,
`.transmit()`, `.tap()`, `.effect()`, `.manage()`, `.useLazyEmission()`, `.connect()`,
`.compareBy()`. Wiring is done inside `onInit` callbacks.

## Error Handling

Use `BfError` from `@bitfiber/utils` with a `code` string. Format:
`bf_rx_<module>_<ClassName>_<methodName>_<number>`.
Example: `bf_rx_store_AbstractStore_initialize_1`.

## Testing

- Jest with `jsdom` environment.
- Spec files are co-located with source files.
- `describe` names follow `@bitfiber/rx/<area>/<feature>` (e.g.
  `@bitfiber/rx/operators/completeWith`).
- Tests import from `@bitfiber/rx` (the path alias), not relative paths.
- Async tests use `done` callback with `setTimeout`/`queueMicrotask` for timing-sensitive
  state emission checks.
- Complex modules (emitter, state, store) split specs by concern into a `tests/` subfolder
  with naming `<module>.<concern>.spec.ts` (e.g. `emitter.transmit.spec.ts`).

## Documentation

- Exported functions and classes have JSDoc with `@template`, `@param`, `@returns`.
- Internal methods marked with `@internal` JSDoc tag and `eslint-disable-next-line
  @typescript-eslint/naming-convention` where prefixed with `_`.

## Intentional Design Decisions (Do Not "Fix")

- **`activeGroup` module-level variable** — safe because all store/group construction is
  synchronous within a single call stack. Do not refactor into context objects or
  `AsyncLocalStorage`.
- **`MemoryStorage.destroy()` does not reset the singleton `source`** — unlike `LocalStorage`
  and `SessionStorage`, `MemoryStorage` supports isolated instances via `new`. This is
  intentional.
- **`@ts-ignore` in `Store` for lifecycle hooks** — hooks (`beforeStoreInit`, etc.) are defined
  by subclasses via `StoreHooks` interface. Declaring them in `Store` would force `override` in
  every subclass. Do not replace with `@ts-expect-error` or class declarations.
- **Generic parameter on singleton factories** (`memoryStorage<T>()`, `localStorage<T>()`) —
  provides convenient type narrowing at the call site. The same runtime instance may be returned
  with different type parameters; this is by design.
