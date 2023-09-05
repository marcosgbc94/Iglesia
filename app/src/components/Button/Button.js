import React from "react";

export default function Button({ type, text, icon, title, ariaLabel, className}) {
    switch (type) {
        case 'text':
            return (<button className={`button flex items-center justify-center ${className}`} title={title} aria-label={ariaLabel} >
                {text}
            </button>);
            break;
        case 'icon':
            return (<button className={`button flex items-center justify-center ${className}`} title={title} aria-label={ariaLabel} >
                <i className={`opacity-75 fa fa-${icon}`}></i>
            </button>);
            break;
    }
}