'use client';

import { Button } from '../ui/button';
export function ShareForm() {
  const url = window.location.href;

  const copyToClipboard = async (): Promise<void> => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <div>
      <p>Copy this challenge url to share with your friends!</p>
      <Button className="ml-auto mt-4 block" onClick={() => void copyToClipboard}>
        Copy to Clipboard
      </Button>
    </div>
  );
}
