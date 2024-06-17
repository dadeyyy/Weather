'use client'
import { useRouter } from 'next/router';

const RefreshBtn = () => {
  const router = useRouter();
  function handleClick() {
    router.reload();
  }
  return <button onClick={handleClick}>Refresh</button>;
};

export default RefreshBtn;
