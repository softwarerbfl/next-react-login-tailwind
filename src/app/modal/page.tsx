'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import ModalProvider, { ModalContext } from './modal-context';

const NestedReactComponent = () => {
  const { show, hide } = useContext(ModalContext);
  const router = useRouter();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px'}}>
      <div></div>
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-3xl mr-2'
        onClick={() =>
          show({
            title: '안녕',
            description: '난 모달이야 ',
            confirmButton:'확인',
            cancelButton: '취소',
            confirmCallback: () => {
              router.push('/');
            },
            
            useCancelButton: true,
          })
        }
      >
        모달 켜기
      </button>

    </div>
  );
};

export default function GlobalState() {
  const { show, hide } = useContext(ModalContext);
  return (
    <main>
      {/* <button onClick={() => show()}>켜기</button> */}
      {/* <button onClick={() => hide()}>끄기</button> */}
      <ModalProvider>
        <NestedReactComponent />
      </ModalProvider>
    </main>
  );
}