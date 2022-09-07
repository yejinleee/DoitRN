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

### Input.tsx 파일 구현 : 키보드

#### TextInput 컴포넌트에서의 useRef 훅 활용 방법

키보드 API를 제공함

keyboard.dismiss() // 키보드를 강제로 내림

#### KeyboardAvoidingView 코어 컴포넌트 : 키보드가 올라오면 스크롤하여 가려지지 않도록 해줌

import {KeyboardAvoidingView} from 'react-native'

TextInput컴포넌트를 자식 요소로 둔다.

이 컴포넌트 또한 View이기 때문에 flex 스타일 속성을 둘 수 있다.

그런데, 키보드가 화면 요소를 조금 가리는 문제 .... !

\- > KeyboardAwareScrollView 이용하기 ! Input 컴포넌트들 감싸기

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

#### KeyboardAwareScrollView의 scrollToFocusedInput 메서드

scrollFocusedInput : ref로 포커스된 textInput을 수직방향 스크롤을 통해 항상 화면에 나타나도록 함

### AutoFocusProvider 컴포넌트와 useAutoFocus 커스텀 훅

<!-- -->

# 05-3 useImperativeHandle 훅 이해하기
