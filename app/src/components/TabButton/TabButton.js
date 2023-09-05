import React from "react";

export default function TabButton({ active, projecting, title, subtitle, className, classNameSubTitle, classNameCloseButton }) {
    return (<div className={`tab-button w-auto border-2 h-14 rounded-lg flex items-center justify-center cursor-pointer me-2 transition-colors ${projecting ? 'border-green-600' : 'border-transparent'} ${active ? null : 'opacity-50 hover:opacity-70 active:opacity:80'} ${className}`}>
        <button className="w-full ps-3 pe-1 text-left flex items-start justify-center flex-col">
            <p className="text-left">{title}</p>
            <span className={`text-left text-xs ${classNameSubTitle}`}>{subtitle} {projecting ? '· Proyectando' : null}</span>
        </button>
        <div className="h-full pt-2 pe-2 pb-2 ps-1 flex items-center justify-center">
            <button title="Cerrar pestaña" aria-label="Cerrar pestaña" className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${classNameCloseButton}`}>
                <i className="opacity-75 fa fa-close"></i>
            </button>
        </div>
    </div>);
}