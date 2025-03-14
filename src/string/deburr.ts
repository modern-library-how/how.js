//문자열에서 악센트나 특수 문자를 제거 (déjà vu → deja vu)
export function deburr(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

//NFD(Normalization Form Canonical Decomposition) : 문자열을 정규화하여 문자열을 분해
//예시 é → e + ◌́(U+0301, 결합된 악센트 문자)
//결합된 악센트 문자를 제거하면 é → e
///[\u0300-\u036f]/g : 결합된 악센트 문자의 유니코드 범위
