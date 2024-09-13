# JavaScript and TypeScript Notes

The following is a type definition for a conversion roundtrip from obj to json to obj.\
@see {@link https://effectivetypescript.com/2020/04/09/jsonify/}

```ts
// export type JsonifySimple<T> = T extends { toJSON(): infer U }
// 	? U
// 	: T extends object
// 		? { [k in keyof T]: Jsonify<T[k]> }
// 		: T;

export type Jsonify<T> = T extends { toJSON: (...args: any) => infer R }
	? Jsonify<R>
	: T extends Array<infer I>
		? Array<Jsonify<I>>
		: T extends (...args: any) => any
			? never
			: T extends object
				? { [K in keyof T]: K extends string | number ? Jsonify<T[K]> : never }
				: T;
```

---

Get the single type of an array type e.g: User[] -> User

```ts
type GetElementType<T extends any[]> = T extends (infer U)[] ? U : never;
```
