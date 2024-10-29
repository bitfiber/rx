# @bitfiber/rx - Reactive State and Async Workflow Management Library

[![Release Notes](https://img.shields.io/github/release/bitfiber/rx)](https://github.com/bitfiber/rx/releases)
[![GitHub star chart](https://img.shields.io/github/stars/bitfiber/rx?style=social)](https://star-history.com/#bitfiber/rx)
[![GitHub fork](https://img.shields.io/github/forks/bitfiber/rx?style=social)](https://github.com/bitfiber/rx/fork)

`@bitfiber/rx` is a powerful and flexible library built on top of [RxJS](https://github.com/ReactiveX/rxjs), designed to manage
reactive state, asynchronous workflows, and events in modern JavaScript applications.
It provides a structured approach to handling complex data flows using emitters, states, groups,
and stores, allowing seamless integration of various reactive sources like emitters, states,
and observables. Emitters and states can be organized into groups and stores, enabling efficient
management and lifecycle control of related reactive sources.

---

## Key Components

1. **Emitters**  
   Emitters are the core units of communication in the library, broadcasting values or events
   to multiple subscribers. They provide a straightforward mechanism for creating and managing
   reactive streams, allowing you to easily handle data emissions and manage complex reactive flows.
   Emitters can integrate with other reactive sources like emitters, states, and observables.


2. **States**  
   States are the primary data containers within the library, responsible for maintaining
   and broadcasting data updates to multiple subscribers. Like emitters, states can create
   and manage reactive streams to broadcast changes efficiently. They are designed to simplify
   state propagation and synchronization across stores or features, ensuring consistency.
   States can also integrate seamlessly with other reactive sources like emitters, states,
   and observables.


3. **Data sources**  
   Data sources serve as external containers for persistent or external data, which can be
   synchronized with states. They allow the connection of states to external data sources, ensuring
   that state data is always up to date and aligned with external systems or storage.


4. **Groups**  
   Groups are collections of store items, including emitters, states, or even other groups,
   and are used to implement the functionality of specific features. They help organize related
   reactive sources into a cohesive structure, ensuring that all items are properly initialized
   and completed as a unit.


5. **Stores**  
   Stores are the complete collections of store items and methods that manage the functionality
   of an entire module or application. They can contain emitters, states, and groups, providing
   an organized structure for managing related reactive sources, ensuring that all items are
   properly initialized and completed as a unit.

---

## Key Features

1. **Integration with RxJS**  
   Since `@bitfiber/rx` is built on top of RxJS, it integrates seamlessly with the RxJS ecosystem.
   Emitters and states can easily interact with observables and subjects, and you can leverage
   all RxJS operators (e.g., map, filter, debounce, etc.) in various methods. The library simplifies
   handling reactive streams, allowing you to focus on logic without worrying about manual
   subscription and completion management.


2. **Strict Typing**  
   The library leverages TypeScript to enforce strict typing, ensuring robust type checking
   at compile time. This reduces the likelihood of runtime errors and enhances code reliability.
   TypeScript's powerful type inference also makes it easier to write cleaner, more maintainable code,
   providing developers with strong guarantees about the structure and behavior of their reactive
   components.


3. **Tree Shaking**  
   The modular design of `@bitfiber/rx` enables tree shaking, allowing developers to optimize
   bundle sizes by importing only the required functionalities. This eliminates unused code from
   the final build, leading to smaller, more efficient applications, which is particularly useful
   for performance-sensitive environments.

---

## Installation

```bash
# NPM
npm install @bitfiber/rx

# YARN
yarn add @bitfiber/rx
```

---

## Contributing

We welcome contributions from the community. Before contributing, please take the time to read
our [contributing guide](https://github.com/bitfiber/rx/blob/main/CONTRIBUTING.md) to familiarize yourself with our
contribution process.
This guide can help you understand our expectations and save you time in the long run.

---

## Support

Have questions, encountered problems, or want to request new features?
Feel free to start a [discussion in our community forum](https://github.com/bitfiber/rx/discussions).
Your feedback is valuable to us!

---

## Found an Issue or Bug?

If you've found a bug or issue, please report it using [GitHub Issues](https://github.com/bitfiber/rx/issues).
Your reports help us improve the project for everyone.

---

## Code of Conduct

This project adheres to the [Code of Conduct](https://github.com/bitfiber/rx/blob/main/CODE_OF_CONDUCT.md) to ensure
a welcoming and inclusive community for all participants.
By participating, you are expected to uphold this code.

---

## License

This project is released under the Apache 2.0 License.  
You can find the full text of the license in the [LICENSE](https://github.com/bitfiber/rx/blob/main/LICENSE.txt)
file.  
Copyright © 2023-2024 Oleksandr Zmanovskyi. All rights reserved.

---

## Table of Contents

### Store

* [`Store`](#id-store)
* [`StoreHooks`](#id-store-hooks)
* [`emitter`](#id-emitter-fn)
* [`Emitter`](#id-emitter)
* [`state`](#id-state-fn)
* [`State`](#id-state)
* [`changeDefaultComparison`](#id-change-default-comparison)
* [`Comparison`](#id-comparison)
* [`namedGroup`](#id-named-group-fn)
* [`NamedGroup`](#id-named-group)
* [`asyncGroup`](#id-async-group-fn)
* [`AsyncGroup`](#id-async-group)
* [`transmit`](#id-transmit)

### Data Source

* [`localStorage`](#id-local-storage-fn)
* [`LocalStorage`](#id-local-storage)
* [`localStoragePart`](#id-local-storage-part-fn)
* [`LocalStoragePart`](#id-local-storage-part)
* [`sessionStorage`](#id-session-storage-fn)
* [`SessionStorage`](#id-session-storage)
* [`sessionStoragePart`](#id-session-storage-part-fn)
* [`SessionStoragePart`](#id-session-storage-part)
* [`memoryStorage`](#id-memory-storage-fn)
* [`MemoryStorage`](#id-memory-storage)
* [`memoryStoragePart`](#id-memory-storage-part-fn)
* [`MemoryStoragePart`](#id-memory-storage-part)
* [`cookie`](#id-cookie-fn)
* [`Cookie`](#id-cookie)
* [`cookiePart`](#id-cookie-part-fn)
* [`CookiePart`](#id-cookie-part)
* [`CookieParams`](#id-cookie-params)
* [`CookieValue`](#id-cookie-value)
* [`CookieData`](#id-cookie-data)
* [`KeyValueSourcePart`](#id-key-value-source-part)
* [`KeyValueSource`](#id-key-value-source)
* [`DataSource`](#id-data-source)

### RxJs Operators

* [`operator`](#operator)
* [`completeWith`](#completeWith)
* [`startWithDefined`](#startWithDefined)

---

## Store

---

### `@class Store`

<a id="id-store"></a>
Extends `AbstractItem`, implements the `StoreHooks` interface, and provides functionality
for managing store items such as emitters, states, and groups.

The
`Store` class handles the initialization and completion of these items, providing lifecycle hooks
that allow custom logic to be executed before and after key events such as store initialization
and completion. This class serves as a base for specific store implementations

`@abstract`

---

`@method initialize(beforeInit?): this`  
Initializes the store and all of its items, preparing it for use. Optionally, a `beforeInit`
callback function can be provided, which will be executed before the store is initialized  
`@param beforeInit?: (store: this) => void` - An optional callback function that runs before
the store is initialized  
`@returns this` The current instance of the store, allowing for method chaining

---

`@method complete(): void`  
Completes the store and all of its items, signaling that the store has finished
its operations and is now in a completed state. Once the store is completed,
no further changes or updates will be made to it or its items

**Example:**

```ts
import {switchMap} from 'rxjs';
import {pluck} from '@bitfiber/utils';
import {asyncGroup, emitter, state, Store, transmit} from '@bitfiber/rx';

interface ProductsFilters {
  search: string;
  page: number;
}

interface DictItem {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductsState {
  dict1: DictItem[];
  dict2: DictItem[];
  dict3: DictItem[];
  products: Product[];
  isLoading: boolean;
}

class ProductsStore extends Store {
  // Provides the start of the first data loading process
  start = emitter<ProductsFilters>();

  // Provides the state of the products filters
  filters = state<ProductsFilters>({search: '', page: 1})
    // Will not emit data immediately upon subscription
    .useLazyEmission();

  // Provides a group of emitters for managing the loading process of `dict1`
  dict1Req = asyncGroup<ProductsFilters, DictItem[], Error>(dict1Req => {
    dict1Req.launch
      // Receives new data from the `start` emitter
      .receive(this.start)
      // Receives new data from the `filters` state
      .receive(this.filters)
      // Performs the effect each time new data is received
      .effect(
        switchMap(filters => dict1Service.get(filters)
          // 'transmit' operator takes either data or an error and transmits it to the `success`
          // or `fail` emitter of the async group, respectively
          .pipe(transmit(dict1Req))),
      );
  }, []);

  // Provides a group of emitters for managing the loading process of `dict2`
  dict2Req = asyncGroup<ProductsFilters, DictItem[], Error>(dict2Req => {
    dict2Req.launch
      // Receives new data from the `start` emitter
      .receive(this.start)
      // Receives new data from the `filters` state
      .receive(this.filters)
      // Performs the effect each time new data is received
      .effect(
        switchMap(filters => dict2Service.get(filters)
          // 'transmit' operator takes either data or an error and transmits it to the `success`
          // or `fail` emitter of the async group, respectively
          .pipe(transmit(dict2Req))),
      );
  }, []);

  // Provides a group of emitters for managing the loading process of `dict3`
  dict3Req = asyncGroup<[string[], string[]], DictItem[], Error>(dict3Req => {
    dict3Req.launch
      // Receives new data from the `dict1Req` group and `dict2Req` group
      .zip(this.dict1Req.success, this.dict2Req.success, (dict1, dict2) => {
        return [pluck(dict1, 'id'), pluck(dict2, 'id')];
      })
      // Performs the effect each time new data is received
      .effect(
        switchMap(data => dict3Service.get(data)
          // 'transmit' operator takes either data or an error and transmits it to the `success`
          // or `fail` emitter of the async group, respectively
          .pipe(transmit(dict3Req))),
      );
  }, []);

  // Provides a group of emitters for managing the loading process of `products`
  productsReq = asyncGroup<ProductsFilters, Product[], Error>((productsReq, {launch}) => {
    launch
      // Receives new data from the `dict3Req` group
      .receive(this.dict3Req.success, () => this.filters())
      // Performs the effect each time new data is received
      .effect(
        switchMap(filters => productsService.get(filters)
          // 'transmit' operator takes either data or an error and transmits it to the `success`
          // or `fail` emitter of the async group, respectively
          .pipe(transmit(productsReq))),
      );
  }, []);

  // Provides the final state of the store data
  data = state<ProductsState>(
    // Will emit initial data to all subscribers upon subscription
    {dict1: [], dict2: [], dict3: [], products: [], isLoading: false},
    data => data
      // Updates the `isLoading` flag whenever any of the query states change
      .select(
        this.dict1Req.state,
        this.dict2Req.state,
        this.dict3Req.state,
        this.productsReq.state,
        (dict1State, dict2State, dict3State, productsState) => {
          return {
            ...data(),
            isLoading: dict1State.inProgress || dict2State.inProgress
              || dict3State.inProgress || productsState.inProgress,
          };
        },
      )
      // Updates the store data every time all success data is received from the query success emitters
      .zip(
        this.dict1Req.success,
        this.dict2Req.success,
        this.dict3Req.success,
        this.productsReq.success,
        (dict1, dict2, dict3, products) => {
          return {...data(), dict1, dict2, dict3, products};
        },
      ),
  );
}

// Creates a new store for managing products
const productsStore = new ProductsStore();

// Initializes the store and all items within the store
productsStore.initialize();

productsStore.data
  // Performs a tap callback each time data is updated
  .tap(data => {
    console.log(productsStore.data());
  });

// Starts the first data loading process
productsStore.start.emit(productsStore.filters());

setTimeout(() => {
  // Changes the filters applied to the products
  productsStore.filters.update((state) => ({...state, page: 2}));
}, 150);

setTimeout(() => {
  // Completes the store and all items within the store
  productsStore.complete();
}, 300);
```

---

### `@interface StoreHooks`

<a id="id-store-hooks"></a>
Represents optional hooks for `Store` that can be implemented to perform
actions before and after the store is initialized and completed

`beforeStoreInit?(): void`  
An optional hook that runs before the store is initialized

`afterStoreInit?(): void`  
An optional hook that runs after the store has been initialized

`beforeStoreComplete?(): void`  
An optional hook that runs before the store is completed

`afterStoreComplete?(): void`  
An optional hook that runs after the store has been completed

---

### `@function emitter<T>`

<a id="id-emitter-fn"></a>
Creates and returns a new `Emitter` instance in a convenient way that provides functionality
to create streams, handle subscriptions, emit values to subscribers, and integrate with
other reactive sources such as emitters, states, subjects, observables.

You can optionally provide an `onInit` callback that will be invoked just before
the emitter's initialization, allowing you to perform setup tasks or configure the emitter
before it starts emitting values

`@template T` - The type of data emitted by this emitter

`@param onInit?: (emitter: Emitter<T>) => void` - An optional callback function that is called with the
newly created `Emitter` instance just before its initialization.
This function can be used to set up or configure the emitter

`@returns Emitter<T>`

**Example:**

```ts
import {emitter, namedGroup} from '@bitfiber/rx';
import {take, filter, switchMap} from 'rxjs';

// Creates an emitter that emits the IDs
const currentId = emitter<number>(e => e
  // Transmits all emitted data to the 'productReq' emitter
  .transmit(productReq));

// The observable of the emitter
const currentId$ = currentId.$;

// Creates an emitter that emits the final ID
const lastId = emitter<number>();

// Creates an emitter that receives transmitted 'currentId' data and performs an effect that calls an API
const productReq = emitter<number>(e => e
  // All streams created by this emitter will filter the data
  .manage(
    filter(id => !!(id % 2)),
  )
  // Performs a tap callback each time the emitter emits new filtered data
  .tap(id => {
    console.log(id);
  })
  // Performs a effect each time the emitter emits new filtered data
  .effect(
    switchMap(id => productsService.get(`api/product${id}`)),
  ));

// Creates an emitter that receives used IDs and logs them through an effect
const log = emitter<string>(e => e
  // Runs an effect when data is received from the `currentId` emitter
  .receive(currentId, id => `A new id ${id} was received`)
  // Runs an effect when data is received from the `lastId` emitter
  .receive(lastId, id => `the last id ${id} was received`)
  // Performs an effect each time the emitter emits newly received logged data
  .effect(
    switchMap(log => logService.post(`api/log`, {log})),
  ));

// Creates an emitter that performs a tap callback each time data is selected
const result1 = emitter<[number, number]>(e => e
  // Runs a tap callback when all data is selected from the `currentId` and `lastId` emitters
  .select(currentId$, lastId, (currentId, lastId) => [currentId, lastId])
  // Performs a tap callback each time the emitter emits new data
  .tap(range => {
    console.log(range);
  }));

// Creates an emitter that performs a tap callback each time data is zipped
const result2 = emitter<[number, number]>(e => e
  // Runs a tap callback when all data is zipped from the `currentId` and `lastId` emitters
  .zip(currentId$, lastId, (currentId, lastId) => [currentId, lastId])
  // Performs a tap callback each time the emitter emits new data
  .tap(range => {
    console.log(range);
  }));

// Groups all emitters and states for mass initialization and completion
const group = namedGroup({currentId, lastId, productReq, log, result1, result2});

// Subscribe to the observable of the emitter
currentId$
  .pipe(take(1))
  .subscribe(id => {
    console.log(id);
  });

// Initializes the group and all items within the group
group.initialize();

// Emits data
currentId.emit(1);
currentId.emit(2);

// Accesses the 'lastId' emitter through the group
group.lastId.emit(3);

// Completes the group and all items within the group
group.complete();

```

---

### `@class Emitter<T>`

<a id="id-emitter"></a>
Extends the `AbstractEmitter` class and provides functionality to create streams,
handle subscriptions, emit values to subscribers, and integrate with other reactive sources
such as emitters, states, subjects, observables.

The `Emitter` class is typically used when you need a straightforward emitter that can
broadcast values or events to all its subscribers or other reactive sources, such as emitters,
states, subjects

`@template T` - The type of data emitted by this emitter

---

`@property $: Observable<T>`
An observable that serves as the source for all emitter streams.
It allows subscribers to listen to and react to emitted values or events

---

`@method manage(...operators): this`  
Defines management operators for all emitter streams.
These operators are applied to the streams managed by this emitter,
allowing you to modify or control their behavior, such as filtering,
mapping, or handling errors, without altering the type of the emitted values

`@param ...operators: OperatorFunction<T, T>[]` - One or more RxJS operators to apply to the emitter streams

`@returns this` the instance of the current emitter, allowing for method chaining

```ts
import {emitter} from '@bitfiber/rx';
import {delay, filter} from 'rxjs';

const launch = emitter<number>(e => e
  // All streams created by this emitter will delay and filter the data
  .manage(
    filter(id => !!(id % 2)),
    delay(100),
  ));

```

---

`@method emit(value): this`  
Emits the specified value to all subscribers currently listening to the emitter.
It is used to trigger reactive updates or actions in response to the emitted value

`@param value: T` - The value to be emitted to all subscribers

`@returns this` the instance of the current emitter, allowing for method chaining

```ts
import {emitter} from '@bitfiber/rx';

const launch = emitter<number>();

// Emits a value to its subscribers, linked reactive sources, and triggers its own taps and effects
launch.emit(7);

```

---

`@method select<I extends any[]>(...data): this`  
Combines values from multiple emitters, states, or observables,
applies a reducer function to these values,
and emits the resulting value to all subscribers of this emitter.

The first emission occurs only after all values have been received from the sources,
ensuring that the reducer function operates on a complete set of inputs.
Subsequent emissions occur whenever any of the sources emit a new value,
triggering the reducer function to recompute the result based on the latest values.
Works similarly to the RxJs 'combineLatest' operator

`@param ...data: [...EmitterOrObservableTuple<I>, (...values: I) => T]` - A spread of emitters,
states, or observables, followed by a reducer function.
The reducer function takes the latest values from each source as arguments
and returns the value to be emitted

`@returns this` the instance of the current emitter, allowing for method chaining

```ts
import {emitter, state} from '@bitfiber/rx';
import {of} from 'rxjs';

type Result = {launchId: number; data: string; count: number};

const launch = emitter<number>();
const data = state<string>(1);
const count$ = of(1);

const result = emitter<Result>(e => e
  // Selects data from all reactive sources and emits the result to its subscribers.
  // Works similarly to the RxJs 'combineLatest' operator
  .select(launch, data, count$, (launchId, data, count) => {
    launchId, data, count
  }));
```

---

`@method zip<I extends any[]>(...data): this`  
Combines values from multiple emitters, states, or observables,
applies a reducer function to these values,
and emits the resulting value to all subscribers of this emitter.

The first emission occurs only after all values have been received from the sources,
ensuring that the reducer function operates on a complete set of inputs.
Subsequent emissions occur only when all sources emit new values,
triggering the reducer function to recompute the result based on the latest values.
Works similarly to the RxJs 'zip' operator

`@param ...data: [...EmitterOrObservableTuple<I>, (...values: I) => T]` - A spread of emitters,
states, or observables, followed by a reducer function.
The reducer function takes the latest values from each source as arguments
and returns the value to be emitted

`@returns this` the instance of the current emitter, allowing for method chaining

```ts
import {emitter, state} from '@bitfiber/rx';
import {of} from 'rxjs';

type Result = {launchId: number; data: string; count: number};

const launch = emitter<number>();
const data = state<string>(1);
const count$ = of(1);

const result = emitter<Result>(e => e
  // Selects data from all reactive sources and emits the result to its subscribers.
  // Works similarly to the RxJs 'zip' operator
  .zip(launch, data, count$, (launchId, data, count) => {
    launchId, data, count
  }));
```

---

`@method receive(...inputs): this`  
Receives values from one or more emitters, states, or observables
and emits them to all subscribers of this emitter.

This method allows the current emitter to listen to external sources and relay their
emitted values to its own subscribers, effectively linking multiple data streams together

`@param ...inputs: EmitterOrObservable<T>[]` - One or more emitters, states,
or observables that provide values to be emitted by this emitter

`@returns` the instance of the current emitter, allowing for method chaining

```ts
import {emitter, state} from '@bitfiber/rx';
import {of} from 'rxjs';

const source1 = emitter<number>();
const source2 = state<number>(1);
const source3$ = of(1);

const result = emitter<number>(e => e
  // Receives data from each reactive source separately and emits a value to its subscribers
  // immediately, without waiting for other sources to emit
  .receive(source1, source2, source3$));
```

`@method receive<I>(input, reducer): this`  
Receives a value from an emitter, state, or observable, applies a reducer function to convert
this value to the emitter's type, and emits the result to all subscribers of this emitter.

This method allows the current emitter to listen to external source and relay the transformed
emitted value to its own subscribers, effectively linking data streams together

`@param input: EmitterOrObservable<I>` - an emitter, state or observable
that provide values to be emitted by this emitter

`@param reducer: (value: I) => T` - A function that converts the received value from its original type
to the type expected by this emitter, allowing for customization of the emitted value

`@returns` the instance of the current emitter, allowing for method chaining

```ts
import {emitter, state} from '@bitfiber/rx';

const source = state<number>(1);

const result = emitter<string>(e => e
  // Receives data from a reactive source, converts the value, and emits the result to its subscribers
  .receive(source, value => String(value)));
```

---

`@method transmit(...outputs): this`  
Transmits values from the current emitter to one or more other emitters, states, or subjects.
It enables the propagation of data or events across multiple sources, effectively creating
a network of interconnected reactive sources

`@param ...outputs: (EmitterOrSubject<T> | EmitterOrSubject<void>)[]` - One or more emitters, states,
or subjects that will receive the transmitted values from this emitter

`@returns` the instance of the current emitter, allowing for method chaining

```ts
import {emitter, state} from '@bitfiber/rx';
import {Subject} from 'rxjs';

const receiver1 = emitter<number>();
const receiver2 = state<number>(0);
const receiver3 = new Subject<number>();

const source = emitter<number>(e => e
  // Transmits every emitted value to all reactive sources for further processing or handling
  .transmit(receiver1, receiver2, receiver3));
```

`@method transmit<O>(output, reducer): this`  
Transmits values from the current emitter to a state. By using a reducer function,
the emitted values can be transformed or customized to match the expected format of the state

`@param output: AbstractState<O>` - A state that will receive the transmitted values from this emitter

`@param reducer: (value: T, state: O) => O` - A function that converts or transforms the emitted value
from the emitter type to the type expected by the state

`@returns` the instance of the current emitter, allowing for method chaining

```ts
import {emitter, state} from '@bitfiber/rx';

const receiver = state<number>(0);

const source = emitter<string>(e => e
  // Transmits every emitted value to a state for further processing or handling
  .transmit(receiver, (value, state) => state + Number(value)));
```

`@method transmit<O>(output, reducer): this`  
Transmits values from the current emitter to another emitter or subject.
By using a reducer function, the emitted values can be transformed or customized to match
the expected format of the target emitter or subject

`@param output: EmitterOrSubject<O>` - An emitter or subject that will receive the transmitted values
from this emitter

`@param reducer: (value: T) => O` - A function that converts or transforms the emitted value from
the current emitter's type to the type expected by the receiving emitter or subject

`@returns` the instance of the current emitter, allowing for method chaining

```ts
import {emitter} from '@bitfiber/rx';

const receiver = emitter<number>();

const source = emitter<string>(e => e
  // Transmits every emitted value to another emitter for further processing or handling
  .transmit(receiver, value => Number(value)));
```

---

`@method effect(...operators): this`  
Creates a new stream with a side effect, similar to the RxJS `pipe` method.

This method allows you to apply a sequence of RxJS operators to the emitter's stream,
performing actions or side effects whenever the emitter emits a value. This can be
particularly useful for tasks like logging, debugging, or triggering external operations
in response to emitted values

`@param ...operators: OperatorFunction<any, any>[]` - A sequence of RxJS operators that define
the side effects to be applied to the emitted values

`@returns` the instance of the current emitter, allowing for method chaining

```ts
import {emitter} from '@bitfiber/rx';
import {switchMap} from 'rxjs';

const launchProductReq = emitter<number>(e => e
  // Performs a effect each time the emitter emits new value
  .effect(
    switchMap(id => productsService.get(`api/product${id}`)),
  ));
```

---

`@method tap(observer): this`  
Creates a new stream with a side effect, similar to the RxJS `tap` operator.

This method allows you to perform actions or side effects whenever the emitter emits a value,
without altering the value itself. It is useful for tasks like logging, debugging,
or triggering external operations in response to emitted values

`@param observer: Partial<Observer<T>>` - a partial observer with lifecycle
methods (`next`, `error`, `complete`)

`@returns` the instance of the current emitter, allowing for method chaining

```ts
import {emitter} from '@bitfiber/rx';
import {switchMap} from 'rxjs';

const log = emitter<number>(e => e
  // Performs a tap callback each time the emitter emits new data
  .tap({
    next: id => console.log(id),
    error: error => console.log(error),
  }));
```

`@method tap(next): this`  
Creates a new stream with a side effect, similar to the RxJS `tap` operator.

This method allows you to perform actions or side effects whenever the emitter emits a value,
without altering the value itself. It is useful for tasks like logging, debugging,
or triggering external operations in response to emitted values

`@param next: (value: T) => void` - a function that takes the emitted value and performs a side effect

`@returns` the instance of the current emitter, allowing for method chaining

```ts
import {emitter} from '@bitfiber/rx';
import {switchMap} from 'rxjs';

const log = emitter<number>(e => e
  // Performs a tap callback each time the emitter emits new data
  .tap(id => console.log(id)));
```

---

### `@function state<T>`

<a id="id-state-fn"></a>
Creates an instance that combines the functionality of both the `State` class
and the `StateGetter` function, initialized with the provided `initialValue`.
Optionally, you can provide an `onInit` callback function, which is called just before
the initialization process, allowing you to perform setup tasks or configure the state before
it starts emitting values

`@template T` - The type of the state value

`@param initialValue: T` - The initial value of the state

`@param onInit?: (state: StateType<T>) => void` - An optional callback function
that is executed just before the initialization of the state, allowing you to perform setup tasks
or configure the state before it starts emitting values

`@returns StateType<T>` a new `State` instance that also acts as the `StateGetter` function
to get the current state value

**Example:**

```ts
import {state, namedGroup} from '@bitfiber/rx';
import {take, filter, switchMap} from 'rxjs';

// Creates a state that stores and emits the IDs
const currentId = state<number>(1, s => s
  // Uses a custom function for comparing values. By default, the 'equals' function is used
  .compareBy((a, b) => a === b)
  // Transmits all emitted data to the 'productReq' emitter
  .transmit(productReq));

// The observable of the state
const currentId$ = currentId.$;

// Creates a state that stores and emits the final ID
const lastId = state<number | null>(null, s => s
  // Uses '===' for comparing values. By default, the 'equals' function is used
  .compareBy('strict')
  // Forces the state not to emit a value at the time of subscription
  .useLazyEmission());

// Creates a state that receives transmitted 'currentId' data and performs an effect that calls an API
const productReq = state<number>(0, s => s
  // All streams created by this state will filter the data
  .manage(
    filter(id => !!(id % 2)),
  )
  // Performs a tap callback each time the state emits new filtered data
  .tap(id => {
    console.log(id);
  })
  // Performs a effect each time the state emits new filtered data
  .effect(
    switchMap(id => productsService.get(`api/product${id}`)),
  ));

// Creates a state that receives used IDs and logs them through an effect
const log = state<string>(0, s => s
  // Runs an effect when data is received from the `currentId` state
  .receive(currentId, id => `A new id ${id} was received`)
  // Runs an effect when data is received from the `lastId` state
  .receive(lastId, id => `the last id ${id} was received`)
  // Performs an effect each time the state emits newly received logged data
  .effect(
    switchMap(log => logService.post(`api/log`, {log})),
  ));

// Creates a state that performs a tap callback each time data is selected
const result1 = state<[number, number]>([0, 0], s => s
  // Runs a tap callback when all data is selected from the `currentId` and `lastId` states
  .select(currentId$, lastId, (currentId, lastId) => [currentId, lastId])
  // Performs a tap callback each time the state emits new data
  .tap(range => {
    console.log(range);
  }));

// Creates a state that performs a tap callback each time data is selected
const result2 = state<[number, number]>([0, 0], s => s
  // Runs a tap callback when all data is selected from the `currentId` and `lastId` states
  .zip(currentId$, lastId, (currentId, lastId) => [currentId, lastId])
  // Performs a tap callback each time the state emits new data
  .tap(range => {
    console.log(range);
  }));

// Groups all emitters and states for mass initialization and completion
const group = namedGroup({currentId, lastId, productReq, log, result1, result2});

// Initializes the group and all items within the group
group.initialize();

// Subscribes to the observable of the state
currentId$
  .pipe(take(1))
  .subscribe(id => console.log(id));

// Sets the state value and emits the new value to subscribers
currentId.set(2);

// Updates the state value and emits the new value to subscribers
currentId.update(state => state + 1);

// Accesses the 'lastId' state through the group and sets data
group.lastId.set(4);

// Gets the current state value in two ways
const id1 = currentId();
const id2 = currentId.get();

// Completes the group and all items within the group
group.complete();

```

---

### `@class State<T>`

<a id="id-state"></a>
Represents a concrete state in a reactive store, extending the functionality of `AbstractState`.
This class encapsulates the logic for updating, resetting and maintaining a state,
reacting to changes, and notifying subscribers whenever the state is updated.
It can also be connected to external data sources to synchronize its value with external data,
ensuring consistency across different parts of an application

`@template T` - The type of data managed and emitted by the state

---

`@property $: Observable<T>`
An observable that serves as the source for all state streams.
It allows subscribers to reactively observe changes or updates to the state, allowing them to
respond dynamically as new values are emitted

---

`@method manage(...operators): this`  
Defines management operators for all state streams.
These operators are applied to the streams managed by this state,
allowing you to modify or control their behavior, such as filtering,
mapping, or handling errors, without altering the type of the emitted values

`@param ...operators: OperatorFunction<T, T>[]` - One or more RxJS operators to apply to the state streams

`@returns this` the instance of the current state, allowing for method chaining

```ts
import {state} from '@bitfiber/rx';
import {delay, filter} from 'rxjs';

const data = state<number>(0, s => s
  // All streams created by this state will delay and filter the data
  .manage(
    filter(id => !!(id % 2)),
    delay(100),
  ));

```

---

`@method get(): T`  
Returns the current value of the state.
This method is useful for accessing the state at any point in time,
allowing other store items or consumers to retrieve the latest value

```ts
import {state} from '@bitfiber/rx';

const data = state<number>(10);

// Returns the current value
data.get(); // Output: 10

```

---

`@method set(value): this`  
Updates the state to the provided `value` immediately, but the emission of this
new value to subscribers will be performed asynchronously. This means that if multiple
synchronous updates are made in quick succession, only the last update will be emitted,
optimizing the emission process to prevent unnecessary updates

`@param value: T` - The new value to set as the current state

`@returns this` the instance of the current state, allowing for method chaining

```ts
import {state} from '@bitfiber/rx';

const data = state<number>(0);

// Sets a new state value and emits the updated state to its subscribers
data.set(7);

```

---

`@method update(updater): this`  
Updates the current state using an updater function that takes the current state value as its
argument and returns the new state value. The state is updated immediately, but the emission
of this new value to subscribers will occur asynchronously. This means that if multiple
synchronous updates are made in quick succession, only the last update will be emitted,
optimizing the emission process to prevent unnecessary updates

`@param updater: (state: T) => T` - A function that takes the current state value as its argument
and returns the new state value

`@returns this` the instance of the current state, allowing for method chaining

```ts
import {state} from '@bitfiber/rx';

const data = state<number>(0);

// Updates the current state and emits the updated state to its subscribers
data.update(state => state + 1);

```

---

`@method reset(): this`  
Resets the state to its original value that was set during initialization.
This is useful for reverting the state back to its starting condition, discarding any changes
that have occurred since the state was first established

`@returns this` the instance of the current state, allowing for method chaining

```ts
import {state} from '@bitfiber/rx';

const data = state<number>(10);

data.set(20);

// Resets the current state to initial value '10'
data.reset();

```

---

`@method compareBy(comparison): this`  
Sets a custom comparison strategy that will be used to determine if the state has changed.
This comparison can be one of the predefined comparison types (`'equals'` or `'strict'`)
or a custom comparison function

`@param comparison: Comparison` - The comparison method to use for evaluating state changes

`@returns this` the instance of the current state, allowing for method chaining

```ts
import {state, changeDefaultComparison} from '@bitfiber/rx';

const data1 = state<number>(10, s => s
  // Uses the `equals` function from the package '@bitfiber/utils' for comparing values
  // this comparison is by default
  .compareBy('equals'));

const data2 = state<number>(10, s => s
  // Uses '===' for comparing values
  .compareBy('strict'));

const data3 = state<number | string>(10, s => s
  // Uses a custom function for comparing values
  .compareBy((a, b) => Number(a) === Number(b)));

// By default, uses the `equals` function for comparing values.
// To set a different comparison type for all states by default, use this function
changeDefaultComparison('strict');

```

---

`@method connect(source): this`  
Connects the state to an external data source `DataSource`, which provides the data
that the state will manage and emit. By connecting to a data source, the state can synchronize
with external data, ensuring it remains consistent with the source. This is useful in scenarios
where the state needs to reflect or react to data from an external provider.

Once connected, the state automatically updates from the data source whenever the source changes,
and conversely, updates the data source whenever the state value is changed. This bidirectional
synchronization ensures that both the state and the data source remain in sync

`@param source: DataSource<T>` - The external data source to connect to the state

`@returns this` the instance of the current state, allowing for method chaining

```ts
import {state, localStoragePart} from '@bitfiber/rx';

const theme = state<'dark' | 'light'>('dark', s => s
  // Connects the state with the local storage data stored under the key 'theme'.
  // Now, if you change the state, local storage will also be updated.
  // Conversely, if the local storage changes, the state will be updated.
  // Ensures two-way synchronization between the state and the 'theme' data in local storage
  .connect(localStoragePart('theme')));
```

---

`@method useLazyEmission(): this`  
Enables lazy emission for the state, meaning that the state will defer emitting its initial value
to subscribers until an explicit trigger occurs. This can be useful in scenarios where you want
more control over when the state emits its value, rather than emitting immediately

`@returns this` the instance of the current state, allowing for method chaining

```ts
import {state} from '@bitfiber/rx';

const data = state<number>(0, s => s
  // Forces the state not to emit a value at the time of subscription
  .useLazyEmission());
```

---

`@method useLazyEmissionOnce(): this`  
Enables one-time lazy emission for the next created stream.

Once the `useLazyEmissionOnce` method is called, the state will defer emitting its initial value
until an explicit trigger occurs. This lazy emission behavior will apply only once for the next
stream that is created. After this initial deferred emission, subsequent streams will emit values
immediately as changes occur.

This method can be called multiple times before creating streams, allowing you to control
when the lazy emission behavior is applied.

By default, one-time lazy emission is disabled, meaning that streams will emit their initial
values immediately upon creation unless this behavior is explicitly overridden

`@returns this` the instance of the current state, allowing for method chaining

```ts
import {state} from '@bitfiber/rx';

const data = state<number>(0, s => s
  // Forces the next stream not to emit a value at the time of subscription
  .useLazyEmissionOnce()
  // Will not emit a value at the time of subscription
  .effect()
  // Will emit a value at the time of subscription
  .transmit());
```

---

`@method select<I extends any[]>(...data): this`  
Combines values from multiple emitters, states, or observables,
applies a reducer function to these values,
and emits the resulting value to all subscribers of this state.

The first emission occurs only after all values have been received from the sources,
ensuring that the reducer function operates on a complete set of inputs.
Subsequent emissions occur whenever any of the sources emit a new value,
triggering the reducer function to recompute the result based on the latest values.
Works similarly to the RxJs 'combineLatest' operator

`@param ...data: [...EmitterOrObservableTuple<I>, (...values: I) => T]` - A spread of emitters,
states, or observables, followed by a reducer function.
The reducer function takes the latest values from each source as arguments
and returns the value to be emitted

`@returns this` the instance of the current state, allowing for method chaining

```ts
import {emitter, state} from '@bitfiber/rx';
import {of} from 'rxjs';

type Result = {launchId: number; data: string; count: number};

const launch = emitter<number>();
const data = state<string>(1);
const count$ = of(1);

const result = state<Result>({launchId: 0, data: '', count: 0}, s => s
  // Selects data from all reactive sources and emits the result to its subscribers.
  // Works similarly to the RxJs 'combineLatest' operator
  .select(launch, data, count$, (launchId, data, count) => {
    launchId, data, count
  }));
```

---

`@method zip<I extends any[]>(...data): this`  
Combines values from multiple emitters, states, or observables,
applies a reducer function to these values,
and emits the resulting value to all subscribers of this state.

The first emission occurs only after all values have been received from the sources,
ensuring that the reducer function operates on a complete set of inputs.
Subsequent emissions occur only when all sources emit new values,
triggering the reducer function to recompute the result based on the latest values.
Works similarly to the RxJs 'zip' operator

`@param ...data: [...EmitterOrObservableTuple<I>, (...values: I) => T]` - A spread of emitters,
states, or observables, followed by a reducer function.
The reducer function takes the latest values from each source as arguments
and returns the value to be emitted

`@returns this` the instance of the current state, allowing for method chaining

```ts
import {emitter, state} from '@bitfiber/rx';
import {of} from 'rxjs';

type Result = {launchId: number; data: string; count: number};

const launch = emitter<number>();
const data = state<string>(1);
const count$ = of(1);

const result = state<Result>({launchId: 0, data: '', count: 0}, s => s
  // Selects data from all reactive sources and emits the result to its subscribers.
  // Works similarly to the RxJs 'zip' operator
  .zip(launch, data, count$, (launchId, data, count) => {
    launchId, data, count
  }));
```

---

`@method receive(...inputs): this`  
Receives values from one or more emitters, states, or observables
and emits them to all subscribers of this state.

This method allows this state to listen to external sources and relay their
emitted values to its own subscribers, effectively linking multiple data streams together

`@param ...inputs: EmitterOrObservable<T>[]` - One or more emitters, states,
or observables that provide values to be emitted by this state

`@returns` the instance of the current state, allowing for method chaining

```ts
import {emitter, state} from '@bitfiber/rx';
import {of} from 'rxjs';

const source1 = emitter<number>();
const source2 = state<number>(1);
const source3$ = of(1);

const result = state<number>(0, s => s
  // Receives data from each reactive source separately and emits a value to its subscribers
  // immediately, without waiting for other sources to emit
  .receive(source1, source2, source3$));
```

`@method receive<I>(input, reducer): this`  
Receives a value from an emitter, state, or observable, applies a reducer function to convert
this value to the state's type, and emits the result to all subscribers of this state.

This method allows this state to listen to external source and relay the transformed
emitted value to its own subscribers, effectively linking data streams together

`@param input: EmitterOrObservable<I>` - an emitter, state or observable that provide values
to be emitted by this state

`@param reducer: (value: I, state: T) => T` - A function that converts or transforms
the received value from the input type to the type expected by this state.
This function takes the value emitted by the input and this state value as parameters,
and returns the new state value

`@returns` the instance of the current state, allowing for method chaining

```ts
import {emitter, state} from '@bitfiber/rx';

const source = state<number>(1);

const result = state<string>('', s => s
  // Receives data from a reactive source, converts the value, and emits the result to its subscribers
  .receive(source, value => String(value)));
```

---

`@method transmit(...outputs): this`  
Transmits values from the current state to one or more other emitters, states, or subjects.
It enables the propagation of data or events across multiple sources, effectively creating
a network of interconnected reactive sources

`@param ...outputs: (EmitterOrSubject<T> | EmitterOrSubject<void>)[]` - One or more emitters, states,
or subjects that will receive the transmitted values from this state

`@returns` the instance of the current state, allowing for method chaining

```ts
import {emitter, state} from '@bitfiber/rx';
import {Subject} from 'rxjs';

const receiver1 = emitter<number>();
const receiver2 = state<number>(0);
const receiver3 = new Subject<number>();

const source = state<number>(0, s => s
  // Transmits every emitted value to all reactive sources for further processing or handling
  .transmit(receiver1, receiver2, receiver3));
```

`@method transmit<O>(output, reducer): this`  
Transmits values from the current state to another state. By using a reducer function,
the emitted values can be transformed or customized to match the expected format of another state

`@param output: AbstractState<O>` - A state that will receive the transmitted values from this state

`@param reducer: (value: T, state: O) => O` - A function that converts or transforms the emitted value
from this state type to the type expected by another state

`@returns` the instance of the current state, allowing for method chaining

```ts
import {emitter, state} from '@bitfiber/rx';

const receiver = state<number>(0);

const source = state<string>(0, s => s
  // Transmits every emitted value to another state for further processing or handling
  .transmit(receiver, (value, state) => state + Number(value)));
```

`@method transmit<O>(output, reducer): this`  
Transmits values from the current state to another emitter or subject.
By using a reducer function, the emitted values can be transformed or customized to match
the expected format of the target emitter or subject

`@param output: EmitterOrSubject<O>` - An emitter or subject that will receive the transmitted values
from this state

`@param reducer: (value: T) => O` - A function that converts or transforms the emitted value from
the current state's type to the type expected by the receiving emitter or subject

`@returns` the instance of the current state, allowing for method chaining

```ts
import {emitter, state} from '@bitfiber/rx';

const receiver = emitter<number>();

const source = state<string>(0, s => s
  // Transmits every emitted value to another emitter for further processing or handling
  .transmit(receiver, value => Number(value)));
```

---

`@method effect(...operators): this`  
Creates a new stream with a side effect, similar to the RxJS `pipe` method.

This method allows you to apply a sequence of RxJS operators to the state's stream,
performing actions or side effects whenever the state emits a value. This can be
particularly useful for tasks like logging, debugging, or triggering external operations
in response to emitted values

`@param ...operators: OperatorFunction<any, any>[]` - A sequence of RxJS operators that define
the side effects to be applied to the emitted values

`@returns` the instance of the current state, allowing for method chaining

```ts
import {state} from '@bitfiber/rx';
import {switchMap, of} from 'rxjs';

const openDialog = state<boolean>(false, s => s
  // Performs a effect each time the emitter emits new value
  .effect(
    switchMap(isOpened => !isOpened ? dialog.open() : of(false)),
  ));
```

---

`@method tap(observer): this`  
Creates a new stream with a side effect, similar to the RxJS `tap` operator.

This method allows you to perform actions or side effects whenever the state emits a value,
without altering the value itself. It is useful for tasks like logging, debugging,
or triggering external operations in response to emitted values

`@param observer: Partial<Observer<T>>` - a partial observer with lifecycle
methods (`next`, `error`, `complete`)

`@returns` the instance of the current state, allowing for method chaining

```ts
import {state} from '@bitfiber/rx';
import {switchMap} from 'rxjs';

const log = state<number>(0, s => s
  // Performs a tap callback each time the state emits new data
  .tap({
    next: id => console.log(id),
    error: error => console.log(error),
  }));
```

`@method tap(next): this`  
Creates a new stream with a side effect, similar to the RxJS `tap` operator.

This method allows you to perform actions or side effects whenever the state emits a value,
without altering the value itself. It is useful for tasks like logging, debugging,
or triggering external operations in response to emitted values

`@param next: (value: T) => void` - a function that takes the emitted value and performs a side effect

`@returns` the instance of the current state, allowing for method chaining

```ts
import {state} from '@bitfiber/rx';
import {switchMap} from 'rxjs';

const log = state<number>(0, s => s
  // Performs a tap callback each time the state emits new data
  .tap(id => console.log(id)));
```

---

`@function changeDefaultComparison`

<a id="id-change-default-comparison"></a>
Changes the default comparison method that will be used for all states.
This can be one of the predefined comparison types: 'equals' for deep comparison,
'strict' for strict equality, or a custom comparison function

`@param comparison: Comparison` - The comparison method to be set as the default

```ts
import {changeDefaultComparison} from '@bitfiber/rx';

changeDefaultComparison('strict');
```

---

### `@type Comparison`

<a id="id-comparison"></a>
Represents a comparison operation, which can be a predefined comparison type or a custom function.

The `Comparison` type allows for different ways to compare two values:

* `'equals'`: A deep comparison using the `equals` function from the package '@bitfiber/utils',
* `'strict'`: A strict equality comparison, using strict equality (`===`),
* `((a: any, b: any) => boolean)`: A custom comparison function that takes two arguments and
  returns a boolean indicating whether the values are considered equal based on the provided logic

---

### `@function namedGroup<I extends Index>`

<a id="id-named-group-fn"></a>
Creates a new `NamedGroup` instance with the store items from the provided index,
where each item is accessible by its unique key.

This function also allows for an optional `onInit` callback, which can be used to perform
additional setup or configuration just before the group initialization

`@template I` - The type of the index used to access the `StoreItem` instances in the group

`@param index: I` - An index that contains `StoreItem` instances and other data,
each associated with a unique key

`@param onInit?: (group: NamedGroup<StoreIndex<I>>, sameGroup: NamedGroup<StoreIndex<I>>) => void` -
An optional callback function that is executed just before initialization

`@returns NamedGroup<StoreIndex<I>>`

**Example:**

```ts
import {state, emitter, namedGroup} from '@bitfiber/rx';

// Groups all emitters and states for mass initialization and completion
const group = namedGroup({launch: emitter<void>(), data: state<number>(0)}, ({launch}) => {
  launch
    // Performs an effect each time the launch emits new data
    .effect(
      switchMap(page => productsService.get(`api/products?page=${page}`)),
    );
});

// Initializes the group and all items within the group
group.initialize();

// Accesses the 'launch' emitter through the group and emits a new data
group.launch.emit(1);

// Completes the group and all items within the group
group.complete();

```

---

### `@class NamedGroup<I extends Index>`

<a id="id-named-group"></a>
Represents a named group that incorporates store items from the provided index and can manage
these items, each accessible by a unique key

`@template I` - Extends `Index` that contains `StoreItem` instances and other data,
each associated with a unique key

---

`@method initialize(): this`  
Initiates the group and all its items.

In most cases, this method will be called automatically by a group or store managing
the group, so you generally don't need to call it manually unless you have a specific
reason to do so

`@returns` the instance of the current group, allowing for method chaining

**Example:**

```ts
import {state, emitter, namedGroup} from '@bitfiber/rx';

// Groups all emitters and states for mass initialization and completion
const group = namedGroup({launch: emitter<void>(), data: state<number>(0)});

// Initializes the group and all items within the group
group.initialize();

```

---

`@method complete(): void`  
Completes the group and all its items,
signaling to all item subscribers that no more values will be emitted.

Once the group is completed, Its items will no longer emit any values, and any subsequent
subscriptions will immediately receive an error.

In most cases, this method will be called automatically by a group or store managing
the group, so you generally don't need to call it manually unless you have a specific
reason to do so

**Example:**

```ts
import {state, emitter, namedGroup} from '@bitfiber/rx';

// Groups all emitters and states for mass initialization and completion
const group = namedGroup({launch: emitter<void>(), data: state<number>(0)});

// Completes the group and all items within the group
group.complete();

```

---

### `@function asyncGroup<L, S, F>`

<a id="id-async-group-fn"></a>
Creates a new `AsyncGroup` instance that manages the lifecycle of an asynchronous action,
including emitters for launching the action, handling its success, dealing with failures,
and maintaining the state of the asynchronous action.

This function also allows for an optional `onInit` callback, which can be used to perform
additional setup or configuration just before the group initialization.

The fallback value is used as a default success value in case the asynchronous action fails,
ensuring that the success emitter always returns a value

`@template L` - The type representing the data for the launch emitter  
`@template S` - The type representing the data for the success emitter  
`@template F` - The type representing the error data for the fail emitter

`@param onInit?: (group: AsyncGroup<L, S, F>, sameGroup: AsyncGroup<L, S, F>) => void` -
An optional callback function executed just before the group initialization

`@param fallbackValue?: S` - An optional fallback value of type `S` that will be used
as the default success value if the asynchronous action fails

`@returns AsyncGroup<L, S, F>`

**Example:**

```ts
import {state, namedGroup, asyncGroup} from '@bitfiber/rx';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductsState {
  products: Product[];
  isLoading: booleang;
}

// Provides a group of emitters for managing the products loading process
const productsReq = asyncGroup<number, Product[], Error>((group, {launch, fail, finish}) => {
  group
    // Keeps cached data for 120 seconds, with a maximum entry count of 10
    .useCache(120, 10);

  launch
    // Performs an effect each time the launch emits new data
    .effect(
      switchMap(page => productsService.get(`api/products?page=${page}`)
        // 'transmit' operator takes either data or an error and transmits it to the `success`
        // or `fail` emitter of the group, respectively
        .pipe(transmit(group))),
    );

  success
    // Performs a tap callback each time the request succeeds
    .tap(data => console.log(data));

  fail
    // Performs a tap callback each time the request fails
    .tap(error => console.log(error));

  finish
    // Performs a tap callback each time the request either fails or succeeds
    .tap(() => console.log('Request has been finished'));
}, []);

// Provides the final state
const data = state<ProductsState>({products: [], isLoading: false}, s => s
  // Receives request success data
  .receive(productsReq.success, (products, state) => ({...state, products}))
  // Receives the request state
  .receive(productsReq.state, ({inProgress}, state) => ({...state, isLoading: inProgress}))
);

// Groups all emitters and states for mass initialization and completion
const group = namedGroup({productsReq, data});

// Initializes the group and all items within the group
group.initialize();

// Starts the products loading process
productsReq.launch.emit(1);

// Completes the group and all items within the group
group.complete();

```

---

### `@class AsyncGroup<L, S, F>`

<a id="id-async-group"></a>
Represents an asynchronous group that manages the lifecycle of an asynchronous action,
including emitters for launching the action, handling its success, dealing with failures,
and maintaining the state of the asynchronous action.

The `AsyncGroup` class extends `AbstractAsyncGroup` and is designed to facilitate the management
of asynchronous actions. This structure allows for organized and efficient management
of complex asynchronous workflows

`@template L` - The type representing the data for the launch emitter  
`@template S` - The type representing the data for the success emitter  
`@template F` - The type representing the error data for the fail emitter

---

`@property launch: Emitter<L>`  
An emitter that triggers the start of an asynchronous action.
This emitter takes a payload of type `L`, which contains the necessary data
to initiate the action  
`@readonly`

---

`@property success: Emitter<S>`  
An emitter that triggers when an asynchronous action completes successfully.
This emitter takes a payload of type `S`, which contains the result or data associated
with the successful completion of the action  
`@readonly`

---

`@property fail: Emitter<F>`  
An emitter that triggers when an asynchronous action fails.
This emitter takes a payload of type `F`, which contains the error information or data
related to the failure of the action  
`@readonly`

---

`@property finish: Emitter<void>`  
An emitter that triggers when the asynchronous action's entire lifecycle is completed,
whether it ends in success or failure. This emitter does not carry any payload (`void`),
as it simply serves as a notification that the process is fully complete  
`@readonly`

---

`@property state: StateType<AsyncData>`  
The state that tracks the status of an asynchronous action,
including counters for successes and failures, as well as flags indicating whether the action
is in progress, has completed successfully, or has failed  
`@readonly`

---

`@method initialize(): this`  
Initiates the group and all its items.

In most cases, this method will be called automatically by a group or store managing
the group, so you generally don't need to call it manually unless you have a specific
reason to do so

`@returns` the instance of the current group, allowing for method chaining

**Example:**

```ts
import {asyncGroup} from '@bitfiber/rx';

// Creates an asynchronous group
const group = asyncGroup<number, string[], Error>();

// Initializes the group and all items within the group
group.initialize();

```

---

`@method complete(): void`  
Completes the group and all its items,
signaling to all item subscribers that no more values will be emitted.

Once the group is completed, Its items will no longer emit any values, and any subsequent
subscriptions will immediately receive an error.

In most cases, this method will be called automatically by a group or store managing
the group, so you generally don't need to call it manually unless you have a specific
reason to do so

**Example:**

```ts
import {asyncGroup} from '@bitfiber/rx';

// Creates an asynchronous group
const group = asyncGroup<number, string[], Error>();

// Completes the group and all items within the group
group.complete();

```

---

`@method useCache(secOrFn, cacheSize): this`  
Enables caching, allowing the results of the asynchronous action
to be stored and reused based on certain conditions. The cache can be configured to expire
after a specified lifetime or to be used conditionally based on a callback function

`@param secOrFn: number | (() => boolean)` - The lifetime of the cache in seconds, or a callback function
that returns a boolean value. If the callback returns `true`, the cache will be used

`@param cacheSize = 10` - The maximum number of entries in the cache. If the cache size
exceeds this limit, the earliest entries will be deleted following a FIFO strategy

`@returns` the instance of the current group, allowing for method chaining

**Example:**

```ts
import {asyncGroup} from '@bitfiber/rx';

// Creates an asynchronous group
const group = asyncGroup<number, string[], Error>(group => {
  group
    // Keeps cached data for 60 seconds, with a maximum entry count of 5
    .useCache(60, 5);
});

```

---

### `@function transmit<L, S, F>`

<a id="id-transmit"></a>
Transmits the result of the asynchronous action to the provided emitter
or group, allowing success, failure, and completion actions or effects to be performed.
It can also transmit to additional emitters for failure and finish actions or effects

`@template L` - The type representing the data for the launch emitter  
`@template S` - The type representing the data for the success emitter  
`@template F` - The type representing the error data for the fail emitter

`@param emitterOrGroup: AbstractEmitter<S> | Subject<S> | AsyncGroup<L, S, F>` - The primary emitter,
state, subject, or async group that will receive the success data

`@param failEmitter?: AbstractEmitter<F> | Subject<F> | null` - An optional emitter, state, or subject
that will emit the failure data after a failed action

`@param finishEmitter?: AbstractEmitter<void> | Subject<void>` - An optional emitter, state, or subject
that will emit once the asynchronous action is completed, either successfully or with a failure

`@returns OperatorFunction<S, S>` An RxJS operator that transmits the data to the corresponding emitter

**Example:**

```ts
import {transmit, emitter, asyncGroup} from '@bitfiber/rx';

// Provides a group of emitters for managing the products loading process
const productsReq = asyncGroup<number, Product[], Error>((group, {launch}) => {
  launch
    // Performs an effect each time the launch emits new data
    .effect(
      switchMap(page => productsService.get(`api/products?page=${page}`)
        // 'transmit' operator takes either data or an error and transmits it to the `success`
        // or `fail` emitter of the group, respectively
        .pipe(transmit(group))),
    );
}, []);

// Custom emitters for the 'transmit' operator
const launch = emitter<number>();
const success = emitter<Product[]>();
const fail = emitter<Error>();
const finish = emitter<void>();

launch
  // Performs an effect each time the launch emits new data
  .effect(
    switchMap(page => productsService.get(`api/products?page=${page}`)
      // 'transmit' operator takes either data or an error and transmits it to the `success`
      // or `fail` custom emitter, respectively
      .pipe(transmit(success, fail, finish))),
  );

```

---

## Data Source

---

### `@function localStorage<T = any>`

<a id="id-local-storage-fn"></a>
Creates and returns a singleton instance of `LocalStorage` and ensures that only one instance
is created. If the instance already exists, it returns the existing instance

`@template T` - The type of the value stored in local storage. Defaults to `any`

`@returns LocalStorage<T>`

**Example:**

```ts
import {localStorage} from '@bitfiber/rx';

const ls = localStorage();
```

---

### `@class LocalStorage<T = any>`

<a id="id-local-storage"></a>
Implements the `KeyValueSource` interface, allowing interaction
with the browser's local storage using key-value semantics. It provides methods for
retrieving, setting, observing, and removing key-value pairs stored in local storage

`@template T` - The type of the value stored in local storage. Defaults to `any`

---

`constructor()`  
Creates a singleton instance

---

`@method get(key: string): T`  
Retrieves a value stored under the given key in local storage.
The retrieved value is parsed from its JSON string format into the expected type `T`.
If the key does not exist or if parsing fails, returns 'undefined'   
`@param key: string` - The specific key under which the value is stored in local storage

---

`@method set(key: string, value: T): void`  
Sets a new value under the given key in local storage.
Before storing, the value is serialized to a JSON string format  
`@param key: string` - The specific key under which the value will be stored  
`@param value: T` - The new value to be stored, which will be stringified before being added

---

`@method remove(key: string): void`  
Removes a value associated with the provided key from local storage    
`@param key: string` - The specific key under which the value is stored and should be removed

---

`@method observe(key: string): Observable<T>`  
Creates and returns an observable that emits value changes
stored under the given key in local storage     
`@param key: string` - The specific key under which the value is stored in local storage

---

`@method destroy(): void`  
Destroys the reference to the instance and frees any associated resources

**Example:**

```ts
import {LocalStorage} from '@bitfiber/rx';
import {tap} from 'rxjs';

const ls = new LocalStorage();
ls.observe('key').pipe(tap(v => console.log(v))).subscribe(); // result: 'value' then undefined
ls.set('key', 'value');
ls.get('key'); // result: 'value'
ls.remove('key');
ls.get('key'); // result: undefined
ls.destroy();
```

---

### `@function localStoragePart<T = string | undefined>`

<a id="id-local-storage-part-fn"></a>
Creates and returns an instance of `LocalStoragePart`, allowing interaction
with a specific key-value pair stored in the browser's local storage

`@template T` - The type of the value stored in local storage. Defaults to `string | undefined`

`@param key` - The key used to access the value in local storage

`@returns LocalStoragePart<T>`

**Example:**

```ts
import {localStoragePart} from '@bitfiber/rx';

const lsPart = localStoragePart('key');
```

---

### `@class LocalStoragePart<T = string | undefined>`

<a id="id-local-storage-part"></a>
Extends `KeyValueSourcePart` and allows interaction with a particular
key in the browser's local storage. It provides methods for retrieving, setting, and observing
the value associated with the given key.  
See [`KeyValueSourcePart here`](#id-key-value-source-part)

`@template T` - The type of the value stored in local storage. Defaults to `string | undefined`

---

`constructor(key: string)`  
Creates an instance that provides access to a specific part of local storage
stored under a specific key  
`@param key: string` - The key used to access the value in local storage

---

`@property $: Observable<T>`  
Allows subscribers to reactively observe value changes

---

`@method get(): T`  
Retrieves the current value

---

`@method set(value: T): void`  
Sets a new value  
`@param value: T`

---

`@method remove(): void`  
Removes the current value

**Example:**

```ts
import {LocalStoragePart} from '@bitfiber/rx';
import {tap} from 'rxjs';

const lsPart = new LocalStoragePart('key');
lsPart.$.pipe(tap(v => console.log(v))).subscribe(); // result: 'value' then undefined
lsPart.set('value');
lsPart.get(); // result: 'value'
lsPart.remove();
```

---

### `@function sessionStorage<T = any>`

<a id="id-session-storage-fn"></a>
Creates and returns a singleton instance of `SessionStorage` and ensures that only one instance
is created. If the instance already exists, it returns the existing instance

`@template T` - The type of the value stored in session storage. Defaults to `any`

`@returns SessionStorage<T>`

**Example:**

```ts
import {sessionStorage} from '@bitfiber/rx';

const ss = sessionStorage();
```

---

### `@class SessionStorage<T = any>`

<a id="id-session-storage"></a>
Implements the `KeyValueSource` interface, allowing interaction
with the browser's session storage using key-value semantics. It provides methods for
retrieving, setting, observing, and removing key-value pairs stored in session storage

`@template T` - The type of the value stored in session storage. Defaults to `any`

---

`constructor()`  
Creates a singleton instance

---

`@method get(key: string): T`  
Retrieves a value stored under the given key in session storage.
The retrieved value is parsed from its JSON string format into the expected type `T`.
If the key does not exist or if parsing fails, returns 'undefined'   
`@param key: string` - The specific key under which the value is stored in session storage

---

`@method set(key: string, value: T): void`  
Sets a new value under the given key in session storage.
Before storing, the value is serialized to a JSON string format  
`@param key: string` - The specific key under which the value will be stored  
`@param value: T` - The new value to be stored, which will be stringified before being added

---

`@method remove(key: string): void`  
Removes a value associated with the provided key from session storage    
`@param key: string` - The specific key under which the value is stored and should be removed

---

`@method observe(key: string): Observable<T>`  
Creates and returns an observable that emits value changes
stored under the given key in session storage     
`@param key: string` - The specific key under which the value is stored in session storage

---

`@method destroy(): void`  
Destroys the reference to the instance and frees any associated resources

**Example:**

```ts
import {SessionStorage} from '@bitfiber/rx';
import {tap} from 'rxjs';

const ss = new SessionStorage();
ss.observe('key').pipe(tap(v => console.log(v))).subscribe(); // result: 'value' then undefined
ss.set('key', 'value');
ss.get('key'); // result: 'value'
ss.remove('key');
ss.get('key'); // result: undefined
ss.destroy();
```

---

### `@function sessionStoragePart<T = string | undefined>`

<a id="id-session-storage-part-fn"></a>
Creates and returns an instance of `SessionStoragePart`, allowing interaction
with a specific key-value pair stored in the browser's session storage

`@template T` - The type of the value stored in session storage. Defaults to `string | undefined`

`@param key` - The key used to access the value in session storage

`@returns SessionStoragePart<T>`

**Example:**

```ts
import {sessionStoragePart} from '@bitfiber/rx';

const ssPart = sessionStoragePart('key');
```

---

### `@class SessionStoragePart<T = string | undefined>`

<a id="id-session-storage-part"></a>
Extends `KeyValueSourcePart` and allows interaction with a particular
key in the browser's session storage. It provides methods for retrieving, setting, and observing
the value associated with the given key.  
See [`KeyValueSourcePart here`](#id-key-value-source-part)

`@template T` - The type of the value stored in session storage. Defaults to `string | undefined`

---

`constructor(key: string)`  
Creates an instance that provides access to a specific part of session storage
stored under a specific key  
`@param key: string` - The key used to access the value in session storage

---

`@property $: Observable<T>`  
Allows subscribers to reactively observe value changes

---

`@method get(): T`  
Retrieves the current value

---

`@method set(value: T): void`  
Sets a new value  
`@param value: T`

---

`@method remove(): void`  
Removes the current value

**Example:**

```ts
import {SessionStoragePart} from '@bitfiber/rx';
import {tap} from 'rxjs';

const ssPart = new SessionStoragePart('key');
ssPart.$.pipe(tap(v => console.log(v))).subscribe(); // result: 'value' then undefined
ssPart.set('value');
ssPart.get(); // result: 'value'
ssPart.remove();
```

---

### `@function memoryStorage<T = any>`

<a id="id-memory-storage-fn"></a>
Creates a singleton instance of `MemoryStorage`, ensuring that only one instance of
the in-memory key-value storage exists

`@template T` - The type of data stored in the memory storage. Defaults to `any`

`@returns MemoryStorage<T>`

**Example:**

```ts
import {memoryStorage} from '@bitfiber/rx';

const ms = memoryStorage<string>();
```

---

### `@class MemoryStorage<T = any>`

<a id="id-memory-storage"></a>
Implements the `KeyValueSource` interface and allows storing, retrieving, observing,
and managing key-value pairs directly in memory. It provides a simple storage mechanism
that exists only during the runtime of the application

`@template T` - The type of data stored in the memory storage. Defaults to `any`

---

`@method get(key: string): T`  
Retrieves the value associated with the specified key  
`@param key: string` - The key for which to retrieve the value

---

`@method set(key: string, value: T): void`  
Sets a value for the specified key  
`@param key: string` - The key to associate the value with  
`@param value: T` - The value to be set for the key

---

`@method remove(key: string): void`  
Removes the value associated with the specified key  
`@param key: string` - The key for which to remove the value

---

`@method observe(key: string): Observable<T>`  
Returns an observable that will emit value changes for a specific key     
`@param key: string` - The key for which to observe value changes

---

`@method destroy(): void`  
Destroys the memory storage, releasing all stored key-value pairs

**Example:**

```ts
import {MemoryStorage} from '@bitfiber/rx';
import {tap} from 'rxjs';

const ms = new MemoryStorage<string>();
ms.observe('key').pipe(tap(v => console.log(v))).subscribe(); // result: 'value1' then undefined
ms.set('key', 'value1');
ms.get('key'); // result: 'value1'
ms.remove('key');
ms.get('key'); // result: undefined
ms.destroy();
```

---

### `@function memoryStoragePart<T = string | undefined>`

<a id="id-memory-storage-part-fn"></a>
Creates an instance of `MemoryStoragePart`, which provides
access to the data stored under the specified key in the memory storage

`@template T` - The type of data stored under the specific key. Defaults to `string | undefined`

`@param key` - The key that is used to access the value in the memory storage

`@returns MemoryStoragePart<T>`

**Example:**

```ts
import {memoryStoragePart} from '@bitfiber/rx';

const msPart = memoryStoragePart('key');
```

---

### `@class MemoryStoragePart<T = string | undefined>`

<a id="id-memory-storage-part"></a>
Extends `KeyValueSourcePart` and allows interacting with the data stored
under a specific key in the memory storage. It enables retrieving, setting, observing,
and removing data associated with the specified key.  
See [`KeyValueSourcePart here`](#id-key-value-source-part)

`@template T` - The type of data stored under the specific key. Defaults to `string | undefined`

---

`constructor(key: string, storage?: MemoryStorage)`
Creates an instance that allows interacting with the data stored under a specific key
in the memory storage  
`@param key: string` - The key used to access the value in the memory storage   
`@param storage?: MemoryStorage` - Optional memory storage instance. If not provided,
a singleton memory storage is used

---

`@property $: Observable<T>`  
Allows subscribers to reactively observe value changes

---

`@method get(): T`  
Retrieves the current value

---

`@method set(value: T): void`  
Sets a new value  
`@param value: T`

---

`@method remove(): void`  
Removes the current value

**Example:**

```ts
import {MemoryStoragePart} from '@bitfiber/rx';
import {tap} from 'rxjs';

const msPart = new MemoryStoragePart('key');
msPart.$.pipe(tap(v => console.log(v))).subscribe(); // result: 'value' then undefined
msPart.set('value');
msPart.get(); // result: 'value'
msPart.remove();
```

---

### `@function cookie<T = any>`

<a id="id-cookie-fn"></a>
Creates and returns a singleton instance of the `Cookie` class and ensures that only one
instance is created. If the instance already exists, it returns the existing one

`@returns Cookie<T>`

**Example:**

```ts
import {cookie} from '@bitfiber/rx';

const ck = cookie();
```

---

### `@class Cookie<T = any>`

<a id="id-cookie"></a>
Provides access to browser cookies as a key-value storage.

The `Cookie` class implements the `KeyValueSource` interface, allowing interaction with
browser cookies using key-value semantics. It provides methods for retrieving, setting,
observing, and removing cookies

`@template T` - The type of data stored in the cookie. Defaults to `any`

---

`constructor()`  
Creates a singleton instance

---

`@method get(key: string): T`  
Returns the value of the cookie associated with the given key
and parses it as JSON. If the cookie does not exist, returns `undefined`     
`@param key: string` - The specific key under which the cookie value is stored

---

`@method set(key: string, data: CookieData<T>): void`  
Sets a cookie with the specified key and value, stringified before being added to the cookie.
Additional parameters, such as cookie options (e.g., `expires`, `path`),
can be provided as part of the `data` object  
`@param key: string` - The specific key under which the value will be stored  
`@param data: CookieData<T>` - An object containing the new value to store,
as well as optional cookie parameters

---

`@method remove(key: string, params?: CookieParams): void`  
Removes the cookie associated with the given key. Optionally, you can
provide `CookieParams` to specify additional options, such as the path or domain, to ensure
the correct cookie is removed  
`@param key: string` - The specific key (name) of the cookie to be removed  
`@param params?: CookieParams` - Optional parameters that can be used to specify
the cookie's path, domain, etc.

---

`@method observe(key: string): Observable<T>`  
Creates and returns an observable that emits value changes of the cookie
associated with the specified key. This allows reactive monitoring of the cookie value  
`@param key: string` - The specific key (name) under which the cookie value is stored

---

`@method destroy(): void`  
Destroys the reference to the instance and frees any associated resources

**Example:**

```ts
import {Cookie} from '@bitfiber/rx';
import {tap} from 'rxjs';

const cookie = new Cookie();
cookie.observe('key').pipe(tap(v => console.log(v))).subscribe(); // result: {value: 'value'} then {value: undefined}
cookie.set('key', {value: 'value'});
cookie.get('key'); // result: {value: 'value'}
cookie.remove('key');
cookie.get('key'); // result: {value: undefined}
cookie.destroy();
```

---

### `@function cookiePart<T = CookieValue<string | undefined>>`

<a id="id-cookie-part-fn"></a>
Creates and returns an instance of `CookiePart`, allowing interaction
with a specific key in the browser's cookie storage. You can also provide optional `removeParams`
for managing cookie removal

`@template T` - The type of the value stored in the cookie.
Defaults to `CookieValue<string | undefined>`

`@param key` - The key used to access the value in the browser cookie  
`@param removeParams` - Optional parameters for managing cookie removal

`@returns CookiePart<T>`

**Example:**

```ts
import {cookiePart} from '@bitfiber/rx';

const part = cookiePart('key');
```

---

### `@class CookiePart<T = CookieValue<string | undefined>>`

<a id="id-cookie-part"></a>
Extends `KeyValueSourcePart` and allows interaction with a particular
key in the browser's cookie storage. It provides methods for retrieving, setting, and observing
the cookie value associated with the given key.  
See [`KeyValueSourcePart here`](#id-key-value-source-part)

`@template T` - The type of the value stored in the cookie.
Defaults to `CookieValue<string | undefined>`

---

`constructor(key: string, removeParams?: CookieParams)`  
Creates an instance that provides access to a specific part of the browser cookie
stored under a specific key  
`@param key: string` - The key used to access the value in the browser cookie  
`@param removeParams?: CookieParams` - Optional parameters to configure the removal of the cookie

---

`@property $: Observable<T>`  
Allows subscribers to reactively observe value changes

---

`@method get(): T`  
Retrieves the current value

---

`@method set(value: T): void`  
Sets a new value  
`@param value: T`

---

`@method remove(): void`  
Removes the current value

**Example:**

```ts
import {CookiePart} from '@bitfiber/rx';
import {tap} from 'rxjs';

const part = new CookiePart('key');
part.$.pipe(tap(v => console.log(v))).subscribe(); // result: {value: 'value'} then {value: undefined}
part.set({value: 'value'});
part.get(); // result: {value: 'value'}
part.remove();
```

---

### `@interface CookieParams`

<a id="id-cookie-params"></a>
Represents the optional parameters that can be used when setting a cookie

`@property path?: string`
Specifies the URL path that must exist in the requested URL for the cookie to be valid

`@property domain?: string`
Specifies the domain for which the cookie is valid

`@property expires?: Date`
Specifies the expiration date for the cookie. If not set, the cookie is considered
a session cookie

`@property maxAge?: number`  
Specifies the maximum age of the cookie in seconds. Overrides `expires` if both are set

`@property secure?: boolean`  
Indicates whether the cookie should only be sent over secure protocols like HTTPS

`@property sameSite?: 'strict' | 'lax'`  
Specifies the `SameSite` policy for the cookie, which controls how cookies are sent
with cross-site requests

---

### `@interface CookieValue<T>`

<a id="id-cookie-value"></a>
Represents a value stored in a cookie

`@template T` - The type of the value stored in the cookie

`@property value: T`
The value to be stored in the cookie

---

### `@type CookieData<T>`

<a id="id-cookie-data"></a>
Combines cookie parameters with the value to be stored in a cookie

`@template T` - The type of the value stored in the cookie

---

### `@class KeyValueSourcePart<T>`

<a id="id-key-value-source-part"></a>
Implements the `DataSource` interface and provides functionality for managing a specific portion
of a key-value source. It allows observing, retrieving, setting, and removing data associated
with a particular key

`@template T` - The type of data stored in the key-value source

---

`constructor(key: string, source: KeyValueSource)`  
Creates an instance that has access to only certain data stored under a specific key  
`@param key: string` - The key needed to access data in the key-value source  
`@param source: KeyValueSource` - An instance of the key-value source that manages the data

---

`@property $: Observable<T>`  
Allows subscribers to reactively observe value changes

---

`@method get(): T`  
Retrieves the current value

---

`@method set(value: T): void`  
Sets a new value  
`@param value: T`

---

`@method remove(): void`  
Removes the current value

**Example:**

```ts
import {KeyValueSourcePart, localStorage} from '@bitfiber/rx';
import {tap} from 'rxjs';

const part = new KeyValueSourcePart<string>('key', localStorage());
part.$.pipe(tap(v => console.log(v))).subscribe(); // result: value
part.set('value');
part.get(); // result: value
window.localStorage.getItem('key'); // result: value
```

---

### `@interface KeyValueSource<T = any>`

<a id="id-key-value-source"></a>
Represents a generic, writable key-value source with methods
for getting, setting, removing, and observing values associated with a specific key.
It also includes a method to destroy the source, allowing for cleanup when it is no longer needed

`@template T` - The type of the values stored in the key-value source. Defaults to `any`

---

`@method get(key: string): T`  
Retrieves the value associated with the specified key  
`@param key: string` - The key for which to retrieve the value

---

`@method set(key: string, value: T): void`  
Sets a value for the specified key  
`@param key: string` - The key to associate the value with  
`@param value: T` - The value to be set for the key

---

`@method remove(key: string): void`  
Removes the value associated with the specified key  
`@param key: string` - The key for which to remove the value

---

`@method observe(key: string): Observable<T>`  
Observes changes to the value associated with the specified key   
`@param key: string` - The key to observe for changes     
`@returns Observable<T>` - An observable that emits the value associated with the key

---

`@method destroy(): void`  
Destroys the key-value source, releasing any resources held by it

---

### `@interface DataSource<T>`

<a id="id-data-source"></a>
Represents a data source that can be observed, retrieved, modified, or removed.  
It provides an observable for monitoring changes

`@template T` - The type of data stored in the data source

---

`@property $: Observable<T>`  
An observable that allows subscribers to reactively observe changes or updates to the data

---

`@method get(): T`  
Retrieves the current value from the data source

---

`@method set(value: T): void`  
Sets a new value for the data source.  
This method updates the value in the data source and notifies observers of the change  
`@param value: T` - The new value to be set for the data source

---

`@method remove(): void`  
Removes the current value from the data source

---

## RxJs Operators

---

### `@function operator<T, R>`

Creates a custom RxJS operator that can be used in the `pipe` function of an observable.
This operator allows you to apply custom transformation logic to the observable stream

`@template T` - The type of values emitted by the source observable  
`@template R` - The type of values emitted by the transformed observable after applying the operator

`@param fn: (source: Observable<T>, subscriber: Subscriber<R>) => Subscription | void` -
A function that takes the source observable and the subscriber, and returns teardown logic
to clean up resources when the observable completes or errors

`@returns OperatorFunction<T, R>`

**Example:**

```ts
import {operator} from '@bitfiber/rx';

const op = operator((source, subscriber) => {
  return source.subscribe({
    next: value => subscriber.next('value'),
    error: error => subscriber.error('Any error'),
    complete: () => subscriber.complete(),
  });
});

of('value').pipe(op).subscribe();
```

---

### `@function completeWith<T>`

Returns an RxJS operator that completes the subscriber when the provided `trigger` observable
completes. Optionally, if `withError` is set to `true`, the subscriber will also complete
if the `trigger` observable errors

`@template T` - The type of values emitted by the source observable

`@param trigger: Observable<any>` - An observable that can trigger the completion of the subscriber  
`@param withError?: boolean` - If `true`, the subscriber will also complete when the
`trigger` errors

`@returns OperatorFunction<T, T>`

**Example:**

```ts
import {completeWith} from '@bitfiber/rx';

const trigger1$ = of(1).pipe(delay(400), timeout(500));
interval(50).pipe(completeWith(trigger1$)).subscribe({
  complete: () => console.log('completed after the trigger completes'),
});

const trigger2$ = of(1).pipe(delay(200), map(() => {
  throw new Error('Some error');
}));
interval(50).pipe(completeWith(trigger2$, true)).subscribe({
  complete: () => console.log('completed due to the trigger error'),
});
```

---

### `@function startWithDefined<T, U extends T>`

Instantly emits a value from the provided getter if the value is defined.
If the getter returns an observable, the value will be emitted when the observable emits,
but only if no values have been emitted previously.
Optionally, if `nonNullish` is set to `true`, `null` or `undefined` values will not be emitted

`@template T` - The type of the values emitted by the observable  
`@template U` - A subtype of `T` representing the specific value type emitted

`@param getter: () => U | Observable<U>` - A function that returns an initial value or
an observable that emits the initial value  
`@param nonNullish?: boolean` - If `true`, `null` or `undefined` values will not be emitted

`@returns OperatorFunction<T, T>`

**Example:**

```ts
import {Nullish} from '@bitfiber/utils';
import {startWithDefined} from '@bitfiber/rx';

const subject = new Subject<number | Nullish>();
subject.pipe(startWithDefined(() => 5)).subscribe({
  next: v => console.log(v), // expected result: 5
});

subject.pipe(startWithDefined(() => null)).subscribe({
  next: v => console.log(v), // expected result: null
});

subject.pipe(startWithDefined(() => null), true).subscribe({
  next: v => console.log(v), // expected result: null value will not be emitted if nonNullish param is true
});

subject.pipe(startWithDefined(() => undefined)).subscribe({
  next: v => console.log(v), // expected result: undefined value will not be emitted
});

```

---
