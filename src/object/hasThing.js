export function hasThing(thing, array = []) {
    console.log(array.flat(Infinity))
  return array.flat(Infinity).filter(thing)
  
}

// 배열을 무한으로 풀기
// 배열 안에 객체면 map돌려 해당하는 value 값 찾기
// 배열 안에 숫자 | 문자열   &&  해당하는 값 리턴턴

const dummyData = [
  [
    [1, 2, 3],
    [4, 5, 6]
  ],
  [
    [7, 8, 9],
    [1, 2, 3]
  ]
];

const dummyData1 = [
  [
    { id: 1, value: 'banana' },
    { id: 2, value: 'orange' }
  ],
  [
    { id: 3, value: 'apple' },
    { id: 4, value: 'pineapple' }
  ],
  [
    { id: 5, value: 'banana' },
    { id: 6, value: 'apple' }
  ]
];

// console.log(dummyData1.flat(Infinity));

console.log(hasThing(3, dummyData));
