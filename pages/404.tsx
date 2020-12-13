import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <h1>404 - Az oldal nem található</h1>
      <p>A keresett oldal nem létezik. <Link href="/">Vissza a főoldalra</Link>.</p>
    </>
  );
};

export default NotFoundPage;
