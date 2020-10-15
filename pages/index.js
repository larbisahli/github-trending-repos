import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const Router = useRouter();
  useEffect(() => {
    Router.push(`/page/1`);
  }, []);
  return null;
}
