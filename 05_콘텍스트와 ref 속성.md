# 콘텍스트와 ref 속성

[05-1 콘텍스트 이해하기](#05-1-콘텍스트-이해하기)

[05-2 useRef 훅 이해하기](#05-2-useref-훅-이해하기)

[05-3 useImperativeHandle 훅 이해하기](#05-3-useimperativehandle-훅-이해하기)

---

`npx react-native init {생성할 프로젝트명} --template react-native-template-typescript`

# 05-1 콘텍스트 이해하기

# 05-2 useRef 훅 이해하기

`npm i react-native-vector-icons react-native-paper color faker@5.5.3`

<!-- react-native-appearance 설치하지 않음 -->

`npm i react-native-localize moment moment-with-locales-es6`
`npm i -D @types/react-native-vector-icons @types/color @types/faker@5.5.3`
`npx react-native link react-native-vector-icons`
`npm i react-native-keyboard-aware-scroll-view`

### ref 속성이란?

컴포넌트객체.메서드()

컴포넌트가 제공하는 메서드를 호출할 수 있또록 ref 속성을 제공한다.

ref 속성으로 컴포넌트의 인스턴스를 얻을 수 있고 ref.메서드() 형태 가능.

#### useRef 훅

```
const _ref변수 = useRef<컴포넌트명 | null>(null);

...

<컴포넌트명 ref={_ref변수}>
_ref변수.current?.메서드()
```

- onContentSizeChange 이벤트 속성

  Scrollview와 FlatList에서 제공.

  콘텐츠의 넓이나 높이가 변하면 설정된 콜백함수를 호출한다.

* 자동 스크롤 기능

  ```
  const flatListRef = useRef<FlatList | null>(null);
  const onContentSizeChange = useCallback(
  () => flatListRef.current?.scrollToEnd(),
  [flatListRef.current],
  );
  ...
    <FlatList
    ref={flatListRef}
    data={people}
    renderItem={({item}) => <Person person={item} />}
    keyExtractor={item => item.id}
    onContentSizeChange={onContentSizeChange}
    />
  ```

  flatListRef.current?. 에서 ?. 인 이유는<br/>
  flatListReft 타입이 RefObject<FlatList | null>이기 때문에 current 속성값이 null일수도 있기 때문이다.

# 05-3 useImperativeHandle 훅 이해하기
