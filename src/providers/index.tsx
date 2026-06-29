import { Toaster } from '@/components/ui/sonner';
import { childrenProps } from '@/types';

export default function Providers({ children }: childrenProps) {
  return (
    <div>
      {children}
      <Toaster
        toastOptions={{
          style: {
            background: '#F2F2F2',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'black',
          },
          classNames: {
            description: '!text-black',
            icon: '!text-black-300',
          },
        }}
        position="bottom-right"
      />
    </div>
  );
}
