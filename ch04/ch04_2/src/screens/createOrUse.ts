const cache: Record<string, any> = {};
//Record 는 Record<키_타입, 값_타입> 형태로 사용하는 제네릭타입입니다.

export const createOrUse = <T>(key: string, callback: () => T) => {
  if (!cache[key]) {
    cache[key] = callback(); //cache[key]에 값이 없으면 callback함수 호출하여 반환값저장.
  }
  return cache[key];
};
