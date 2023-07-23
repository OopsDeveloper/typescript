// 함께 묶을 수 있는 타입
// 하나를 키로쓰고 하나를 다른 타입으로 묶고 싶을 때 사용
type PageInfo = {
  title: string;
};
type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = { // page를 키로 하고 PageInfo를 value로 한다
  home: { title: 'Home' },
  about: { title: 'About' },
  contact: { title: 'Contact' },
};
console.log(nav);


// Capitalize는 앞에 글자를 대문자로 나오게 함
type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'

function test(a: NewProduct):void {
  console.log(a);
}

test('Cat');