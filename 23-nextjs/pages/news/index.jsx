// our-domain.com/news

import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1></h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-a-great-framework">
            NextJS Is A Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
};

export default NewsPage;
