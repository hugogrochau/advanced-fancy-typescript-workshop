{
  function assign<A, B, C, D, E>(obj1: A, obj2: B, obj3?: C, obj4?: D, obj5?: E): A & B & C & D & E
  function assign(obj1: any, obj2: any, ...objects: any[]): any 
  function assign(...objects: any[]): any {
    throw "Not implemented" // ignore this line
  }

  {
    // Ok
    const x = assign({ a: 1, b: 2}, { b: 2, c: false}, { e: 3 })

    x.a = 3
    x.b = 3
    x.c = false
    x.e = 2

    assign({ a: 1, b: 2}, { b: 2, c: false}, { e: 3 }, {}, { z: true })

    // Not ok
    assign({ x: 0 })
    x.d = 1
    x.c = "test"
  }
}