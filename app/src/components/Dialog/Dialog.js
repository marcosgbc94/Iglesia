import React from "react";
import Button from "../Button/Button";

export default function Dialog({ active, title, message, optional, closeFunction }) {
    return (
        <div className={`dialog-container fixed w-full h-full bg-black/75 z-20 items-center justify-center flex ${active ? null : 'hidden'}`}>
            <div className='dialog absolute w-96 h-auto rounded-lg bg-white p-3'>
                <div className='dialog-header w-full h-auto items-center justify-between flex'>
                    <h3 className='text-lg font-bold'>{title}</h3>
                    <Button functions={() => closeFunction()}  type='icon' icon='close' title="Cerrar cuadro de diálogo" ariaLabel="Cerrar cuadro de diálogo" className='h-8 w-8 text-black bg-white rounded-full hover:bg-slate-200 active:bg-slate-300 transition-colors' />
                </div>
                <div className='dialog-body w-full h-auto py-2'>
                    <p>{message}</p>
                </div>
                <div className='dialog-body w-full h-auto items-center justify-end flex gap-2'>
                    {optional ?
                        (
                            <Button functions={() => closeFunction()} type='text' text='Entendido' title="Cerrar cuadro de diálogo" ariaLabel="Cerrar cuadro de diálogo" className='h-8 w-auto px-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 active:bg-blue-800 transition-colors' />
                        )
                        : ''
                    }
                </div>
            </div>
        </div>
    );
}

