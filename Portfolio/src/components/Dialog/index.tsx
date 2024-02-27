import React, { useRef, useEffect, RefObject } from 'react';
import Button from '@src/components/Button';
import css from './style.module.scss';


type Dialog = {
  children: React.JSX.Element | React.JSX.Element[] | string;
  forwardedRef: RefObject<any>;
}
function Index({ children, forwardedRef }: Readonly<Dialog>) {
  const refDialog = useRef<HTMLDialogElement>(null);

  const close = () => { refDialog.current?.close(); }

  useEffect(() => {
    forwardedRef.current?.addEventListener('click', () => {
      refDialog.current?.showModal();
    });
  });

  return (
    <dialog className={ css.dialog } ref={ refDialog }>
      <section className={ css.dialog__children }>{ children }</section>
      <Button onClick={ close }>Close</Button>
    </dialog>
  )
}

export default Index;
