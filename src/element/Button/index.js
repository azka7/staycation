import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'


export default function Button(props) {
    // menerima array  yang isinya properti className yang dilempar dari yang make button ini
    const className = [props.className]

    // kondisi untuk propsnya menerima isPrimary
    if (props.isPrimary) className.push("btn-primary")
    if (props.isLarge) className.push("btn-lg")
    if (props.isSmall) className.push("btn-sm")
    if (props.isBlock) className.push("btn-block")
    if (props.hasShadow) className.push("btn-shadow")

    // function yang handle ketika diclick buttonnya (tersedia/tidak)
    const onClick = () => {
        if(props.onClick) props.onClick()
    } 

    // Jika menerima buttonnya disable atau loading maka tampilkan tag span
    if (props.isDisabled || props.isLoading){
        // bawaan bootstrap agar buttonnya tidak bisa dipencet
        if(props.isDisabled) className.push("disabled")
        return (
        <span className={className.join(" ")} style={props.style}>
            {// button ketika loading
            props.isLoading ? (
                <>
                    <span className="spinner-border spinner-border-sm mx-5"></span>
                    <span className="sr-only">Loading...</span> 
                </> 
                ) : (
                    props.children
                )}
        </span>
        );   
    }

    // rendering component ketika typenya link
    if (props.type === "link"){
        // klo linknya external
        if(props.isExternal){
            return(
                // (1) className = className yang ada diatas, jadi ketika ada value array, masing-masing
                // valuenya dijoin pake spasi
                // (2) prop.style = kembalikan style yang ada, jadi ga perlu diconfig lagi 
                // (3) klo ada target yang namanya blank, tampilin blank juga selain itu jadi undifined
                // (4) fungsi noopener noreferrer adalah untuk optimasi search engine optimatisation
                <a
                    href={props.href}
                    className={className.join(" ")}
                    style={props.style}
                    target={props.target === "_blank" ? "_blank" : undefined}
                    rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                    {props.children}
                </a>
            );
        } else {
            // jika link dari dalam/internal
            return (
                <Link
                    to={props.href}
                    className={className.join(" ")}
                    style={props.style}
                    onClick={onClick}
                >
                    {props.children}
                </Link>
            );
        }
    }


    return (
    <button
        className={className.join(" ")}
        style={props.style}
        onClick={onClick}
    >
        {props.children}
    </button >
    );
}

Button.propTypes = {
    // buttonnya akan hanya menerima properti button atau link
    type: propTypes.oneOf(["button", "link"]),

    // sikomponen harus punya prop function klo button
    onClick: propTypes.func,

    // target untuk link external
    target: propTypes.string,

    // link href external
    href: propTypes.string,

    className: propTypes.string,

    // pengecekan untuk mengecek link/buttonnya ke link luar
    isExternal: propTypes.bool,

    // pengecekan untuk mengecek link/buttonnya primary
    isPrimary: propTypes.bool,
    
    // pengecekan untuk mengecek link/buttonnya disabled
    isDisabled: propTypes.bool,

    // untuk animasi saat mengclick button
    isLoading: propTypes.bool,

    // varian ukuran
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    
    // jika button ingin diblock    
    isBlock: propTypes.bool,
    
    // jika button mempunyai shadow
    hasShadow: propTypes.bool 
};