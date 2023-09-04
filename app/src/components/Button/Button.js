import React from "react";

export default function Button({ type, text, icon, title, ariaLabel, className}) {
    switch (type) {
        case 'text':
            return (<button className={`button ${className}`} title={title} aria-label={ariaLabel} >
                {text}
            </button>);
            break;
    }
}